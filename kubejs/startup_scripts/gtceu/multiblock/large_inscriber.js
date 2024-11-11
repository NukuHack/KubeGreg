/*
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
	
    event.create("inscriber")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(4, 1, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);
});

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
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/cracking_unit",false
        );

});

*/