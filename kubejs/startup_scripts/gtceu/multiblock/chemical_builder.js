GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('chemical_builder')
        .category('gfs')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSound(GTSoundEntries.CHEMICAL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('chemical_builder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('chemical_builder')
        .appearanceBlock(() => Block.getBlock('gfs:peek_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('TFFFT', 'T   T', 'T   T', 'T   T', 'T   T', 'T   T', 'TFFFT')
            .aisle('FKKKF', ' KKK ', '  K  ', '  K  ', '  K  ', ' KKK ', 'FEEEF')
            .aisle('FKKKF', ' KPK ', ' KPK ', ' KPK ', ' KPK ', ' KPK ', 'FEEEF')
            .aisle('FKKKF', ' KCK ', '  K  ', '  K  ', '  K  ', ' KKK ', 'FEEEF')
            .aisle('TFFFT', 'T   T', 'T   T', 'T   T', 'T   T', 'T   T', 'TFFFT')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('K', Predicates.blocks('gfs:peek_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('E', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
            .where('T', Predicates.blocks('gtceu:tungsten_frame'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gfs:block/casings/peek",
            "gtceu:block/multiblock/large_chemical_reactor", false
        );

});