"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAnnouncementModal = ServerAnnouncementModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const modal_1 = require("../modal/modal");
function ServerAnnouncementModal({ onClose, show }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const [postContent, setPostContent] = (0, react_1.useState)("");
    function submitAnnouncement() {
        dispatch((0, NetworkStore_1.makeServerAnnouncement)({ message: postContent }));
        setPostContent("");
    }
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: onClose, show: show, className: "server-announcement", header: "Make a Server Announcement", body: (0, jsx_runtime_1.jsx)("textarea", { cols: 50, rows: 5, placeholder: t("type_here"), autoFocus: true, value: postContent, onChange: (e) => setPostContent(e.target.value) }), footer: (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                submitAnnouncement();
            }, className: "bubbly green", children: "Submit" }) }));
}
//# sourceMappingURL=server-announcement-modal.js.map