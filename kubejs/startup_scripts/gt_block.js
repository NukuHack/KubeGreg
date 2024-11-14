
priority: 70
StartupEvents.registry("block", event => {

    /*
    .blockstateJson = {
        "variants": {
            "axis=x": {
                "model": "gtceu:block/misc/treated_log",
                "x": 90,
                "y": 90
            },
            "axis=y": {
                "model": "gtceu:block/misc/treated_log"
            },
            "axis=z": {
                "model": "gtceu:block/misc/treated_log",
                "x": 90
            }
        }
    }
    .model('gtceu:block/casings/test_casing')
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('gtceu:block/misc/treated_log')
    */
    
    event.create('gfs:test_casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('gtceu:block/casings/test_casing');


    event.create('gfs:peek_casing')
        .displayName('PEEK Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('gfs:block/casings/machine_casing_peek');

    event.create('gfs:gren_casing')
        .displayName('Gren Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/axe')
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('gtceu:block/casings/gren_casing');

    event.create('gfs:treated_wood_log')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .textureAll('gtceu:block/misc/treated_wood_top');

    event.create('gfs:treated_wood')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .textureAll('gtceu:block/misc/treated_wood');

    event.create('gfs:stripped_treated_wood_log')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .tagBoth('forge:stripped_logs')
        .textureAll('gtceu:block/misc/stripped_treated_wood_top');

    event.create('gfs:stripped_treated_wood')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .tagBoth('forge:stripped_logs')
        .textureAll('gtceu:block/misc/stripped_treated_wood');


const coils = [
    ['mithril_coil_block', 12600, 16, 16, 8, 'mithril', 'gtceu:block/coils/machine_coil_mithril'],
    ['chadium_coil_block', 14400, 32, 32, 9, 'chadium', 'gtceu:block/coils/machine_coil_chadium'],
    // ['zalloy_coil_block', 13499, 24, 16, 10, 'zalloy', 'gfs:block/coils/machine_coil_zalloy'],
    ['awakened_draconium_coil_block', 16200, 32, 32, 9, 'awakened_draconium', 'gtceu:block/coils/machine_coil_awakened_draconium'],
    ['stellar_matter_coil_block', 18000, 32, 32, 9, 'stellar_matter', 'gtceu:block/coils/machine_coil_stellar_matter'],
    ['infinity_coil_block', 19800, 32, 32, 9, 'infinity', 'gtceu:block/coils/machine_coil_infinity'],
    ['omnic_matrix_coil_block', 15000, 24, 16, 9, 'omnium', 'gfs:block/coils/machine_coil_omnic_matrix']
];

coils.forEach(([name, temperature, level, energyDiscount, tier, material, texture]) => {
    event.create(`gfs:${name}`, 'gtceu:coil')
        .temperature(temperature)
        .level(level)
        .energyDiscount(energyDiscount)
        .tier(tier)
        .coilMaterial(() => GTMaterials.get(material))
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')
        .textureAll(texture)
        .soundType('metal')
        .tagBlock("mineable/pickaxe");
});

    

});