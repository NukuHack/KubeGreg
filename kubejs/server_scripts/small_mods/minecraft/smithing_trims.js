// mc ... is not a mod ...

ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

// netherite_upgrade_smithing_template

    event.remove({output: "minecraft:netherite_upgrade_smithing_template"});
    greg.assembler('gfs:netherite_upgrade')
        .itemInputs('8x gtceu:netherrack_dust')
        .itemInputs('8x minecraft:diamond')
        .notConsumable('gtceu:plate_casting_mold')
        .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 288))
        .itemOutputs('minecraft:netherite_upgrade_smithing_template')
        .duration(200)
        .EUt(30);

    event.shaped("minecraft:coast_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:cobblestone",
            "I": "minecraft:sand"
        });

    event.shaped("minecraft:dune_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:sandstone",
            "I": "minecraft:cactus"
        });

    event.shaped("minecraft:eye_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:end_stone",
            "I": "minecraft:ender_eye"
        });

    event.shaped("minecraft:host_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:terracotta",
            "I": "#minecraft:saplings"
        });

    event.shaped("minecraft:raiser_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:terracotta",
            "I": "minecraft:dirt"
        });

    event.shaped("minecraft:rib_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:netherrack",
            "I": "minecraft:bone"
        });

    event.shaped("minecraft:sentry_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:cobblestone",
            "I": "minecraft:iron_ingot"
        });

    event.shaped("minecraft:shaper_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:terracotta",
            "I": "minecraft:coarse_dirt"
        });

    event.shaped("minecraft:silence_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:cobbled_deepslate",
            "I": "minecraft:sculk"
        });

    event.shaped("minecraft:snout_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:blackstone",
            "I": "minecraft:porkchop"
        });
    event.shaped("minecraft:spire_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:purpur_block",
            "I": "minecraft:end_rod"
        });

    event.shaped("minecraft:tide_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:prismarine",
            "I": "minecraft:prismarine_crystals"
        });

    event.shaped("minecraft:vex_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:cobblestone",
            "I": "minecraft:gold_ingot"
        });

    event.shaped("minecraft:ward_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:cobbled_deepslate",
            "I": "minecraft:amethyst_shard"
        });

    event.shaped("minecraft:wild_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:mossy_cobblestone",
            "I": "minecraft:vine"
        });

    event.shaped("minecraft:wayfinder_armor_trim_smithing_template",
        ["DID",
            "DBD",
            "DDD"],
        {
            "D": "minecraft:diamond",
            "B": "minecraft:terracotta",
            "I": "minecraft:compass"
        });

});
