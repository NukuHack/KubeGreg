
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_cracker', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.CRACKING_RECIPES)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .aisle("HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHOHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH", "HHHCCCHHHCCCHHH")
            .where('O', Predicates.controller(blocks(definition.get())))
            .where('H', Predicates.blocks(CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(6))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(6))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .where('C', Predicates.heatingCoils())
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/cracking_unit",false
        );

});
