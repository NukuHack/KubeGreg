
GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create("mega_alloy_blast_smelter", "multiblock", (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .allowExtendedFacing(false)
        .recipeModifiers([GTRecipeModifiers.GCYM_REDUCTION, GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .recipeType("alloy_blast_smelter")
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("   eeeee   ", "   cbbbc   ", "   cbbbc   ", "   cbbbc   ", "   eeeee   ", "   bbbbb   ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ")
            .aisle("  ebbbbbe  ", "  c     c  ", "  c     c  ", "  c     c  ", "  efffffe  ", "  bbbbbbb  ", "   bbbbb   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   bbbbb   ", "           ")
            .aisle(" ebbbbbbbe ", " cbeeeeebc ", " cbeeeeebc ", " cbeeeeebc ", " ebeeeeebe ", " bbbbbbbbb ", "  baaaaab  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  bbbbbbb  ", "   bbbbb   ")
            .aisle("ebbbbbbbbbe", "c ehhhhhe c", "c eiiiiie c", "c ejjjjje c", "efeeeeeeefe", "bbbb   bbbb", " baa   aab ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " bbb   bbb ", "  bbbbbbb  ")
            .aisle("ebbbbbbbbbe", "b ehhhhhe b", "b eiiiiie b", "b ejjjjje b", "efeeeeeeefe", "bbb     bbb", " ba     ab ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " bb     bb ", "  bbbbbbb  ")
            .aisle("ebbbbbbbbbe", "b ehhkhhe b", "b eiikiie b", "b ejjkjje b", "efeeekeeefe", "bbb  k  bbb", " ba  k  ab ", " ca  k  ac ", " ca  k  ac ", " ca  k  ac ", " ca  k  ac ", " ca  k  ac ", " ca  k  ac ", " ca  k  ac ", " ca  k  ac ", " ca  k  ac ", " bb  k  bb ", "  bbbgbbb  ")
            .aisle("ebbbbbbbbbe", "b ehhhhhe b", "b eiiiiie b", "b ejjjjje b", "efeeeeeeefe", "bbb     bbb", " ba     ab ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " ca     ac ", " bb     bb ", "  bbbbbbb  ")
            .aisle("ebbbbbbbbbe", "c ehhhhhe c", "c eiiiiie c", "c ejjjjje c", "efeeeeeeefe", "bbbb   bbbb", " baa   aab ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " caa   aac ", " bbb   bbb ", "  bbbbbbb  ")
            .aisle(" ebbbbbbbe ", " cbeeeeebc ", " cbeeeeebc ", " cbeeeeebc ", " ebeeeeebe ", " bbbbbbbbb ", "  baaaaab  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  caaaaac  ", "  bbbbbbb  ", "   bbbbb   ")
            .aisle("  ebbbbbe  ", "  c     c  ", "  c     c  ", "  c     c  ", "  efffffe  ", "  bbbbbbb  ", "   bbbbb   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   bbbbb   ", "           ")
            .aisle("   eeeee   ", "   cbbbc   ", "   cb~bc   ", "   cbbbc   ", "   eeeee   ", "   bbbbb   ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ")
            .where("~", Predicates.controller(Predicates.blocks(definition.get())))
            .where("b", Predicates.blocks(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get()).setMinGlobalLimited(280)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where("a", Predicates.heatingCoils())
            .where("g", Predicates.abilities(PartAbility.MUFFLER))
            .where("e", Predicates.blocks(GCyMBlocks.HEAT_VENT.get()))
            .where("c", Predicates.blocks("gtceu:tempered_glass"))
            .where("f", Predicates.blocks("gtceu:extreme_engine_intake_casing"))
            .where("h", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("i", Predicates.blocks("gtceu:titanium_firebox_casing"))
            .where("j", Predicates.blocks("gtceu:tungstensteel_firebox_casing"))
            .where("k", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
            .where(" ", Predicates.any())
            .build())
        .additionalDisplay((controller, components) => {
            if (controller.isFormed()) {
                components.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of($FormattingUtil.formatNumbers((controller.getCoilType().getCoilTemperature() + 100 * Math.max(0, controller.getTier() - GTValues.MV))) + "K").red()))
            }
        })
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/high_temperature_smelting_casing",
            "gtceu:block/multiblock/gcym/blast_alloy_smelter"
        );
});
