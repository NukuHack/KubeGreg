priority: -100

// Large Chemical Reactor - making it acept more than 2 energy hatches

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('huge_chemical_reactor')	 // name of the multiblock
		.category('gfs')	// name of the recipe category
		.setEUIO('in')				  // energy transport way
		.setMaxIOSize(6, 6, 6, 6)	   // in out , floud in fluid out
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
			.where('A', Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMinGlobalLimited(1).setMaxGlobalLimited(8))
				.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()))
			)
			.where('E', Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2)
				.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())))
			.where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()).setMinGlobalLimited(18)
				.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())))
			.where('D', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()).setMinGlobalLimited(30))
			.where('B', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()).setMinGlobalLimited(30)
				.or(Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())))
			// Build the pattern
			.build()
		)
		// stole some "shape info" from other modpacks
		.shapeInfo(controller => MultiblockShapeInfo.builder()
			.aisle('EEEED', 'BBDBB', 'BBDBB', 'BBDBB', 'DDMDD')
			.aisle('DDDDD', 'BPPPB', 'BPPPB', 'BDDDB', 'FDDDG')
			.aisle('DDDDD', 'DPPPD', 'DPPPD', 'DDDDD', 'FDHDG')
			.aisle('DDDDD', 'BPPPB', 'BPPPB', 'BDDDB', 'FDDDG')
			.aisle('DDCDD', 'BBDBB', 'BBDBB', 'BBDBB', 'IIDOO')

			.where('C', controller, Direction.SOUTH)
			.where('F', GTMachines.FLUID_IMPORT_HATCH[3], Direction.WEST)
			.where('I', GTMachines.ITEM_IMPORT_BUS[3], Direction.WEST)

			.where('G', GTMachines.FLUID_EXPORT_HATCH[3], Direction.EAST)
			.where('O', GTMachines.ITEM_EXPORT_BUS[3], Direction.EAST)

			["where(char,net.minecraft.world.level.block.state.BlockState)"]('M', Block.getBlock('gtceu:maintenance_hatch').defaultBlockState().setValue(BlockProperties.FACING, Direction.NORTH))
			//PartAbility.MAINTENANCE
			["where(char,net.minecraft.world.level.block.state.BlockState)"]('H', Block.getBlock('gtceu:iv_parallel_hatch').defaultBlockState().setValue(BlockProperties.FACING, Direction.UP))
			//PartAbility.PARALLEL_HATCH

			.where('E', GTMachines.ENERGY_INPUT_HATCH[3], Direction.NORTH)
			.where('P', GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get())
			.where('D', GTBlocks.CASING_PTFE_INERT.get())
			.where('B', GTBlocks.COIL_CUPRONICKEL.get())

			.build()
		)

		.workableCasingRenderer(
			"gtceu:block/casings/solid/machine_casing_inert_ptfe",
			"gtceu:block/multiblock/large_chemical_reactor",false
		);

});
