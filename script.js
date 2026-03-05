// Array of letter combinations
const letterSets = [
    "htl",
    "aeo",
    "atn",
    "vim",
    "yac",
    "cyb",
    "cyl",
    "unj",
    "yuk",
    "nue",
    "ozz",
    "pox",
    "dud",
    "ieg",
    "xyg",
    "aia",
    "byl",
    "vos",
    "ghn",
    "rej",
    "lld",
    "auk",
    "bub",
    "uka",
    "jel",
    "wra",
    "arq",
    "kom",
    "khe",
    "yaw",
    "pei",
    "enk",
    "stn",
    "tza",
    "ssf",
    "sgi",
    "nox",
    "oie",
    "klu",
    "pik",
    "yof",
    "xil",
    "kaz",
    "bte",
    "nzy",
    "bta",
    "lce",
    "iew",
    "tcr",
    "umu",
    "uoy",
    "afi",
    "ayt",
    "riq",
    "ngm",
    "duk",
    "uva",
    "kna",
    "tsi",
    "dda",
    "sro",
    "gaz",
    "lry",
    "stb",
    "enm",
    "uiv",
    "rje",
    "nkn",
    "xua",
    "job",
    "lyg",
    "ypi",
    "ypa",
    "yis",
    "yug",
    "gav",
    "ndc",
    "xcu",
    "otp",
    "jes",
    "ymb",
    "ltz",
    "kah",
    "alr",
    "ctm",
    "ceo",
    "anf",
    "isn",
    "isd",
    "eki",
    "lbi",
    "umn",
    "onr",
    "yms",
    "kwo",
    "lda",
    "mow",
    "mne",
    "bap",
    "isy",
    "wip",
    "nru",
    "rkb",
    "bbo",
    "fav",
    "muf",
    "rcl",
    "jen",
    "kaw",
    "vok",
    "gyr",
    "efy",
    "kbu",
    "oov",
    "anb",
    "dch",
    "olc",
    "anj",
    "ybi",
    "eaw",
    "owh",
    "shp",
    "sda",
    "puc",
    "ytr",
    "ooh",
    "ibs",
    "udy",
    "dah",
    "rgr",
    "geh",
    "zid",
    "ecs",
    "olp",
    "mfi",
    "ubj",
    "thp",
    "tzi",
    "sri",
    "eik",
    "boe",
    "agl",
    "tse",
    "xco",
    "rtm",
    "zol",
    "ptl",
    "ivu",
    "rym",
    "dth",
    "wls",
    "ksc",
    "nsy",
    "wnt",
    "ghl",
    "vee",
    "jin",
    "bys",
    "eim",
    "aet",
    "odc",
    "oob",
    "siu",
    "eio",
    "moz",
    "eia",
    "sst",
    "cya",
    "pam",
    "rgu",
    "ndn",
    "loq",
    "bif",
    "vib",
    "gfi",
    "inx",
    "lbu",
    "utp",
    "lol",
    "ndg",
    "gaw",
    "ueu",
    "rju",
    "kto",
    "dvo",
    "zig",
    "xpu",
    "lbl",
    "uav",
    "ayr",
    "oif",
    "oax",
    "ryt",
    "dfu",
    "web",
    "enj",
    "tay",
    "osk",
    "obt",
    "mya",
    "evu",
    "aum",
    "lvo",
    "vam",
    "lho",
    "xat",
    "pak",
    "lto",
    "gov",
    "wou",
    "emm",
    "pyt",
    "eif",
    "ruf",
    "ipy",
    "aea",
    "gda",
    "ldu",
    "efs",
    "jar",
    "nsk",
    "pup",
    "tfi",
    "wny",
    "von",
    "owt",
    "adw",
    "sbu",
    "hdr",
    "dva",
    "ksh",
    "yhe",
    "jul",
    "eev",
    "tyc",
    "yso",
    "nwi",
    "chw",
    "rpt",
    "sew",
    "ojo",
    "dyb",
    "jol",
    "hsh",
    "kam",
    "ynd",
    "ygo",
    "elb",
    "byp",
    "rtn",
    "utw",
    "sog",
    "dla",
    "ctl",
    "oml",
    "dau",
    "moy",
    "yrr",
    "tpl",
    "ozi",
    "aol",
    "rmh",
    "kou",
    "tca",
    "gth",
    "sos",
    "hba",
    "sre",
    "ugm",
    "miu",
    "dek",
    "asq",
    "itf",
    "axa",
    "hiu",
    "esb",
    "otm",
    "inq",
    "kka",
    "yge",
    "sbr",
    "kta",
    "zet",
    "nry",
    "aiv",
    "llh",
    "deq",
    "asy",
    "dye",
    "adb",
    "xor",
    "nak",
    "oby",
    "cee",
    "cak",
    "vai",
    "ioi",
    "npl",
    "opm",
    "jaw",
    "imn",
    "uie",
    "pem",
    "ijo",
    "owm",
    "ywr",
    "sue",
    "msh",
    "wah",
    "mby",
    "mle",
    "mep",
    "atf",
    "xto",
    "ctn",
    "ldr",
    "maq",
    "omf",
    "rsm",
    "ibo",
    "kca",
    "lwo",
    "soe",
    "ssm",
    "ozo",
    "vey",
    "wie",
    "nez",
    "wla",
    "wry",
    "kor",
    "cyp",
    "jag",
    "sko",
    "voy",
    "rtz",
    "pav",
    "bop",
    "yfi",
    "viz",
    "gew",
    "ynn",
    "euk",
    "htf",
    "rao",
    "pki",
    "wfi",
    "osl",
    "gac",
    "irv",
    "jer",
    "sod",
    "nib",
    "hyn",
    "dym",
    "shb",
    "owc",
    "kfi",
    "ogh",
    "dcu",
    "pef",
    "guo",
    "zos",
    "ipm",
    "mli",
    "nwr",
    "cef",
    "nyi",
    "usy",
    "faw",
    "tys",
    "spy",
    "izo",
    "mix",
    "soa",
    "smu",
    "tze",
    "rik",
    "otu",
    "euv",
    "rnu",
    "hst",
    "kiv",
    "lyr",
    "ezi",
    "kim",
    "yat",
    "ngy",
    "baz",
    "sra",
    "lfe",
    "jah",
    "yzi",
    "xol",
    "npi",
    "due",
    "nys",
    "uas",
    "kaf",
    "rdu",
    "syp",
    "ayb",
    "idr",
    "rya",
    "owf",
    "eyw",
    "buf",
    "yuc",
    "jas",
    "jor",
    "yak",
    "ioe",
    "ghu",
    "utf",
    "awh",
    "ngn",
    "tbo",
    "ntw",
    "bsi",
    "bip",
    "dgy",
    "kyd",
    "kwa",
    "uee",
    "oam",
    "eex",
    "uip",
    "bsu",
    "hud",
    "hua",
    "ofs",
    "kai",
    "gbo",
    "ugo",
    "iry",
    "ueb",
    "xot",
    "wks",
    "elc",
    "zea",
    "eeb",
    "eei",
    "ajo",
    "odp",
    "kos",
    "uum",
    "iah",
    "moa",
    "rwh",
    "iha",
    "odb",
    "rtc",
    "tov",
    "xag",
    "oec",
    "yos",
    "kop",
    "biu",
    "tbu",
    "oag",
    "lps",
    "tga",
    "ubh",
    "lbe",
    "rax",
    "ceb",
    "lcr",
    "gst",
    "mug",
    "rhy",
    "mae",
    "nje",
    "ecy",
    "leh",
    "ija",
    "lyh",
    "yip",
    "nyl",
    "tfa",
    "nui",
    "dyi",
    "ndf",
    "wur",
    "chd",
    "yor",
    "ufl",
    "rml",
    "yze",
    "toh",
    "keo",
    "kke",
    "obr",
    "utz",
    "dba",
    "dex",
    "jal",
    "dna",
    "iai",
    "npo",
    "gto",
    "ilp",
    "hdo",
    "moh",
    "ugi",
    "pwa",
    "pst",
    "cic",
    "gnu",
    "ebb",
    "ctf",
    "rny",
    "dut",
    "vow",
    "vea",
    "waf",
    "ocs",
    "agh",
    "yah",
    "pae",
    "owy",
    "mfo",
    "fum",
    "mys",
    "ngf",
    "tcl",
    "oky",
    "upy",
    "yad",
    "zas",
    "stw",
    "joh",
    "ako",
    "yod",
    "ssw",
    "taz",
    "mye",
    "cne",
    "ebs",
    "xpa",
    "thh",
    "ndw",
    "awt",
    "zli",
    "iao",
    "poa",
    "lox",
    "wim",
    "kew",
    "nbi",
    "jau",
    "ckr",
    "rdm",
    "taf",
    "iya",
    "nev",
    "baf",
    "ptr",
    "lil",
    "zzi",
    "lpl",
    "wiv",
    "rsn",
    "rka",
    "azu",
    "ulv",
    "lfa",
    "ttu",
    "aml",
    "lfl",
    "mek",
    "edy",
    "guy",
    "edc",
    "ckw",
    "sax",
    "itm",
    "rtb",
    "jos",
    "agm",
    "dbu",
    "kpo",
    "pok",
    "aux",
    "kho",
    "jeo",
    "ygr",
    "nza",
    "nka",
    "mla",
    "wde",
    "usu",
    "gif",
    "ixt",
    "iae",
    "rur",
    "tpr",
    "lyb",
    "ahm",
    "aja",
    "wli",
    "tym",
    "ylu",
    "lhe",
    "eyn",
    "uso",
    "cib",
    "rtg",
    "gta",
    "neq",
    "fae",
    "kad",
    "ulm",
    "tsp",
    "sdi",
    "ngd",
    "tiq",
    "ndm",
    "lua",
    "azy",
    "xio",
    "mim",
    "zad",
    "eja",
    "ixo",
    "lyz",
    "ryb",
    "roz",
    "ckc",
    "bef",
    "aot",
    "lye",
    "oap",
    "jee",
    "ksm",
    "wac",
    "cuo",
    "bne",
    "pty",
    "fue",
    "zze",
    "edp",
    "puf",
    "xus",
    "noh",
    "ipr",
    "kof",
    "yci",
    "keb",
    "iwa",
    "kun",
    "edm",
    "uze",
    "agp",
    "oui",
    "sfi",
    "uoi",
    "rkl",
    "aup",
    "tmo",
    "oku",
    "nup",
    "pwi",
    "bvi",
    "hyg",
    "zoi",
    "nzi",
    "hoy",
    "ckm",
    "ddo",
    "naf",
    "hox",
    "rdc",
    "jug",
    "aby",
    "dbe",
    "eje",
    "ael",
    "rky",
    "ppu",
    "haj",
    "irw",
    "kag",
    "jub",
    "naa",
    "naz",
    "uab",
    "yoc",
    "tsw",
    "dhi",
    "ybu",
    "moe",
    "uty",
    "yke",
    "tya",
    "ubv",
    "kbo",
    "pek",
    "aon",
    "vvy",
    "gns",
    "ilg",
    "shw",
    "ymm",
    "acs",
    "ihi",
    "xit",
    "eya",
    "rhu",
    "hyo",
    "phu",
    "ckp",
    "yen",
    "hef",
    "uib",
    "cok",
    "ilw",
    "htw",
    "nsv",
    "hru",
    "apn",
    "loe",
    "urk",
    "bti",
    "tsa",
    "niq",
    "lft",
    "rtf",
    "coz",
    "uef",
    "esk",
    "eew",
    "nhi",
    "dfa",
    "aku",
    "sfa",
    "aje",
    "phs",
    "dgm",
    "zal",
    "bob",
    "euc",
    "rpu",
    "olg",
    "hya",
    "auv",
    "esq",
    "atw",
    "ckd",
    "zzy",
    "iml",
    "nkh",
    "cku",
    "anl",
    "hto",
    "ahi",
    "tgo",
    "nvu",
    "ysp",
    "huf",
    "dod",
    "stc",
    "sby",
    "wto",
    "dsc",
    "luk",
    "nuf",
    "xta",
    "iny",
    "oet",
    "duf",
    "tev",
    "pbo",
    "aor",
    "pco",
    "onw",
    "elr",
    "beq",
    "tbe",
    "adn",
    "sde",
    "xig",
    "mif",
    "etm",
    "wbr",
    "dsm",
    "hfi",
    "nky",
    "bah",
    "ldy",
    "ugs",
    "oem",
    "odh",
    "igl",
    "ryi",
    "egn",
    "oza",
    "sfe",
    "jav",
    "yeb",
    "aik",
    "elw",
    "jui",
    "mip",
    "kla",
    "yom",
    "nkf",
    "teh",
    "yag",
    "dox",
    "ynx",
    "eft",
    "xca",
    "mio",
    "omn",
    "uds",
    "dvi",
    "ffu",
    "gig",
    "zyg",
    "ouf",
    "ukk",
    "ifa",
    "hbu",
    "oyl",
    "naw",
    "yog",
    "mlo",
    "aan",
    "mez",
    "gae",
    "uag",
    "dui",
    "emy",
    "kay",
    "rct",
    "dbi",
    "anq",
    "tsk",
    "yas",
    "gaf",
    "tav",
    "bye",
    "orv",
    "wki",
    "ywe",
    "ewn",
    "coy",
    "fag",
    "nsn",
    "zab",
    "daz",
    "irb",
    "roj",
    "deu",
    "isj",
    "wab",
    "bik",
    "myt",
    "phl",
    "ubu",
    "wow",
    "tsy",
    "mei",
    "aub",
    "elh",
    "uak",
    "utm",
    "goe",
    "sut",
    "biz",
    "suz",
    "yam",
    "yet",
    "hpi",
    "hup",
    "afo",
    "twr",
    "ffy",
    "iox",
    "lup",
    "ddr",
    "baw",
    "pdo",
    "wob",
    "odr",
    "tyi",
    "yls",
    "yps",
    "xec",
    "pma",
    "oog",
    "ofa",
    "edb",
    "peu",
    "buz",
    "zia",
    "yol",
    "pab",
    "giv",
    "wni",
    "ieu",
    "wca",
    "lyw",
    "gba",
    "kwe",
    "eks",
    "joy",
    "wad",
    "dpa",
    "nir",
    "tth",
    "roh",
    "nhy",
    "ahl",
    "zza",
    "yly",
    "lkw",
    "ekk",
    "uam",
    "lyi",
    "uxe",
    "ioa",
    "eml",
    "ubp",
    "tsu",
    "rwe",
    "awf",
    "pyl",
    "dov",
    "dsp",
    "wol",
    "tik",
    "ucu",
    "lsa",
    "foi",
    "unv",
    "hye",
    "tok",
    "hep",
    "btl",
    "dbo",
    "tgu",
    "etw",
    "idt",
    "gec",
    "pwo",
    "bry",
    "jet",
    "wye",
    "oje",
    "mna",
    "xif",
    "umf",
    "ybe",
    "sbi",
    "aeg",
    "wnl",
    "hao",
    "kur",
    "kot",
    "ilb",
    "ofo",
    "ngh",
    "afa",
    "cua",
    "hok",
    "vre",
    "jab",
    "esl",
    "ldw",
    "owr",
    "hli",
    "zai",
    "tih",
    "xma",
    "ybr",
    "fud",
    "daw",
    "lty",
    "ekn",
    "zit",
    "dib",
    "inp",
    "ezo",
    "oyd",
    "oue",
    "ddu",
    "lmy",
    "tof",
    "seo",
    "jea",
    "hik",
    "djo",
    "kbe",
    "bno",
    "zim",
    "snu",
    "urm",
    "knu",
    "dad",
    "lka",
    "bha",
    "wbo",
    "ciu",
    "sug",
    "uol",
    "xti",
    "caf",
    "uly",
    "kep",
    "noa",
    "hey",
    "hue",
    "vom",
    "pue",
    "upb",
    "yca",
    "ckt",
    "inj",
    "anv",
    "ewd",
    "rja",
    "rwi",
    "dco",
    "irf",
    "haz",
    "eym",
    "amw",
    "heb",
    "lso",
    "rby",
    "zom",
    "abh",
    "dni",
    "bho",
    "dwe",
    "feu",
    "dno",
    "bme",
    "sys",
    "xur",
    "enb",
    "cag",
    "ayu",
    "sae",
    "kum",
    "hij",
    "pif",
    "lgi",
    "rfs",
    "eux",
    "koo",
    "cly",
    "scy",
    "boi",
    "rdy",
    "sob",
    "dhu",
    "awi",
    "bez",
    "mfe",
    "keh",
    "bau",
    "ckf",
    "lya",
    "fuz",
    "awd",
    "eea",
    "sks",
    "lcu",
    "lyd",
    "lsh",
    "gwo",
    "rnb",
    "xtu",
    "nro",
    "oia",
    "heg",
    "awo",
    "yno",
    "goa",
    "cue",
    "afl",
    "wdr",
    "sef",
    "itn",
    "ewh",
    "hho",
    "eic",
    "cai",
    "gut",
    "ngb",
    "ssb",
    "maj",
    "esn",
    "ulb",
    "eef",
    "cni",
    "yab",
    "ehu",
    "odm",
    "eyi",
    "ssp",
    "oym",
    "giu",
    "wma",
    "owg",
    "tna",
    "ksl",
    "ysm",
    "ybo",
    "ohy",
    "sku",
    "hsi",
    "fiz",
    "vec",
    "etz",
    "hev",
    "buo",
    "ahe",
    "lfo",
    "mew",
    "lwa",
    "few",
    "ssr",
    "sfu",
    "ffr",
    "vus",
    "egs",
    "nbl",
    "aed",
    "gog",
    "gsh",
    "ilu",
    "gdo",
    "irp",
    "eod",
    "mci",
    "ooe",
    "idn",
    "pso",
    "aky",
    "rdh",
    "wdi",
    "piv",
    "psa",
    "lgo",
    "rwr",
    "bov",
    "fog",
    "iaz",
    "gid",
    "otw",
    "ogm",
    "maf",
    "ovo",
    "gip",
    "ndt",
    "poe",
    "lal",
    "wen",
    "llw",
    "xha",
    "kya",
    "ceu",
    "meo",
    "oxa",
    "aeu",
    "ilv",
    "tey",
    "ymn",
    "yho",
    "ooi",
    "nja",
    "iob",
    "asb",
    "oaf",
    "uxi",
    "hoi",
    "cay",
    "uon",
    "bib",
    "ejo",
    "kbi",
    "jef",
    "owp",
    "vap",
    "akl",
    "tpo",
    "sbo",
    "hub",
    "dsa",
    "xie",
    "dub",
    "jai",
    "gay",
    "rld",
    "esy",
    "opk",
    "wpo",
    "uae",
    "cud",
    "tmi",
    "wro",
    "ahy",
    "sak",
    "rbl",
    "amn",
    "arh",
    "xcr",
    "eul",
    "saf",
    "awe",
    "upc",
    "wba",
    "sba",
    "toz",
    "fut",
    "kre",
    "ylv",
    "onz",
    "ilc",
    "idy",
    "uay",
    "vei",
    "ieb",
    "rgl",
    "gef",
    "pne",
    "edf",
    "lof",
    "dav",
    "xib",
    "boc",
    "ysc",
    "nze",
    "olm",
    "kap",
    "aks",
    "ydi",
    "six",
    "lri",
    "vif",
    "kfu",
    "iko",
    "jum",
    "aln",
    "uif",
    "lao",
    "gnm",
    "xfo",
    "meb",
    "utn",
    "orf",
    "nri",
    "rnf",
    "toy",
    "juv",
    "wig",
    "ipw",
    "adf",
    "tuc",
    "jim",
    "oea",
    "ahu",
    "xas",
    "jut",
    "kpi",
    "emn",
    "bae",
    "kon",
    "lpo",
    "npa",
    "ifs",
    "kik",
    "kol",
    "uvi",
    "upd",
    "dik",
    "jog",
    "eyl",
    "dhe",
    "xen",
    "bma",
    "noe",
    "iad",
    "ikh",
    "giz",
    "ezz",
    "gyp",
    "bim",
    "lci",
    "gob",
    "fei",
    "pau",
    "map",
    "ndp",
    "gom",
    "fox",
    "geb",
    "lfu",
    "luv",
    "doe",
    "lek",
    "yop",
    "kso",
    "mpy",
    "ovu",
    "ldl",
    "hyb",
    "onh",
    "nwe",
    "tts",
    "pno",
    "daf",
    "lky",
    "cox",
    "fty",
    "nuo",
    "ubf",
    "lpe",
    "nbr",
    "dyl",
    "etf",
    "ksi",
    "cey",
    "adc",
    "dfl",
    "foa",
    "ywi",
    "mik",
    "jok",
    "eid",
    "odw",
    "pda",
    "kok",
    "lko",
    "bew",
    "oum",
    "vip",
    "yda",
    "atz",
    "vau",
    "dfi",
    "wet",
    "uvr",
    "hty",
    "tsh",
    "uea",
    "ika",
    "yng",
    "peo",
    "nay",
    "gwa",
    "boh",
    "umv",
    "dug",
    "lui",
    "myl",
    "ucr",
    "ldf",
    "sow",
    "lpi",
    "iap",
    "pum",
    "vex",
    "oey",
    "upa",
    "shf",
    "hah",
    "hpa",
    "aal",
    "nsg",
    "kia",
    "hoh",
    "obj",
    "owo",
    "dya",
    "ubo",
    "rdb",
    "kpl",
    "uia",
    "cuf",
    "taw",
    "hfu",
    "uiz",
    "idw",
    "kip",
    "uac",
    "htr",
    "msi",
    "hna",
    "ypn",
    "tuo",
    "rsk",
    "ozy",
    "xcl",
    "rcy",
    "bdu",
    "kut",
    "iwi",
    "eiz",
    "rfr",
    "nmi",
    "ndh",
    "aar",
    "rsc",
    "sru",
    "gap",
    "uha",
    "uot",
    "xac",
    "rtw",
    "myr",
    "osq",
    "lax",
    "ubd",
    "inw",
    "kyl",
    "xal",
    "chh",
    "apb",
    "tew",
    "ofl",
    "wke",
    "tob",
    "syr",
    "akt",
    "ifu",
    "ugu",
    "rkh",
    "kea",
    "xem",
    "piz",
    "ipu",
    "gry",
    "ynt",
    "ugl",
    "iem",
    "kda",
    "ehy",
    "viu",
    "aji",
    "eug",
    "yni",
    "hry",
    "ipb",
    "lms",
    "eka",
    "eue",
    "lsp",
    "apd",
    "joc",
    "chf",
    "zeb",
    "ywo",
    "won",
    "fto",
    "yap",
    "kly",
    "igs",
    "ecd",
    "akh",
    "kme",
    "eah",
    "dpi",
    "udu",
    "dlo",
    "oyn",
    "udr",
    "nwo",
    "irg",
    "ccr",
    "rdn",
    "uny",
    "wpa",
    "enq",
    "isg",
    "tpi",
    "ixa",
    "htn",
    "asl",
    "cui",
    "kup",
    "dfo",
    "ntn",
    "ofu",
    "tdo",
    "anx",
    "nra",
    "dga",
    "rsl",
    "xpi",
    "wax",
    "thb",
    "nxi",
    "kti",
    "sah",
    "ntg",
    "ldb",
    "ymi",
    "gey",
    "pht",
    "cym",
    "ihy",
    "abn",
    "atm",
    "goi",
    "uml",
    "pey",
    "yta",
    "awb",
    "yok",
    "wbe",
    "msa",
    "ggo",
    "pew",
    "roq",
    "elg",
    "inb",
    "sgo",
    "enw",
    "orw",
    "gum",
    "gmi",
    "yum",
    "wsh",
    "sud",
    "chb",
    "ckn",
    "ysa",
    "dak",
    "cec",
    "rcr",
    "hmi",
    "nud",
    "rdw",
    "adp",
    "wth",
    "puk",
    "ouv",
    "hov",
    "ryn",
    "npe",
    "vad",
    "wme",
    "gym",
    "jak",
    "foc",
    "tso",
    "iov",
    "cze",
    "tlo",
    "mse",
    "eow",
    "nlo",
    "bey",
    "cah",
    "nyw",
    "oyo",
    "llm",
    "aec",
    "bev",
    "tbr",
    "toe",
    "llf",
    "hmo",
    "pog",
    "vak",
    "cyn",
    "xpr",
    "ubg",
    "feg",
    "huk",
    "zel",
    "rez",
    "elk",
    "gei",
    "hwo",
    "neh",
    "nzo",
    "xia",
    "pyi",
    "kov",
    "bmi",
    "oyi",
    "apy",
    "omu",
    "oeu",
    "fos",
    "obn",
    "cof",
    "kfa",
    "fad",
    "rii",
    "bco",
    "onb",
    "bde",
    "eeh",
    "bju",
    "mst",
    "ayc",
    "doa",
    "nik",
    "mok",
    "lwe",
    "ohn",
    "avu",
    "ayd",
    "hug",
    "tah",
    "uja",
    "noy",
    "ssc",
    "oev",
    "ayl",
    "esw",
    "hif",
    "egl",
    "dme",
    "mbs",
    "sgu",
    "rbs",
    "nug",
    "tue",
    "sov",
    "rua",
    "vem",
    "gyn",
    "lkl",
    "tui",
    "tuf",
    "ghi",
    "kac",
    "abd",
    "jib",
    "dse",
    "utb",
    "xyl",
    "erj",
    "lyo",
    "upo",
    "kib",
    "dso",
    "fak",
    "tco",
    "zil",
    "afr",
    "nof",
    "pud",
    "avy",
    "byt",
    "nsw",
    "ldn",
    "bhu",
    "fuc",
    "lok",
    "upw",
    "edw",
    "xam",
    "dca",
    "lfr",
    "ypr",
    "unu",
    "egy",
    "ftw",
    "chp",
    "udl",
    "ilh",
    "sof",
    "keu",
    "ayw",
    "cae",
    "pov",
    "pug",
    "rgy",
    "awm",
    "yde",
    "lpt",
    "klo",
    "ksa",
    "irn",
    "kus",
    "raj",
    "yss",
    "bve",
    "egm",
    "kic",
    "uft",
    "uos",
    "tug",
    "fif",
    "luf",
    "oeb",
    "obv",
    "sju",
    "cys",
    "veh",
    "erz",
    "mau",
    "rek",
    "gpi",
    "feb",
    "nah",
    "utg",
    "ifl",
    "amr",
    "bbr",
    "ewr",
    "ayn",
    "peg",
    "sbe",
    "bei",
    "adh",
    "zam",
    "okm",
    "eyb",
    "nub",
    "okl",
    "aib",
    "ilf",
    "bam",
    "eun",
    "fta",
    "coq",
    "lha",
    "nbo",
    "lbo",
    "jay",
    "zec",
    "rgh",
    "xhi",
    "huc",
    "seh",
    "ekl",
    "rqu",
    "yre",
    "teb",
    "wdl",
    "eob",
    "kru",
    "otb",
    "ngw",
    "xon",
    "dsi",
    "nss",
    "lux",
    "raq",
    "cun",
    "cuc",
    "tiu",
    "nix",
    "tgr",
    "bdi",
    "uki",
    "maz",
    "sps",
    "bok",
    "yot",
    "xud",
    "ffa",
    "ayf",
    "fem",
    "hta",
    "yru",
    "usb",
    "ivv",
    "cim",
    "ahs",
    "mee",
    "icc",
    "ooc",
    "aam",
    "nih",
    "tsm",
    "nns",
    "doz",
    "thf",
    "jaz",
    "xch",
    "zem",
    "yee",
    "wiz",
    "pim",
    "uxu",
    "hla",
    "pah",
    "wif",
    "cew",
    "mso",
    "ebl",
    "thd",
    "mno",
    "gga",
    "shc",
    "sik",
    "abj",
    "lix",
    "dob",
    "kyr",
    "heu",
    "zzo",
    "ywa",
    "pix",
    "toa",
    "ygi",
    "tbi",
    "nkr",
    "rls",
    "ckh",
    "sht",
    "xan",
    "aen",
    "wam",
    "ntz",
    "fug",
    "nhu",
    "lro",
    "onp",
    "jit",
    "jon",
    "bak",
    "onq",
    "zir",
    "rkm",
    "uai",
    "doi",
    "paw",
    "dix",
    "chs",
    "wap",
    "auf",
    "tef",
    "btr",
    "mho",
    "muz",
    "dbl",
    "yba",
    "iur",
    "kdo",
    "ohi",
    "xho",
    "kul",
    "oho",
    "tae",
    "gfu",
    "nmo",
    "zep",
    "sve",
    "fow",
    "zur",
    "ghb",
    "ddh",
    "lln",
    "pme",
    "wse",
    "kba",
    "mly",
    "puz",
    "eof",
    "hul",
    "sgr",
    "wly",
    "oak",
    "eny",
    "bay",
    "ghw",
    "kem",
    "hwe",
    "uei",
    "zip",
    "unq",
    "ewy",
    "axo",
    "tsc",
    "tni",
    "vah",
    "icy",
    "rnm",
    "etl",
    "nuk",
    "rps",
    "piu",
    "gim",
    "jig",
    "loh",
    "dry",
    "zym",
    "soi",
    "njo",
    "duo",
    "pez",
    "oua",
    "bem",
    "psh",
    "rmy",
    "rye",
    "ghs",
    "rfl",
    "enp",
    "iru",
    "jap",
    "dpo",
    "ixi",
    "utd",
    "pfu",
    "lir",
    "yur",
    "ysu",
    "caj",
    "wdo",
    "zie",
    "vot",
    "bje",
    "hbr",
    "tpa",
    "ewl",
    "rbr",
    "aty",
    "bdo",
    "ryw",
    "ehi",
    "oei",
    "itz",
    "wav",
    "wst",
    "oxo",
    "pbr",
    "upu",
    "heq",
    "ntm",
    "biv",
    "jew",
    "yea",
    "cty",
    "nko",
    "llp",
    "soo",
    "atb",
    "ufo",
    "ggs",
    "orh",
    "inm",
    "veg",
    "isq",
    "byr",
    "jil",
    "buk",
    "zor",
    "iks",
    "thn",
    "esd",
    "dmo",
    "zag",
    "ilr",
    "kro",
    "rvo",
    "dof",
    "ufa",
    "tfo",
    "adg",
    "wfu",
    "ugn",
    "gow",
    "oko",
    "lfs",
    "etn",
    "kpa",
    "zoa",
    "ryc",
    "psu",
    "sfo",
    "eju",
    "nya",
    "akr",
    "ooz",
    "mro",
    "eyo",
    "etb",
    "buy",
    "alw",
    "amt",
    "kri",
    "olb",
    "bpr",
    "npu",
    "xci",
    "stf",
    "rix",
    "cch",
    "ssh",
    "dbr",
    "eui",
    "foe",
    "goc",
    "stp",
    "akk",
    "cig",
    "piq"
  ];

// Game start date: March 4, 2026 (puzzle index 0)
const GAME_START_DATE = new Date(2026, 2, 4);
GAME_START_DATE.setHours(0, 0, 0, 0);

// Read ?date=YYYY-MM-DD from URL, default to today. Validates range.
function getPuzzleDate() {
    const params = new URLSearchParams(window.location.search);
    const dateParam = params.get('date');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateParam) {
        const parts = dateParam.split('-');
        if (parts.length === 3) {
            const parsed = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            parsed.setHours(0, 0, 0, 0);
            if (!isNaN(parsed.getTime()) && parsed >= GAME_START_DATE && parsed <= today) {
                return parsed;
            }
        }
    }
    return today;
}

function getLettersForDate(date) {
    const epoch = new Date(2025, 0, 1);
    const daysSinceEpoch = Math.floor((date - epoch) / 1000 / 60 / 60 / 24);
    const index = (daysSinceEpoch - 427) % letterSets.length;
    return letterSets[index];
}

function dateToKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// Constants
const MIN_WORD_FREQUENCY = 1;
const HINT_THRESHOLDS = [0.25, 0.50, 0.75];

// Load dictionary
let dictionary = {};
let shortestWord = null;
let longestWord = null;
let shownShortestMsg = false;
let shownLongestMsg = false;
let realWords = [];
let bonusWords = [];
let foundRealWords = new Set();
let foundBonusWords = new Set();
let allValidWords = [];
let debugVisible = false;
let definitionCache = {};
let sortByLength = true; // true = by length, false = alphabetical

// --- Persistence ---
function savePuzzleState() {
    try {
        const key = 'containment_puzzles';
        const raw = localStorage.getItem(key);
        const store = raw ? JSON.parse(raw) : { schemaVersion: 1, puzzles: {} };
        store.schemaVersion = 1;
        if (!store.puzzles) store.puzzles = {};
        store.puzzles[dateToKey(puzzleDate)] = {
            foundReal: [...foundRealWords],
            foundBonus: [...foundBonusWords]
        };
        localStorage.setItem(key, JSON.stringify(store));
    } catch (e) {
        // localStorage unavailable or full — degrade silently
    }
}

function loadPuzzleState() {
    try {
        const raw = localStorage.getItem('containment_puzzles');
        if (!raw) return null;
        const store = JSON.parse(raw);
        const entry = store && store.puzzles && store.puzzles[dateToKey(puzzleDate)];
        return entry || null;
    } catch (e) {
        return null;
    }
}

function restorePuzzleState(saved) {
    // Validate and populate foundRealWords
    const realSet = new Set(realWords);
    const bonusSet = new Set(bonusWords);
    if (Array.isArray(saved.foundReal)) {
        for (const w of saved.foundReal) {
            if (realSet.has(w)) foundRealWords.add(w);
        }
    }
    if (Array.isArray(saved.foundBonus)) {
        for (const w of saved.foundBonus) {
            if (bonusSet.has(w)) foundBonusWords.add(w);
        }
    }

    // Derive shortestWord / longestWord from all found words
    const allFound = [...foundRealWords, ...foundBonusWords];
    for (const w of allFound) {
        if (!shortestWord || w.length < shortestWord.length) shortestWord = w;
        if (!longestWord || w.length > longestWord.length) longestWord = w;
    }

    // Derive shownShortestMsg / shownLongestMsg
    const absShortestLen = realWords.length > 0 ? realWords[0].length : 0;
    const absLongestLen = realWords.length > 0 ? realWords[realWords.length - 1].length : 0;
    if (shortestWord && shortestWord.length === absShortestLen) shownShortestMsg = true;
    if (longestWord && longestWord.length === absLongestLen) shownLongestMsg = true;

    // Show share button if applicable
    if (shortestWord || longestWord) {
        shareBtn.style.display = 'inline-block';
    }
}

function savePrefs() {
    try {
        localStorage.setItem('containment_prefs', JSON.stringify({ sortByLength }));
    } catch (e) {}
}

function loadPrefs() {
    try {
        const raw = localStorage.getItem('containment_prefs');
        if (!raw) return;
        const prefs = JSON.parse(raw);
        if (typeof prefs.sortByLength === 'boolean') sortByLength = prefs.sortByLength;
    } catch (e) {}
}

// Load the dictionary file (prefer ngram version, fall back to original)
fetch('words_dictionary_ngram.json')
    .then(response => {
        if (!response.ok) return fetch('words_dictionary.json');
        return response;
    })
    .then(response => response.json())
    .then(data => {
        dictionary = data;
        console.log('Dictionary loaded successfully');
        allValidWords = Object.keys(dictionary).filter(word => containsAllLetters(word, currentLetters));
        realWords = allValidWords.filter(w => dictionary[w] >= MIN_WORD_FREQUENCY).sort((a, b) => a.length - b.length || a.localeCompare(b));
        bonusWords = allValidWords.filter(w => dictionary[w] < MIN_WORD_FREQUENCY);
        loadPrefs();
        const saved = loadPuzzleState();
        if (saved) restorePuzzleState(saved);
        updateProgressBar();
        updateWordList();
    })
    .catch(error => {
        console.error('Error loading dictionary:', error);
        dictionary = {"sightly": 1, "hotel": 1}
        alert('Error loading word dictionary. Please make sure words_dictionary.json is in the same folder.');
    });


// Resolve puzzle date and letters
const puzzleDate = getPuzzleDate();
const currentLetters = getLettersForDate(puzzleDate);
document.getElementById('lettersDisplay').textContent = currentLetters;

// Form submission
const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const errorMessage = document.getElementById('errorMessage');
const shareBtn = document.getElementById('shareBtn');
const shareMessage = document.getElementById('shareMessage');
const debugBtn = document.getElementById('debugBtn');

// Keep input focused on desktop
if (!('ontouchstart' in window)) {
    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
            input.focus();
        }
    });
    input.focus();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const word = input.value.trim().toLowerCase();
    
    // Clear previous message
    clearMessage();
    
    // Check if word is empty
    if (!word) {
        return;
    }
    
    // Check if word is in dictionary
    if (!dictionary.hasOwnProperty(word)) {
        showError("enter a real word!");
        shakeInput();
        return;
    }
    
    // Check if word contains all three letters
    if (!containsAllLetters(word, currentLetters)) {
        showError(`Word must contain '${currentLetters.toUpperCase()}' consecutively`);
        shakeInput();
        return;
    }

    // Check for duplicates
    if (foundRealWords.has(word) || foundBonusWords.has(word)) {
        showError("already found!");
        shakeInput();
        return;
    }

    // Valid word! Update results
    updateResults(word);
    fetchDefinition(word);

    // Clear input
    input.value = '';
});

function getFormattedDate() {
    const month = String(puzzleDate.getMonth() + 1).padStart(2, '0');
    const day = String(puzzleDate.getDate()).padStart(2, '0');
    const year = puzzleDate.getFullYear();
    return `${month}/${day}/${year}`;
}

const RATING_LABELS = ['⭐', '⭐⭐', '⭐⭐⭐', '🌟'];

function getRating() {
    if (realWords.length === 0) return 0;
    const pct = foundRealWords.size / realWords.length;
    if (pct >= 1) return 3; // Gold Star (Perfect)
    if (pct >= 0.75) return 2; // 3 stars
    if (pct >= 0.50) return 1; // 2 stars
    if (pct >= 0.25) return 0; // 1 star
    return -1; // no rating yet
}

shareBtn.addEventListener('click', () => {
    if (!shortestWord && !longestWord) {
        return;
    }

    const shortestLength = shortestWord ? shortestWord.length : 'N/A';
    const longestLength = longestWord ? longestWord.length : 'N/A';
    const dateStr = dateToKey(puzzleDate);
    const url = window.location.href.split('?')[0] + `?date=${dateStr}`;
    const date = getFormattedDate();
    const rating = getRating();
    const ratingText = rating >= 0 ? RATING_LABELS[rating] : '';
    const bonusText = foundBonusWords.size > 0 ? `Bonus words: ${foundBonusWords.size}\n` : '';

    const shareText = `📚Substrings ${date}📚
${foundRealWords.size}/${realWords.length} words found ${ratingText}
${bonusText}Shortest: ${shortestLength} | Longest: ${longestLength}
Can you beat me, the amazing fabulous walking dictionary? 🤔🧐🤓
Play at ${url}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        shareMessage.textContent = 'Copied to clipboard!';
        setTimeout(() => {
            shareMessage.textContent = '';
        }, 3000);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            shareMessage.textContent = 'Copied to clipboard!';
            setTimeout(() => {
                shareMessage.textContent = '';
            }, 3000);
        } catch (err) {
            shareMessage.textContent = 'Could not copy. Please copy manually.';
            console.error('Copy failed:', err);
        }
        document.body.removeChild(textArea);
    });
});

// Definition fetching
async function fetchDefinition(word) {
    if (definitionCache[word]) return definitionCache[word];
    try {
        const res = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(word)}`);
        if (!res.ok) {
            definitionCache[word] = null;
            return null;
        }
        const data = await res.json();
        const entries = data.entries || [];
        const pronunc = entries[0]?.pronunciations?.find(p => p.text);
        const phonetic = pronunc?.text || '';
        const meanings = [];
        for (const entry of entries) {
            if (meanings.length >= 2) break;
            for (const sense of (entry.senses || [])) {
                if (meanings.length >= 2) break;
                if (sense.definition) {
                    meanings.push({
                        partOfSpeech: entry.partOfSpeech || '',
                        definition: sense.definition
                    });
                }
            }
        }
        if (meanings.length === 0) {
            definitionCache[word] = null;
            return null;
        }
        definitionCache[word] = { phonetic, meanings };
        return definitionCache[word];
    } catch {
        definitionCache[word] = null;
        return null;
    }
}

// Tooltip
const tooltip = document.getElementById('definitionTooltip');
let tooltipTimeout = null;

function showTooltip(el, word) {
    clearTimeout(tooltipTimeout);
    const def = definitionCache[word];
    const isHint = el.dataset.hint === 'true';
    let html = '';
    if (isHint) {
        const subIdx = word.indexOf(currentLetters);
        const masked = Array.from(word).map((ch, i) => {
            if (i === 0) return ch.toUpperCase();
            if (i >= subIdx && i < subIdx + currentLetters.length) return ch.toUpperCase();
            return '_';
        }).join('');
        html += `<div class="def-word">${masked} (${word.length})</div>`;
    } else {
        html += `<div class="def-word">${word.toUpperCase()}</div>`;
    }
    if (def === undefined) {
        html += '<div class="def-loading">Loading...</div>';
    } else if (def === null) {
        html += '<div class="def-error">No dictionary entry available</div>';
    } else {
        if (!isHint && def.phonetic) html += `<div class="def-phonetic">${def.phonetic}</div>`;
        for (const m of def.meanings) {
            html += `<div class="def-pos">${m.partOfSpeech}</div>`;
            html += `<div class="def-meaning">${m.definition}</div>`;
        }
    }
    tooltip.innerHTML = html;
    tooltip.classList.add('visible');

    const rect = el.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth;
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));
    let top = rect.top - 8 - tooltip.offsetHeight;
    if (top < 8) top = rect.bottom + 8;
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
}

function hideTooltip() {
    tooltipTimeout = setTimeout(() => {
        tooltip.classList.remove('visible');
    }, 100);
}

function hideTooltipNow() {
    clearTimeout(tooltipTimeout);
    tooltip.classList.remove('visible');
}

function dismissTooltipOnOutsideTap(e) {
    if (!tooltip.contains(e.target) && !e.target.closest('[data-word]')) {
        hideTooltipNow();
        document.removeEventListener('touchstart', dismissTooltipOnOutsideTap);
        document.removeEventListener('scroll', dismissTooltipOnScroll, true);
    }
}

function dismissTooltipOnScroll() {
    hideTooltipNow();
    document.removeEventListener('touchstart', dismissTooltipOnOutsideTap);
    document.removeEventListener('scroll', dismissTooltipOnScroll, true);
}

function attachTooltipListeners() {
    document.querySelectorAll('[data-word]').forEach(el => {
        el.addEventListener('mouseenter', () => showTooltip(el, el.dataset.word));
        el.addEventListener('mouseleave', hideTooltip);
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            showTooltip(el, el.dataset.word);
            document.removeEventListener('touchstart', dismissTooltipOnOutsideTap);
            document.removeEventListener('scroll', dismissTooltipOnScroll, true);
            setTimeout(() => {
                document.addEventListener('touchstart', dismissTooltipOnOutsideTap);
                document.addEventListener('scroll', dismissTooltipOnScroll, true);
            }, 10);
        });
    });
}

function containsAllLetters(word, letters) {
    if (word.includes(letters)) {
        return true;
    }
    return false;
}

function clearMessage() {
    errorMessage.textContent = '';
    errorMessage.className = 'error-message';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.className = 'error-message';
}

function showGoldMessage(message) {
    errorMessage.textContent = message;
    errorMessage.className = 'error-message gold-message';
}

function shakeInput() {
    input.classList.add('shake');
    input.value = '';
    setTimeout(() => {
        input.classList.remove('shake');
    }, 500);
}

function updateResults(word) {
    // Categorize the word
    if (dictionary[word] >= MIN_WORD_FREQUENCY) {
        foundRealWords.add(word);
    } else {
        foundBonusWords.add(word);
    }

    // Determine absolute shortest/longest from real words only
    const absShortestLen = realWords.length > 0 ? realWords[0].length : 0;
    const absLongestLen = realWords.length > 0 ? realWords[realWords.length - 1].length : 0;

    // Update shortest/longest tracking
    if (!shortestWord || word.length < shortestWord.length) shortestWord = word;
    if (!longestWord || word.length > longestWord.length) longestWord = word;

    // Special messages
    const isAbsShortest = !shownShortestMsg && word.length === absShortestLen;
    const isAbsLongest = !shownLongestMsg && word.length === absLongestLen;
    if (dictionary[word] < MIN_WORD_FREQUENCY) {
        showGoldMessage('Bonus word found!');
    } else if (isAbsShortest && isAbsLongest) {
        showGoldMessage('Shortest AND longest word found!');
        shownShortestMsg = true;
        shownLongestMsg = true;
    } else if (isAbsShortest) {
        showGoldMessage('Shortest possible word found!');
        shownShortestMsg = true;
    } else if (isAbsLongest) {
        showGoldMessage('Longest possible word found!');
        shownLongestMsg = true;
    }

    if (shortestWord || longestWord) {
        shareBtn.style.display = 'inline-block';
    }

    updateProgressBar();
    updateWordList();

    // Celebrate when all real words found
    if (realWords.length > 0 && foundRealWords.size === realWords.length) {
        celebrateConfetti();
    }

    savePuzzleState();
}

function celebrateConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;
    (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    })();
}

function getCurrentHintLevel() {
    if (realWords.length === 0) return 0;
    const pct = foundRealWords.size / realWords.length;
    let level = 0;
    for (const threshold of HINT_THRESHOLDS) {
        if (pct >= threshold) level++;
    }
    return level;
}

function maskWord(word, hintLevel) {
    if (hintLevel === 0) return null;
    const subIdx = word.indexOf(currentLetters);
    if (hintLevel >= 3) {
        // Show first letter + substring position + hoverable definition
        const masked = Array.from(word).map((ch, i) => {
            if (i === 0) return ch.toUpperCase();
            if (i >= subIdx && i < subIdx + currentLetters.length) return ch.toUpperCase();
            return '_';
        }).join('');
        return `<span class="hint-item" data-key="${word}" data-word="${word}" data-hint="true">${masked} (${word.length})</span>`;
    }
    if (hintLevel >= 2) {
        // Show first letter + substring position
        const masked = Array.from(word).map((ch, i) => {
            if (i === 0) return ch.toUpperCase();
            if (i >= subIdx && i < subIdx + currentLetters.length) return ch.toUpperCase();
            return '_';
        }).join('');
        return `<span class="hint-item" data-key="${word}">${masked} (${word.length})</span>`;
    }
    // Level 1: first letter only
    return `<span class="hint-item" data-key="${word}">${word[0].toUpperCase()}${'_'.repeat(word.length - 1)} (${word.length})</span>`;
}

function updateWordList() {
    const wordListDiv = document.getElementById('wordList');
    const hintLevel = getCurrentHintLevel();
    const totalFound = foundRealWords.size + foundBonusWords.size;

    // FLIP: snapshot old positions
    const oldPositions = {};
    wordListDiv.querySelectorAll('[data-key]').forEach(el => {
        const rect = el.getBoundingClientRect();
        oldPositions[el.dataset.key] = { left: rect.left, top: rect.top };
    });

    // Determine absolute shortest/longest lengths
    const allSorted = [...allValidWords].sort((a, b) => a.length - b.length);
    const absShortestLen = allSorted.length > 0 ? allSorted[0].length : 0;
    const absLongestLen = allSorted.length > 0 ? allSorted[allSorted.length - 1].length : 0;

    // Sort real words based on current toggle
    const sortedRealWords = sortByLength
        ? [...realWords].sort((a, b) => a.length - b.length || a.localeCompare(b))
        : [...realWords].sort((a, b) => a.localeCompare(b));

    // Build merged real words list (found + hints)
    let realWordsHtml = '';
    for (const word of sortedRealWords) {
        if (foundRealWords.has(word)) {
            const isGold = word.length === absShortestLen || word.length === absLongestLen;
            const cls = isGold ? 'word-item word-gold' : 'word-item';
            realWordsHtml += `<span class="${cls}" data-key="${word}" data-word="${word}">${word.toUpperCase()} (${word.length})</span>`;
        } else {
            const hint = maskWord(word, hintLevel);
            if (hint) realWordsHtml += hint;
        }
    }

    // Bonus words section
    let bonusHtml = '';
    if (foundBonusWords.size > 0) {
        const sortedBonus = sortByLength
            ? [...foundBonusWords].sort((a, b) => a.length - b.length || a.localeCompare(b))
            : [...foundBonusWords].sort((a, b) => a.localeCompare(b));
        bonusHtml = '<div class="word-list-title" style="margin-top:15px;">BONUS WORDS</div><div class="word-list-items">' +
            sortedBonus.map(w => {
                return `<span class="bonus-item" data-key="${w}" data-word="${w}">${w.toUpperCase()} (${w.length})</span>`;
            }).join('') +
            '</div>';
    }

    // Debug section
    let debugHtml = '';
    if (debugVisible) {
        const debugSorted = [...allValidWords].sort((a, b) => (dictionary[b] || 0) - (dictionary[a] || 0));
        debugHtml = '<div class="word-list-title" style="margin-top:15px;">DEBUG — ALL VALID WORDS (' + debugSorted.length + ')</div><div class="word-list-items">' +
            debugSorted.map(w => {
                const freq = dictionary[w] || 0;
                return `<span class="debug-item">${w.toUpperCase()} (${w.length}) ⚡${freq}</span>`;
            }).join('') +
            '</div>';
    }

    const sortLabel = sortByLength ? 'Sort A→Z' : 'Sort by Length';
    wordListDiv.innerHTML = `<div class="word-list-header"><span class="word-list-title">WORDS</span><button class="sort-toggle-btn" id="sortToggle">${sortLabel}</button></div><div class="word-list-items">${realWordsHtml}</div>${bonusHtml}${debugHtml}`;
    document.getElementById('sortToggle').addEventListener('click', () => {
        sortByLength = !sortByLength;
        savePrefs();
        updateWordList();
    });
    attachTooltipListeners();

    // FLIP: animate items to new positions
    const flipEls = [];
    const newEls = [];
    wordListDiv.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        const newRect = el.getBoundingClientRect();
        if (oldPositions[key]) {
            const dx = oldPositions[key].left - newRect.left;
            const dy = oldPositions[key].top - newRect.top;
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                el.style.transform = `translate(${dx}px, ${dy}px)`;
                flipEls.push(el);
            }
        } else {
            el.style.opacity = '0';
            el.style.transform = 'scale(0.85)';
            newEls.push(el);
        }
    });
    requestAnimationFrame(() => {
        for (const el of flipEls) {
            el.style.transition = 'transform 0.3s ease';
            el.style.transform = '';
        }
        for (const el of newEls) {
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
        }
        const cleanup = () => {
            for (const el of [...flipEls, ...newEls]) {
                el.style.transition = '';
                el.style.transform = '';
                el.style.opacity = '';
            }
        };
        setTimeout(cleanup, 350);
    });

    // Pre-fetch definitions for unfound words when 1 away from level 3 threshold, or already at level 3
    const wordsNeededForLevel3 = Math.ceil(HINT_THRESHOLDS[2] * realWords.length) - foundRealWords.size;
    if (realWords.length > 0 && wordsNeededForLevel3 <= 1) {
        for (const word of realWords) {
            if (!foundRealWords.has(word) && definitionCache[word] === undefined) {
                fetchDefinition(word);
            }
        }
    }
}

function updateProgressBar() {
    const container = document.getElementById('progressContainer');
    const fill = document.getElementById('progressFill');
    const markers = document.getElementById('hintMarkers');
    const currentLabel = document.getElementById('progressCurrent');
    const totalLabel = document.getElementById('progressTotal');

    if (realWords.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    const pct = (foundRealWords.size / realWords.length) * 100;
    fill.style.width = pct + '%';

    const pct100 = (foundRealWords.size / realWords.length);
    const thresholdIcons = [
        '★',
        '<span class="stars-2">★★</span>',
        '<span class="stars-3"><span class="stars-3-top">★</span><span class="stars-3-bottom">★★</span></span>'
    ];
    markers.innerHTML = HINT_THRESHOLDS.map((t, i) => {
        const reached = pct100 >= t;
        const markerLine = reached ? '' : `<div class="hint-marker" style="left:${t * 100}%"></div>`;
        return markerLine +
            `<div class="threshold-icon${reached ? ' reached' : ''}" style="left:${t * 100}%">${thresholdIcons[i]}</div>`;
    }).join('') +
        `<div class="threshold-icon gold${pct100 >= 1 ? ' reached' : ''}" style="left:100%">★</div>`;

    currentLabel.textContent = foundRealWords.size;
    totalLabel.textContent = realWords.length;
    totalLabel.style.visibility = pct > 95 ? 'hidden' : 'visible';

    // Persist progress for calendar display
    const dateKey = `${puzzleDate.getFullYear()}-${String(puzzleDate.getMonth() + 1).padStart(2, '0')}-${String(puzzleDate.getDate()).padStart(2, '0')}`;
    const allProgress = JSON.parse(localStorage.getItem('puzzleProgress') || '{}');
    allProgress[dateKey] = [foundRealWords.size, realWords.length];
    localStorage.setItem('puzzleProgress', JSON.stringify(allProgress));
}

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    debugBtn.style.display = '';
}
debugBtn.addEventListener('click', () => {
    debugVisible = !debugVisible;
    debugBtn.textContent = debugVisible ? 'Hide debug' : 'Debug';
    updateWordList();
});

// Calendar picker
(function initCalendar() {
    const dateDisplay = document.getElementById('puzzleDate');
    const overlay = document.getElementById('calendarOverlay');
    const monthYearLabel = document.getElementById('calendarMonthYear');
    const daysContainer = document.getElementById('calendarDays');
    const prevBtn = document.getElementById('calendarPrev');
    const nextBtn = document.getElementById('calendarNext');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let viewMonth = puzzleDate.getMonth();
    let viewYear = puzzleDate.getFullYear();

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];

    dateDisplay.textContent = `${MONTHS[puzzleDate.getMonth()]} ${puzzleDate.getDate()}, ${puzzleDate.getFullYear()}`;

    dateDisplay.addEventListener('click', () => {
        renderCalendar();
        overlay.classList.toggle('visible');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('visible');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.classList.remove('visible');
    });

    function renderCalendar() {
        monthYearLabel.textContent = `${MONTHS[viewMonth]} ${viewYear}`;
        daysContainer.innerHTML = '';

        const allProgress = JSON.parse(localStorage.getItem('puzzleProgress') || '{}');
        const firstDay = new Date(viewYear, viewMonth, 1).getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('span');
            empty.className = 'calendar-day empty';
            daysContainer.appendChild(empty);
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const dayDate = new Date(viewYear, viewMonth, d);
            dayDate.setHours(0, 0, 0, 0);
            const btn = document.createElement('button');
            btn.className = 'calendar-day';
            btn.textContent = d;

            const isDisabled = dayDate < GAME_START_DATE || dayDate > today;
            const isToday = dayDate.getTime() === today.getTime();
            const isSelected = dayDate.getTime() === puzzleDate.getTime();

            if (isDisabled) {
                btn.classList.add('disabled');
                btn.disabled = true;
            }
            if (isToday) btn.classList.add('today');
            if (isSelected) btn.classList.add('selected');

            // Progress ring
            const dateKey = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const progress = allProgress[dateKey];
            if (progress && progress[0] > 0) {
                const pct = Math.round((progress[0] / progress[1]) * 100);
                btn.style.setProperty('--pct', pct + '%');
                btn.classList.add('has-progress');
                if (pct >= 100) btn.classList.add('complete');
            }

            if (!isDisabled) {
                btn.addEventListener('click', () => {
                    const yyyy = dayDate.getFullYear();
                    const mm = String(dayDate.getMonth() + 1).padStart(2, '0');
                    const dd = String(dayDate.getDate()).padStart(2, '0');
                    window.location.search = `?date=${yyyy}-${mm}-${dd}`;
                });
            }

            daysContainer.appendChild(btn);
        }
    }

    prevBtn.addEventListener('click', () => {
        viewMonth--;
        if (viewMonth < 0) { viewMonth = 11; viewYear--; }
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        viewMonth++;
        if (viewMonth > 11) { viewMonth = 0; viewYear++; }
        renderCalendar();
    });

    renderCalendar();
})();