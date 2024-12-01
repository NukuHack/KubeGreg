
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
        ["test","Test",10,1,1,"metal","gfs:block/casings/test_casing"],
        ["green","Agriculture",4,1,10,"metal",'gfs:block/casings/green'],
        ["blue","Deep",4,1,1,"metal",'gfs:block/casings/blue'],
        ["yellow","Gilded",5,1,15,"metal",'gfs:block/casings/yellow'],
        ["netherite","Netherite",5,1,0,"metal","gfs:block/casings/peek"],
        ["peek","PEEK",7,2,0,"metal","gfs:block/casings/netherite"],
        ["omnic","Omnic Matrix",8,1,0,"metal","gfs:block/casings/omnic"],
        ["high_temperature","High Temperature Fusion (MKIV)",10,2,0,"metal","gfs:block/casings/high_temperature"],
        ['steel_304','Austenitic Stainless Steel 304 Nuclear',6,2,0,"metal",'gfs:block/casings/hard_steel'],
        ['inconel_625','Inconel 625 Thermal Fluctuation Resistant',5,3,0,"metal",'gfs:block/casings/inconel'],
        ["void","Void",6,3,0,"metal",'gfs:block/casings/void'],
        ["cryococcus","Cryococcus",5,3,0,"metal",'gfs:block/casings/cryococcus'],
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
        ['mithril_coil', 12600, 16, 16, 8, 'mithril', 'gfs:block/coils/mithril/mithril'],
        ['omnic_coil', 15000, 24, 16, 9, 'omnium', 'gfs:block/coils/omnic/omnic'],
        ['chadium_coil', 14400, 32, 32, 9, 'chadium', 'gtceu:block/coils/chad/chad'],
        ['awakened_draconium_coil', 16200, 32, 32, 9, 'awakened_draconium', 'gtceu:block/coils/awakened_draconium/awakened_draconium'],
        ['stellar_coil', 18000, 32, 32, 9, 'stellar_matter', 'gtceu:block/coils/stellar/stellar'],
        ['infinity_coil', 19800, 32, 32, 9, 'infinity', 'gtceu:block/coils/inf/inf']
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