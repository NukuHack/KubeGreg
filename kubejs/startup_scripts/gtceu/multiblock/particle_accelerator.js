/*GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Steam Engine
    event.create('particle_accelerator')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 2) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        //.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Steam Engine space_production
    event.create('particle_accelerator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('particle_accelerator')
        //.appearanceBlock('gtnn:mar_casing')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' C            CCC              ', 'COC         CCCCCCC            ', ' C            CCC              ')
            .aisle(' C        CCCCCCCCCCC          ', 'CPC      CCCPPPPPPPCCC         ', ' C        CCCCCCCCCCC          ')
            .aisle(' C      CCCCCCCCCCCCCCC        ', 'CPC    CCPPPCCCCCCCPPPCC       ', ' C      CCCCCCCCCCCCCCC        ')
            .aisle(' C    CCCCC         CCCCC      ', 'CPC   CPPPCC       CCPPPC      ', ' C    CCCCC         CCCCC      ')
            .aisle(' C   CCCC             CCCC     ', 'CPC  CPPCC           CCPPC     ', ' C   CCCC             CCCC     ')
            .aisle(' C  CCC                 CCC    ', 'CPC CPPC               CPPC    ', ' C  CCC                 CCC    ')
            .aisle(' C CCC                   CCC   ', 'CPCCPPC                 CPPC   ', ' C CCC                   CCC   ')
            .aisle(' C CC                     CC   ', 'CPCPPC                   CPPC  ', ' C CC                     CC   ')
            .aisle(' CCCC                     CCC  ', 'CPCPC                     CPC  ', ' CCCC                     CCC  ')
            .aisle(' CCC                       CC  ', 'CPPPC                     CPPC ', ' CCC                       CC  ')
            .aisle(' CCC                       CCC ', ' CPC                       CPC ', ' CCC                       CCC ')
            .aisle(' CC                         CC ', ' CPC                       CPC ', ' CC                         CC ')
            .aisle(' CC                         CC ', 'CPC                         CPC', ' CC                         CC ')
            .aisle(' CC                         CC ', 'CPC                         CPC', ' CC                         CC ')
            .aisle('CCC                         CCC', 'CPC                         CPC', 'CCC                         CCC')
            .aisle('CCC                         CCC', 'CPC                         CPG', 'CCC                         CCC')
            .aisle('CCC                         CCC', 'CPC                         CPC', 'CCC                         CCC')
            .aisle(' CC                         CC ', 'CPC                         CPC', ' CC                         CC ')
            .aisle(' CC                         CC ', 'CPC                         CPC', ' CC                         CC ')
            .aisle(' CC                         CC ', ' CPC                       CPC ', ' CC                         CC ')
            .aisle(' CCC                       CCC ', ' CPC                       CPC ', ' CCC                       CCC ')
            .aisle(' CCC                       CCC ', 'CPPPC                     CPPPC', ' CCC                       CCC ')
            .aisle(' CCCC                     CCCC ', 'CPCPC                     CPCPC', ' CCCC                     CCCC ')
            .aisle(' C CC                     CC C ', 'CPCPPC                   CPPCPC', ' C CC                     CC C ')
            .aisle(' C CCC                   CCC C ', 'CPCCPPC                 CPPCCPC', ' C CCC                   CCC C ')
            .aisle(' C  CCC                 CCC  C ', 'CPC CPPC               CPPC CPC', ' C  CCC                 CCC  C ')
            .aisle(' C   CCCC             CCCC   C ', 'CPC  CPPCC           CCPPC  CPC', ' C   CCCC             CCCC   C ')
            .aisle(' C    CCCCC         CCCCC    C ', 'CPC   CPPPCC       CCPPPC   CPC', ' C    CCCCC         CCCCC    C ')
            .aisle(' C      CCCCCCCCCCCCCCC      C ', 'CPC    CCPPPCCCCCCCPPPCC    CPC', ' C      CCCCCCCCCCCCCCC      C ')
            .aisle(' C        CCCCCCCCCCC        C ', 'CPC      CCCPPPPPPPCCC      CPC', ' C        CCCCCCCCCCC        C ')
            .aisle(' C            CCC            C ', 'CIC         CCCACCC         COC', ' C            CCC            C ')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtnn:mar_casing')
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(3))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('P', Predicates.blocks('gtnn:high_speed_pipe_block'))
            .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X))
            .where('O', Predicates.abilities(PartAbility.EXPORT_FLUIDS_1X))
            .where('G', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtnn:block/casings/solid/mar_casing',
            'gtceu:block/multiblock/large_chemical_reactor', false
        )
})*/