
event.create("processing_plant", "multiblock", (holder) => new $StorageMachine(holder, 1))
    .rotationState(RotationState.ALL)
    .recipeType("bender")
    .recipeType("compressor")
    .recipeType("forge_hammer")
    .recipeType("cutter")
    .recipeType("extruder")
    .recipeType("lathe")
    .recipeType("wiremill")
    .recipeType("forming_press")
    .recipeType("polarizer")
    .recipeType("laser_engraver")
    .recipeType("fluid_solidifier")
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
            .where("c", Predicates.blocks("gtceu:bronze_gearbox"))
            .build())
    .beforeWorking(machine => {
        let tier = machine.self().getTier()
        let isrecipe = false
        switch (machine.self().getRecipeType()) {
            case GTRecipeTypes.BENDER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_bender"
                break
            case GTRecipeTypes.COMPRESSOR_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_compressor"
                break
            case GTRecipeTypes.FORGE_HAMMER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_forge_hammer"
                break
            case GTRecipeTypes.CUTTER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_cutter"
                break
            case GTRecipeTypes.EXTRUDER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_extruder"
                break
            case GTRecipeTypes.LATHE_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_lathe"
                break
            case GTRecipeTypes.WIREMILL_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_wiremill"
                break
            case GTRecipeTypes.FORMING_PRESS_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_forming_press"
                break
            case GTRecipeTypes.POLARIZER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_polarizer"
                break
            case GTRecipeTypes.FLUID_SOLIDFICATION_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_fluid_solidifier"
                break
            case GTRecipeTypes.LASER_ENGRAVER_RECIPES:
                isrecipe = machine.getMachineStorageItem().getId() == "gtceu:" + tiers[tier][0] + "_laser_engraver"
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
