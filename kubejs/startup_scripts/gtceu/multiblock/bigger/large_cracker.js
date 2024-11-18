GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_cracker', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType("cracker")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => GTRecipeModifiers.crackerOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("aaaaaaaaa", " a     a ", " a     a ", " a     a ", " a     a ", " a     a ", " a     a ")
                .aisle("aaaaaaaaa", "aabbbbbaa", "aabaaabaa", "aabaaabaa", "aabaaabaa", "aabbbbbaa", "aaaaaaaaa")
                .aisle("aaaaaaaaa", " b     b ", " b     b ", " b     b ", " b     b ", " b     b ", " bbbbbbb ")
                .aisle("aaaaaaaaa", " bcccccb ", " bc c cb ", " bcccccb ", " bc c cb ", " bcccccb ", " bbbbbbb ")
                .aisle("aaaaaaaaa", " b     b ", " b     b ", " b     b ", " b     b ", " b     b ", " bbbbbbb ")
                .aisle("aaaaaaaaa", " bcccccb ", " bc c cb ", " bcccccb ", " bc c cb ", " bcccccb ", " bbaaabb ")
                .aisle("aaaaaaaaa", " b     b ", " b     b ", " b     b ", " b     b ", " b     b ", " bbaaabb ")
                .aisle("aaaaaaaaa", " bcccccb ", " bc c cb ", " bcccccb ", " bc c cb ", " bcccccb ", " bbaaabb ")
                .aisle("aaaaaaaaa", " b     b ", " b     b ", " b     b ", " b     b ", " b     b ", " bbbbbbb ")
                .aisle("aaaaaaaaa", " bcccccb ", " bc c cb ", " bcccccb ", " bc c cb ", " bcccccb ", " bbbbbbb ")
                .aisle("aaaaaaaaa", " b     b ", " b     b ", " b     b ", " b     b ", " b     b ", " bbbbbbb ")
                .aisle("aaaaaaaaa", "aabbbbbaa", "aabaaabaa", "aabaaabaa", "aabaaabaa", "aabbbbbaa", "aaaaaaaaa")
                .aisle("aaaa~aaaa", " a     a ", " a     a ", " a     a ", " a     a ", " a     a ", " a     a ")
                .where("~", Predicates.controller(Predicates.blocks(definition.get())))
                .where("a", Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(200)
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where("b", Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
                .where("c", Predicates.heatingCoils())
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
