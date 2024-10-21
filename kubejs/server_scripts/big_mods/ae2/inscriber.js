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
            .duration(600);
        greg.inscriber("gfs:" + name + "_print")
            .itemInputs("#forge:plates/" + ingredient)
            .notConsumable(mod + name + "_press")
            .itemOutputs(mod + "printed_" + name)
            .inputFluids(Fluid.of("minecraft:water", 500))
            .EUt(240)
            .duration(300);
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
                .duration(200);
            greg.inscriber("gfs:" + name + "_solder")
                .itemInputs(mod + "printed_" + name, "ae2:printed_silicon", "#gtceu:circuits/hv")
                .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
                .itemOutputs(mod + name)
                .EUt(240)
                .duration(160);
            greg.inscriber("gfs:" + name + "_polybenzimidazole")
                .itemInputs(mod + "printed_" + name, "ae2:printed_silicon", "#gtceu:circuits/hv")
                .inputFluids(Fluid.of("gtceu:polybenzimidazole", 144))
                .itemOutputs(mod + name)
                .EUt(240)
                .duration(120);
        }
    }
    press_recipe("ae2:", "logic_processor", "yellow", "electrum");
    press_recipe("ae2:", "calculation_processor", "white", "certus_quartz");
    press_recipe("ae2:", "engineering_processor", "blue", "diamond");
    press_recipe("megacells:", "accumulation_processor", "black", "black_steel");
    press_recipe("ae2:", "silicon", "gray", "silicon");
	
	
	
	event.shapeless("gfs:stupid_press",["ae2:logic_processor_press","ae2:calculation_processor_press",
	"ae2:silicon_press","ae2:engineering_processor_press","megacells:accumulation_processor_press"]);
	
    greg.inscriber("gfs:stupid_print_logic")
        .itemInputs("#forge:plates/electrum")
        .notConsumable("gfs:stupid_press")
        .itemOutputs("ae2:printed_logic_processor")
        .inputFluids(Fluid.of("gtceu:lubricant", 500))
        .EUt(240)
        .duration(240);
    greg.inscriber("gfs:stupid_print_calculation")
        .itemInputs("#forge:plates/certus_quartz")
        .notConsumable("gfs:stupid_press")
        .itemOutputs("ae2:printed_calculation_processor")
        .inputFluids(Fluid.of("gtceu:lubricant", 500))
        .EUt(240)
        .duration(240);
    greg.inscriber("gfs:stupid_print_silicon")
        .itemInputs("#forge:plates/silicon")
        .notConsumable("gfs:stupid_press")
        .itemOutputs("ae2:printed_silicon")
        .inputFluids(Fluid.of("gtceu:lubricant", 500))
        .EUt(240)
        .duration(240);
    greg.inscriber("gfs:stupid_print_engineering")
        .itemInputs("#forge:plates/diamond")
        .notConsumable("gfs:stupid_press")
        .itemOutputs("ae2:printed_engineering_processor")
        .inputFluids(Fluid.of("gtceu:lubricant", 500))
        .EUt(240)
        .duration(240);
    greg.inscriber("gfs:stupid_print_accumulation")
        .itemInputs("#forge:plates/black_steel")
        .notConsumable("gfs:stupid_press")
        .itemOutputs("ae2:printed_accumulation_processor")
        .inputFluids(Fluid.of("gtceu:lubricant", 500))
        .EUt(240)
        .duration(240);
	
});
