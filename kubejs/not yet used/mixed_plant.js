
event.create("mixed_plant", "multiblock", (holder) => new $StorageMachine(holder, 1))
    .rotationState(RotationState.ALL)
    .recipeType("chemical_reactor")
    .recipeType("mixer")
    .recipeType("chemical_bath")
    .recipeType("ore_washer")
    .recipeModifiers([(machine, recipe) => GTRecipeModifiers.reduction(machine, recipe, 0.8, 0.9), (machine, recipe) => GTRecipeModifiers.accurateParallel(machine, recipe, Math.min(16, 4 * (machine.self().getTier() - 1)), false).getFirst(), GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
    .appearanceBlock(() => Block.getBlock("kubejs:multi_functional_casing"))
    .pattern((definition) =>
        FactoryBlockPattern.start()
            .aisle("bbb", "bbb", "bbb")
            .aisle("bbb", "bcb", "bbb")
            .aisle("bbb", "bab", "bbb")
            .where("a", Predicates.controller(Predicates.blocks(definition.get())))
            .where("b", Predicates.blocks("kubejs:multi_functional_casing")
                .setMinGlobalLimited(14)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("c", Predicates.blocks("gtceu:steel_pipe_casing"))
            .build())
    .beforeWorking(machine => {
        let tier = machine.self().getTier()
        let isrecipe = false
        switch (machine.self().getRecipeType()) {
            case GTRecipeTypes.CHEMICAL_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_chemical_reactor"
                break
            case GTRecipeTypes.MIXER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_mixer"
                break
            case GTRecipeTypes.CHEMICAL_BATH_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_chemical_bath"
                break
            case GTRecipeTypes.ORE_WASHER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_ore_washer"
                break
            default:
                break
        }
        if (!isrecipe) {
            machine.getRecipeLogic().interruptRecipe()
        }
        return isrecipe
    })
    .additionalDisplay((controller, components) => {
        if (controller.isFormed()) {
            components.add(Component.translatable("gtceu.multiblock.parallel", Component.literal($FormattingUtil.formatNumbers(Math.min(16, 4 * (controller.self().getTier() - 1)))).darkPurple()).gray())
        }
    })
    .workableCasingRenderer("kubejs:block/multi_functional_casing", "gtceu:block/multiblock/gcym/large_assembler")
