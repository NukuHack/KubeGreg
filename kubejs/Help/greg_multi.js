

const $RecipeIO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');
const $ItemStackHashStrategy = Java.loadClass('com.gregtechceu.gtceu.utils.ItemStackHashStrategy');
const $ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');
const $GTHashMaps = Java.loadClass('com.gregtechceu.gtceu.utils.GTHashMaps');

const $Collections = Java.loadClass('java.util.Collections');
const $Object2IntOpenCustomHashMap = Java.loadClass('it.unimi.dsi.fastutil.objects.Object2IntOpenCustomHashMap');
const $Objects = Java.loadClass('java.util.Objects');
const $CosmicPartAbility = Java.loadClass('com.ghostipedia.cosmiccore.api.machine.part.CosmicPartAbility');


GTCEuStartupEvents.registry('gtceu:machine', event => {
	
 // original LCR making (originally in Java not in Js but who cares)
    public static final MultiblockMachineDefinition LARGE_CHEMICAL_REACTOR = REGISTRATE
            .multiblock("large_chemical_reactor", WorkableElectricMultiblockMachine::new)
            .tooltips(GTMachines.defaultEnvironmentRequirement())
            .rotationState(RotationState.ALL)
            .recipeType(GTRecipeTypes.LARGE_CHEMICAL_RECIPES)
            .recipeModifiers(GTRecipeModifiers.DEFAULT_ENVIRONMENT_REQUIREMENT,
                    GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK_SUBTICK))
            .appearanceBlock(CASING_PTFE_INERT)
            .pattern(definition -> {
                var casing = blocks(CASING_PTFE_INERT.get()).setMinGlobalLimited(10);
                var abilities = Predicates.autoAbilities(definition.getRecipeTypes())
                        .or(Predicates.autoAbilities(true, false, false));
                return FactoryBlockPattern.start()
                        .aisle("XXX", "XCX", "XXX")
                        .aisle("XCX", "CPC", "XCX")
                        .aisle("XXX", "XSX", "XXX")
                        .where('S', Predicates.controller(blocks(definition.getBlock())))
                        .where('X', casing.or(abilities))
                        .where('P', blocks(CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
                        .where('C', blocks(COIL_CUPRONICKEL.get()).setExactLimit(1)
                                .or(abilities)
                                .or(casing))
                        .build();
            })
            .shapeInfos(definition -> {
                ArrayList<MultiblockShapeInfo> shapeInfo = new ArrayList<>();
                var baseBuilder = MultiblockShapeInfo.builder()
                        .where('S', definition, Direction.NORTH)
                        .where('X', CASING_PTFE_INERT.getDefaultState())
                        .where('P', CASING_POLYTETRAFLUOROETHYLENE_PIPE.getDefaultState())
                        .where('C', COIL_CUPRONICKEL.getDefaultState())
                        .where('I', ITEM_IMPORT_BUS[3], Direction.NORTH)
                        .where('E', ENERGY_INPUT_HATCH[3], Direction.NORTH)
                        .where('O', ITEM_EXPORT_BUS[3], Direction.NORTH)
                        .where('F', FLUID_IMPORT_HATCH[3], Direction.NORTH)
                        .where('M', MAINTENANCE_HATCH, Direction.NORTH)
                        .where('H', FLUID_EXPORT_HATCH[3], Direction.NORTH);
                shapeInfo.add(baseBuilder.shallowCopy()
                        .aisle("IXO", "FSH", "XMX")
                        .aisle("XXX", "XPX", "XXX")
                        .aisle("XEX", "XCX", "XXX")
                        .build());
                shapeInfo.add(baseBuilder.shallowCopy()
                        .aisle("IXO", "FSH", "XMX")
                        .aisle("XXX", "XPX", "XCX")
                        .aisle("XEX", "XXX", "XXX")
                        .build());
                shapeInfo.add(baseBuilder.shallowCopy()
                        .aisle("IXO", "FSH", "XMX")
                        .aisle("XCX", "XPX", "XXX")
                        .aisle("XEX", "XXX", "XXX")
                        .build());
                shapeInfo.add(baseBuilder.shallowCopy()
                        .aisle("IXO", "FSH", "XMX")
                        .aisle("XXX", "CPX", "XXX")
                        .aisle("XEX", "XXX", "XXX")
                        .build());
                shapeInfo.add(baseBuilder.shallowCopy()
                        .aisle("IXO", "FSH", "XMX")
                        .aisle("XXX", "XPC", "XXX")
                        .aisle("XEX", "XXX", "XXX")
                        .build());
                return shapeInfo;
            })
            .workableCasingRenderer(GTCEu.id("block/casings/solid/machine_casing_inert_ptfe"),
                    GTCEu.id("block/multiblock/large_chemical_reactor"))
            .compassSections(GTCompassSections.TIER[HV])
            .compassNodeSelf()
            .register();

	
    event.create('machine_name', 'multiblock')
	    
        //.rotationState(RotationState.NON_Y_AXIS)
        .rotationState(RotationState.ALL)
	    
        .recipeType('machine_name')
	    
        .appearanceBlock(GTBlocks.<"a gt block">)
	/*
	        GTBlocks.CASING_TITANIUM_STABLE
		GTBlocks.CASING_STAINLESS_CLEAN
		GTBlocks.CASING_STEEL_SOLID
		GTBlocks.CASING_TITANIUM_STABLE
    		GTBlocks.CASING_ASSEMBLY_LINE
      		GTBlocks.CASING_ASSEMBLY_CONTROL
    		GTBlocks.CASING_HSSE_STURDY
      
		GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX
      
		GTBlocks.CASING_TEMPERED_GLASS
		GTBlocks.CASING_LAMINATED_GLASS
  
  		GTBlocks.COIL_CUPRONICKEL
    
		GTBlocks.COMPUTER_HEAT_VENT
  		GTBlocks.COMPUTER_CASING
  	*/
		
			
			
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
			
        .pattern(definition => FactoryBlockPattern.start()
		
		// a lot more needed xD
            .aisle('#')

		
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where(' ', Predicates.air())
		
            .where('M', Predicates.blocks('minecraft:stone')	// can be basically any block or any GTBlocks.<block>
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_LASER))
		   
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
		   
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.OPTICAL_DATA_RECEPTION))
                .or(Predicates.abilities(PartAbility.DATA_ACCESS))
                .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION))
		   
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
		   
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))

		//.or(Predicates.autoAbilities(definition.getRecipeTypes())))
		
            )
		
            .build())
			
        .workableCasingRenderer(
		'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
		//'gtceu:block/casings/solid/machine_casing_stable_titanium' or any kind of block with the correct path
		'gtceu:block/machines/rock_crusher', false
	);


});
