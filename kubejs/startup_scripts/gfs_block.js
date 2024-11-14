/*
* greg_sky.js - Register Blocks.
*/
priority: 60
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

    event.create('gfs:dust', 'falling')
        .soundType('sand')
        .resistance(0.4).hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/shovel").displayName("Dust Block")
        .property(BlockProperties.FALLING);

    event
        .create("gfs:magical_farmland")
        .soundType("sand")
        .hardness(0.6)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/shovel");

    const antiblockColors = [
        ["black", "Black"],
        ["blue", "Blue"],
        ["brown", "Brown"],
        ["cyan", "Cyan"],
        ["green", "Green"],
        ["gray", "Gray"],
        ["lime", "Lime"],
        ["light_blue", "Light Blue"],
        ["light_gray", "Light Gray"],
        ["magenta", "Magenta"],
        ["orange", "Orange"],
        ["purple", "Purple"],
        ["red", "Red"],
        ["white", "White"],
        ["yellow", "Yellow"],
        ["pink", "Pink"]
    ];

    antiblockColors.forEach(([color, colorDisplayName]) => {
        event.create(`gfs:antiblock_${color}`)
            .displayName(`${colorDisplayName} Antiblock`)
            .requiresTool()
            .soundType(SoundType.AMETHYST)
            .tagBlock('minecraft:mineable/pickaxe')
            .property(BlockProperties.LIT)
            .lightLevel(1.0)
            .textureAll(`gfs:block/antiblocks/${colorDisplayName}`);
    });

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



    [
        ["cupronickel", "casing-yellow" ],
        ["kanthal", "casing-light_blue" ],
        ["nichrome", "casing-white" ],
        ["rtm_alloy", "casing-purple" ],
        ["hssg", "casing-blue" ],
        ["naquadah", "casing-black" ],
        ["trinium", "casing-pink" ],
        ["tritanium", "casing-red" ]
    ]
        .forEach(([ name, texture ]) => {
            event.create(`gfs:compressed_${name}_coil`)
                .hardness(5)
                .resistance(1)
                .soundType('stone')
                .requiresTool(true)
                .tagBlock("mineable/pickaxe")
                .tagBlock("cucumber:mineable/paxel")
                .textureAll(`gfs:block/coils/plain/${texture}`);
        });





});
