
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
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    */

    const casingS = [
		// name , Displayname, hard, resistance, light, sound, texture
        ["test_casing","Test Casing",10,1,1,"metal","gfs:block/casings/test_casing"],
        ["green_casing","Light Green Casing",4,1,10,"metal",'gfs:block/casings/green'],
        ["blue_casing","Deep Blue Casing",4,1,1,"metal",'gfs:block/casings/blue'],
        ["yellow_casing","Golden Yellow Casing",5,1,15,"metal",'gfs:block/casings/yellow'],
        ["netherite_casing","Netherite Casing",5,1,0,"metal","gfs:block/casings/peek"],
        ["peek_casing","PEEK Casing",7,2,0,"metal","gfs:block/casings/netherite"],
        ["omnic_casing","Omnic Matrix Casing",8,1,0,"metal","gfs:block/casings/omnic"],
        ["fusion_casing_mk4","High Temperature Fusion Casing (MKIV)",10,2,0,"metal","gfs:block/casings/high_temperature"],
        ['steel_304_casing','Austenitic Stainless Steel 304 Nuclear Casing',6,2,0,"metal",'gfs:block/casings/hard_steel'],
        ['inconel_625_casing','Inconel 625 Thermal Fluctuation Resistant Casing',5,3,0,"metal",'gfs:block/casings/inconel'],
        ["void_casing","Void Casing",6,3,0,"metal",'gfs:block/casings/void'],
        ["cryococcus_casing","Cryococcus Casing",5,3,0,"metal",'gfs:block/casings/cryococcus'],
    ];
    casingS.forEach(([name,Dname,hard,res,light,sound,texture])=>{
        event.create(`gfs:${name}`)
            .displayName(`${Dname}`)
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
		.model('gtceu:block/misc/treated_wood_log');

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
		.model('gtceu:block/misc/stripped_treated_wood_log');

    event.create('gfs:stripped_treated_wood')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .tagBoth('forge:stripped_logs')
        .textureAll('gtceu:block/misc/stripped_treated_wood');

    event.create('gfs:dark_fusion_coil')
        .hardness(2)
        .hardness(7)
        .resistance(3)
        .soundType("metal")
        .requiresTool(true)
        .tagBlock('minecraft:mineable/axe')
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('gfs:block/dark_fusion_coil');
		

    const coils = [
        ['mithril', 12600, 16, 16, 8, 'gfs:block/coils/mithril/mithril'],
        ['naquadria', 12500, 16,16,8, 'gtceu:block/coils/naq/naq'],
        ['omnic', 15000, 24, 16, 9,'gfs:block/coils/omnic/omnic'],
        ['chadium', 14400, 32, 32, 9, 'gtceu:block/coils/chad/chad'],
        ['awakened_draconium', 16200, 32, 32, 9, 'gtceu:block/coils/awakened_draconium/awakened_draconium'],
        ['stellar', 18000, 32, 32, 9, 'gtceu:block/coils/star/star'],
        ['infinity', 19800, 32, 32, 9, 'gtceu:block/coils/inf/inf'],
    ];

    coils.forEach(([name, temperature, level, energyDiscount, tier,texture]) => {
        event.create(`gfs:${name}_coil`, 'gtceu:coil')
            .temperature(temperature)
            .level(level)
            .energyDiscount(energyDiscount)
            .tier(tier)
            .coilMaterial(() => GTMaterials.get(name))
            .hardness(5)
            .requiresTool(true)
            .soundType(SoundType.NETHERITE_BLOCK)
            .tagBlock('forge:mineable/wrench')
            .textureAll(texture)
            .soundType('metal')
            .tagBlock("mineable/pickaxe");
    });



});