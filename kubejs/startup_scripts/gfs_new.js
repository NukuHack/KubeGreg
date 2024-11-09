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

StartupEvents.registry("item", (event) => {

    event.create("gfs:wooden_crook", 'shears')
        .maxStackSize(1)
        .maxDamage(64);

    event.create("gfs:stone_crook", 'shears')
        .maxStackSize(1)
        .maxDamage(256);

    event.create("gfs:wooden_hammer", 'pickaxe')
        .tier("wood")
        .maxStackSize(1)
        .maxDamage(64)
        .attackDamageBonus(-4);

    event.create("gfs:stone_hammer", 'pickaxe')
        .tier("wood")
        .maxStackSize(1)
        .maxDamage(128)
        .attackDamageBonus(-2);

    event.create("gfs:water_bowl");
    event.create("gfs:mud_brick");

    event.create("gfs:stupid_press");

});

