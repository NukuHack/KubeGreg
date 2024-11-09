
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('large_farm')
		.category('gfs')
		.setMaxIOSize(3, 2, 2, 1)
		.setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('large_farm', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('large_farm')
		.appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
		.recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
			GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('GPPPG', 'F   F', 'F   F', 'FFFFF')
			.aisle('PDDDP', '     ', '     ', 'F   F')
			.aisle('PDWDP', '     ', '     ', 'F   F')
			.aisle('PDDDP', '     ', '     ', 'F   F')
			.aisle('GPCPG', 'F   F', 'F   F', 'FFFFF')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('P', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
				.or(Predicates.abilities(PartAbility.MAINTENANCE))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
			)
			.where('G', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get()))
			.where('D', Predicates.blocks('gfs:magical_farmland'))
			.where('F', Predicates.blocks('gtceu:treated_wood_frame'))
			.where('W', Predicates.blocks('minecraft:packed_ice')
				.or(Predicates.blocks('minecraft:blue_ice')))
			.where(' ', Predicates.any())
			.build())
		.workableCasingRenderer("gtceu:block/treated_wood_planks",
			"gtceu:block/multiblock/coke_oven", false);
});