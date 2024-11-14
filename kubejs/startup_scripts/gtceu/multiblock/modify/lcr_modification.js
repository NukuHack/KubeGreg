// in case it is not obvious lcr = Large Chemical Reactor

GTCEuStartupEvents.registry('gtceu:machine', event => {

	GTMachines.LARGE_CHEMICAL_REACTOR.setPatternFactory(definition => FactoryBlockPattern.start()
		// don't ask me why but here you can't use the definition.get() or definition.getRecipeTypes()
		// or any stuff like that and has to define the blocks exactly ... so janky
		.aisle('AAA', 'AAA', 'AAA')
		.aisle('AAA', 'APA', 'AAA')
		.aisle('AAA', 'ACA', 'AAA')
		.where('C', Predicates.controller(Predicates.blocks('gtceu:large_chemical_reactor')))
		.where('A', Predicates.blocks('gtceu:inert_machine_casing').setMinGlobalLimited(10)
			.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8))
			.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(8))

			.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(8))
			.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(8))

			.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
			.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
		)
		.where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
		.build());

	// adding a .shapeinfo() makes it crash not adding it just makes the in-game multiblock display incorrectly display the original multiblock before the modification ... I give up

});

