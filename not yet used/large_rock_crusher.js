
event.create("large_rock_crusher", "multiblock")
    .rotationState(RotationState.ALL)
    .recipeType("rock_breaker")
    .recipeModifiers([GTRecipeModifiers.GCYM_REDUCTION, GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
    .appearanceBlock(GCyMBlocks.CASING_SECURE_MACERATION)
    .pattern((definition) =>
        FactoryBlockPattern.start()
            .aisle("AAAAA", "AAAAA", "AAAAA", "AAAAA")
            .aisle("AAAAA", "ABBBA", "A   A", "A C A")
            .aisle("AAAAA", "AB BA", "A   A", "ACCCA")
            .aisle("AAAAA", "ABBBA", "A   A", "A C A")
            .aisle("AAAAA", "AA~AA", "AAAAA", "AAAAA")
            .where("~", Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks(GCyMBlocks.CASING_SECURE_MACERATION.get())
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("B", Predicates.blocks("gtceu:crushing_wheels"))
            .where("C", Predicates.blocks("gtceu:maraging_steel_300_frame"))
            .where(" ", Predicates.air())
            .build())
    .workableCasingRenderer("gtceu:block/casings/gcym/secure_maceration_casing", "gtceu:block/machines/rock_crusher")
