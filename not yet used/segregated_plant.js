
event.create("separated_plant", "multiblock", (holder) => new $StorageMachine(holder, 1))
    .rotationState(RotationState.ALL)
    .recipeType("centrifuge")
    .recipeType("thermal_centrifuge")
    .recipeType("electrolyzer")
    .recipeType("sifter")
    .recipeType("macerator")
    .recipeType("extractor")
    .recipeModifiers([(machine, recipe) => GTRecipeModifiers.reduction(machine, recipe, 0.8, 0.9), (machine, recipe) => GTRecipeModifiers.accurateParallel(machine, recipe, Math.min(16, 4 * (machine.self().getTier() - 1)), false).getFirst(), GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
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
            .where("c", Predicates.blocks("gtceu:bronze_pipe_casing"))
            .build())
    .beforeWorking(machine => {
        let tier = machine.self().getTier()
        let isrecipe = false
        switch (machine.self().getRecipeType()) {
            case GTRecipeTypes.CENTRIFUGE_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_centrifuge"
                break
            case GTRecipeTypes.THERMAL_CENTRIFUGE_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_thermal_centrifuge"
                break
            case GTRecipeTypes.ELECTROLYZER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_electrolyzer"
                break
            case GTRecipeTypes.SIFTER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_sifter"
                break
            case GTRecipeTypes.MACERATOR_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_macerator"
                break
            case GTRecipeTypes.EXTRACTOR_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_extractor"
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
