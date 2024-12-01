// const for greg
priority: 100


const voltages = [
    //0     1     2     3     4     5      6      7     8      9      10    11     12     13
    "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"
];


// access just like you would voltage_to_cable["lv"] = "tin"
const voltage_to_cable = {
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

const voltage_lesser = ((x) => {
    return voltages[voltages.indexOf(x) + 1];
});


const volt_to_material = {
    // mat 1 wire 2 (wire 1 is in "voltage_to_cable")
    "lv": ["steel", "copper"],
    "mv": ["aluminium", "cupronickel"],
    "hv": ["stainless_steel", "electrum"],
    "ev": ["titanium", "kanthal"],
    "iv": ["tngsten_steel", "rtm_alloy"],
    "luv": ["rhodium_plated_palladium", "hssg"],
    // mat 1 mat 2 wire 2 (wire 1 is in "voltage_to_cable")
    "zpm": ["naquadah_alloy", "osmiridium", "naquadah"],// ++ best (og)plastic, magnetic samarium, europium, hsss, palladium
    "uv": ["darmstadtium", "tritanium", "naquadah_alloy"],
    "uhv": ["neutronium", "cryobous", "trinium"],
    "uev": ["pure_netherite", "crystal_matrix", "holmium"],
    "uiv": ["infinity", "holmium", "crystal_matrix"],
    "uxv": ["graphenium", "crystal_matrix", "ruthenium_trinium_americium_neutronate"],
    "opv": ["stellar", "monium", "super_sculk"],
    "max": ["void", "infinity", "awakened_draconium"],
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


const tier_to_research = {
    "uv": [32 * 2, 18200 * 1.8 * 20, voltage_to_eu[voltages[7]]],
    "uhv": [32 * 3, 18200 * 1 * 20, voltage_to_eu[voltages[8]]],
    "uev": [32 * 4, 18200 * 1.2 * 20, voltage_to_eu[voltages[9]]],
    "uiv": [32 * 5, 18200 * 1.44 * 20, voltage_to_eu[voltages[10]]],
};

