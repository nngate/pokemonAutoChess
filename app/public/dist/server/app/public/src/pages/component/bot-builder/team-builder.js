"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TeamBuilder;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const synergies_1 = require("../../../../../models/colyseus-models/synergies");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const types_1 = require("../../../../../types");
const Item_1 = require("../../../../../types/enum/Item");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const synergies_2 = __importDefault(require("../synergy/synergies"));
const bot_avatar_1 = __importDefault(require("./bot-avatar"));
const item_picker_1 = __importDefault(require("./item-picker"));
const pokemon_picker_1 = __importDefault(require("./pokemon-picker"));
const selected_entity_1 = __importDefault(require("./selected-entity"));
const team_editor_1 = __importDefault(require("./team-editor"));
require("./team-builder.css");
function TeamBuilder(props) {
    var _a;
    const [selection, setSelection] = (0, react_1.useState)({
        name: Pokemon_1.Pkm.MAGIKARP,
        shiny: false,
        emotion: types_1.Emotion.NORMAL
    });
    const [board, setBoard] = (0, react_1.useState)((_a = props.board) !== null && _a !== void 0 ? _a : []);
    (0, react_1.useEffect)(() => {
        if (props.board)
            setBoard(props.board);
    }, [props.board]);
    function updateBoard(board) {
        if (props.updateBoard)
            props.updateBoard(board);
        else
            setBoard(board);
    }
    const [selectedPokemon, setSelectedPokemon] = (0, react_1.useState)();
    const synergies = (0, react_1.useMemo)(() => {
        const map = (0, synergies_1.computeSynergies)(board.map((p) => {
            const pkm = pokemon_factory_1.default.createPokemonFromName(p.name, {
                selectedEmotion: p.emotion,
                selectedShiny: p.shiny
            });
            pkm.positionX = p.x;
            pkm.positionY = p.y;
            p.items.forEach((item) => {
                pkm.items.add(item);
            });
            return pkm;
        }));
        return [...map.entries()];
    }, [board]);
    function addPokemon(x, y, pkm) {
        let existingItems;
        const i = board.findIndex((p) => p.x === x && p.y === y);
        if (i >= 0) {
            existingItems = board[i].items;
            board.splice(i, 1);
        }
        const newPokemon = Object.assign(Object.assign({}, pkm), { x,
            y, items: existingItems !== null && existingItems !== void 0 ? existingItems : [] });
        setSelectedPokemon(newPokemon);
        updateBoard([...board, newPokemon]);
    }
    function addItem(x, y, item) {
        const p = board.find((p) => p.x === x && p.y === y);
        if (p && p.items.length < 3) {
            p.items.push(item);
        }
        else if (p && p.items.length >= 3) {
            p.items = [item];
        }
        updateBoard([...board]);
    }
    function handleEditorClick(x, y, rightClick, itemIndex) {
        const pokemonOnCell = board.find((p) => p.x === x && p.y === y);
        if (rightClick) {
            if (itemIndex !== undefined) {
                pokemonOnCell === null || pokemonOnCell === void 0 ? void 0 : pokemonOnCell.items.splice(itemIndex, 1);
                updateBoard([...board]);
            }
            else {
                updateBoard(board.filter((p) => p !== pokemonOnCell));
                if (selectedPokemon &&
                    selectedPokemon.x === x &&
                    selectedPokemon.y === y) {
                    setSelectedPokemon(undefined);
                }
            }
        }
        else if (pokemonOnCell) {
            setSelection(pokemonOnCell);
            setSelectedPokemon(pokemonOnCell);
        }
        else if (Object.values(Pokemon_1.Pkm).includes(selection.name)) {
            addPokemon(x, y, selection);
        }
        else if (Object.keys(Item_1.Item).includes(selection)) {
            addItem(x, y, selection);
        }
    }
    function handleDrop(x, y, e) {
        if (e.dataTransfer.getData("cell") != "") {
            const [originX, originY] = e.dataTransfer
                .getData("cell")
                .split(",")
                .map(Number);
            const pkm = board.find((p) => p.x === originX && p.y === originY);
            const otherPokemonOnCell = board.find((p) => p.x === x && p.y === y);
            if (pkm) {
                if (otherPokemonOnCell) {
                    otherPokemonOnCell.x = originX;
                    otherPokemonOnCell.y = originY;
                }
                pkm.x = x;
                pkm.y = y;
                updateBoard([...board]);
            }
        }
        else if (e.dataTransfer.getData("pokemon") != "") {
            const pkm = {
                name: e.dataTransfer.getData("pokemon"),
                emotion: types_1.Emotion.NORMAL,
                shiny: false
            };
            addPokemon(x, y, pkm);
            setSelection(pkm);
        }
        else if (e.dataTransfer.getData("item") != "") {
            const item = e.dataTransfer.getData("item");
            addItem(x, y, item);
            setSelection(item);
        }
    }
    function updateSelectedPokemon(pkm) {
        setSelection(pkm);
        if (selectedPokemon != null) {
            selectedPokemon.emotion = pkm.emotion;
            selectedPokemon.shiny = pkm.shiny;
            updateBoard([...board]);
        }
    }
    function changeAvatar() {
        if (selection &&
            props.onChangeAvatar &&
            Object.values(Pokemon_1.Pkm).includes(selection.name)) {
            props.onChangeAvatar(selection);
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", { id: "team-builder", children: [(0, jsx_runtime_1.jsx)(synergies_2.default, { synergies: synergies, tooltipPortal: false }), (0, jsx_runtime_1.jsx)(team_editor_1.default, { board: board, handleEditorClick: handleEditorClick, handleDrop: handleDrop }), (0, jsx_runtime_1.jsx)(selected_entity_1.default, { entity: selection, onChange: updateSelectedPokemon }), (0, jsx_runtime_1.jsx)(item_picker_1.default, { selectEntity: setSelection, selected: selection }), (0, jsx_runtime_1.jsx)(pokemon_picker_1.default, { selectEntity: setSelection, selected: selection }), props.bot && props.onChangeAvatar && ((0, jsx_runtime_1.jsx)(bot_avatar_1.default, { bot: props.bot, onChangeAvatar: props.onChangeAvatar, onClick: changeAvatar })), props.error && (0, jsx_runtime_1.jsx)("p", { className: "error", children: props.error })] }));
}
//# sourceMappingURL=team-builder.js.map