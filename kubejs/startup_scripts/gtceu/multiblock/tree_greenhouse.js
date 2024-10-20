GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('tree_greenhouse')     // name of the multiblock
        .category('gfs')    // name of the recipe category
        .setEUIO('in')                  // energy transport way
        .setMaxIOSize(3, 2, 2, 1)       // in out , floud in fluid out
        .setSound(GTSoundEntries.BOILER);// just the sound
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('tree_greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('tree_greenhouse')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('KKHHHKK', 'FFGGGFF', 'FFGGGFF', 'FFGGGFF', 'FFFFFFF')
            .aisle('KKHHHKK', 'FB   BF', 'FB   BF', 'FB   BF', 'FB   BF')
            .aisle('HHKKKHH', 'G     G', 'G     G', 'G  L  G', 'F     F')
            .aisle('HHKDKHH', 'G  O  G', 'G  O  G', 'G LOL G', 'F  L  F')
            .aisle('HHKKKHH', 'G     G', 'G     G', 'G  L  G', 'F     F')
            .aisle('KKHHHKK', 'FB   BF', 'FB   BF', 'FB   BF', 'FB   BF')
            .aisle('KKHCHKK', 'FFGGGFF', 'FFGGGFF', 'FFGGGFF', 'FFFFFFF')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
			)
            .where('K', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('B', Predicates.blocks('gtceu:treated_wood_frame'))
            .where('O', Predicates.blocks('minecraft:oak_log'))
            .where('L', Predicates.blocks('minecraft:oak_leaves'))
            .where('D', Predicates.blocks('gfs:magical_farmland'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('G', Predicates.blocks('minecraft:glass'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/implosion_compressor", false);
});
