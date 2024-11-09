ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;




  // Basic Materials gregified

  event.remove({ id:"ae2:transform/fluix_crystal"});
  event.remove({ id:"ae2:transform/fluix_crystals"});
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
  event.remove({ id: "ae2:charger/charged_certus_quartz_crystal" });
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

  event.replaceInput({input : "#forge:dusts/certus_quartz"}, "#forge:dusts/certus_quartz", "#forge:dusts/certus_quartz");
  event.replaceInput({input : "#forge:dusts/ender_pearl"}, "#forge:dusts/ender_pearl", "#forge:dusts/ender_pearl");

// Quartz Glass Gregified

  greg.alloy_smelter("gfs:quartz_glass")
      .itemInputs("2x gtceu:glass_dust", "3x gtceu:certus_quartz_dust")
      .notConsumable("gtceu:block_casting_mold")
      .itemOutputs("2x ae2:quartz_glass")
      .EUt(16)
      .duration(100);

  // vibrant quartz glass
  event.remove({ id: "ae2:decorative/quartz_vibrant_glass" });
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

  event.shapeless("ae2:energy_level_emitter",["ae2:calculation_processor","minecraft:redstone_torch","ae2:logic_processor"]);

  // Quantum Ring
  event.remove({ id: "ae2:network/blocks/quantum_ring" });
  event.shaped("ae2:quantum_ring", ["PLP", "EHE", "PLP"], {
    P: "#forge:plates/titanium",
    L: "ae2:logic_processor",
    E: "ae2:engineering_processor",
    H: "gtceu:hv_field_generator",
  });

  // Quantum Link Chamber
  event.remove({ id: "ae2:network/blocks/quantum_link" });
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
  event.remove({ id: "ae2:network/blocks/storage_drive" });
  greg.assembler("gfs:ae2_drive")
      .itemInputs("gtceu:hv_machine_hull", "4x ae2:engineering_processor",
          "4x ae2:fluix_glass_cable", "2x ae2:quartz_glass", "gtceu:stainless_steel_crate")
      .itemOutputs("ae2:drive")
      .EUt(480)
      .duration(200);

  // ME Chest
  event.remove({ id: "ae2:network/blocks/storage_chest" });
  greg.assembler("gfs:ae2_chest")
      .itemInputs("gtceu:hv_machine_hull", "ae2:terminal", "ae2:engineering_processor",
          "2x ae2:fluix_glass_cable", "gtceu:stainless_steel_crate")
      .itemOutputs("ae2:chest")
      .EUt(480)
      .duration(200);

  // IO Port
  event.remove({ id: "ae2:network/blocks/io_port" });
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
  event.remove({ id: "ae2:network/blocks/io_condenser" });
  event.shaped("ae2:condenser", ["PCP", "CHC", "PCP"], {
    P: "#forge:plates/stainless_steel",
    C: "gtceu:hv_electric_piston",
    H: "#gtceu:circuits/hv",
  });

  //Energy Acceptor
  event.remove({ output: 'ae2:energy_acceptor' })
  event.shapeless("ae2:energy_acceptor","ae2:cable_energy_acceptor")
  greg.assembler('ae2:acceptor_assembly')
      .itemInputs(["6x #forge:plates/stainless_steel", 'gtceu:hv_voltage_coil', "4x ae2:fluix_block", 'gtceu:lv_machine_hull'])
      .itemOutputs('ae2:energy_acceptor')
      .duration(160)
      .EUt(GTValues.VA[GTValues.HV]);

  //Energy Cell
  greg.assembler('ae2:cell_assem')
      .itemInputs(['4x #forge_plates/stainless_steel',"4x #forge:plates/certus_quartz", '4x ae2:charged_certus_quartz_crystal', 'ae2:energy_acceptor',"2x ae2:quartz_vibrant_glass", "gtceu:hv_lithium_battery"])
      .itemOutputs('ae2:energy_cell')
      .duration(160)
      .EUt(GTValues.VA[GTValues.LV]);

  // Dense Energy Cell
  event.remove({ id: "ae2:network/blocks/energy_dense_energy_cell" });
  greg
      .assembler("gfs:dense_energy_cell")
      .itemInputs("10x ae2:energy_cell")
      .itemInputs("gtceu:ev_vanadium_battery")
      .itemOutputs("ae2:dense_energy_cell")
      .duration(200)
      .EUt(1000);

  // Tiny TNT
  event.remove({ id: "ae2:misc/tiny_tnt" });
  greg
      .cutter("gfs:tiny_tnt")
      .inputFluids("minecraft:water 9000")
      .itemInputs("minecraft:tnt")
      .itemOutputs("4x ae2:tiny_tnt")
      .duration(200)
      .EUt(30);

  // wireless_access_point
  event.remove({ id: "ae2:network/wireless_access_point" });
  event.shaped("ae2:wireless_access_point", ["PWP", "RCR", "PFP"], {
    P: "#forge:plates/titanium",
    W: "ae2:wireless_receiver",
    R: "#forge:rods/titanium",
    C: "ae2:calculation_processor",
    F: "ae2:fluix_glass_cable",
  });

  // Wireless Receiver
  event.remove({ id: "ae2:network/wireless_part" });
  event.shaped("ae2:wireless_receiver", ["CPC", "RSR", "   "], {
    C: "#gtceu:circuits/ev",
    P: "ae2:fluix_pearl",
    R: "#forge:rods/titanium",
    S: "gtceu:hv_sensor",
  });

  // Fluix Pearl
  event.remove({ id: "ae2:misc/fluixpearl" });
  greg
      .chemical_reactor("gfs:fluix_pearl")
      .itemInputs("#forge:dusts/fluix", "ender_eye")
      .itemOutputs("ae2:fluix_pearl")
      .duration(200)
      .EUt(480);

  // Wireless Booster
  event.remove({ id: "ae2:network/wireless_booster" });
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
  event.remove({ id: "ae2:tools/network_tool" });
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
      .itemInputs(["gtceu:hv_machine_hull", "2x ae2:fluix_glass_cable", "gtceu:hv_robot_arm","ae2:quartz_glass",
        "gtceu:hv_conveyor_module","ae2:annihilation_core","ae2:formation_core",'minecraft:crafting_table'])
      .itemOutputs('ae2:molecular_assembler')
      .duration(160)
      .EUt(GTValues.VA[GTValues.HV]);

  // ME Formation Plane
  event.remove({ output: "ae2:formation_plane" });
  event.shaped("ae2:formation_plane", ["EFC", "PPP"], {
    E: "gtceu:hv_electric_piston",
    F: "ae2:formation_core",
    C: "ae2:fluix_dust",
    P: "#forge:plates/steel",
  });

  // ME annihilation Plane
  event.remove({ output: "ae2:annihilation_plane" });
  event.shaped("ae2:annihilation_plane", ["EFC", "PPP"], {
    E: "gtceu:hv_electric_piston",
    F: "ae2:annihilation_core",
    C: "#forge:gems/fluix",
    P: "#forge:plates/steel",
  });

  // ME Storage Bus
  event.remove({ id: "ae2:network/parts/storage_bus" });
  event.shaped("ae2:storage_bus", ["IPC"], {
    I: "ae2:interface",
    P: "gtceu:hv_electric_piston",
    C: "ae2:fluix_glass_cable",
  });

  // ME Import Bus
  event.remove({ id: "ae2:network/parts/import_bus" });
  event.shaped("ae2:import_bus", ["IPC"], {
    I: "ae2:annihilation_core",
    P: "gtceu:hv_robot_arm",
    C: "ae2:fluix_glass_cable",
  });

  // ME Export Bus
  event.remove({ id: "ae2:network/parts/export_bus" });
  event.shaped("ae2:export_bus", ["IPC"], {
    I: "ae2:formation_core",
    P: "gtceu:hv_robot_arm",
    C: "ae2:fluix_glass_cable",
  });

  greg.assembly_line('assline_creative_cell_recipe')
      .itemInputs('32x megacells:mega_energy_cell', '2x #gtceu:circuits/luv', 'gtceu:superconducting_coil', '64x ae2:fluix_smart_dense_cable')
      .itemOutputs('ae2:creative_energy_cell')
      .inputFluids(
          Fluid.of('gtceu:soldering_alloy', 8192),
      )
      ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('megacells:mega_energy_cell')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
      .duration(500)
      .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembler(`ae2:singularity_creation`)
      .itemInputs(['ae2:dense_energy_cell', '4x gtceu:hv_emitter', '4x gtceu:hv_sensor', 'gtceu:hv_field_generator'])
      .itemOutputs('ae2:singularity')
      .duration(12000)
      .EUt(GTValues.VA[GTValues.HV]);

});
