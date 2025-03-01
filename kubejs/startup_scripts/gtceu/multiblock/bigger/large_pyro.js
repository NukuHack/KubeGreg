
GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create("large_pyrolyse_oven", "multiblock", (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType("pyrolyse_oven")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("AAAAA", "AAAAA", "AADAA", "AAAAA", "AAAAA")
                .aisle("ABBBA", "B C B", "BC CB", "B C B", "ABBBA")
                .aisle("ABBBA", "B C B", "BC CB", "B C B", "ABBBA")
                .aisle("ABBBA", "B C B", "BC CB", "B C B", "ABBBA")
                .aisle("ABBBA", "B C B", "BC CB", "B C B", "ABBBA")
                .aisle("ABBBA", "B C B", "BC CB", "B C B", "ABBBA")
                .aisle("ABBBA", "B C B", "BC CB", "B C B", "ABBBA")
                .aisle("AAAAA", "AAAAA", "AA~AA", "AAAAA", "AAAAA")
                .where("~", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(60)
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where("B", Predicates.heatingCoils())
                .where("C", Predicates.blocks("gtceu:tungsten_carbide_frame"))
                .where("D", Predicates.blocks(PartAbility.MUFFLER))
                .where(" ", Predicates.any())
                .build())
        .additionalDisplay((controller, components) => {
            if (controller.isFormed()) {
                components.add(Component.translatable("gtceu.multiblock.pyrolyse_oven.speed", controller.getCoilTier() == 0 ? 75 : 50 * (controller.getCoilTier() + 1)))
            }
        })
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/pyrolyse_oven"
        );

});