ServerEvents.recipes((event) => {

    const greg = event.recipes.gtceu;


    greg
        .assembler("gfs:ex_interface")
        .itemInputs("gtceu:ev_robot_arm", "ae2:interface", "gtceu:ev_conveyor_module", "ae2:annihilation_core", "gtceu:ev_machine_hull",
            "ae2:formation_core", "2x ae2:fluix_glass_cable", "ae2:logic_processor")
        .itemOutputs("expatternprovider:ex_interface")
        .duration(200)
        .EUt(1920);

    greg
        .assembler("gfs:ex_pattern_provider")
        .itemInputs("gtceu:ev_robot_arm", "ae2:pattern_provider", "gtceu:ev_conveyor_module", "ae2:annihilation_core", "gtceu:ev_machine_hull",
            "ae2:formation_core", "2x ae2:fluix_glass_cable", "ae2:logic_processor")
        .itemOutputs("expatternprovider:ex_pattern_provider")
        .duration(200)
        .EUt(1920);

    let [res_cwu, res_dur, res_eut] = volt_to_research["iv"];
    greg
        .assembly_line("gfs:wireless_connector")
        .itemInputs(
            "gtceu:luv_machine_casing",
            "2x gtceu:luv_sensor",
            "gtceu:luv_emitter",
            "gtceu:quantum_star"
        )
        .inputFluids("gtceu:radon 1000")
        .itemOutputs("2x expatternprovider:wireless_connect")
        .duration(200)
        .stationResearch(b =>
            b.researchStack(Item.of('gtceu:naquadah_bolt'))
                .dataStack(Item.of("gtceu:data_orb"))
                .CWUt(res_cwu, res_dur)
                .EUt(res_eut)
        )
        .EUt(8192);

    greg
        .assembler("gfs:ae_ingredient_buffer")
        .itemInputs("gtceu:hv_robot_arm", "gtceu:ev_conveyor_module", "gtceu:ev_machine_hull",
            "2x ae2:fluix_glass_cable", "ae2:logic_processor", "ae2:calculation_processor")
        .itemOutputs("expatternprovider:ingredient_buffer")
        .duration(200)
        .EUt(1920);

    greg.assembler("gfs:ex_drive")
        .itemInputs("2x gtceu:ev_machine_hull", "8x ae2:engineering_processor",
            "12x ae2:fluix_glass_cable", "4x ae2:quartz_glass", "2x ae2:drive")
        .itemOutputs("expatternprovider:ex_drive")
        .EUt(1920)
        .duration(400);

    greg
        .assembler("gfs:ex_molecular_assembler")
        .itemInputs("gtceu:ev_robot_arm", "ae2:quartz_glass", "gtceu:ev_conveyor_module", "ae2:annihilation_core", "gtceu:ev_machine_hull",
            "ae2:formation_core", "2x ae2:fluix_glass_cable", "ae2:molecular_assembler")
        .itemOutputs("expatternprovider:ex_molecular_assembler")
        .duration(200)
        .EUt(1920);

    event.shaped("expatternprovider:pattern_modifier", ["PDP", "AKB", "PCP"], {
        P: "#forge:plates/ultimet",
        D: "gtceu:computer_monitor_cover",
        A: "ae2:logic_processor",
        K: "#gtceu:circuits/luv",
        B: "ae2:engineering_processor",
        C: "ae2:calculation_processor",
    });


    // infinite cells
    greg
        .assembler("gfs:infinite_cell_water")
        .itemInputs("64x ae2:fluid_cell_housing", "64x megacells:mega_fluid_cell_housing", "2x megacells:fluid_storage_cell_256m",
            "2x megacells:bulk_item_cell", "32x gtceu:infinite_water_cover")
        .inputFluids(Fluid.of("minecraft:water", 32000))
        .itemOutputs(
            Item.of(
                "expatternprovider:infinity_cell",
                '{record:{"#c":"ae2:f",id:"minecraft:water"}}'
            )
        )
        .duration(1200)
        .EUt(50000);


    greg
        .assembler("gfs:infinite_cell_milk")
        .itemInputs("64x ae2:fluid_cell_housing", "64x megacells:mega_fluid_cell_housing", "megacells:fluid_storage_cell_256m",
            "megacells:bulk_item_cell", "32x cookingforblockheads:cow_jar")
        .inputFluids(Fluid.of("minecraft:milk", 32000))
        .itemOutputs(
            Item.of(
                "expatternprovider:infinity_cell",
                '{record:{"#c":"ae2:f",id:"minecraft:milk"}}'
            )
        )
        .duration(1200)
        .EUt(50000);


    greg
        .assembler("gfs:infinite_cell_lava")
        .itemInputs("64x ae2:fluid_cell_housing", "64x megacells:mega_fluid_cell_housing", "4x megacells:fluid_storage_cell_256m",
            "8x megacells:bulk_item_cell", "32x cobblefordays:tier_5",
            "32x lava_source:diamond_lava_source_furnace")
        .inputFluids(Fluid.of("minecraft:lava", 32000))
        .itemOutputs(
            Item.of(
                "expatternprovider:infinity_cell",
                '{record:{"#c":"ae2:f",id:"minecraft:lava"}}'
            )
        )
        .duration(2400)
        .EUt(50000);


    greg
        .assembler("gfs:infinite_cell_cobble")
        .itemInputs("64x ae2:item_cell_housing", "64x megacells:mega_item_cell_housing", "16x megacells:item_storage_cell_256m",
            "16x megacells:bulk_item_cell", "64x cobblefordays:tier_5"
            , Item.of(
                "expatternprovider:infinity_cell",
                '{record:{"#c":"ae2:f",id:"minecraft:lava"}}'
            ),
            Item.of(
                "expatternprovider:infinity_cell",
                '{record:{"#c":"ae2:f",id:"minecraft:water"}}'
            ))
        .inputFluids(Fluid.of("gtceu:oxigen", 32000))
        .itemOutputs(
            Item.of(
                "expatternprovider:infinity_cell",
                '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'
            )
        )
        .duration(4800)
        .EUt(50000);


// lol inf programmed circuits


    for (let index = 0; index < 33; index++) {
        event.shaped(Item.of("expatternprovider:infinity_cell", `{record:{"#c":"ae2:i",id:"gtceu:programmed_circuit",tag:{Configuration:${index}}}}`), [
            "BAB",
            "ADA",
            "CCC"
        ], {
            A: Item.of("gtceu:programmed_circuit", `{Configuration:${index}}`).weakNBT(),
            B: "ae2:quartz_glass",
            C: "minecraft:diamond",
            D: "ae2:cell_component_16k"
        })
    }

});
