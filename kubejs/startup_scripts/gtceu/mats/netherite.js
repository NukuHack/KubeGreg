priority: 10


GTCEuStartupEvents.registry("gtceu:material", event => {


// might replace this with the stuff from "netherite line"
    event.create("strong_mix")
        .components("2x platinum", "2x palladium", "1x palladium_raw", "1x diamond", "4x black_steel", "4x blue_steel")
        .color(0x291403)
        .blastTemp(3000, 'mid', 1800, 20 * 40)
        .iconSet(METALLIC)
        .flags(plates, no_decomp)
        .ingot();


// Netherite Line
    event.create('debris')
        .dust()
        .element(GTElements.get('debris'))
        .color(0x804000);

    event.create('purified_debris')
        .dust()
        .components('debris')
        .color(0xcc0000);

    event.create('netherite')
        .dust()
        .components('8x debris', '4x gold', "strong_mix")
        .color(0x1a0d00)
        .iconSet(DULL)
        .flags(no_decomp);

    event.create('chlorine_trifluoride')
        .fluid()
        .components('1x chlorine', '3x fluorine')
        .color(0xb3ff99);

    event.create('tetrachloroethylene')
        .fluid()
        .components('2x carbon', '4x chlorine')
        .color(0xd966ff);

// Netherite Derivatives/Alloys
    event.create('pure_netherite')
        .ingot()
        .element(GTElements.get('pure_netherite'))
        .color(0x1a0d00)
        .iconSet(DULL)
        .fluidPipeProperties(120000, 96000, true, true, true, true)
        .blastTemp(7000, 'high', VA('ev'), 1200)
        .flags(foil, frame, gear, long_rod, plates,
            rod, rotor, small_gear, ring);

    event.create('activated_netherite')
        .ingot()
        .element(GTElements.get("activated_netherite"))
        .color(0x4C484C)
        .iconSet(DULL)
        .cableProperties(8388608, 8, 0, true)
        .fluidPipeProperties(140000, 100000, true, true, true, true)
        .flags(plates, rod, frame, dense_plate, fine_wire, rotor, spring,
            gear, small_gear, foil);

    event.create('naquadic_netherite')
        .gem(0)
        //.ingot()
        .components('3x enriched_naquadah', '5x activated_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen')
        .color(0xffd966)
        .iconSet(DIAMOND)
        //.blastTemp(10500, 'high', VA('uv'), 6000)
        .flags(plates, lens, no_block_craft);

    event.create('weapon_grade_naquadaria')
        .ingot()
        .fluid()
        .components('7x naquadria', '2x naquadic_netherite', '5x neutronium', '16x fluorine')
        .color(0xccff33)
        .iconSet(DULL)
        .cableProperties(8388608 * 4, 8, 0, true)
        .blastTemp(10000, 'high', VA('uv'), 6000)
        .flags(plates, rod, frame, dense_plate, fine_wire, rotor, spring,
            gear, small_gear, foil, long_rod, ring);

    event.create('screret_runic_laser_source_base')
        .gem(0)
        .components('4x weapon_grade_naquadaria', '10x tritanium', '2x trinium')
        .flags(no_decomp, no_block_craft, plates, lens)
        .color(0x00ff00)
        .iconSet(OPAL);


})



