

const $RecipeIO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');
const $ItemStackHashStrategy = Java.loadClass('com.gregtechceu.gtceu.utils.ItemStackHashStrategy');
const $ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');
const $GTHashMaps = Java.loadClass('com.gregtechceu.gtceu.utils.GTHashMaps');

const $Collections = Java.loadClass('java.util.Collections');
const $Object2IntOpenCustomHashMap = Java.loadClass('it.unimi.dsi.fastutil.objects.Object2IntOpenCustomHashMap');
const $Objects = Java.loadClass('java.util.Objects');
const $CosmicPartAbility = Java.loadClass('com.ghostipedia.cosmiccore.api.machine.part.CosmicPartAbility');


GTCEuStartupEvents.registry('gtceu:machine', event => {
	
    //.or(Predicates.autoAbilities(definition.getRecipeTypes())))

    event.create('arboreal_growth_facility', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('arboreal_growth_facility')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##TTT##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##TTT##', '#######')
            .aisle('#TTTTT#', '#FTMTF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#TTTTT#', '##SSS##')
            .aisle('TTTTTTT', 'STMMMTS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'TT###TT', '#SSSSS#')
            .aisle('TTTTTTT', 'GMMMMMG', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'T#####T', '#SSPSS#')
            .aisle('TTTTTTT', 'STMMMTS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'TT###TT', '#SSSSS#')
            .aisle('#TTTTT#', '#FTMTF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#TTTTT#', '##SSS##')
            .aisle('##TCT##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##TTT##', '#######')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('M', Predicates.blocks('minecraft:moss_carpet'))
            .where('P', Predicates.blocks('cosmiccore:antiblock_white'))
            .where('F', Predicates.blocks('gtceu:terrasteel_frame'))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/machines/mana_fluidizer', false);






    event.create('industrial_stoneworks', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_stoneworks')
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#TTT#', '#TTT#', '#TTT#')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('W', Predicates.blocks('minecraft:water'))
            .where('L', Predicates.blocks('minecraft:lava'))
            .where('Q', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium', 'gtceu:block/machines/rock_crusher', false);






    event.create('grand_assembly_line', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('assembly_line')
        // .recipeTypes(["pulse_exchange_steam_vent", "pulse_exchange_steam"])
        // ["recipeTypes(com.gregtechceu.gtceu.api.recipe.GTRecipeType[])"]('pulse_exchange_steam_vent','pulse_exchange_steam' )
        .appearanceBlock(GTBlocks.COMPUTER_CASING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 'CGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGC', 'VGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGV', 'CGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGC', '################################################',)
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 'VZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZV', 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ', 'VZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZV', 'CGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGC',)
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ', 'OXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXH', 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ', 'CGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGC',)
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 'VZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZV', 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ', 'VZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZVVZV', 'CGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGC',)
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 'CGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGC', 'VGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVGVVQV', 'CGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGCCGC', '################################################',)
            .where('Q', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('C', Predicates.blocks(GTBlocks.COMPUTER_CASING.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.INPUT_LASER))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.OPTICAL_DATA_RECEPTION))
                .or(Predicates.abilities(PartAbility.DATA_ACCESS))
                .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.INPUT_LASER))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.OPTICAL_DATA_RECEPTION))
                .or(Predicates.abilities(PartAbility.DATA_ACCESS))
                .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where('H', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('Z', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_LINE.get()))
            .where('X', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_CONTROL.get()))
            .where('V', Predicates.blocks(GTBlocks.COMPUTER_HEAT_VENT.get()))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .build())
        .workableCasingRenderer('gtceu:block/casings/hpca/computer_casing/side', 'gtceu:block/multiblock/network_switch', false);





        event.create('large_lithographic_processor', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('aio_lithography_processor')
        .appearanceBlock(GTBlocks.CASING_HSSE_STURDY)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('TTTTTTT', 'TGGGGGT', 'TTTTTTT','TGT####','TTT####')
            .aisle('TTTTTTT', 'GQQQQQG', 'TQTTTTT','GQG####','TTT####')
            .aisle('TTTTTTT', 'TGGGGGT', 'TCTTTTT','TGT####','TTT####')
            .where('#', Predicates.any())
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Q', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('A', Predicates.air())
            .where('T', Predicates.blocks(GTBlocks.CASING_HSSE_STURDY.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_sturdy_hsse', 'gtceu:block/machines/flora_nurturer', false);






});