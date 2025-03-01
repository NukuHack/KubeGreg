GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('assembly')
        .category('gfs')
        .setEUIO('in')
        .setMaxIOSize(9, 9, 9, 9)
        //TODO : make this nicer
        //.setProgressBar(new ResourceTexture("gfs:textures/gui/progress_bar_reconstuction.png"), FillDirection.LEFT_TO_RIGHT)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('best_assembly', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('assembly')
        .appearanceBlock(() => Block.getBlock('gfs:void_casing'))
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' SSS     MCM     SSS ', 'S   S           S   S', 'S   S           S   S', 'S   S           S   S', ' SSS             SSS ', '                     ', '                     ', '                     ', '                     ', '                     ', ' SSS SSS SSS SSS SSS ', 'S   S   SPPPS   S   S', 'S   S   SPPPS   S   S', 'S   S   SPPPS   S   S', ' SSS SSS SSS SSS SSS ')
            .aisle('SFFFSDDDDMCMDDDDSFFFS', ' HHH             HHH ', ' HHH             HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', '  M               M  ', '  M               M  ', '                     ', '  M               M  ', '  M               M  ', 'SFFFS   SPPPS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   SPPPS   S   S')
            .aisle('SFFFSCCCCMCMCCCCSFFFS', ' HHH             HHH ', ' HHH             HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', ' MMM             MMM ', ' MMM             MMM ', '  C               C  ', ' MMM             MMM ', ' MMM             MMM ', 'SFFFS   SPPPS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   SPPPS   S   S')
            .aisle('SFFFSDDDDMCMDDDDSFFFS', ' HHH             HHH ', ' HHH             HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', '  M               M  ', '  M               M  ', '                     ', '  M               M  ', '  M               M  ', 'SFFFS   SPPPS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   SPPPS   S   S')
            .aisle(' SSS     MCM     SSS ', 'S   S           S   S', 'S   S           S   S', 'S   S           S   S', ' SSS             SSS ', '                     ', '                     ', '                     ', '                     ', '                     ', ' SSS SSS SSS SSS SSS ', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', ' SSS SSS SSS SSS SSS ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  C       C       C  ', '                     ', '                     ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' DCD    SSSSS    DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' SSS   SCCCCCS   SSS ', 'S   S           S   S', 'S   S           S   S', 'S   S           S   S', ' SSS             SSS ', '                     ', '                     ', '                     ', '                     ', '                     ', ' SSS SSS SSS SSS SSS ', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', ' SSS SSS SSS SSS SSS ')
            .aisle('SFFFSDDSCFFFCSDDSFFFS', ' HHH     SSS     HHH ', ' HHH      S      HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', '  M               M  ', '  M               M  ', '                     ', '  M       S       M  ', '  M      SSS      M  ', 'SFFFS   SFFFS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   S   S   S   S')
            .aisle('SFFFSDDSCFFFCSDDSFFFS', ' HHH     SSS     HHH ', ' HHH     SSS     HHH ', ' HHH      S      HHH ', 'SFFFS     M     SFFFS', ' MMM      K      MMM ', ' MMM      M      MMM ', '  C       S       C  ', ' MMM     SSS     MMM ', ' MMM     SSS     MMM ', 'SFFFS   SFFFS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   S   S   S   S')
            .aisle('SFFFSDDSCFFFCSDDSFFFS', ' HHH     SSS     HHH ', ' HHH      S      HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', '  M               M  ', '  M               M  ', '                     ', '  M       S       M  ', '  M      SSS      M  ', 'SFFFS   SFFFS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   S   S   S   S')
            .aisle(' SSS   SCCCCCS   SSS ', 'S   S           S   S', 'S   S           S   S', 'S   S           S   S', ' SSS             SSS ', '                     ', '                     ', '                     ', '                     ', '                     ', ' SSS SSS SSS SSS SSS ', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', ' SSS SSS SSS SSS SSS ')
            .aisle(' DCD    SSSSS    DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  C       C       C  ', '                     ', '                     ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' DCD     MCM     DCD ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '  M       M       M  ', ' MMM     MMM     MMM ', '  M       M       M  ', '                     ')
            .aisle(' SSS     MCM     SSS ', 'S   S           S   S', 'S   S           S   S', 'S   S           S   S', ' SSS             SSS ', '                     ', '                     ', '                     ', '                     ', '                     ', ' SSS SSS SSS SSS SSS ', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', 'SFFFS   SFFFS   SFFFS', ' SSS SSS SSS SSS SSS ')
            .aisle('SFFFSDDDDMCMDDDDSFFFS', ' HHH             HHH ', ' HHH             HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', '  M               M  ', '  M               M  ', '                     ', '  M               M  ', '  M               M  ', 'SFFFS   SPPPS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   SPPPS   S   S')
            .aisle('SFFFSCCCCMCMCCCCSFFFS', ' HHH             HHH ', ' HHH             HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', ' MMM             MMM ', ' MMM             MMM ', '  C               C  ', ' MMM             MMM ', ' MMM             MMM ', 'SFFFS   SPPPS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   SPPPS   S   S')
            .aisle('SFFFSDDDDMCMDDDDSFFFS', ' HHH             HHH ', ' HHH             HHH ', ' HHH             HHH ', 'SFFFS           SFFFS', '  M               M  ', '  M               M  ', '                     ', '  M               M  ', '  M               M  ', 'SFFFS   SPPPS   SFFFS', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', ' HHHSHHHSHHHSHHHSHHH ', 'S   S   SPPPS   S   S')
            .aisle(' SSS     MCM     SSS ', 'S   S           S   S', 'S   S           S   S', 'S   S           S   S', ' SSS             SSS ', '                     ', '                     ', '                     ', '                     ', '                     ', ' SSS SSS SSS SSS SSS ', 'S   S   SPPPS   S   S', 'S   S   SPPPS   S   S', 'S   S   SPPPS   S   S', ' SSS SSS SSS SSS SSS ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gfs:void_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('H', Predicates.heatingCoils())
            .where('D', Predicates.blocks('gfs:blue_casing'))
            .where('M', Predicates.blocks('gfs:netherite_casing'))
            .where('S', Predicates.blocks('gfs:green_casing'))
            .where('C', Predicates.blocks(GTBlocks.FUSION_CASING_MK3.get()))
            .where('F', Predicates.blocks(GTBlocks.FUSION_COIL.get()))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gfs:block/casings/void",
            "gtceu:block/multiblock/implosion_compressor", false
        );
});