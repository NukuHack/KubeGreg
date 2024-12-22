

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('giant_fusion_reactor', 'multiblock', (holder) => new $FusionReactorMachine(holder, GTValues.UHV))
        .rotationState(RotationState.ALL)
        .recipeTypes(GTRecipeTypes.FUSION_RECIPES)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("                       ", "                       ", "                       ", "   F  F N     N F  F   ", "   FNNFNN     NNFNNF   ", "   F  F N     N F  F   ", "                       ", "                       ", "                       ")
            .aisle("                       ", "   F  F   NNN   F  F   ", "   F  F  N   N  F  F   ", "   ECCEC       CECCE   ", "   EEEEC       CEEEE   ", "   ECCEC       CECCE   ", "   F  F  N   N  F  F   ", "   F  F   NNN   F  F   ", "                       ")
            .aisle("                       ", "   F  F  N   N  F  F   ", "  DDDDDDD     DDDDDDD  ", " CDTTTTTDCCCCCDTTTTTDC ", " CDTTTTTDCEEECDTTTTTDC ", " CDTTTTTDCCCCCDTTTTTDC ", "  DDDDDDD     DDDDDDD  ", "   F  F  N   N  F  F   ", "                       ")
            .aisle("   F  F N     N F  F   ", "   ECCEC       CECCE   ", " CDTTTTTDCCCCCDTTTTTDC ", "C                     C", "C                     C", "C                     C", " CDTTTTTDCCCCCDTTTTTDC ", "   ECCEC       CECCE   ", "   F  F N     N F  F   ")
            .aisle("   FNNFNN     NNFNNF   ", "   EEEEC       CEEEE   ", " CDTTTTTDCEEECDTTTTTDC ", "C                     C", "E                     E", "C                     C", " CDTTTTTDCEEECDTTTTTDC ", "   EEEEC       CEEEE   ", "   FNNFNN     NNFNNF   ")
            .aisle("   F  F N     N F  F   ", "   ECCEC       CECCE   ", " CDTTTTTDCCCCCDTTTTTDC ", "C                     C", "C                     C", "C                     C", " CDTTTTTDCCCCCDTTTTTDC ", "   ECCEC       CECCE   ", "   F  F N     N F  F   ")
            .aisle("                       ", "   F  F  N   N  F  F   ", "  DDDDDDD     DDDDDDD  ", " CDTTTTTDCC@CCDTTTTTDC ", " CDTTTTTDCEEECDTTTTTDC ", " CDTTTTTDCCCCCDTTTTTDC ", "  DDDDDDD     DDDDDDD  ", "   F  F  N   N  F  F   ", "                       ")
            .aisle("                       ", "   F  F   NNN   F  F   ", "   F  F  N   N  F  F   ", "   ECCEC       CECCE   ", "   EEEEC       CEEEE   ", "   ECCEC       CECCE   ", "   F  F  N   N  F  F   ", "   F  F   NNN   F  F   ", "                       ")
            .aisle("                       ", "                       ", "                       ", "   F  F N     N F  F   ", "   FNNFNN     NNFNNF   ", "   F  F N     N F  F   ", "                       ", "                       ", "                       ")
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('E', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get()).setMinGlobalLimited(6*6*4)
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(16).setPreviewCount(16))
                .or(Predicates.blocks(GTBlocks.FUSION_GLASS.get()).setMaxGlobalLimited(6*6*4))
            )
            .where('C', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            )
            .where('D', Predicates.blocks("gfs:fusion_casing_mk4"))
            .where('F', Predicates.blocks('gfs:dark_fusion_coil'))
            .where('T', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
            .where('N', Predicates.blocks("gtceu:activated_netherite_frame"))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/fusion_reactor", false
        );

})
