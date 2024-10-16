ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;


    event.shaped(
        "ae2:charger",
        ["ABA", "A  ", "ABA"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "gtceu:annealed_copper_plate"
        }
    );
    event.shaped(
        "ae2:inscriber",
        ["ABA", "A C", "ABA"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "gtceu:hv_electric_piston",
            C: "gtceu:annealed_copper_plate"
        }
    );

    function press_recipe(mod, name, color, ingredient) {
        greg.laser_engraver("gfs:" + name + "_press")
            .itemInputs("gtceu:stainless_steel_plate")
            .notConsumable("#forge:lenses/" + color)
            .itemOutputs(mod + name + "_press")
            .EUt(480)
            .duration(1600);
        greg.inscriber("gfs:" + name + "_print")
            .itemInputs("#forge:plates/" + ingredient)
            .notConsumable(mod + name + "_press")
            .itemOutputs(mod + "printed_" + name)
            .inputFluids(Fluid.of("minecraft:water", 500))
            .EUt(240)
            .duration(240);
        greg.inscriber("gfs:" + name + "_print_fast")
            .itemInputs("#forge:plates/" + ingredient)
            .notConsumable(mod + name + "_press")
            .itemOutputs(mod + "printed_" + name)
            .inputFluids(Fluid.of("gtceu:lubricant", 500))
            .EUt(240)
            .duration(160);
        if (!(name=="silicon")) {
            greg.inscriber("gfs:" + name + "_tin")
                .itemInputs(mod + "printed_" + name, "ae2:printed_silicon", "#gtceu:circuits/hv")
                .inputFluids(Fluid.of("gtceu:tin", 576))
                .itemOutputs(mod + name)
                .EUt(240)
                .duration(240);
            greg.inscriber("gfs:" + name + "_solder")
                .itemInputs(mod + "printed_" + name, "ae2:printed_silicon", "#gtceu:circuits/hv")
                .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
                .itemOutputs(mod + name)
                .EUt(240)
                .duration(200);
            greg.inscriber("gfs:" + name + "_polybenzimidazole")
                .itemInputs(mod + "printed_" + name, "ae2:printed_silicon", "#gtceu:circuits/hv")
                .inputFluids(Fluid.of("gtceu:polybenzimidazole", 144))
                .itemOutputs(mod + name)
                .EUt(240)
                .duration(140);
        }
    }
    press_recipe("ae2:", "logic_processor", "yellow", "electrum");
    press_recipe("ae2:", "calculation_processor", "white", "certus_quartz");
    press_recipe("ae2:", "engineering_processor", "blue", "diamond");
    press_recipe("megacells:", "accumulation_processor", "black", "black_steel");
    press_recipe("ae2:", "silicon", "gray", "silicon");
});
