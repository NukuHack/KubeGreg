
GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Advanced Assembly line (Dimensional Superassembler)
    event.create('dimensional_superassembler', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes('assembly_line')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gfs:netherite_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("         ", "   CCC   ", "  CCCCC  ", " CCCCCCC ", " CCCCCCC ", " CCCCCCC ", "  CCCCC  ", "   CCC   ", "         ")
            .aisle("  CCCCC  ", " CCCCCCC ", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", " CCCCCCC ", "  CCCCC  ")
            .aisle("         ", " I     I ", "  LLOLL  ", "  GF FG  ", "  GF FG  ", "  RLLLR  ", "  LM ML  ", " I     I ", "         ").setRepeatable(3,16)
            .aisle("  CCCCC  ", " CCCCCCC ", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", " CCCCCCC ", "  CCCCC  ")
            .aisle("         ", "   CCC   ", "  CCCCC  ", " CCCCCCC ", " CCC@CCC ", " CCCCCCC ", "  CCCCC  ", "   CCC   ", "         ")
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks("gtceu:activated_netherite_block").setMinGlobalLimited(200)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('L', Predicates.blocks(GCyMBlocks.CASING_LARGE_SCALE_ASSEMBLING.get()))
            .where('O', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_LINE.get()))
            .where('F', Predicates.blocks(GTBlocks.FUSION_CASING_MK3.get()))
            .where('R', Predicates.blocks(GTBlocks.CASING_GRATE.get())
                .or(Predicates.abilities(PartAbility.DATA_ACCESS).setExactLimit(1)))
            .where('M', Predicates.blocks("gfs:omnic_casing"))
            .where('I', Predicates.blocks("gtceu:infinity_frame"))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gfs:block/casings/netherite",
            "gtceu:block/multiblock/assembly_line", false
        );

});