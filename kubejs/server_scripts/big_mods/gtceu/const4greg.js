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
    "uv": ["soldering_alloy", "polybenzimidazole", "styrene_butadiene_rubber", 'lubricant', 'naquada', 'tin'],
    "uhv": ["soldering_alloy", "polybenzimidazole", "styrene_butadiene_rubber", 'lubricant', 'naquada', 'tin'],
    "uev": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber", 'lubricant', 'crystal_matrix', 'naquadria'],
    "uiv": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber", 'lubricant', 'crystal_matrix', 'naquadria'],
    "uxv": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber", 'lubricant', 'crystal_matrix', 'naquadria'],
    "opv": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber", 'lubricant', 'crystal_matrix', 'naquadria'],
    "max": ["soldering_alloy", "polyether_ether_ketone", "styrene_butadiene_rubber", 'lubricant', 'crystal_matrix', 'naquadria'],
};

const machinePartHelp = [
    "electric_motor",
    "electric_piston",
    "robot_arm",
    "sensor",
    "emitter",
    "field_generator",
    "conveyor_module",
    "electric_pump"
];

const circuitHelp = [
    [
        // name , out multi, dur
        'circuit_board',
        [4, 30],
    ],
    [
        'processing_unit',
        [1, 5],
    ],
    [
        'processor',
        [1, 7],
    ],
    [
        'processor_assembly',
        [1, 10],
    ],
    [
        'processor_computer',
        [1, 15],
    ],
    [
        'processor_mainframe',
        [1, 30],
    ],
];

const volt_to_research = {
    "luv": [16, 18200 * 0.4 * 20, voltage_to_eu[voltages[5]]],
    "zpm": [32, 18200 * 0.6 * 20, voltage_to_eu[voltages[6]]],
    "uv": [32 * 2, 18200 * 0.8 * 20, voltage_to_eu[voltages[7]]],
    "uhv": [32 * 3, 18200 * 1 * 20, voltage_to_eu[voltages[8]]],
    "uev": [32 * 4, 18200 * 1.2 * 20, voltage_to_eu[voltages[9]]],
    "uiv": [32 * 5, 18200 * 1.5 * 20, voltage_to_eu[voltages[10]]],
    "uxv": [32 * 6, 18200 * 1.6 * 20, voltage_to_eu[voltages[11]]],
    "opv": [32 * 8, 18200 * 2 * 20, voltage_to_eu[voltages[12]]],
    "max": [32 * 10, 18200 * 3 * 20, voltage_to_eu[voltages[13]]],
};


//TODO : make this better
// this is only needed inside the circuits
const volt_to_small = {
    "uhv": [[
        // main stuff, circuit and stuff, liquid or soc
        1, 1, 1],
        [
            "advanced_smd",
            "gtceu:ram_chip",
            "gtceu:highly_advanced_soc",
            "gtceu:uhpic_chip",
        ],
    ],
    "uev": [[
        1.2, 1, 1.5],
        [
            "gfs:complex_smd",
            "gtceu:ram_chip",
            "gtceu:highly_advanced_soc",
            "gtceu:uhpic_chip",
        ],
    ],
    "uiv": [[
        1.4, 1, 2],
        [
            "gfs:complex_smd",
            "gtceu:ram_chip",
            "gtceu:highly_advanced_soc",
            "gtceu:uhpic_chip",
        ],
    ],
    "uxv": [[
        1.6, 1, 1],
        [
            "gfs:hyperflux_smd",
            "gfs:hyperdynamic_ram_chip",
            "gfs:quantum_soc_chip",
			// needs a better pic type (cus num reset)
            "gtceu:uhpic_chip",
        ],
    ],
    "opv": [[
        1.8, 1, 2],
        [
            "gfs:hyperflux_smd",
            "gfs:hyperdynamic_ram_chip",
            "gfs:quantum_soc_chip",
            "gtceu:uhpic_chip",
        ],
    ],
    "max": [[
        2, 1, 3],
        [
            "gfs:hyperflux_smd",
            "gfs:hyperdynamic_ram_chip",
            "gfs:quantum_soc_chip",
            "gtceu:uhpic_chip",
        ],
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




