// priority: 0
// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    /*
        event.remove({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:moss_block"}});
        event.remove({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:flowering_azalea"}});
        event.remove({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:azalea"}});
        event.remove({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:bamboo"}});
        event.remove({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:dark_oak_sapling"}});
    */

    event.custom({
        "bookshelf:load_conditions": [
            {"type": "bookshelf:item_exists", "values": ["gtceu:rubber_sapling"]}
        ],
        "type": "botanypots:crop",
        "seed": {"item": "gtceu:rubber_sapling"},
        "categories": ["dirt"],
        "growthTicks": 2400,
        "display": {"block": "gtceu:rubber_sapling"},
        "drops": [
            {"chance": 1.00, "output": {"item": "gtceu:rubber_log"}, "minRolls": 2, "maxRolls": 4},
            {"chance": 0.10, "output": {"item": "minecraft:stick"}, "minRolls": 1, "maxRolls": 2},
            {"chance": 0.65, "output": {"item": "gtceu:sticky_resin"}},
            {"chance": 0.10, "output": {"item": "gtceu:rubber_sapling"}}
        ]
    });


    /*
    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:dark_oak_sapling"},
        "categories":["dirt"],
        "growthTicks":2400,
        "display":{"block":"minecraft:dark_oak_sapling"},
        "drops":[
            {"chance":1.00,"output":{"item":"minecraft:dark_oak_log"},"minRolls":2,"maxRolls":4},
            {"chance":0.15,"output":{"item":"minecraft:stick"},"minRolls":1,"maxRolls":2},
            {"chance":0.10,"output":{"item":"minecraft:apple"}},
            {"chance":0.15,"output":{"item":"minecraft:dark_oak_sapling"}}
        ]
    });

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:bamboo"},
        "categories":["dirt"],
        "growthTicks":600,
        "display":
            {"type":"botanypots:transitional","phases":[
                {"block":"minecraft:bamboo","properties":{"age":1,"leaves":"none"}},
                {"block":"minecraft:bamboo","properties":{"age":1,"leaves":"small"}},
                {"block":"minecraft:bamboo","properties":{"age":1,"leaves":"large"}}
            ]},
        "drops":[
            {"chance":1.00,"output":{"item":"minecraft:bamboo"},"minRolls":2,"maxRolls":3},
            {"chance":0.15,"output":{"item":"minecraft:bamboo"},"minRolls":1,"maxRolls":2}
        ]
    });

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:azalea"},
        "categories":["dirt"],
        "growthTicks":2400,
        "display":{"block":"minecraft:azalea"},
        "drops":[
            {"chance":1.00,"output":{"item":"minecraft:oak_log"},"minRolls":2,"maxRolls":4},
            {"chance":0.50,"output":{"item":"minecraft:azalea"},"minRolls":1,"maxRolls":2},
            {"chance":0.10,"output":{"item":"minecraft:stick"},"minRolls":1,"maxRolls":2},
            {"chance":0.10,"output":{"item":"minecraft:flowering_azalea"}}
        ]
    });

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:flowering_azalea"},
        "categories":["dirt"],
        "growthTicks":2400,
        "display":{"block":"minecraft:flowering_azalea"},
        "drops":[
            {"chance":1.00,"output":{"item":"minecraft:oak_log"},"minRolls":2,"maxRolls":4},
            {"chance":0.50,"output":{"item":"minecraft:flowering_azalea"},"minRolls":1,"maxRolls":2},
            {"chance":0.10,"output":{"item":"minecraft:stick"},"minRolls":1,"maxRolls":2},
            {"chance":0.10,"output":{"item":"minecraft:azalea"}}
        ]
    });

    event.custom({
        "type":"botanypots:crop",
        "seed":{"item":"minecraft:moss_block"},
        "categories":["dirt"],
        "growthTicks":2400,
        "display":{"block":"minecraft:moss_block"},
        "drops":[
            {"chance":1.00,"output":{"item":"minecraft:moss_block"},"minRolls":2,"maxRolls":3},
            {"chance":0.15,"output":{"item":"minecraft:moss_block"},"minRolls":1,"maxRolls":2},
            {"chance":0.50,"output":{"item":"minecraft:moss_carpet"},"minRolls":1,"maxRolls":2},
            {"chance":0.10,"output":{"item":"minecraft:wheat_seeds"}}
        ]
    });
    */


// soil


    event.custom({
        "type": "botanypots:soil",
        "input": {"item": "gfs:magical_farmland"},
        "display": {"block": "gfs:magical_farmland"},
        "categories": [
            "farmland", "dirt", "warped", "obsidian", "glass", "moss", "clay", "bone", "jungle", "jungle_wood",
            "crimson", "nylium", "crimson_nylium", "warped_nylium", "magma_block", "cobblestone",
            "coarse_dirt", "sand", "mulch", "lava", "water", "fish", "red_sand", "yellow_sand", "end", "end_stone",
            "wood", "log", "mushroom", "oak", "oak_wood", "stone", "deepslate", "ore", "netherrack", "nether"],
        "growthModifier": 2
    });


// fin //

})