
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

    const casingS = [
		// name , Displayname, hard, resistance, light, sound, texture
        ["test","Test",10,1,1,"metal","gfs:block/casings/test_casing"],
        ["green","Agri",4,1,10,"metal",'gfs:block/casings/green_casing'],
        ["yellow","Yellow",5,1,15,"metal",'gfs:block/casings/yellow_casing'],
        ["netherite","Netherite",5,1,0,"metal","gfs:block/casings/peek"],
        ["peek","PEEK",7,2,0,"metal","gfs:block/casings/netherite"],
        ["omnic","Omnic Matrix",8,1,0,"metal","gfs:block/casings/omnic"],
        ["high_temperature","High Temperature Fusion Casing (MKII)",10,2,0,"metal","gfs:block/casings/high_temperature"],
        ['steel_304','Austenitic Stainless Steel 304 Nuclear',6,2,0,"metal",'gfs:block/casings/hard_steel'],
        ['inconel_625','Inconel 625 Thermal Fluctuation Resistant',5,3,0,"metal",'gfs:block/casings/inconel'],
    ];
    casingS.forEach(([name,Dname,hard,res,light,sound,texture])=>{
        event.create(`gfs:${name}_casing`)
            .displayName(`${Dname} Casing`)
            .hardness(hard)
            .resistance(res)
            .lightLevel(light)
            .soundType(sound)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/axe')
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("cucumber:mineable/paxel")
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(texture);
    });


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
        ['mithril_coil_block', 12600, 16, 16, 8, 'mithril', 'gfs:block/coils/mithril/mithril'],
        ['omnic_coil_block', 15000, 24, 16, 9, 'omnium', 'gfs:block/coils/omnic/omnic'],
        ['chadium_coil_block', 14400, 32, 32, 9, 'chadium', 'gtceu:block/coils/chad/chad'],
        ['awakened_draconium_coil_block', 16200, 32, 32, 9, 'awakened_draconium', 'gtceu:block/coils/awakened_draconium/awakened_draconium'],
        ['stellar_coil_block', 18000, 32, 32, 9, 'stellar_matter', 'gtceu:block/coils/stellar/stellar'],
        ['infinity_coil_block', 19800, 32, 32, 9, 'infinity', 'gtceu:block/coils/inf/inf']
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