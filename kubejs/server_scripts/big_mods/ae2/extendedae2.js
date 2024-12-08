ServerEvents.recipes((event) => {

    event.remove({output: "expatternprovider:infinity_cell"});
    // removing old inf-water and inf-cobble cells


    event.remove({output: "expatternprovider:ex_interface"});
    event.remove({output: "expatternprovider:interface_upgrade"});
    event.remove({output: "expatternprovider:ex_pattern_provider"});
    event.remove({output: "expatternprovider:pattern_provider_upgrade"});
    event.remove({output: "expatternprovider:wireless_connect"});
    event.remove({output: "expatternprovider:ingredient_buffer"});
    event.remove({output: "expatternprovider:ex_drive"});
    event.remove({output: "expatternprovider:drive_upgrade"});
    event.remove({output: "expatternprovider:ex_molecular_assembler"});
    event.remove({output: "expatternprovider:pattern_modifier"});


    const greg = event.recipes.gtceu;

    event.shaped(
        "expatternprovider:ex_interface",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:ev_robot_arm",
            B: "ae2:interface",
            C: "gtceu:ev_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:ev_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "ae2:logic_processor",
        }
    );

    // extended shits
    event.shaped(
        "expatternprovider:ex_pattern_provider",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:ev_robot_arm",
            B: "ae2:pattern_provider",
            C: "gtceu:ev_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:ev_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "ae2:logic_processor"
        }
    );

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
        .EUt(8192);

    event.shaped(
        "expatternprovider:ingredient_buffer",
        ["GMG", "AEC", "GHG"],
        {
            A: "gtceu:hv_robot_arm",
            C: "gtceu:ev_conveyor_module",
            E: "gtceu:ev_machine_hull",
            G: "ae2:fluix_glass_cable",
            H: "ae2:logic_processor",
            M: "ae2:calculation_processor"
        }
    );

    greg.assembler("gfs:ex_drive")
        .itemInputs("2x gtceu:ev_machine_hull", "8x ae2:engineering_processor",
            "12x ae2:fluix_glass_cable", "4x ae2:quartz_glass", "2x ae2:drive")
        .itemOutputs("expatternprovider:ex_drive")
        .EUt(1920)
        .duration(400);

    event.shaped(
        "expatternprovider:ex_molecular_assembler",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:ev_robot_arm",
            B: "ae2:quartz_glass",
            C: "gtceu:ev_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:ev_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "ae2:molecular_assembler"
        }
    );

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
