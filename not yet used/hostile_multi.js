
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

// Normal mode-exclusive Multis
// Simulation Supercomputer
    event.create('simulation_supercomputer')
        .category('gfs')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
        .setSound(GTSoundEntries.ASSEMBLER)

// Loot Superfabricator
    event.create('loot_superfabricator')
        .category('gfs')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)

});

GTCEuStartupEvents.registry('gtceu:machine', event => {


// Simulation Supercomputer
    event.create('simulation_supercomputer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('simulation_supercomputer')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "VEEEV", "VEEEV", "VEEEV", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VO OV", "QOOOQ", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
            .aisle("CC@CC", "VEQEV", "VQQQV", "VEQEV", "CCCCC")
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where('V', Predicates.blocks('gtceu:vibration_safe_casing'))
            .where('E', Predicates.blocks('gtceu:enderium_block'))
            .where('O', Predicates.blocks('gtceu:omnium_block'))
            .where('Q', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where(' ', Predicates.air())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/fusion_reactor", false)

// Loot Superfabricator
    event.create('loot_superfabricator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('loot_superfabricator')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "VEEEV", "VEEEV", "VEEEV", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VO OV", "QOOOQ", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
            .aisle("CC@CC", "VEQEV", "VQQQV", "VEQEV", "CCCCC")
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where('V', Predicates.blocks('gtceu:shock_proof_cutting_casing'))
            .where('E', Predicates.blocks('gtceu:energetic_alloy_block'))
            .where('O', Predicates.blocks('gtceu:omnium_block'))
            .where('Q', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where(' ', Predicates.air())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/fusion_reactor", false)

});



