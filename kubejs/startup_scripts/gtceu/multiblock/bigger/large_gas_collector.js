
GTCEuStartupEvents.registry('gtceu:machine', event => {
// Atmospheric Accumulator
    event.create('atmospheric_accumulator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(GTRecipeTypes.GAS_COLLECTOR_RECIPES)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:corrosion_proof_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "C###C", "CCCCC", "C###C", "CCCCC", "C###C", "CCCCC")
            .aisle("CCCCC", "#GIG#", "CGGGC", "#GIG#", "CCCCC", "#GIG#", "CIIIC")
            .aisle("CCCCC", "#IOI#", "CGOGC", "#IOI#", "CCOCC", "#IOI#", "CIOIC")
            .aisle("CCCCC", "#GIG#", "CGGGC", "#GIG#", "CCCCC", "#GIG#", "CIIIC")
            .aisle("CC@CC", "C###C", "CCCCC", "C###C", "CCCCC", "C###C", "CCCCC")
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks("gtceu:engine_intake_casing"))
            .where('G', Predicates.blocks("gtceu:assembly_line_grating"))
            .where('O', Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where('C', Predicates.blocks("gtceu:corrosion_proof_casing").setMinGlobalLimited(70)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/corrosion_proof_casing",
            "gtceu:block/machines/gas_collector", false)

});