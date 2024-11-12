/*
* greg_sky.js - Register Items.
*/

Platform.mods.kubejs.name = "Gfs";

priority: 100
StartupEvents.registry("block", event => {
    /*
        event.create('gfs:wood_casing')
            .hardness(5)
            .resistance(1)
        .soundType("wood")
            .requiresTool(true)
            .tagBlock("mineable/axe")
            .tagBlock('minecraft:needs_stone_tool')
            .textureAll("gfs:block/casings/casing-wood");
    */

    event
        .create("gfs:dust")
        .soundType("sand")
        .hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/shovel");

    event
        .create("gfs:magical_farmland")
        .soundType("sand")
        .hardness(0.6)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/shovel");
	
    event.create('test_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('gtceu', 'block/casings/test_casing') });

    event.create('gren_casing', 'gtceu:renderer')
        .displayName('Agricultral Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('gtceu', 'block/casings/agri_casing') });

    event.create('solar_casing')//, 'gtceu:renderer'
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .model('gtceu:block/misc/solar_casing')


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
	
    event
        .create("gfs:coke_oven_side")
        .soundType("stone")
        .hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/pickaxe")
        .textureAll("gfs:block/co/co_s");
    event
        .create("gfs:coke_oven_controller")
        .soundType("stone")
        .hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/pickaxe")
        .textureAll("gfs:block/co/co_c");
    event
        .create("gfs:compressed_coke_oven")
        .soundType("stone")
        .hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/pickaxe")
        .textureAll("gfs:block/co/c_co");

    event
        .create("gfs:primitive_blast_furnace_layer")
        .soundType("stone")
        .hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/pickaxe")
        .textureAll("gfs:block/pbf/pbf_l");
    event
        .create("gfs:primitive_blast_furnace_controller")
        .soundType("stone")
        .hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/pickaxe")
        .textureAll("gfs:block/pbf/pbf_c");
    event
        .create("gfs:compressed_primitive_blast_furnace")
        .soundType("stone")
        .hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/pickaxe")
        .textureAll("gfs:block/pbf/c_pbf");



    event.create("gfs:compressed_invar_casing")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-green");
    event.create("gfs:compressed_ulv_casing")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-gray");

    event.create("gfs:compressed_lv_hatch")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-gray");

    event.create("gfs:compressed_cupronickel_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-yellow");
    event.create("gfs:compressed_kanthal_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-light_blue");
    event.create("gfs:compressed_nichrome_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-white");
    event.create("gfs:compressed_rtm_alloy_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-purple");
    event.create("gfs:compressed_hssg_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-blue");
    event.create("gfs:compressed_naquadah_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-black");
    event.create("gfs:compressed_trinium_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-pink");
    event.create("gfs:compressed_tritanium_coil")
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("cucumber:mineable/paxel")
        .textureAll("gfs:block/casings/casing-red");

	
});
