
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_inscriber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("inscriber") // gtceu: / gfs:
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('EEE', 'HHH', 'HHH')
            .aisle('EEE', 'HGH', 'HGH')
            .aisle('ECE', 'HGH', 'HGH')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('E', Predicates.blocks(CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('H', Predicates.blocks(CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(6))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(6))
                
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(6))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(6))
            )
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gtceu:block/treated_wood_planks",
            "gtceu:block/multiblock/coke_oven", false
        );

});
