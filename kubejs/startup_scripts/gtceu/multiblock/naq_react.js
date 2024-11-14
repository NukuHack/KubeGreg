
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
// Naquadah Reactor I Recipe type
event.create('naquadah_reactor_i')
    .category('multiblock')
    .setEUIO('out')
    .setMaxIOSize(1, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC);

// Naqudah Reactor II Recipe Type
event.create('naquadah_reactor_ii')
    .category('multiblock')
    .setEUIO('out')
    .setMaxIOSize(1, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC);


});
GTCEuStartupEvents.registry('gtceu:machine', event => {


// Naquadah Reactor I
event.create('naquadah_reactor_i', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes('naquadah_reactor_i')
    .appearanceBlock(GCyMBlocks.CASING_REACTION_SAFE)
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])    // Modern#2015
    .generator(true)
    .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCC", "PGP", "PGP", "PGP", "CCC")
        .aisle("CCC", "GNG", "GNG", "GOG", "CCC")
        .aisle("C@C", "PGP", "PGP", "PGP", "CCC")
        .where("@", Predicates.controller(Predicates.blocks(definition.get())))
        .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
        .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing").setMinGlobalLimited(12)
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where('P', Predicates.blocks("ae2:spatial_pylon"))
        .where('N', Predicates.blocks("gtceu:duranium_block"))
        .where('O', Predicates.blocks("gtceu:black_steel_block"))
        .build())
    .workableCasingRenderer(
        "gtceu:block/casings/gcym/reaction_safe_mixing_casing",
        "gtceu:block/multiblock/generator/large_steam_turbine", false
    );

// Naquadah Reactor II
event.create('naquadah_reactor_ii', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes('naquadah_reactor_ii')
    .appearanceBlock(GCyMBlocks.CASING_REACTION_SAFE)
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])    // Modern#2015
    .generator(true)
    .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCC", "PGP", "PGP", "PGP", "PGP", "CCC")
        .aisle("CCC", "GNG", "GNG", "GNG", "GOG", "CCC")
        .aisle("C@C", "PGP", "PGP", "PGP", "PGP", "CCC")
        .where("@", Predicates.controller(Predicates.blocks(definition.get())))
        .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
        .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing").setMinGlobalLimited(12)
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where('P', Predicates.blocks("ae2:spatial_pylon"))
        .where('N', Predicates.blocks('gtceu:ruthenium_trinium_americium_neutronate_block'))
        .where('O', Predicates.blocks("gtceu:omnium_block"))
        .build())
    .workableCasingRenderer(
        "gtceu:block/casings/gcym/reaction_safe_mixing_casing",
        "gtceu:block/multiblock/generator/large_steam_turbine", false
    );

});

