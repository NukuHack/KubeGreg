GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_cracker', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType("cracker")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => GTRecipeModifiers.crackerOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
                .aisle("AAAAAAAAA", " A     A ", " A     A ", " A     A ", " A     A ", " A     A ", " A     A ")
                .aisle("AAAAAAAAA", "AAGGGGGAA", "AAGAAAGAA", "AAGADAGAA", "AAGAAAGAA", "AAGGGGGAA", "AAAAAAAAA")
                .aisle("AAAAAAAAA", " G     G ", " G     G ", " G     G ", " G     G ", " G     G ", " GGGGGGG ")
                .aisle("AAAAAAAAA", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GGGGGGG ")
                .aisle("AAAAAAAAA", " G     G ", " G     G ", " G     G ", " G     G ", " G     G ", " GGGGGGG ")
                .aisle("AAAAAAAAA", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GGAAAGG ")
                .aisle("AAAAAAAAA", " G     G ", " G     G ", " G     G ", " G     G ", " G     G ", " GGAAAGG ")
                .aisle("AAAAAAAAA", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GGAAAGG ")
                .aisle("AAAAAAAAA", " G     G ", " G     G ", " G     G ", " G     G ", " G     G ", " GGGGGGG ")
                .aisle("AAAAAAAAA", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GX X XG ", " GXXXXXG ", " GGGGGGG ")
                .aisle("AAAAAAAAA", " G     G ", " G     G ", " G     G ", " G     G ", " G     G ", " GGGGGGG ")
                .aisle("AAAAAAAAA", "AAGGGGGAA", "AAGAAAGAA", "AAGAAAGAA", "AAGAAAGAA", "AAGGGGGAA", "AAAAAAAAA")
                .aisle("AAAACAAAA", " A     A ", " A     A ", " A     A ", " A     A ", " A     A ", " A     A ")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(200)
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where("G", Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
                .where("X", Predicates.heatingCoils())
                .where("D", Predicates.blocks(PartAbility.MUFFLER))
                .where(" ", Predicates.any())
                .build())
        .additionalDisplay((controller, components) => {
            if (controller.isFormed()) {
                components.add(Component.translatable("gtceu.multiblock.cracking_unit.energy", 100 - 10 * controller.getCoilTier()))
            }
        })
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/cracking_unit"
        );


});
