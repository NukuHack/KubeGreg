ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    event.remove({output: "megacells:accumulation_processor_press"});
    event.remove({output: "megacells:printed_accumulation_processor"});
    event.remove({output: "megacells:accumulation_processor"});

    event.shaped(
        "ae2:inscriber",
        ["ABA", "A C", "ABA"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "gtceu:hv_electric_piston",
            C: "gtceu:annealed_copper_plate"
        }
    );

    const inscriber_greg = [
        ["ae2:", "logic_processor", "yellow", "electrum"],
        ["ae2:", "calculation_processor", "white", "certus_quartz"],
        ["ae2:", "engineering_processor", "blue", "diamond"],
        ["megacells:", "accumulation_processor", "black", "black_steel"],
        ["ae2:", "silicon", "gray", "silicon"],
    ];

    inscriber_greg.forEach(([mod, name, color, ingredient]) => {
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
        if (!(name == "silicon")) {
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
    });


    event.shapeless("gfs:stupid_press", ["ae2:logic_processor_press", "ae2:calculation_processor_press",
        "ae2:silicon_press", "ae2:engineering_processor_press", "megacells:accumulation_processor_press"]);

    const Bad_inscriber = [
        ["gfs:stupid_print_logic", "#forge:plates/electrum", "ae2:printed_logic_processor"],
        ["gfs:stupid_print_calculation", "#forge:plates/certus_quartz", "ae2:printed_calculation_processor"],
        ["gfs:stupid_print_silicon", "#forge:plates/silicon", "ae2:printed_silicon"],
        ["gfs:stupid_print_engineering", "#forge:plates/diamond", "ae2:printed_engineering_processor"],
        ["gfs:stupid_print_accumulation", "#forge:plates/black_steel", "megacells:printed_accumulation_processor"]
    ];

    Bad_inscriber.forEach(([id, inp, outp, eu, dur]) => {
        greg.inscriber(id)
            .itemInputs(inp)
            .notConsumable("gfs:stupid_press")
            .itemOutputs(outp)
            .inputFluids("gtceu:lubricant 500")
            .EUt(240)
            .duration(20 * 15);
    });


});
