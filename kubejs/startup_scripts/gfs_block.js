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

    event.create(`witherproof_block`)
        .displayName(`Witherproof Block`)
        .hardness(8.0)
        .resistance(1200)
        .requiresTool(true)
        .tagBlock('forge:obsidian')
        .tagBlock('minecraft:wither_immune')
        .tagBlock('minecraft:dragon_immune')
        .textureAll(`gfs:block/witherproof_block`);

    event.create('gfs:dust', 'falling')
        .soundType('sand')
        .displayName("Dust Block")
        .resistance(0.4).hardness(0.4)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/shovel")
        .property(BlockProperties.FALLING);

    event
        .create("gfs:magical_farmland")
        .soundType("sand")
        .hardness(0.6)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("cucumber:mineable/shovel");

    [
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
    ]
        .forEach(([color, colorName]) => {
            event.create(`gfs:antiblock_${color}`)
                .displayName(`${colorName} Antiblock`)
                .requiresTool()
                .soundType(SoundType.AMETHYST)
                .tagBlock('minecraft:mineable/pickaxe')
                .property(BlockProperties.LIT)
                .lightLevel(1.0)
                .textureAll(`gfs:block/antiblocks/${color}`);
        });


// compressed machines

    [
        ["gfs:coke_oven_side", "gfs:block/co/co_s"],
        ["gfs:coke_oven_controller", "gfs:block/co/co_c"],
        ["gfs:compressed_coke_oven", "gfs:block/co/c_co"],
        ["gfs:primitive_blast_furnace_layer", "gfs:block/pbf/pbf_l"],
        ["gfs:primitive_blast_furnace_controller", "gfs:block/pbf/pbf_c"],
        ["gfs:compressed_primitive_blast_furnace", "gfs:block/pbf/c_pbf"]
    ]
        .forEach(([id, texture]) => {
            event
                .create(id)
                .soundType("stone")
                .hardness(0.4)
                .tagBlock("cucumber:mineable/paxel")
                .tagBlock("cucumber:mineable/pickaxe")
                .textureAll(texture);
        });

    [
        ["gfs:compressed_invar_casing", "gfs:block/casings/simple/casing-green", 5, "stone"],
        ["gfs:compressed_ulv_casing", "gfs:block/casings/simple/casing-gray", 5, "stone"],
        ["gfs:compressed_lv_hatch", "gfs:block/casings/simple/casing-gray", 5, "stone"]
    ]
        .forEach(([id, texture, hardness, soundType]) => {
            event.create(id)
                .soundType(soundType)
                .hardness(hardness)
                .tagBlock("mineable/pickaxe")
                .tagBlock("cucumber:mineable/paxel")
                .textureAll(texture)
                .requiresTool(true)
                .resistance(1);
        });



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
                .textureAll(`gfs:block/casings/simple/${texture}`);
        });



});
