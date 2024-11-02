import { AnimationType } from "../Animation";
export declare enum Pkm {
    DEFAULT = "DEFAULT",
    EGG = "EGG",
    DITTO = "DITTO",
    BULBASAUR = "BULBASAUR",
    IVYSAUR = "IVYSAUR",
    VENUSAUR = "VENUSAUR",
    CHARMANDER = "CHARMANDER",
    CHARMELEON = "CHARMELEON",
    CHARIZARD = "CHARIZARD",
    SQUIRTLE = "SQUIRTLE",
    WARTORTLE = "WARTORTLE",
    BLASTOISE = "BLASTOISE",
    GEODUDE = "GEODUDE",
    GRAVELER = "GRAVELER",
    GOLEM = "GOLEM",
    AZURILL = "AZURILL",
    MARILL = "MARILL",
    AZUMARILL = "AZUMARILL",
    ZUBAT = "ZUBAT",
    GOLBAT = "GOLBAT",
    CROBAT = "CROBAT",
    MAREEP = "MAREEP",
    FLAFFY = "FLAFFY",
    AMPHAROS = "AMPHAROS",
    CLEFFA = "CLEFFA",
    CLEFAIRY = "CLEFAIRY",
    CLEFABLE = "CLEFABLE",
    IGGLYBUFF = "IGGLYBUFF",
    WIGGLYTUFF = "WIGGLYTUFF",
    JIGGLYPUFF = "JIGGLYPUFF",
    CATERPIE = "CATERPIE",
    METAPOD = "METAPOD",
    BUTTERFREE = "BUTTERFREE",
    WEEDLE = "WEEDLE",
    KAKUNA = "KAKUNA",
    BEEDRILL = "BEEDRILL",
    PIDGEY = "PIDGEY",
    PIDGEOTTO = "PIDGEOTTO",
    PIDGEOT = "PIDGEOT",
    HOPPIP = "HOPPIP",
    SKIPLOOM = "SKIPLOOM",
    JUMPLUFF = "JUMPLUFF",
    SEEDOT = "SEEDOT",
    NUZLEAF = "NUZLEAF",
    SHIFTRY = "SHIFTRY",
    STARLY = "STARLY",
    STARAVIA = "STARAVIA",
    STARAPTOR = "STARAPTOR",
    CHIKORITA = "CHIKORITA",
    BAYLEEF = "BAYLEEF",
    MEGANIUM = "MEGANIUM",
    CYNDAQUIL = "CYNDAQUIL",
    QUILAVA = "QUILAVA",
    TYPHLOSION = "TYPHLOSION",
    TOTODILE = "TOTODILE",
    CROCONAW = "CROCONAW",
    FERALIGATR = "FERALIGATR",
    TREECKO = "TREECKO",
    GROVYLE = "GROVYLE",
    SCEPTILE = "SCEPTILE",
    TORCHIC = "TORCHIC",
    COMBUSKEN = "COMBUSKEN",
    BLAZIKEN = "BLAZIKEN",
    MUDKIP = "MUDKIP",
    MARSHTOMP = "MARSHTOMP",
    SWAMPERT = "SWAMPERT",
    TURTWIG = "TURTWIG",
    GROTLE = "GROTLE",
    TORTERRA = "TORTERRA",
    CHIMCHAR = "CHIMCHAR",
    MONFERNO = "MONFERNO",
    INFERNAPE = "INFERNAPE",
    PIPLUP = "PIPLUP",
    PRINPLUP = "PRINPLUP",
    EMPOLEON = "EMPOLEON",
    NIDORANF = "NIDORANF",
    NIDORINA = "NIDORINA",
    NIDOQUEEN = "NIDOQUEEN",
    NIDORANM = "NIDORANM",
    NIDORINO = "NIDORINO",
    NIDOKING = "NIDOKING",
    PICHU = "PICHU",
    PIKACHU = "PIKACHU",
    RAICHU = "RAICHU",
    MACHOP = "MACHOP",
    MACHOKE = "MACHOKE",
    MACHAMP = "MACHAMP",
    HORSEA = "HORSEA",
    SEADRA = "SEADRA",
    KINGDRA = "KINGDRA",
    TRAPINCH = "TRAPINCH",
    VIBRAVA = "VIBRAVA",
    FLYGON = "FLYGON",
    SPHEAL = "SPHEAL",
    SEALEO = "SEALEO",
    WALREIN = "WALREIN",
    ARON = "ARON",
    LAIRON = "LAIRON",
    AGGRON = "AGGRON",
    MAGNEMITE = "MAGNEMITE",
    MAGNETON = "MAGNETON",
    MAGNEZONE = "MAGNEZONE",
    RHYHORN = "RHYHORN",
    RHYDON = "RHYDON",
    RHYPERIOR = "RHYPERIOR",
    TOGEPI = "TOGEPI",
    TOGETIC = "TOGETIC",
    TOGEKISS = "TOGEKISS",
    DUSKULL = "DUSKULL",
    DUSCLOPS = "DUSCLOPS",
    DUSKNOIR = "DUSKNOIR",
    LOTAD = "LOTAD",
    LOMBRE = "LOMBRE",
    LUDICOLO = "LUDICOLO",
    SHINX = "SHINX",
    LUXIO = "LUXIO",
    LUXRAY = "LUXRAY",
    POLIWAG = "POLIWAG",
    POLIWHIRL = "POLIWHIRL",
    POLITOED = "POLITOED",
    POLIWRATH = "POLIWRATH",
    ABRA = "ABRA",
    KADABRA = "KADABRA",
    ALAKAZAM = "ALAKAZAM",
    GASTLY = "GASTLY",
    HAUNTER = "HAUNTER",
    GENGAR = "GENGAR",
    DRATINI = "DRATINI",
    DRAGONAIR = "DRAGONAIR",
    DRAGONITE = "DRAGONITE",
    LARVITAR = "LARVITAR",
    PUPITAR = "PUPITAR",
    TYRANITAR = "TYRANITAR",
    SLAKOTH = "SLAKOTH",
    VIGOROTH = "VIGOROTH",
    SLAKING = "SLAKING",
    RALTS = "RALTS",
    KIRLIA = "KIRLIA",
    GARDEVOIR = "GARDEVOIR",
    BAGON = "BAGON",
    SHELGON = "SHELGON",
    SALAMENCE = "SALAMENCE",
    BELDUM = "BELDUM",
    METANG = "METANG",
    METAGROSS = "METAGROSS",
    GIBLE = "GIBLE",
    GABITE = "GABITE",
    GARCHOMP = "GARCHOMP",
    ELEKID = "ELEKID",
    ELECTABUZZ = "ELECTABUZZ",
    ELECTIVIRE = "ELECTIVIRE",
    MAGBY = "MAGBY",
    MAGMAR = "MAGMAR",
    MAGMORTAR = "MAGMORTAR",
    MUNCHLAX = "MUNCHLAX",
    SNORLAX = "SNORLAX",
    GROWLITHE = "GROWLITHE",
    ARCANINE = "ARCANINE",
    HISUI_GROWLITHE = "HISUI_GROWLITHE",
    HISUI_ARCANINE = "HISUI_ARCANINE",
    ONIX = "ONIX",
    STEELIX = "STEELIX",
    MEGA_STEELIX = "MEGA_STEELIX",
    SCYTHER = "SCYTHER",
    SCIZOR = "SCIZOR",
    KLEAVOR = "KLEAVOR",
    RIOLU = "RIOLU",
    LUCARIO = "LUCARIO",
    MAGIKARP = "MAGIKARP",
    RATTATA = "RATTATA",
    ALOLAN_RATTATA = "ALOLAN_RATTATA",
    RATICATE = "RATICATE",
    ALOLAN_RATICATE = "ALOLAN_RATICATE",
    SPEAROW = "SPEAROW",
    FEAROW = "FEAROW",
    GYARADOS = "GYARADOS",
    LUGIA = "LUGIA",
    SHADOW_LUGIA = "SHADOW_LUGIA",
    GIRATINA = "GIRATINA",
    ZAPDOS = "ZAPDOS",
    MOLTRES = "MOLTRES",
    ARTICUNO = "ARTICUNO",
    DIALGA = "DIALGA",
    PALKIA = "PALKIA",
    SUICUNE = "SUICUNE",
    RAIKOU = "RAIKOU",
    ENTEI = "ENTEI",
    REGICE = "REGICE",
    REGIROCK = "REGIROCK",
    REGISTEEL = "REGISTEEL",
    KYOGRE = "KYOGRE",
    GROUDON = "GROUDON",
    RAYQUAZA = "RAYQUAZA",
    REGIGIGAS = "REGIGIGAS",
    EEVEE = "EEVEE",
    VAPOREON = "VAPOREON",
    JOLTEON = "JOLTEON",
    FLAREON = "FLAREON",
    ESPEON = "ESPEON",
    UMBREON = "UMBREON",
    LEAFEON = "LEAFEON",
    SYLVEON = "SYLVEON",
    MEDITITE = "MEDITITE",
    MEDICHAM = "MEDICHAM",
    NUMEL = "NUMEL",
    CAMERUPT = "CAMERUPT",
    MEGA_CAMERUPT = "MEGA_CAMERUPT",
    DARKRAI = "DARKRAI",
    LITWICK = "LITWICK",
    LAMPENT = "LAMPENT",
    CHANDELURE = "CHANDELURE",
    SLOWPOKE = "SLOWPOKE",
    SLOWBRO = "SLOWBRO",
    SLOWKING = "SLOWKING",
    BELLSPROUT = "BELLSPROUT",
    WEEPINBELL = "WEEPINBELL",
    VICTREEBEL = "VICTREEBEL",
    SWINUB = "SWINUB",
    PILOSWINE = "PILOSWINE",
    MAMOSWINE = "MAMOSWINE",
    SNORUNT = "SNORUNT",
    GLALIE = "GLALIE",
    FROSLASS = "FROSLASS",
    SNOVER = "SNOVER",
    ABOMASNOW = "ABOMASNOW",
    MEGA_ABOMASNOW = "MEGA_ABOMASNOW",
    VANILLITE = "VANILLITE",
    VANILLISH = "VANILLISH",
    VANILLUXE = "VANILLUXE",
    GLACEON = "GLACEON",
    LARVESTA = "LARVESTA",
    VOLCARONA = "VOLCARONA",
    LANDORUS = "LANDORUS",
    THUNDURUS = "THUNDURUS",
    TORNADUS = "TORNADUS",
    ENAMORUS = "ENAMORUS",
    KELDEO = "KELDEO",
    TERRAKION = "TERRAKION",
    VIRIZION = "VIRIZION",
    COBALION = "COBALION",
    MANAPHY = "MANAPHY",
    ROTOM = "ROTOM",
    ROTOM_DRONE = "ROTOM_DRONE",
    SPIRITOMB = "SPIRITOMB",
    ABSOL = "ABSOL",
    LAPRAS = "LAPRAS",
    LATIAS = "LATIAS",
    LATIOS = "LATIOS",
    MESPRIT = "MESPRIT",
    AZELF = "AZELF",
    UXIE = "UXIE",
    MEWTWO = "MEWTWO",
    KYUREM = "KYUREM",
    RESHIRAM = "RESHIRAM",
    ZEKROM = "ZEKROM",
    CELEBI = "CELEBI",
    VICTINI = "VICTINI",
    JIRACHI = "JIRACHI",
    ARCEUS = "ARCEUS",
    DEOXYS = "DEOXYS",
    DEOXYS_DEFENSE = "DEOXYS_DEFENSE",
    DEOXYS_ATTACK = "DEOXYS_ATTACK",
    DEOXYS_SPEED = "DEOXYS_SPEED",
    SHAYMIN = "SHAYMIN",
    CRESSELIA = "CRESSELIA",
    HEATRAN = "HEATRAN",
    HO_OH = "HO_OH",
    AERODACTYL = "AERODACTYL",
    PRIMAL_KYOGRE = "PRIMAL_KYOGRE",
    PRIMAL_GROUDON = "PRIMAL_GROUDON",
    MEOWTH = "MEOWTH",
    PERSIAN = "PERSIAN",
    ALOLAN_MEOWTH = "ALOLAN_MEOWTH",
    ALOLAN_PERSIAN = "ALOLAN_PERSIAN",
    DEINO = "DEINO",
    ZWEILOUS = "ZWEILOUS",
    HYDREIGON = "HYDREIGON",
    SANDILE = "SANDILE",
    KROKOROK = "KROKOROK",
    KROOKODILE = "KROOKODILE",
    SOLOSIS = "SOLOSIS",
    DUOSION = "DUOSION",
    REUNICLUS = "REUNICLUS",
    MEGA_RAYQUAZA = "MEGA_RAYQUAZA",
    SWABLU = "SWABLU",
    ODDISH = "ODDISH",
    GLOOM = "GLOOM",
    VILEPLUME = "VILEPLUME",
    BELLOSSOM = "BELLOSSOM",
    AMAURA = "AMAURA",
    AURORUS = "AURORUS",
    ANORITH = "ANORITH",
    ARMALDO = "ARMALDO",
    ARCHEN = "ARCHEN",
    ARCHEOPS = "ARCHEOPS",
    SHIELDON = "SHIELDON",
    BASTIODON = "BASTIODON",
    TIRTOUGA = "TIRTOUGA",
    CARRACOSTA = "CARRACOSTA",
    LILEEP = "LILEEP",
    CRADILY = "CRADILY",
    CRANIDOS = "CRANIDOS",
    RAMPARDOS = "RAMPARDOS",
    KABUTO = "KABUTO",
    KABUTOPS = "KABUTOPS",
    OMANYTE = "OMANYTE",
    OMASTAR = "OMASTAR",
    TYRUNT = "TYRUNT",
    TYRANTRUM = "TYRANTRUM",
    BUDEW = "BUDEW",
    ROSELIA = "ROSELIA",
    ROSERADE = "ROSERADE",
    BUNEARY = "BUNEARY",
    LOPUNNY = "LOPUNNY",
    MEGA_LOPUNNY = "MEGA_LOPUNNY",
    AXEW = "AXEW",
    FRAXURE = "FRAXURE",
    HAXORUS = "HAXORUS",
    VENIPEDE = "VENIPEDE",
    WHIRLIPEDE = "WHIRLIPEDE",
    SCOLIPEDE = "SCOLIPEDE",
    PORYGON = "PORYGON",
    PORYGON_2 = "PORYGON_2",
    PORYGON_Z = "PORYGON_Z",
    ELECTRIKE = "ELECTRIKE",
    MANECTRIC = "MANECTRIC",
    MEGA_MANECTRIC = "MEGA_MANECTRIC",
    SHUPPET = "SHUPPET",
    BANETTE = "BANETTE",
    MEGA_BANETTE = "MEGA_BANETTE",
    HONEDGE = "HONEDGE",
    DOUBLADE = "DOUBLADE",
    AEGISLASH = "AEGISLASH",
    CUBONE = "CUBONE",
    MAROWAK = "MAROWAK",
    ALOLAN_MAROWAK = "ALOLAN_MAROWAK",
    WHISMUR = "WHISMUR",
    LOUDRED = "LOUDRED",
    EXPLOUD = "EXPLOUD",
    TYMPOLE = "TYMPOLE",
    PALPITOAD = "PALPITOAD",
    SEISMITOAD = "SEISMITOAD",
    SEWADDLE = "SEWADDLE",
    SWADLOON = "SWADLOON",
    LEAVANNY = "LEAVANNY",
    PIKIPEK = "PIKIPEK",
    TRUMBEAK = "TRUMBEAK",
    TOUCANNON = "TOUCANNON",
    FLABEBE = "FLABEBE",
    FLOETTE = "FLOETTE",
    FLORGES = "FLORGES",
    JANGMO_O = "JANGMO_O",
    HAKAMO_O = "HAKAMO_O",
    KOMMO_O = "KOMMO_O",
    MELOETTA = "MELOETTA",
    ALTARIA = "ALTARIA",
    MEGA_ALTARIA = "MEGA_ALTARIA",
    CASTFORM = "CASTFORM",
    CASTFORM_SUN = "CASTFORM_SUN",
    CASTFORM_RAIN = "CASTFORM_RAIN",
    CASTFORM_HAIL = "CASTFORM_HAIL",
    CORPHISH = "CORPHISH",
    CRAWDAUNT = "CRAWDAUNT",
    JOLTIK = "JOLTIK",
    GALVANTULA = "GALVANTULA",
    GENESECT = "GENESECT",
    RELICANTH = "RELICANTH",
    HATENNA = "HATENNA",
    HATTREM = "HATTREM",
    HATTERENE = "HATTERENE",
    FENNEKIN = "FENNEKIN",
    BRAIXEN = "BRAIXEN",
    DELPHOX = "DELPHOX",
    MAKUHITA = "MAKUHITA",
    HARIYAMA = "HARIYAMA",
    REGIELEKI = "REGIELEKI",
    REGIDRAGO = "REGIDRAGO",
    GUZZLORD = "GUZZLORD",
    ETERNATUS = "ETERNATUS",
    PONYTA = "PONYTA",
    RAPIDASH = "RAPIDASH",
    GALARIAN_PONYTA = "GALARIAN_PONYTA",
    GALARIAN_RAPIDASH = "GALARIAN_RAPIDASH",
    NINCADA = "NINCADA",
    NINJASK = "NINJASK",
    SHEDINJA = "SHEDINJA",
    NOIBAT = "NOIBAT",
    NOIVERN = "NOIVERN",
    PUMPKABOO = "PUMPKABOO",
    GOURGEIST = "GOURGEIST",
    CACNEA = "CACNEA",
    CACTURNE = "CACTURNE",
    TAUROS = "TAUROS",
    HAPPINY = "HAPPINY",
    CHANSEY = "CHANSEY",
    BLISSEY = "BLISSEY",
    TAPU_KOKO = "TAPU_KOKO",
    TAPU_LELE = "TAPU_LELE",
    STAKATAKA = "STAKATAKA",
    BLACEPHALON = "BLACEPHALON",
    HOUNDOUR = "HOUNDOUR",
    HOUNDOOM = "HOUNDOOM",
    MEGA_HOUNDOOM = "MEGA_HOUNDOOM",
    CLAMPERL = "CLAMPERL",
    HUNTAIL = "HUNTAIL",
    GOREBYSS = "GOREBYSS",
    SMOOCHUM = "SMOOCHUM",
    JYNX = "JYNX",
    SALANDIT = "SALANDIT",
    SALAZZLE = "SALAZZLE",
    VENONAT = "VENONAT",
    VENOMOTH = "VENOMOTH",
    VOLTORB = "VOLTORB",
    ELECTRODE = "ELECTRODE",
    SLUGMA = "SLUGMA",
    MAGCARGO = "MAGCARGO",
    SNEASEL = "SNEASEL",
    WEAVILE = "WEAVILE",
    CROAGUNK = "CROAGUNK",
    TOXICROAK = "TOXICROAK",
    CHINCHOU = "CHINCHOU",
    LANTURN = "LANTURN",
    POOCHYENA = "POOCHYENA",
    MIGHTYENA = "MIGHTYENA",
    BRONZOR = "BRONZOR",
    BRONZONG = "BRONZONG",
    DRIFLOON = "DRIFLOON",
    DRIFBLIM = "DRIFBLIM",
    SHROOMISH = "SHROOMISH",
    BRELOOM = "BRELOOM",
    TENTACOOL = "TENTACOOL",
    TENTACRUEL = "TENTACRUEL",
    SNUBULL = "SNUBULL",
    GRANBULL = "GRANBULL",
    SEVIPER = "SEVIPER",
    VULPIX = "VULPIX",
    NINETALES = "NINETALES",
    ALOLAN_VULPIX = "ALOLAN_VULPIX",
    ALOLAN_NINETALES = "ALOLAN_NINETALES",
    BUIZEL = "BUIZEL",
    FLOATZEL = "FLOATZEL",
    MAWILE = "MAWILE",
    KECLEON = "KECLEON",
    CARBINK = "CARBINK",
    DIANCIE = "DIANCIE",
    CHATOT = "CHATOT",
    GOOMY = "GOOMY",
    SLIGOO = "SLIGOO",
    GOODRA = "GOODRA",
    HISUI_SLIGGOO = "HISUI_SLIGGOO",
    HISUI_GOODRA = "HISUI_GOODRA",
    MEW = "MEW",
    BOUNSWEET = "BOUNSWEET",
    STEENEE = "STEENEE",
    TSAREENA = "TSAREENA",
    VOLCANION = "VOLCANION",
    APPLIN = "APPLIN",
    APPLETUN = "APPLETUN",
    OSHAWOTT = "OSHAWOTT",
    DEWOTT = "DEWOTT",
    SAMUROTT = "SAMUROTT",
    SNOM = "SNOM",
    FROSMOTH = "FROSMOTH",
    WAILMER = "WAILMER",
    WAILORD = "WAILORD",
    DREEPY = "DREEPY",
    DRAKLOAK = "DRAKLOAK",
    DRAGAPULT = "DRAGAPULT",
    SNIVY = "SNIVY",
    SERVINE = "SERVINE",
    SERPERIOR = "SERPERIOR",
    SCORBUNNY = "SCORBUNNY",
    RABOOT = "RABOOT",
    CINDERACE = "CINDERACE",
    POPPLIO = "POPPLIO",
    BRIONNE = "BRIONNE",
    PRIMARINA = "PRIMARINA",
    GOTHITA = "GOTHITA",
    GOTHORITA = "GOTHORITA",
    GOTHITELLE = "GOTHITELLE",
    SANDSHREW = "SANDSHREW",
    SANDSLASH = "SANDSLASH",
    FARFETCH_D = "FARFETCH_D",
    UNOWN_A = "UNOWN_A",
    UNOWN_B = "UNOWN_B",
    UNOWN_C = "UNOWN_C",
    UNOWN_D = "UNOWN_D",
    UNOWN_E = "UNOWN_E",
    UNOWN_F = "UNOWN_F",
    UNOWN_G = "UNOWN_G",
    UNOWN_H = "UNOWN_H",
    UNOWN_I = "UNOWN_I",
    UNOWN_J = "UNOWN_J",
    UNOWN_K = "UNOWN_K",
    UNOWN_L = "UNOWN_L",
    UNOWN_M = "UNOWN_M",
    UNOWN_N = "UNOWN_N",
    UNOWN_O = "UNOWN_O",
    UNOWN_P = "UNOWN_P",
    UNOWN_Q = "UNOWN_Q",
    UNOWN_R = "UNOWN_R",
    UNOWN_S = "UNOWN_S",
    UNOWN_T = "UNOWN_T",
    UNOWN_U = "UNOWN_U",
    UNOWN_V = "UNOWN_V",
    UNOWN_W = "UNOWN_W",
    UNOWN_X = "UNOWN_X",
    UNOWN_Y = "UNOWN_Y",
    UNOWN_Z = "UNOWN_Z",
    UNOWN_QUESTION = "UNOWN_QUESTION",
    UNOWN_EXCLAMATION = "UNOWN_EXCLAMATION",
    TAPU_FINI = "TAPU_FINI",
    TAPU_BULU = "TAPU_BULU",
    DIGLETT = "DIGLETT",
    ALOLAN_DIGLETT = "ALOLAN_DIGLETT",
    DUGTRIO = "DUGTRIO",
    ALOLAN_DUGTRIO = "ALOLAN_DUGTRIO",
    ROWLET = "ROWLET",
    DARTIX = "DARTIX",
    DECIDUEYE = "DECIDUEYE",
    ZORUA = "ZORUA",
    ZOROARK = "ZOROARK",
    HISUI_ZORUA = "HISUI_ZORUA",
    HISUI_ZOROARK = "HISUI_ZOROARK",
    FROAKIE = "FROAKIE",
    FROGADIER = "FROGADIER",
    GRENINJA = "GRENINJA",
    TYROGUE = "TYROGUE",
    HITMONLEE = "HITMONLEE",
    HITMONCHAN = "HITMONCHAN",
    HITMONTOP = "HITMONTOP",
    MIMIKYU = "MIMIKYU",
    MIMIKYU_BUSTED = "MIMIKYU_BUSTED",
    GRIMER = "GRIMER",
    MUK = "MUK",
    ALOLAN_GRIMER = "ALOLAN_GRIMER",
    ALOLAN_MUK = "ALOLAN_MUK",
    CARVANHA = "CARVANHA",
    SHARPEDO = "SHARPEDO",
    PINECO = "PINECO",
    FORRETRESS = "FORRETRESS",
    SEEL = "SEEL",
    DEWGONG = "DEWGONG",
    ALOLAN_GEODUDE = "ALOLAN_GEODUDE",
    ALOLAN_GRAVELER = "ALOLAN_GRAVELER",
    ALOLAN_GOLEM = "ALOLAN_GOLEM",
    EKANS = "EKANS",
    ARBOK = "ARBOK",
    MIME_JR = "MIME_JR",
    MR_MIME = "MR_MIME",
    ORIGIN_GIRATINA = "ORIGIN_GIRATINA",
    PIROUETTE_MELOETTA = "PIROUETTE_MELOETTA",
    MELMETAL = "MELMETAL",
    HOOPA = "HOOPA",
    HOOPA_UNBOUND = "HOOPA_UNBOUND",
    SILVALLY_FIRE = "SILVALLY_FIRE",
    SILVALLY_FOSSIL = "SILVALLY_FOSSIL",
    SILVALLY_PSYCHIC = "SILVALLY_PSYCHIC",
    SILVALLY_WATER = "SILVALLY_WATER",
    SILVALLY_ELECTRIC = "SILVALLY_ELECTRIC",
    SILVALLY_FAIRY = "SILVALLY_FAIRY",
    SILVALLY_DARK = "SILVALLY_DARK",
    SILVALLY_GRASS = "SILVALLY_GRASS",
    SILVALLY_ICE = "SILVALLY_ICE",
    SILVALLY_FIGHTING = "SILVALLY_FIGHTING",
    SILVALLY_LIGHT = "SILVALLY_LIGHT",
    SILVALLY_POISON = "SILVALLY_POISON",
    SILVALLY_SOUND = "SILVALLY_SOUND",
    SILVALLY_STEEL = "SILVALLY_STEEL",
    SILVALLY_FLYING = "SILVALLY_FLYING",
    SILVALLY_ROCK = "SILVALLY_ROCK",
    SILVALLY_GROUND = "SILVALLY_GROUND",
    SILVALLY_GHOST = "SILVALLY_GHOST",
    TYPE_NULL = "TYPE_NULL",
    ZERAORA = "ZERAORA",
    XERNEAS = "XERNEAS",
    YVELTAL = "YVELTAL",
    MARSHADOW = "MARSHADOW",
    HOOTHOOT = "HOOTHOOT",
    NOCTOWL = "NOCTOWL",
    BONSLEY = "BONSLEY",
    SUDOWOODO = "SUDOWOODO",
    PHIONE = "PHIONE",
    COMBEE = "COMBEE",
    VESPIQUEEN = "VESPIQUEEN",
    SHUCKLE = "SHUCKLE",
    TEPIG = "TEPIG",
    PIGNITE = "PIGNITE",
    EMBOAR = "EMBOAR",
    WYNAUT = "WYNAUT",
    WOBBUFFET = "WOBBUFFET",
    LUNATONE = "LUNATONE",
    SOLROCK = "SOLROCK",
    SHAYMIN_SKY = "SHAYMIN_SKY",
    WURMPLE = "WURMPLE",
    SILCOON = "SILCOON",
    BEAUTIFLY = "BEAUTIFLY",
    CASCOON = "CASCOON",
    DUSTOX = "DUSTOX",
    TINKATINK = "TINKATINK",
    TINKATUFF = "TINKATUFF",
    TINKATON = "TINKATON",
    PARAS = "PARAS",
    PARASECT = "PARASECT",
    MILTANK = "MILTANK",
    MANKEY = "MANKEY",
    PRIMEAPE = "PRIMEAPE",
    SUNKERN = "SUNKERN",
    SUNFLORA = "SUNFLORA",
    MARACTUS = "MARACTUS",
    MINUN = "MINUN",
    PLUSLE = "PLUSLE",
    PINSIR = "PINSIR",
    NATU = "NATU",
    XATU = "XATU",
    GLIGAR = "GLIGAR",
    GLISCOR = "GLISCOR",
    SHELLDER = "SHELLDER",
    CLOYSTER = "CLOYSTER",
    SENTRET = "SENTRET",
    FURRET = "FURRET",
    SPECTRIER = "SPECTRIER",
    TORKOAL = "TORKOAL",
    DELIBIRD = "DELIBIRD",
    IRON_BUNDLE = "IRON_BUNDLE",
    KARTANA = "KARTANA",
    CHINGLING = "CHINGLING",
    CHIMECHO = "CHIMECHO",
    ALOLAN_RAICHU = "ALOLAN_RAICHU",
    DHELMISE = "DHELMISE",
    KOFFING = "KOFFING",
    WEEZING = "WEEZING",
    STARYU = "STARYU",
    STARMIE = "STARMIE",
    NOSEPASS = "NOSEPASS",
    PROBOPASS = "PROBOPASS",
    WOOBAT = "WOOBAT",
    SWOOBAT = "SWOOBAT",
    CLAUNCHER = "CLAUNCHER",
    CLAWITZER = "CLAWITZER",
    YANMA = "YANMA",
    YANMEGA = "YANMEGA",
    HELIOPTILE = "HELIOPTILE",
    HELIOLISK = "HELIOLISK",
    BIDOOF = "BIDOOF",
    BIBAREL = "BIBAREL",
    SPINDA = "SPINDA",
    BALTOY = "BALTOY",
    CLAYDOL = "CLAYDOL",
    HERACROSS = "HERACROSS",
    PURRLOIN = "PURRLOIN",
    LIEPARD = "LIEPARD",
    BARBOACH = "BARBOACH",
    WHISCASH = "WHISCASH",
    SCRAGGY = "SCRAGGY",
    SCRAFTY = "SCRAFTY",
    FINNEON = "FINNEON",
    LUMINEON = "LUMINEON",
    STUNKY = "STUNKY",
    SKUNTANK = "SKUNTANK",
    ILLUMISE = "ILLUMISE",
    VOLBEAT = "VOLBEAT",
    NECROZMA = "NECROZMA",
    ULTRA_NECROZMA = "ULTRA_NECROZMA",
    CHERRUBI = "CHERRUBI",
    CHERRIM = "CHERRIM",
    CHERRIM_SUNLIGHT = "CHERRIM_SUNLIGHT",
    MISDREAVUS = "MISDREAVUS",
    MISMAGIUS = "MISMAGIUS",
    DODUO = "DODUO",
    DODRIO = "DODRIO",
    XURKITREE = "XURKITREE",
    TANDEMAUS = "TANDEMAUS",
    MAUSHOLD_THREE = "MAUSHOLD_THREE",
    MAUSHOLD_FOUR = "MAUSHOLD_FOUR",
    KRICKETOT = "KRICKETOT",
    KRICKETUNE = "KRICKETUNE",
    HIPPOPOTAS = "HIPPOPOTAS",
    HIPPODOWN = "HIPPODOWN",
    WINGULL = "WINGULL",
    PELIPPER = "PELIPPER",
    NIHILEGO = "NIHILEGO",
    SOBBLE = "SOBBLE",
    DRIZZILE = "DRIZZILE",
    INTELEON = "INTELEON",
    TROPIUS = "TROPIUS",
    EXEGGCUTE = "EXEGGCUTE",
    EXEGGUTOR = "EXEGGUTOR",
    ALOLAN_EXEGGUTOR = "ALOLAN_EXEGGUTOR",
    COMFEY = "COMFEY",
    CARNIVINE = "CARNIVINE",
    HISUIAN_QWILFISH = "HISUIAN_QWILFISH",
    OVERQWIL = "OVERQWIL",
    HISUIAN_TYPHLOSION = "HISUIAN_TYPHLOSION",
    LILLIPUP = "LILLIPUP",
    HERDIER = "HERDIER",
    STOUTLAND = "STOUTLAND",
    ZIGZAGOON = "ZIGZAGOON",
    LINOONE = "LINOONE",
    PHEROMOSA = "PHEROMOSA",
    SABLEYE = "SABLEYE",
    MEGA_SABLEYE = "MEGA_SABLEYE",
    DRACOVISH = "DRACOVISH",
    CORSOLA = "CORSOLA",
    GALAR_CORSOLA = "GALAR_CORSOLA",
    CURSOLA = "CURSOLA",
    GIMMIGHOUL = "GIMMIGHOUL",
    GHOLDENGO = "GHOLDENGO",
    PHANTUMP = "PHANTUMP",
    TREVENANT = "TREVENANT",
    SMEARGLE = "SMEARGLE",
    TOXEL = "TOXEL",
    TOXTRICITY = "TOXTRICITY",
    BRUXISH = "BRUXISH",
    SUBSTITUTE = "SUBSTITUTE",
    CYCLIZAR = "CYCLIZAR",
    PAWNIARD = "PAWNIARD",
    BISHARP = "BISHARP",
    KINGAMBIT = "KINGAMBIT",
    MINIOR = "MINIOR",
    MINIOR_KERNEL_RED = "MINIOR_KERNEL_RED",
    MINIOR_KERNEL_BLUE = "MINIOR_KERNEL_BLUE",
    MINIOR_KERNEL_ORANGE = "MINIOR_KERNEL_ORANGE",
    MINIOR_KERNEL_GREEN = "MINIOR_KERNEL_GREEN",
    FEEBAS = "FEEBAS",
    MILOTIC = "MILOTIC",
    MORPEKO = "MORPEKO",
    MORPEKO_HANGRY = "MORPEKO_HANGRY",
    KANGASKHAN = "KANGASKHAN",
    TEDDIURSA = "TEDDIURSA",
    URSARING = "URSARING",
    URSALUNA = "URSALUNA",
    URSALUNA_BLOODMOON = "URSALUNA_BLOODMOON",
    AIPOM = "AIPOM",
    AMBIPOM = "AMBIPOM",
    DEERLING = "DEERLING",
    SAWSBUCK = "SAWSBUCK",
    LICKITUNG = "LICKITUNG",
    LICKILICKY = "LICKILICKY",
    PATRAT = "PATRAT",
    WATCHOG = "WATCHOG",
    SPINARAK = "SPINARAK",
    ARIADOS = "ARIADOS",
    DEWPIDER = "DEWPIDER",
    ARAQUANID = "ARAQUANID",
    ROCKRUFF = "ROCKRUFF",
    LYCANROC_DAY = "LYCANROC_DAY",
    LYCANROC_DUSK = "LYCANROC_DUSK",
    LYCANROC_NIGHT = "LYCANROC_NIGHT",
    DRUDDIGON = "DRUDDIGON",
    COSMOG = "COSMOG",
    COSMOEM = "COSMOEM",
    SOLGALEO = "SOLGALEO",
    LUNALA = "LUNALA",
    MAGEARNA = "MAGEARNA",
    IMPIDIMP = "IMPIDIMP",
    MORGREM = "MORGREM",
    GRIMMSNARL = "GRIMMSNARL",
    CRABRAWLER = "CRABRAWLER",
    CRABOMINABLE = "CRABOMINABLE",
    CUTIEFLY = "CUTIEFLY",
    RIBOMBEE = "RIBOMBEE",
    ZANGOOSE = "ZANGOOSE",
    NICKIT = "NICKIT",
    THIEVUL = "THIEVUL",
    DROWZEE = "DROWZEE",
    HYPNO = "HYPNO",
    WATTREL = "WATTREL",
    KILOWATTREL = "KILOWATTREL",
    STANTLER = "STANTLER",
    BURMY_PLANT = "BURMY_PLANT",
    BURMY_SANDY = "BURMY_SANDY",
    BURMY_TRASH = "BURMY_TRASH",
    WORMADAM_PLANT = "WORMADAM_PLANT",
    WORMADAM_SANDY = "WORMADAM_SANDY",
    WORMADAM_TRASH = "WORMADAM_TRASH",
    MOTHIM = "MOTHIM",
    PALDEA_WOOPER = "PALDEA_WOOPER",
    CLODSIRE = "CLODSIRE",
    FUECOCO = "FUECOCO",
    CROCALOR = "CROCALOR",
    SKELEDIRGE = "SKELEDIRGE",
    TANGELA = "TANGELA",
    TANGROWTH = "TANGROWTH",
    PSYDUCK = "PSYDUCK",
    GOLDUCK = "GOLDUCK",
    PHANPY = "PHANPY",
    DONPHAN = "DONPHAN",
    SPOINK = "SPOINK",
    GRUMPIG = "GRUMPIG",
    SINISTEA = "SINISTEA",
    POLTEAGEIST = "POLTEAGEIST",
    FERROSEED = "FERROSEED",
    FERROTHORN = "FERROTHORN",
    GOLETT = "GOLETT",
    GOLURK = "GOLURK",
    TRUBBISH = "TRUBBISH",
    GARBODOR = "GARBODOR",
    GRUBBIN = "GRUBBIN",
    CHARJABUG = "CHARJABUG",
    VIKAVOLT = "VIKAVOLT",
    SHELLOS_WEST_SEA = "SHELLOS_WEST_SEA",
    GASTRODON_WEST_SEA = "GASTRODON_WEST_SEA",
    SHELLOS_EAST_SEA = "SHELLOS_EAST_SEA",
    GASTRODON_EAST_SEA = "GASTRODON_EAST_SEA",
    MUNNA = "MUNNA",
    MUSHARNA = "MUSHARNA",
    RUFFLET = "RUFFLET",
    BRAVIARY = "BRAVIARY",
    HEATMOR = "HEATMOR",
    KLEFKI = "KLEFKI",
    HAWLUCHA = "HAWLUCHA",
    MIENFOO = "MIENFOO",
    MIENSHAO = "MIENSHAO",
    STONJOURNER = "STONJOURNER",
    HISUI_SNEASEL = "HISUI_SNEASEL",
    SNEASLER = "SNEASLER",
    PYUKUMUKU = "PYUKUMUKU",
    POIPOLE = "POIPOLE",
    NAGANADEL = "NAGANADEL",
    CRAMORANT = "CRAMORANT",
    ARROKUDA = "ARROKUDA",
    WISHIWASHI = "WISHIWASHI",
    WISHIWASHI_SCHOOL = "WISHIWASHI_SCHOOL",
    PAWMI = "PAWMI",
    PAWMO = "PAWMO",
    PAWMOT = "PAWMOT",
    GOLDEEN = "GOLDEEN",
    SEAKING = "SEAKING",
    LUVDISC = "LUVDISC",
    AUDINO = "AUDINO",
    PETILIL = "PETILIL",
    LILIGANT = "LILIGANT",
    MANTYKE = "MANTYKE",
    MANTINE = "MANTINE",
    REMORAID = "REMORAID",
    OCTILLERY = "OCTILLERY",
    SIGILYPH = "SIGILYPH",
    FRIGIBAX = "FRIGIBAX",
    ARCTIBAX = "ARCTIBAX",
    BAXCALIBUR = "BAXCALIBUR",
    BINACLE = "BINACLE",
    BARBARACLE = "BARBARACLE",
    SKARMORY = "SKARMORY",
    DURANT = "DURANT",
    OGERPON_TEAL = "OGERPON_TEAL",
    OGERPON_TEAL_MASK = "OGERPON_TEAL_MASK",
    OGERPON_WELLSPRING = "OGERPON_WELLSPRING",
    OGERPON_WELLSPRING_MASK = "OGERPON_WELLSPRING_MASK",
    OGERPON_HEARTHFLAME = "OGERPON_HEARTHFLAME",
    OGERPON_HEARTHFLAME_MASK = "OGERPON_HEARTHFLAME_MASK",
    OGERPON_CORNERSTONE = "OGERPON_CORNERSTONE",
    OGERPON_CORNERSTONE_MASK = "OGERPON_CORNERSTONE_MASK",
    IRON_HANDS = "IRON_HANDS"
}
export declare const PkmIndex: {
    [key in Pkm]: string;
};
export declare const PkmFamily: {
    [key in Pkm]: Pkm;
};
export declare const PkmRegionalVariants: {
    [key in Pkm]?: readonly Pkm[];
};
export declare enum PkmDuo {
    LATIOS_LATIAS = "LATIOS_LATIAS",
    PLUSLE_MINUN = "PLUSLE_MINUN",
    ILLUMISE_VOLBEAT = "ILLUMISE_VOLBEAT",
    NINJASK_SHEDINJA = "NINJASK_SHEDINJA"
}
export type PkmProposition = Pkm | PkmDuo;
export declare const PkmDuos: {
    LATIOS_LATIAS: Pkm[];
    PLUSLE_MINUN: Pkm[];
    ILLUMISE_VOLBEAT: Pkm[];
    NINJASK_SHEDINJA: Pkm[];
};
export declare const Unowns: Pkm[];
export declare const UnownsStage1: Pkm[];
export declare const UnownsStage2: Pkm[];
export declare const UnownsStage3: Pkm[];
export declare function getUnownsPoolPerStage(stageLevel: number): Pkm[];
export declare const AnimationConfig: {
    [key in Pkm]: {
        attack: AnimationType;
        ability: AnimationType;
        emote: AnimationType;
        shinyUnavailable?: boolean;
    };
};