
priority: 80
StartupEvents.registry("block", event => {

    event.create('test_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            {'all': new ResourceLocation('gtceu', 'block/casings/test_casing')});

    event.create('gren_casing', 'gtceu:renderer')
        .displayName('Gren Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            {'all': new ResourceLocation('gtceu', 'block/casings/gren_casing')});

    event.create('treated_wood_log')
        .woodSoundType()
        .hardness(2)
        .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .model('gtceu:block/misc/treated_log')
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
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
    };

    event.create('treated_wood')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .textureAll('gtceu:block/misc/treated_wood');

    event.create('stripped_treated_wood_log')
        .woodSoundType()
        .hardness(2)
        .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .model('gtceu:block/misc/stripped_treated_log')
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .tagBoth('forge:stripped_logs')
        .blockstateJson = {
        "variants": {
            "axis=x": {
                "model": "gtceu:block/misc/stripped_treated_log",
                "x": 90,
                "y": 90
            },
            "axis=y": {
                "model": "gtceu:block/misc/stripped_treated_log"
            },
            "axis=z": {
                "model": "gtceu:block/misc/stripped_treated_log",
                "x": 90
            }
        }
    };

    event.create('stripped_treated_wood')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .tagBoth('forge:stripped_logs')
        .textureAll('gtceu:block/misc/stripped_treated_wood');



    const coils = [
        { name: 'mithril_coil_block', temperature: 12600, level: 16, energyDiscount: 16, tier: 8, material: 'mithril', texture: 'gtceu:block/coils/machine_coil_mithril' },
        { name: 'chadium_coil_block', temperature: 14400, level: 32, energyDiscount: 32, tier: 9, material: 'chadium', texture: 'gtceu:block/coils/machine_coil_chadium' },
        { name: 'awakened_draconium_coil_block', temperature: 16200, level: 32, energyDiscount: 32, tier: 9, material: 'awakened_draconium', texture: 'gtceu:block/coils/machine_coil_awakened_draconium' },
        { name: 'stellar_matter_coil_block', temperature: 18000, level: 32, energyDiscount: 32, tier: 9, material: 'stellar_matter', texture: 'gtceu:block/coils/machine_coil_stellar_matter' },
        { name: 'infinity_coil_block', temperature: 19800, level: 32, energyDiscount: 32, tier: 9, material: 'infinity', texture: 'gtceu:block/coils/machine_coil_infinity' },
        { name: 'omnic_matrix_coil_block', temperature: 15000, level: 24, energyDiscount: 16, tier: 9, material: 'omnium', texture: 'gfs:block/coils/machine_coil_omnic_matrix' },
        //{ name: 'zalloy_coil_block', temperature: 13499, level: 24, energyDiscount: 16, tier: 10, material: 'zalloy', texture: 'gfs:block/coils/machine_coil_zalloy' }
    ];

    coils.forEach(({ name, temperature, level, energyDiscount, tier, material, texture }) => {
        event.create(name, 'gtceu:coil')
            .temperature(temperature)
            .level(level)
            .energyDiscount(energyDiscount)
            .tier(tier)
            .coilMaterial(() => GTMaterials.get(material))
            .hardness(5)
            .requiresTool(true)
            .material('metal')
            .soundType(SoundType.NETHERITE_BLOCK)
            .tagBlock('forge:mineable/wrench')
            .texture(texture)
            .soundType('metal').tagBlock("mineable/pickaxe");
    });

    

});