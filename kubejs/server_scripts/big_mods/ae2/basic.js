priority : 1

ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    event.replaceInput([{mod: "ae2"}, {mod: "expatternprovider"}],
        "#forge:ingots/iron", "#forge:plates/stainless_steel");
    event.replaceInput([{mod: "ae2"}, {mod: "expatternprovider"}],
        "#forge:ingots/gold", "#forge:plates/gold");
    event.replaceInput([{mod: "ae2"}, {mod: "expatternprovider"}],
        "#forge:ingots/copper", "#forge:plates/bronze");
    event.replaceInput([{mod: "ae2"}, {mod: "expatternprovider"}, {mod: "megacells"}],
        "#forge:dusts/redstone", "#forge:foils/red_alloy");
    event.replaceInput([{mod: "ae2"}, {mod: "expatternprovider"}, {mod: "megacells"}],
        "#forge:dusts/glowstone", "#forge:plates/glowstone");

    event.replaceInput({input: "#forge:dusts/certus_quartz"}, "#forge:dusts/certus_quartz", "#forge:dusts/certus_quartz");
    event.replaceInput({input: "#forge:dusts/ender_pearl"}, "#forge:dusts/ender_pearl", "#forge:dusts/ender_pearl");



    // Basic Materials gregified


    greg.mixer("gfs:fluix_dust")
        .itemInputs("ae2:charged_certus_quartz_crystal", "minecraft:redstone", "minecraft:quartz")
        .inputFluids(Fluid.of("minecraft:water", 100))
        .itemOutputs("2x #forge:dusts/fluix")
        .EUt(100)
        .duration(300);
    greg.mixer("gfs:fluix_dust_faster")
        .itemInputs("ae2:charged_certus_quartz_crystal", "minecraft:redstone", "minecraft:quartz")
        .inputFluids(Fluid.of("gtceu:distilled_water", 100))
        .itemOutputs("2x #forge:dusts/fluix")
        .EUt(100)
        .duration(200);

    // Charged Certus Quartz
    greg
        .polarizer("gfs:charged_certus_quartz")
        .itemInputs("#forge:gems/certus_quartz")
        .itemOutputs("#forge:gems/charged")
        .duration(100)
        .EUt(16);

    greg.mixer("gfs:sky_dust")
        .itemInputs("6x gtceu:certus_quartz_dust", "4x minecraft:redstone",
            "2x gtceu:ender_eye_dust", "5x gtceu:deepslate_dust")
        .inputFluids(Fluid.of("gtceu:ender_air", 100))
        .itemOutputs("2x #forge:dusts/sky_stone")
        .EUt(200)
        .duration(240);

    greg.macerator("gfs:fluix_dust")
        .itemInputs("#forge:gems/fluix")
        .itemOutputs("#forge:dusts/fluix")
        .EUt(8)
        .duration(80);

    greg.forge_hammer("gfs:sky_dust")
        .itemInputs("#forge:stones/sky")
        .itemOutputs("#forge:dusts/sky_stone")
        .EUt(16)
        .duration(80);


// Quartz Glass Gregified

    greg.alloy_smelter("gfs:quartz_glass")
        .itemInputs("2x gtceu:glass_dust", "3x gtceu:certus_quartz_dust")
        .notConsumable("gtceu:block_casting_mold")
        .itemOutputs("2x ae2:quartz_glass")
        .EUt(16)
        .duration(100);

    // vibrant quartz glass
    greg
        .alloy_smelter("gtceu:vibrant_quartz_glass")
        .itemInputs("ae2:quartz_glass", "2x #forge:plates/glowstone")
        .itemOutputs("2x ae2:quartz_vibrant_glass")
        .duration(100)
        .EUt(20);


    // Charged Staff
    event.shaped("ae2:charged_staff", [" AB", " DC", "D  "], {
        A: "ae2:energy_cell",
        B: "#forge:gems/charged",
        C: "ae2:engineering_processor",
        D: "#forge:plates/stainless_steel",
    });

    // Crystal Resonance Generator
    event.shaped("ae2:crystal_resonance_generator", ["CFC", "CQC", "III"], {
        C: "#forge:plates/bronze",
        F: "ae2:fluix_block",
        Q: "#forge:gems/charged",
        I: "#forge:plates/stainless_steel",
    });

    // energy_level_emitter

    event.shapeless("ae2:energy_level_emitter", ["ae2:calculation_processor", "minecraft:redstone_torch", "ae2:logic_processor"]);

    // Quantum Ring
    event.shaped("ae2:quantum_ring", ["PLP", "EHE", "PLP"], {
        P: "#forge:plates/titanium",
        L: "ae2:logic_processor",
        E: "ae2:engineering_processor",
        H: "gtceu:hv_field_generator",
    });

    // Quantum Link Chamber
    event.shaped("ae2:quantum_link", ["GPG", "PHP", "GPG"], {
        G: "ae2:quartz_glass",
        P: "ae2:fluix_pearl",
        H: "gtceu:hv_field_generator",
    });

    // ME Controller
    greg
        .assembler("gfs:ae2_controller")
        .itemInputs("4x #forge:stones/sky", "4x gtceu:stainless_steel_frame",
            "4x ae2:fluix_block", "4x ae2:fluix_smart_dense_cable"
            , "2x ae2:engineering_processor", "2x ae2:logic_processor", "2x ae2:calculation_processor")
        .itemOutputs("ae2:controller")
        .EUt(480)
        .duration(240);

    // ME Drive
    greg.assembler("gfs:ae2_drive")
        .itemInputs("gtceu:hv_machine_hull", "4x ae2:engineering_processor",
            "4x ae2:fluix_glass_cable", "2x ae2:quartz_glass", "gtceu:stainless_steel_crate")
        .itemOutputs("ae2:drive")
        .EUt(480)
        .duration(200);

    // ME Chest
    greg.assembler("gfs:ae2_chest")
        .itemInputs("gtceu:hv_machine_hull", "ae2:terminal", "ae2:engineering_processor",
            "2x ae2:fluix_glass_cable", "gtceu:stainless_steel_crate")
        .itemOutputs("ae2:chest")
        .EUt(480)
        .duration(200);

    // IO Port
    event.shaped("ae2:io_port", ["UGR", "DCD", "PLP"], {
        U: "gtceu:hv_pump",
        G: "#forge:glass",
        R: "gtceu:hv_robot_arm",
        D: "ae2:drive",
        C: "ae2:fluix_glass_cable",
        P: "#forge:plates/steel",
        L: "ae2:logic_processor",
    });

    // Matter Condenser
    event.shaped("ae2:condenser", ["PCP", "CHC", "PCP"], {
        P: "#forge:plates/stainless_steel",
        C: "gtceu:hv_electric_piston",
        H: "#gtceu:circuits/hv",
    });

    //Energy Acceptor
    event.shapeless("ae2:energy_acceptor", "ae2:cable_energy_acceptor")
    greg.assembler('ae2:acceptor_assembly')
        .itemInputs(["6x #forge:plates/stainless_steel", 'gtceu:hv_voltage_coil', "4x ae2:fluix_block", 'gtceu:lv_machine_hull'])
        .itemOutputs('ae2:energy_acceptor')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);

    //Energy Cell
    greg.assembler('ae2:cell_assem')
        .itemInputs(['4x #forge_plates/stainless_steel', "4x #forge:plates/certus_quartz", '4x ae2:charged_certus_quartz_crystal', 'ae2:energy_acceptor', "2x ae2:quartz_vibrant_glass", "gtceu:hv_lithium_battery"])
        .itemOutputs('ae2:energy_cell')
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV]);

    // Dense Energy Cell
    greg
        .assembler("gfs:dense_energy_cell")
        .itemInputs("10x ae2:energy_cell")
        .itemInputs("gtceu:ev_vanadium_battery")
        .itemOutputs("ae2:dense_energy_cell")
        .duration(200)
        .EUt(1000);

    // Tiny TNT
    greg
        .cutter("gfs:tiny_tnt")
        .inputFluids("minecraft:water 9000")
        .itemInputs("minecraft:tnt")
        .itemOutputs("4x ae2:tiny_tnt")
        .duration(200)
        .EUt(30);

    // wireless_access_point
    event.shaped("ae2:wireless_access_point", ["PWP", "RCR", "PFP"], {
        P: "#forge:plates/titanium",
        W: "ae2:wireless_receiver",
        R: "#forge:rods/titanium",
        C: "ae2:calculation_processor",
        F: "ae2:fluix_glass_cable",
    });

    // Wireless Receiver
    event.shaped("ae2:wireless_receiver", ["CPC", "RSR", "   "], {
        C: "#gtceu:circuits/ev",
        P: "ae2:fluix_pearl",
        R: "#forge:rods/titanium",
        S: "gtceu:hv_sensor",
    });

    // Fluix Pearl
    greg
        .chemical_reactor("gfs:fluix_pearl")
        .itemInputs("#forge:dusts/fluix", "ender_eye")
        .itemOutputs("ae2:fluix_pearl")
        .duration(200)
        .EUt(480);

    // Wireless Booster
    event.shaped("ae2:wireless_booster", ["EC ", "PP "], {
        E: "gtceu:hv_emitter",
        C: "ae2:fluix_glass_cable",
        P: "#forge:plates/steel",
    });
    /*
      // Security Terminal
      event.remove({id: "ae2:network/blocks/security_station"})
      event.shaped("ae2:security_station", [
        'PCP',
        'KAK',
        'PEP'
      ] , {
        P: "#forge:plates/iron",
        C: "ae2:chest",
        K: "ae2:fluix_glass_cable",
        A: "ae2:cell_component_16k",
        E: "ae2:engineering_processor"
      });
    */
    // Network Tool
    event.shaped("ae2:network_tool", ["wC ", "EP ", "   "], {
        w: "#forge:tools/wrenches",
        E: "ae2:calculation_processor",
        C: "#gtceu:circuits/mv",
        P: "#ae2:illuminated_panel",
    });

    // Network items and blocks

    event.shaped(
        "ae2:interface",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:hv_robot_arm",
            B: "ae2:quartz_glass",
            C: "gtceu:hv_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:hv_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "gtceu:stainless_steel_crate"
        }
    );

    event.shapeless('ae2:interface', [
        'ae2:cable_interface'
    ])

    event.shaped(
        "ae2:pattern_provider",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:hv_robot_arm",
            B: "minecraft:crafting_table",
            C: "gtceu:hv_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:hv_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "gtceu:stainless_steel_crate"
        }
    );

    event.shapeless('ae2:pattern_provider', [
        'ae2:cable_pattern_provider'
    ])

    //Molec Assem
    event.recipes.gtceu.assembler('gfs:molecular_assembly')
        .itemInputs(["gtceu:hv_machine_hull", "2x ae2:fluix_glass_cable", "gtceu:hv_robot_arm", "ae2:quartz_glass",
            "gtceu:hv_conveyor_module", "ae2:annihilation_core", "ae2:formation_core", 'minecraft:crafting_table'])
        .itemOutputs('ae2:molecular_assembler')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);

    // ME Formation Plane
    event.shaped("ae2:formation_plane", ["EFC", "PPP"], {
        E: "gtceu:hv_electric_piston",
        F: "ae2:formation_core",
        C: "ae2:fluix_dust",
        P: "#forge:plates/steel",
    });

    // ME annihilation Plane
    event.shaped("ae2:annihilation_plane", ["EFC", "PPP"], {
        E: "gtceu:hv_electric_piston",
        F: "ae2:annihilation_core",
        C: "#forge:gems/fluix",
        P: "#forge:plates/steel",
    });

    // ME Storage Bus
    event.shaped("ae2:storage_bus", ["IPC"], {
        I: "ae2:interface",
        P: "gtceu:hv_electric_piston",
        C: "ae2:fluix_glass_cable",
    });

    // ME Import Bus
    event.shaped("ae2:import_bus", ["IPC"], {
        I: "ae2:annihilation_core",
        P: "gtceu:hv_robot_arm",
        C: "ae2:fluix_glass_cable",
    });

    // ME Export Bus
    event.shaped("ae2:export_bus", ["IPC"], {
        I: "ae2:formation_core",
        P: "gtceu:hv_robot_arm",
        C: "ae2:fluix_glass_cable",
    });

    // Crea cell
    greg.assembly_line('gfs:creative_cell_recipe')
        .itemInputs('32x megacells:mega_energy_cell', '2x #gtceu:circuits/luv', 'gtceu:superconducting_coil', '64x ae2:fluix_smart_dense_cable')
        .itemOutputs('ae2:creative_energy_cell')
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 8192),
        )
        .stationResearch((b) => b
			.researchStack(Item.of('aeinfinitybooster:infinity_card'))
			.dataStack(Item.of("gtceu:data_orb"))
            .CWUt(16, 200*20)
			.EUt(GTValues.VA[GTValues.UV])
		)
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.LuV]);

    // balls
    greg.assembler(`gfs:ball_creation`)
        .itemInputs(['ae2:energy_cell', '2x gtceu:lv_emitter', '2x gtceu:lv_sensor', 'gtceu:lv_field_generator'])
        .itemOutputs('4x ae2:matter_ball')
        .circuit(20)
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.HV]);

    // singularity
    greg.assembler(`gfs:singularity_creation`)
        .itemInputs(['megacells:mega_energy_cell', '4x gtceu:ev_emitter', '4x gtceu:ev_sensor', '2x gtceu:ev_field_generator'])
        .itemOutputs('ae2:singularity')
        .duration(600 * 20)
        .EUt(GTValues.VA[GTValues.EV]);


    greg.implosion_compressor("gfs:quantum_entangled_singularity")
        .itemInputs(['2x ae2:singularity', '4x gtceu:industrial_tnt', "16x #forge:plates/ender_eye"])
        .itemOutputs('ae2:quantum_entangled_singularity')
        .duration(800 * 20)
        .EUt(GTValues.VA[GTValues.IV]);

});
