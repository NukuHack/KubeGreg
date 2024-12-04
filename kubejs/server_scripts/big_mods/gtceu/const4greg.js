// const for greg
priority: 100


const voltages = [
    //0     1     2     3     4     5      6      7     8      9      10    11     12     13
    "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"
];

const voltage_to_eu = {
    "lv": 30,//lv
    "mv": 120,//mv
    "hv": 480,//hv
    "ev": 1920,//ev
    "iv": 7680,//iv
    "luv": 30720,//luv
    "zpm": 122880,//zpm
    "uv": 491520,//uv
    "uhv": 1966080,//uhv
    "uev": 7864320,//uev
    "uiv": 31457280,//uiv
    "uxv": 125829120,//uxv
    "opv": 503316480,//opv
    "max": 2013265920//max
};

// access just like you would volt_to_cable["lv"] = "tin"
const volt_to_cable = {
    "lv": "tin",
    "mv": "copper",
    "hv": "gold",
    "ev": "aluminium",
    "iv": "platinum",
    "luv": "niobium_titanium",
    "zpm": "vanadium_gallium",
    "uv": "yttrium_barium_cuprate",
    "uhv": "europium",
    "uev": "activated_netherite",
    "uiv": "weapon_grade_naquadaria",
    "uxv": "omnium",
    "opv": "monium",
    "max": "infinity",
};

const volt_to_material = {
    // mat 1 wire 2 (wire 1 is in "volt_to_cable")
    "lv": ["steel", "copper"],
    "mv": ["aluminium", "cupronickel"],
    "hv": ["stainless_steel", "electrum"],
    "ev": ["titanium", "kanthal"],
    "iv": ["tngsten_steel", "rtm_alloy"],
    "luv": ["rhodium_plated_palladium", "hssg"],
    // mat 1 mat 2 wire 2 (wire 1 is in "volt_to_cable")
    "zpm": ["naquadah_alloy", "osmiridium", "naquadah"],// ++ best (og)plastic, magnetic samarium, europium, hsss, palladium
    "uv": ["darmstadtium", "tritanium", "naquadah_alloy"],
    "uhv": ["neutronium", "cryolobus", "ruthenium_trinium_americium_neutronate"],
    "uev": ["pure_netherite", "holmium", "cryococcus"],
    "uiv": ["infinity", "crystal_matrix", "holmium"],
    "uxv": ["monium", "omnium", "crystal_matrix"],
    "opv": ["stellar", "monium", "draconium"],
    "max": ["void", "infinity", "awakened_draconium"],
};

const volt_to_extra = {
    "uhv": ["soldering_alloy", "polybenzimidazole", "styrene_butadiene_rubber"],
    "uev": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber"],
    "uiv": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber"],
    "uxv": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber"],
    "opv": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber"],
    "max": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber"],
};

const volt_to_research = {
    "luv": [16, 18200 * 0.4 * 20, voltage_to_eu[voltages[5]]],
    "zpm": [32, 18200 * 0.6 * 20, voltage_to_eu[voltages[6]]],
    "uv": [32 * 2, 18200 * 0.8 * 20, voltage_to_eu[voltages[7]]],
    "uhv": [32 * 3, 18200 * 1 * 20, voltage_to_eu[voltages[8]]],
    "uev": [32 * 4, 18200 * 1.2 * 20, voltage_to_eu[voltages[9]]],
    "uiv": [32 * 5, 18200 * 1.44 * 20, voltage_to_eu[voltages[10]]],
};


const volt_to_assembly = {
    "uhv": [`gtceu:naquadria`, 'gtceu:lubricant'],
    "uev": [`gtceu:crystal_matrix`, `gtceu:naquadria`, 'gtceu:lubricant'],
    "uiv": [`gtceu:crystal_matrix`, `gtceu:naquadria`, 'gtceu:lubricant'],
    "uxv": [`gtceu:crystal_matrix`, `gtceu:naquadria`, 'gtceu:lubricant'],
    "opv": [`gtceu:crystal_matrix`, `gtceu:naquadria`, 'gtceu:lubricant'],
    "max": [`gtceu:crystal_matrix`, `gtceu:naquadria`, 'gtceu:lubricant'],
};


//TODO : make this better
// this is only needed inside the circuits
const MatTypesHelp = {
    "uhv": [[
        1, 1],
        ["gfs:xyz_smd",
        "gfs:xyz_ram",
        "gfs:xyz_soc",
        "gfs:xyz_chip",
        "gfs:xyz_uhcp_chip",],
    ],
    "uev": [[
        2, 2],
        ["gfs:xyz_smd",
        "gfs:xyz_ram",
        "gfs:xyz_soc",
        "gfs:xyz_chip",
        "gfs:xyz_uhcp_chip",],
    ],
    "uiv": [[
        1, 1],
        ["gfs:xy_smd",
        "gfs:xy_ram",
        "gfs:xy_soc",
        "gfs:xy_chip",
        "gfs:xy_uhcp_chip",],
    ],
    "uxv": [[
        2, 2],
        ["gfs:xy_smd",
        "gfs:xy_ram",
        "gfs:xy_soc",
        "gfs:xy_chip",
        "gfs:xy_uhcp_chip",],
    ],
    "opv": [[
        2, 2],
        ["gfs:xy_smd",
        "gfs:xy_ram",
        "gfs:xy_soc",
        "gfs:xy_chip",
        "gfs:xy_uhcp_chip",],
    ],
    "max": [[
        2, 2],
        ["gfs:xy_smd",
        "gfs:xy_ram",
        "gfs:xy_soc",
        "gfs:xy_chip",
        "gfs:xy_uhcp_chip",],
    ],
};


const coilS = [
    "cupronickel",
    "kanthal",
    "nichrome",
    "rtm_alloy",
    "hssg",
    "naquadah",
    "trinium",
    "tritanium",
];



const plantSeeds = [
    ['wheat_seeds', 'wheat'],
    ['', 'carrot'],
    ['', 'potato'],
    ['pumpkin_seeds', 'pumpkin'],
    ['melon_seeds', 'melon'],
    ['', 'cocoa_beans'],
    ['beetroot_seeds', 'beetroot'],
    ['', 'bamboo'],
    ['', 'sweet_berries'],
    ['', 'kelp'],
    ['', 'glow_berries'],
    ['', 'sugar_cane'],
    ['torchflower_seeds', 'torchflower'],
    ['pitcher_pod', 'pitcher_plant']
];




