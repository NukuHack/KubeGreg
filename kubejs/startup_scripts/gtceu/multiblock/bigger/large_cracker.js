GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_cracker', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.CRACKING_RECIPES)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH").setRepeatable(3)
            .aisle("HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHH#########HHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH").setRepeatable(3)
            .aisle("HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH").setRepeatable(2)
            .aisle("HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHCHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH", "HHHBBBHHHBBBHHH")
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(8))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8))
                
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(8))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(8))

                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .where('B', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/cracking_unit",false
        );

});
