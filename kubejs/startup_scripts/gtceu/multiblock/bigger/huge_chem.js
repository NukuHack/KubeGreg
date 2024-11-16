//priority: -100
GTCEuStartupEvents.registry('gtceu:machine', event => {
	// Extra Large Chemical Reactor
	event.create('huge_chemical_reactor', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeTypes(GTRecipeTypes.LARGE_CHEMICAL_RECIPES)
		.recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
		.appearanceBlock(GTBlocks.CASING_PTFE_INERT)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(" XXXXX ", " A   A ", " A   A ", " A   A ", " A   A ", " XXXXX ")
			.aisle("XXXXXXX", "AXXXXXA", "AGGGGGA", "AGGGGGA", "AXXXXXA", "XXXXXXX")
			.aisle("XXXXXXX", " XPPPX ", " GKKKG ", " GKKKG ", " XPPPX ", "XXXXXXX")
			.aisle("XXXXXXX", " XPPPX ", " GKPKG ", " GKPKG ", " XPPPX ", "XXXXXXX")
			.aisle("XXXXXXX", " XPPPX ", " GKKKG ", " GKKKG ", " XPPPX ", "XXXXXXX")
			.aisle("XXXXXXX", "AXXXXXA", "AGGGGGA", "AGGGGGA", "AXXXXXA", "XXXXXXX")
			.aisle(" XXCXX ", " A   A ", " A   A ", " A   A ", " A   A ", " XXXXX ")
			.where("C", Predicates.controller(Predicates.blocks(definition.get())))
			.where('X', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()).setMinGlobalLimited(43)
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
			.where('G', Predicates.blocks('gtceu:fusion_glass'))
			.where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
			.where('A', Predicates.blocks('gtceu:naquadah_alloy_frame'))
			.where('K', Predicates.blocks('gtceu:trinium_coil_block'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingRenderer(
			"gtceu:block/casings/solid/machine_casing_inert_ptfe",
			"gtceu:block/multiblock/large_chemical_reactor", false
		);

});
