ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;



    event.shaped(
        "ae2:inscriber",
        ["ABA", "A C", "ABA"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "gtceu:hv_electric_piston",
            C: "gtceu:annealed_copper_plate"
        }
    );

    const plasticS = [
        ["polyethynele", "gtceu:polyethynele"],
        ["silicone_rubber", "gtceu:silicone_rubber"],
        ["polytetrafluoroethylene", "gtceu:polytetrafluoroethylene"],
        ["polybenzimidazole", "gtceu:polybenzimidazole"],
        ["polyether_ether_ketone", "gtceu:polyether_ether_ketone"],
    ];

    const processors = [
        // Format: [name, ingredient, color, mod]
        ["logic_processor", "electrum", "yellow", "ae2:"],
        ["calculation_processor", "certus_quartz", "white", "ae2:"],
        ["engineering_processor", "diamond", "blue", "ae2:"],
        ["accumulation_processor", "black_steel", "black", "megacells:"],
        ["energy_processor", "red_steel", "red", "appflux:"],
        ["silicon", "silicon", "gray", "ae2:"],
    ];

// Loop to generate recipes
    processors.forEach(([name, ingredient, color, mod]) => {
        // Bad inscriber recipes
        greg.inscriber(`gfs:stupid_print_${name.split("_")[0]}`)
            .itemInputs(`#forge:plates/${ingredient}`)
            .notConsumable("gfs:stupid_press")
            .itemOutputs(`${mod}printed_${name}`)
            .inputFluids("gtceu:lubricant 500")
            .EUt(240)
            .duration(20 * 15);

        // Laser engraver recipe for presses
        greg.laser_engraver(`gfs:${name}_press`)
            .itemInputs("#forge:plates/stainless_steel")
            .notConsumable(`#forge:lenses/${color}`)
            .itemOutputs(`${mod}${name}_press`)
            .EUt(480)
            .duration(600);

        // Greg inscriber recipes
        greg.inscriber(`gfs:${name}_print`)
            .itemInputs(`#forge:plates/${ingredient}`)
            .notConsumable(`${mod}${name}_press`)
            .itemOutputs(`${mod}printed_${name}`)
            .inputFluids(Fluid.of("minecraft:water", 1000))
            .EUt(240)
            .duration(300);

        greg.inscriber(`gfs:${name}_print_fast`)
            .itemInputs(`#forge:plates/${ingredient}`)
            .notConsumable(`${mod}${name}_press`)
            .itemOutputs(`${mod}printed_${name}`)
            .inputFluids(Fluid.of("gtceu:lubricant", 500))
            .EUt(240)
            .duration(160);

        if (!(name == "silicon")) {
            plasticS.forEach(([suffix, fluid], index) => {
                greg.inscriber(`gfs:${name}/${suffix}`)
                    .itemInputs(`${mod}printed_${name}`, "ae2:printed_silicon", "#gtceu:circuits/hv")
                    .inputFluids(Fluid.of(fluid, 576 / (2 ** index)))
                    .itemOutputs(`${mod}${name}`)
                    .EUt(240)
                    .duration(240 - (40 * index));
            });
        }
    });


    event.shapeless("gfs:stupid_press", [
        "ae2:logic_processor_press", "ae2:calculation_processor_press",
        "ae2:silicon_press", "ae2:engineering_processor_press",
        "megacells:accumulation_processor_press", "appflux:energy_processor_press"
    ]);


});
