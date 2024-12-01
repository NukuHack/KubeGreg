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
    //uhv                               // neutronium
    "uev":"activated_netherite",        // omnium
    "uiv":"holmium",                    // infinity
    "uxv":"monium",    // omnium ?
    //opv
    "max":"infinity",
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



const fluid_to_type = {
    "no": "air",
    "nit": "gtceu:nitrogen",
    "arg": "gtceu:argon",
    "neo": "gtceu:neon",
    "hel": "gtceu:helium",
};

const fluid_to_amount = {
    "no": 0,
    "nit": 1000,
    "arg": 50,
    "neo": 25,
    "hel": 100,
};



