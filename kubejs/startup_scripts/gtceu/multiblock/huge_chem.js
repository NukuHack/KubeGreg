
// Large Chemical Reactor - making it acept more than 2 energy hatches

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('huge_chemical_reactor')     // name of the multiblock
        .category('gfs')    // name of the recipe category
        .setEUIO('in')                  // energy transport way
        .setMaxIOSize(9, 6, 9, 6)       // in out , floud in fluid out
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)	// slot overlay
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)	// the arrow between the inputs and outputs
        .setSound(GTSoundEntries.BATH);// just the sound
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('huge_chemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_chemical_reactor')
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
		.recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
			GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA', 'BDB', 'BDB', 'AAA')
            .aisle('ABA', 'DPD', 'DPD', 'AAA')
            .aisle('AAA', 'BCB', 'BDB', 'AAA')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)).setMinGlobalLimited(1)
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('B', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()).setMinGlobalLimited(10))
            .where('D', 
				Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()).setMinGlobalLimited(4)
				.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()))
			)
            .build()
		)
        .workableCasingRenderer(
			"gtceu:block/casings/solid/machine_casing_inert_ptfe",
			"gtceu:block/multiblock/large_chemical_reactor", false
		);

});





/*

const MMDefinition = Java.loadClass('com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition');

// Correctly reference the large chemical reactor
const largeChemicalReactor = MMDefinition.LARGE_CHEMICAL_REACTOR;
console.log(Object.keys(MMDefinition));

const largeChemicalReactor = MMDefinition.getBuilt('large_chemical_reactor');
console.log(largeChemicalReactor);


//console.log(large_chemical_reactor.getPatternFactory())


    event.create('large_chemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_chemical_reactor')
        .appearanceBlock(GTBlocks.INERT_MACHINE_CASING)
		.recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,
			GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
    .setPatternFactory(definition => FactoryBlockPattern.start()
            .aisle('AAA', 'AAA', 'AAA')
            .aisle('AAA', 'APA', 'AAA')
            .aisle('AAA', 'ACA', 'AAA')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks(GTBlocks.INERT_MACHINE_CASING.get()).setMinGlobalLimited(10)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_inert_ptfe",
        "gtceu:block/multiblock/large_chemical_reactor", false);


   largeChemicalReactor.setPatternFactory(() => 
       FactoryBlockPattern.start()
            .aisle('AAA', 'AAA', 'AAA')
            .aisle('AAA', 'APA', 'AAA')
            .aisle('AAA', 'ACA', 'AAA')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks(GTBlocks.INERT_MACHINE_CASING.get()).setMinGlobalLimited(10)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .build()
   )
   .recipeType('large_chemical_reactor')
   .appearanceBlock(GTBlocks.INERT_MACHINE_CASING)
   .recipeModifiers([
       GTRecipeModifiers.PARALLEL_HATCH,
       GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
   ])
   .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_inert_ptfe", 
       "gtceu:block/multiblock/large_chemical_reactor", false);

*/