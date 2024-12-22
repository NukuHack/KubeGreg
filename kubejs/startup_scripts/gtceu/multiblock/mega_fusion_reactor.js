
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mega_fusion_reactor')
        .category('gfs')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 4, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
    /*
    GTRecipeTypes.FUSION_RECIPES.onRecipeBuild((builder, provider) => {
        GTRecipeTypes.get('mega_fusion_reactor').copyFrom(builder)
            .duration(Math.max((builder.duration / 2), 1))
            .EUt(builder.EUt() * 1.5)
            .save(provider);
    });
    */
})



GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('mega_fusion_reactor', 'multiblock', (holder) => new $FusionReactorMachine(holder, GTValues.UIV))
        .rotationState(RotationState.ALL)
        .recipeTypes(GTRecipeTypes.get('mega_fusion_reactor'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("                                 ", "                                 ", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "                                 ", "                                 ")
            .aisle("                                 ", "C  N C        AAAAA        C N  C", "ATT H H C    CAAAAAC    C H H TTA", "ATT H H CT  TCANNNACT  TC H H TTA", "ATT H H CT  TCANNNACT  TC H H TTA", "ATT H H C    CAAAAAC    C H H TTA", "C  N C        AAAAA        C N  C", "                                 ")
            .aisle("C  N C                     C N  C", "ATT HC  C    CAAAAAC    C  CH TTA", "A     H CT  TC     CT  TC H     A", "A     HH CAACC     CCAAC HH     A", "A     HH CAACC     CCAAC HH     A", "A     H CT  TC     CT  TC H     A", "ATT HC  C    CAAAAAC    C  CH TTA", "C  N C                     C N  C")
            .aisle("C  N C                     C N  C", "ATT H H CT  TCAAAAACT  TC H H TTA", "A      H CAAC       CAAC H      A", "N                               N", "N                               N", "A      H CAAC       CAAC H      A", "ATT H H CT  TCAAAAACT  TC H H TTA", "C  N C                     C N  C")
            .aisle("C  N C                     C N  C", "ATT H H CT  TCAAAAACT  TC H H TTA", "A      H CAAC       CAAC H      A", "N                               N", "N                               N", "A      H CAAC       CAAC H      A", "ATT H H CT  TCAAAAACT  TC H H TTA", "C  N C                     C N  C")
            .aisle("C  N C                     C N  C", "ATT HC  C    CAAAAAC    C  CH TTA", "A     H CT  TC     CT  TC H     A", "A     HH CAACC     CCAAC HH     A", "A     HH CAACC     CCAAC HH     A", "A     H CT  TC     CT  TC H     A", "ATT HC  C    CAAAAAC    C  CH TTA", "C  N C                     C N  C")
            .aisle("                                 ", "C  N C        AAAAA        C N  C", "ATT H H C    CAAAAAC    C H H TTA", "ATT H H CT  TCANMNACT  TC H H TTA", "ATT H H CT  TCANNNACT  TC H H TTA", "ATT H H C    CAAAAAC    C H H TTA", "C  N C        AAAAA        C N  C", "                                 ")
            .aisle("                                 ", "                                 ", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "                                 ", "                                 ")
            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks('gfs:dark_fusion_coil'))
            .where('T', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
            .where('N', Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(16).setPreviewCount(16)
                .or(Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get()))
                .or(Predicates.blocks(GTBlocks.FUSION_GLASS.get()).setMaxGlobalLimited(35))
            )
            .where('C', Predicates.blocks("gfs:fusion_casing_mk4"))
            .where('A', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get()).setMinGlobalLimited(35)
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            )
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/fusion_reactor", false
        );
})
