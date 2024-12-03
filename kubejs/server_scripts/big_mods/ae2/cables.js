ServerEvents.recipes((event) => {

    const greg = event.recipes.gtceu;


    event.remove({id: "ae2:network/cables/covered_fluix"});
    event.remove({id: "ae2:network/cables/dense_smart_fluix_clean"});
    event.remove({id: "ae2:network/cables/dense_covered_fluix_clean"});
    event.remove({id: "ae2:network/cables/smart_fluix"});
    event.remove({id: "ae2:network/cables/dense_smart_fluix"});
    event.remove({id: "ae2:network/cables/dense_smart_from_smart"});
    event.remove({id: "ae2:network/cables/dense_covered_fluix"});


    // Cable Anchor
    event.remove({id: "ae2:network/parts/cable_anchor"});
    greg
        .extruder("gfs:cable_anchor")
        .itemInputs("#forge:plates/steel")
        .notConsumable("gtceu:bolt_extruder_mold")
        .itemOutputs("8x ae2:cable_anchor")
        .duration(20)
        .EUt(16);

    // Quartz Fibers
    event.remove({id: "ae2:network/parts/quartz_fiber_part"});
    greg
        .alloy_smelter("gfs:quartz_fibers")
        .itemInputs("6x #forge:dusts/certus_quartz", "2x ae2:quartz_glass")
        .itemOutputs("4x ae2:quartz_fiber")
        .duration(60)
        .EUt(16);

    // Glass Cable
    greg.alloy_smelter("gfs:fluix_glass_cable")
        .itemInputs("2x ae2:quartz_fiber", "4x ae2:fluix_crystal")
        .itemOutputs("2x ae2:fluix_glass_cable")
        .duration(80)
        .EUt(16);


    //Colouring/Uncolouring Cables with a Chemical Bath

    const colours = [
        "black",
        "blue",
        "brown",
        "cyan",
        "green",
        "gray",
        "lime",
        "light_blue",
        "light_gray",
        "magenta",
        "orange",
        "purple",
        "red",
        "white",
        "yellow",
        "pink",
    ];

    const cableTypes =
        ["smart", "covered", "glass", "covered_dense", "smart_dense"]
    ;
    cableTypes.forEach((type) => {
        colours.forEach((dye) => {
            event.remove({id: `ae2:network/cables/${type}_${dye}`});
            event.remove({id: `ae2:network/cables/dense_smart_${dye}`});
            event.remove({id: `ae2:network/cables/dense_covered_${dye}`});

            greg.chemical_bath(`gfs:coloring_to_${dye}_${type}_cable`)
                .itemInputs(`8x ae2:fluix_${type}_cable`)
                .inputFluids(`gtceu:${dye}_dye 36`)
                .itemOutputs(`8x ae2:${dye}_${type}_cable`)
                .duration(280)
                .EUt(100);
        });
        event.remove({id: `ae2:network/cables/${type}_fluix_clean`});


        greg.chemical_bath(`gfs:cleaning_colored_${type}_cable`)
            .itemInputs(`8x #ae2:${type}_cable`)
            .inputFluids('gtceu:chlorine 100')
            .itemOutputs(`8x ae2:fluix_${type}_cable`)
            .duration(280)
            .EUt(100);

    });


    const rubberType = [
        ["gtceu:rubber", 144],
        ["gtceu:silicone_rubber", 72],
        ["gtceu:styrene_butadiene_rubber", 36]
    ];

    //Coating ae2 cables with rubber for covered cable
    rubberType.forEach((rubber) => {

        greg.assembler(`gfs:${rubber[0].slice(rubber[0].indexOf(":") + 1)}_covered_cable`)
            .itemInputs(`ae2:fluix_glass_cable`)
            .inputFluids(`${rubber[0]} ${rubber[1]}`)
            .itemOutputs(`ae2:fluix_covered_cable`)
            .duration(100)
            .EUt(69);

    });


    greg
        .assembler("gfs:smart_f_covered")
        .itemInputs("8x ae2:fluix_covered_cable", "#gtceu:circuits/lv")
        .itemOutputs("8x ae2:fluix_smart_cable")
        .duration(200)
        .EUt(8);

    greg
        .compressor("gfs:dense_f_covered")
        .itemInputs("4x ae2:fluix_covered_cable")
        .itemOutputs("ae2:fluix_covered_dense_cable")
        .duration(400)
        .EUt(6);

    greg
        .compressor("gfs:smart_dense_f_smart")
        .itemInputs("4x ae2:fluix_smart_cable")
        .itemOutputs("ae2:fluix_smart_dense_cable")
        .duration(400)
        .EUt(10);

    greg
        .assembler("gfs:smart_dense_f_dense")
        .itemInputs("8x ae2:fluix_covered_dense_cable", "#gtceu:circuits/mv")
        .itemOutputs("8x ae2:fluix_smart_dense_cable")
        .duration(200)
        .EUt(10);

});

