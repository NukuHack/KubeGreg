
GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Compression Imploder
    event.create('implosion_collider', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(GTRecipeTypes.IMPLOSION_RECIPES)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("         ", "    E    ", "   EEE   ", "    E    ", "         ", "         ")
            .aisle("         ", "    E    ", "   ENE   ", "    E    ", "         ", "         ")
            .aisle("   SES   ", "   SES   ", "  SE ES  ", "   SES   ", "   SES   ", "         ")
            .aisle("  SSESS  ", "  SOOOS  ", "EEEO OEEE", "  SOOOS  ", "  SSESS  ", "         ")
            .aisle("  EEEEE  ", "EEEOOOEEE", "EN     NE", "EEEOOOEEE", "  EEEEE  ", "         ")
            .aisle("  SSESS  ", "  SOOOS  ", "EEEO OEEE", "  SOOOS  ", "  SSESS  ", "   SSS   ")
            .aisle("   SES   ", "  SSESS  ", "  SE ES  ", "  SS SS  ", "   S S   ", "   SMS   ")
            .aisle("  F   F  ", "  SSSSS  ", "  SENES  ", "   SSS   ", "   SSS   ", "   SSS   ")
            .aisle("         ", "   SSS   ", "   S@S   ", "   SSS   ", "         ", "         ")
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('O', Predicates.blocks("minecraft:obsidian"))
            .where('E', Predicates.blocks(GTBlocks.CASING_HSSE_STURDY.get()))
            .where('F', Predicates.blocks("gtceu:black_steel_frame"))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('N', Predicates.blocks("minecraft:piston"))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false
        );
});