//priority: -100
GTCEuStartupEvents.registry('gtceu:machine', event => {
	// Extra Large Chemical Reactor
	event.create('extra_large_chemical_reactor', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeTypes('large_chemical_reactor')
		.recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
		.appearanceBlock(() => Block.getBlock('gtceu:inert_machine_casing'))
		.pattern(definition => FactoryBlockPattern.start()
			.aisle("#CCCCC#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#CCCCC#")
			.aisle("CCCCCCC", "ACCCCCA", "AGGGGGA", "AGGGGGA", "ACCCCCA", "CCCCCCC")
			.aisle("CCCCCCC", "#CPPPC#", "#GKKKG#", "#GKKKG#", "#CPPPC#", "CCCCCCC")
			.aisle("CCCCCCC", "#CPPPC#", "#GKPKG#", "#GKPKG#", "#CPPPC#", "CCCCCCC")
			.aisle("CCCCCCC", "#CPPPC#", "#GKKKG#", "#GKKKG#", "#CPPPC#", "CCCCCCC")
			.aisle("CCCCCCC", "ACCCCCA", "AGGGGGA", "AGGGGGA", "ACCCCCA", "CCCCCCC")
			.aisle("#CC@CC#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#CCCCC#")
			.where("@", Predicates.controller(Predicates.blocks(definition.get())))
			.where('C', Predicates.blocks('gtceu:inert_machine_casing').setMinGlobalLimited(43)
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
			.where('G', Predicates.blocks('gtceu:fusion_glass'))
			.where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
			.where('A', Predicates.blocks('gtceu:naquadah_alloy_frame'))
			.where('K', Predicates.blocks('gtceu:trinium_coil_block'))
			.where('#', Predicates.any())
			.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_inert_ptfe",
			"gtceu:block/multiblock/large_chemical_reactor", false)

});
