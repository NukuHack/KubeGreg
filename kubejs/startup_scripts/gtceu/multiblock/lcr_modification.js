// in case it is not obvious lcr = Large Chemical Reactor

GTCEuStartupEvents.registry('gtceu:machine', event => {
  
// xD made by chatgpt and help from the Original GT discord server ... but could not get it to work ... sadly
  // what da haaail i made it work ........ NICEEEE

  // another failed attempt
//const TryGTMulti = Java.loadClass('com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition');

	GTMachines.LARGE_CHEMICAL_REACTOR.setPatternFactory(definition => FactoryBlockPattern.start()
		// don't ask me why but here you can't use the definition.get() or definition.getRecipeTypes() or any stuff like that and has to define the blocks exactly ... so janky
			.aisle('AAA', 'AAA', 'AAA')
			.aisle('AAA', 'APA', 'AAA')
			.aisle('AAA', 'ACA', 'AAA')
			.where('C', Predicates.controller(Predicates.blocks('gtceu:large_chemical_reactor')))
			.where('A', Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
				// and it fucking looks like you can't fucking even use the fucking GTBlocks.<block> and has to define the casing blocks in the fucking stupid way fucKKK
				.or(Predicates.blocks('gtceu:inert_machine_casing').setMinGlobalLimited(10))
			)
    // same shit here again ..... I hate myself and I hate you too
			.where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
			.build());

});

