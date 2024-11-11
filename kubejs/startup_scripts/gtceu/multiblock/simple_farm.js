
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('simple_farm')
        .category('gfs')
        .setMaxIOSize(2, 2, 1, 0)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('simple_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('simple_farm')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .recipeModifiers(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GGGGG', 'F   F', 'F   F', 'FFFFF')
            .aisle('PDDDP', '     ', '     ', 'F   F')
            .aisle('PDWDP', '     ', '     ', 'F   F')
            .aisle('PDDDP', '     ', '     ', 'F   F')
            .aisle('GGCGG', 'F   F', 'F   F', 'FFFFF')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2))

                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
                
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where('G', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get()))
            .where('D', Predicates.blocks('gfs:magical_farmland'))
            .where('F', Predicates.blocks('gtceu:treated_wood_frame'))
            .where('W', Predicates.blocks('minecraft:packed_ice'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer(
            "gtceu:block/treated_wood_planks",
            "gtceu:block/multiblock/coke_oven", false
        );
});