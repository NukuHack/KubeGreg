
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
        ["test","Test",10,1,1,"metal","gtceu:block/casings/test_casing"],
        ["gren","Agri",4,1,10,"metal",'gtceu:block/casings/gren_casing'],
        ["netherite","Netherite",5,1,0,"metal","gfs:block/casings/machine_casing_peek"],
        ["peek","PEEK",7,2,0,"metal","gfs:block/casings/machine_casing_netherite"],
        ["omnic_matrix","Omnic Matrix",8,1,0,"metal","gfs:block/casings/machine_casing_omnic_matrix"],
        ['austenitic_stainless_steel_304','Austenitic Stainless Steel 304 Nuclear',6,2,0,"metal",'gfs:block/casings/machine_casing_a_s_steel'],
        ['inconel_625','Inconel 625 Thermal Fluctuation Resistant',5,3,0,"metal",'gfs:block/casings/machine_casing_inconel'],
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
        ['mithril_coil_block', 12600, 16, 16, 8, 'mithril', 'gtceu:block/coils/machine_coil_mithril'],
        ['omnic_matrix_coil_block', 15000, 24, 16, 9, 'omnium', 'gfs:block/coils/machine_coil_omnic_matrix'],
        //['chadium_coil_block', 14400, 32, 32, 9, 'chadium', 'gtceu:block/coils/machine_coil_chadium'],
        //['zalloy_coil_block', 13499, 24, 16, 10, 'zalloy', 'gfs:block/coils/machine_coil_zalloy'],
        //['awakened_draconium_coil_block', 16200, 32, 32, 9, 'awakened_draconium', 'gtceu:block/coils/machine_coil_awakened_draconium'],
        ['stellar_matter_coil_block', 18000, 32, 32, 9, 'stellar_matter', 'gtceu:block/coils/machine_coil_stellar_matter'],
        ['infinity_coil_block', 19800, 32, 32, 9, 'infinity', 'gtceu:block/coils/machine_coil_infinity']
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