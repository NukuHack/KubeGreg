priority: -100

// Large Chemical Reactor - making it acept more than 2 energy hatches

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('huge_chemical_reactor')     // name of the multiblock
        .category('gfs')    // name of the recipe category
        .setEUIO('in')                  // energy transport way
        .setMaxIOSize(6, 6, 6, 6)       // in out , floud in fluid out
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)	// slot overlay
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)	// the arrow between the inputs and outputs
        .setSound(GTSoundEntries.BATH);// just the sound
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	
	// copy mainly from the original LCR : https://github.com/GregTechCEu/GregTech-Modern/blob/1.20.1/src/main/java/com/gregtechceu/gtceu/common/data/GTMachines.java#L1323
    event.create('huge_chemical_reactor', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.LARGE_CHEMICAL_RECIPES)
		//GTRecipeTypes.LARGE_CHEMICAL_RECIPES or "large_chemical_reactor"
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
	    .recipeModifiers([GTRecipeModifiers.DEFAULT_ENVIRONMENT_REQUIREMENT,GTRecipeModifiers.PARALLEL_HATCH,
			GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])

		.pattern(definition => FactoryBlockPattern.start()
        	.aisle('EEEEE', 'BBBBB', 'BBBBB', 'BBBBB', 'AAAAA')
        	.aisle('EDDDE', 'BPPPB', 'BPPPB', 'BPPPB', 'ADDDA')
        	.aisle('EDDDE', 'BPPPB', 'BPPPB', 'BPPPB', 'ADDDA')
        	.aisle('EDDDE', 'BPPPB', 'BPPPB', 'BPPPB', 'ADDDA')
       		.aisle('EECEE', 'BBBBB', 'BBBBB', 'BBBBB', 'AAAAA')
       		// Specifying conditions for each block
       	.where('C', Predicates.controller(Predicates.blocks(definition.get())))
       	.where('A', Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1)
           	.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
		.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
       		.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
           	.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
           	.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
         	.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()))
        )
        .where('E', Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(8)
         	.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())))
        .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get().setMinGlobalLimited(18))
			.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())))
        .where('D', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()).setMinGlobalLimited(30))
        .where('B', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get().setMinGlobalLimited(30))
			.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())))
       	// Build the pattern
  		.build()
	)
	// stole some "shape info" from other modpacks 
         .shapeInfo(controller => MultiblockShapeInfo.builder()
        	.aisle('EEEED', 'BBDBB', 'BBDBB', 'BBDBB', 'DHDMD')
        	.aisle('DDDDD', 'BPPPB', 'BPPPB', 'BDDDB', 'FDDDG')
        	.aisle('DDDDD', 'DPPPD', 'DPPPD', 'DDDDD', 'FDDDG')
        	.aisle('DDDDD', 'BPPPB', 'BPPPB', 'BDDDB', 'FDDDG')
       		.aisle('DDCDD', 'BBDBB', 'BBDBB', 'BBDBB', 'IIDOO')
	 //.where('H', Block.getBlock('gtceu:uv_parallel_hatch').defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
	.where('C', Predicates.controller(Predicates.blocks(definition.get())), Direction.SOUTH)
       	.where('F', Predicates.abilities(PartAbility.IMPORT_FLUIDS), Direction.WEST)
       	.where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS), Direction.WEST)
	
       	.where('G', Predicates.abilities(PartAbility.EXPORT_FLUIDS), Direction.EAST)
       	.where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS), Direction.EAST)
	
       	.where('M', Predicates.abilities(PartAbility.MAINTENANCE), Direction.NORTH)
       	.where('H', Predicates.abilities(PartAbility.PARALLEL_HATCH), Direction.NORTH)
	
        .where('E', Predicates.abilities(PartAbility.INPUT_ENERGY), Direction.NORTH)
        .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
        .where('D', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()))
        .where('B', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
		
  		.build()
	)
	    
    .workableCasingRenderer(
		"gtceu:block/casings/solid/machine_casing_inert_ptfe",
        "gtceu:block/multiblock/large_chemical_reactor",false
	);

 

/*
// xD made by chatgpt and help from the Original GT discord server ... but could not get it to work ... sadly

const MMDefinition = Java.loadClass('com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition');

// Correctly reference the large chemical reactor
const largeChemicalReactor = MMDefinition.LARGE_CHEMICAL_REACTOR;
console.log(Object.keys(MMDefinition));

//const largeChemicalReactor = MMDefinition.getBuilt('large_chemical_reactor');
//console.log(largeChemicalReactor);
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



});
