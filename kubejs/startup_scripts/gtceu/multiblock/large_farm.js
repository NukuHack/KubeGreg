
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('large_farm')
		.category('gfs')
		.setMaxIOSize(6, 6, 3, 3)
		.setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('large_farm', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('large_farm')
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
			GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('WEEEW', 'FFFFF', 'FFFFF', 'FFFFF')
			.aisle('PDDDP', 'F   F', 'F   F', 'FGGGF').setRepeatable(1,12)
			.aisle('WEEEW', 'FFCFF', 'FFFFF', 'FFFFF')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('P', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
				
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
			)
			.where('E', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
			)
			.where('W', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
			.where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
			.where('D', Predicates.blocks('gfs:magical_farmland'))
			.where('F', Predicates.blocks('gtceu:steel_frame'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingRenderer(
			"gtceu:block/casings/solid/machine_casing_solid_steel",
			"gtceu:block/multiblock/implosion_compressor", false
		);
});