
ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;




  // replacing voiding cover recipes

  event.remove({ output: "gtceu:fluid_voiding_cover" });
  event.remove({ id: "gtceu:macerator/macerate_fluid_voiding_cover" });
  greg
      .assembler("fluid_voiding_cover")
      .itemInputs(
          "2x #forge:screws/steel",
          "gtceu:fluid_detector_cover",
          "omnihopper:fluid_hopper",
          "trashcans:liquid_trash_can"
      )
      .itemOutputs("gtceu:fluid_voiding_cover")
      .duration(100)
      .EUt(30);

  event.remove({ output: "gtceu:item_voiding_cover" });
  event.remove({ id: "gtceu:macerator/macerate_item_voiding_cover" });
  greg
      .assembler("item_voiding_cover")
      .itemInputs("2x #forge:screws/steel", "gtceu:item_detector_cover", "minecraft:hopper","trashcans:item_trash_can")
      .itemOutputs("gtceu:item_voiding_cover")
      .duration(100)
      .EUt(30);


// steel_machine_casing

  greg.assembler('gfs:steel_machine_casing')
      .itemInputs('8x #forge:plates/steel')
      .itemOutputs('1x gtceu:steel_machine_casing')
      .duration(25)
      .EUt(16)
      .circuit(4);

// bronze_machine_casing

  greg.assembler('gfs:bronze_machine_casing')
      .itemInputs('8x #forge:plates/bronze')
      .itemOutputs('1x gtceu:bronze_machine_casing')
      .duration(25)
      .EUt(16)
      .circuit(4);

// crafting_table_cover

  greg.assembler("gfs:crafting_cover")
      .itemInputs("#forge:plates/iron","#gtceu:circuits/hv",
          "minecraft:ender_pearl","minecraft:crafting_table")
      .itemOutputs("gtceu:crafting_table_cover")
      .EUt(16)
      .duration(100);



// single ptfe pipe casing

  greg
      .assembler('gfs:single_ptfe_pipe_casing')
      .itemInputs('2x #forge:plates/polytetrafluoroethylene')
      .itemInputs('gtceu:polytetrafluoroethylene_frame')
      .itemInputs('2x gtceu:polytetrafluoroethylene_normal_fluid_pipe')
      .itemOutputs('gtceu:ptfe_pipe_casing')
      .duration(200)
      .EUt(480);

// skeleton_skull

  greg
      .assembler('gfs:skeleton_skull')
      .itemInputs('1x #forge:storage_blocks/bone'
          , "4x minecraft:bone")
      .inputFluids(Fluid.of('gtceu:sulfuric_acid', 200))
      .itemOutputs('minecraft:skeleton_skull')
      .duration(200)
      .EUt(300);

// wither_skeleton_skull

  greg
      .assembler('gfs:wither_skeleton_skull')
      //.itemInputs('8x gfs:wither_fragment')
      .itemInputs('64x #forge:storage_blocks/bone', "64x minecraft:skeleton_skull")
      .inputFluids(Fluid.of('gtceu:sulfuric_acid', 32000))
      .itemOutputs('minecraft:wither_skeleton_skull')
      .duration(200)
      .EUt(300);

// spawner

  greg
      .assembler('gfs:spawner')
      .itemInputs('8x #forge:rods/stainless_steel')
      .itemInputs('4x minecraft:wither_skeleton_skull')
      .itemInputs('gtceu:hv_field_generator')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2000))
      .itemOutputs('minecraft:spawner')
      .duration(1200)
      .EUt(480);

// furnace better

  greg
      .assembler("gfs:furnace")
      .itemInputs("2x #forge:screws/iron", "2x minecraft:bricks", "minecraft:flint")
      .itemOutputs("minecraft:furnace")
      .circuit(9)
      .duration(100)
      .EUt(30);

// lv motor

  event.remove({ output: "gtceu:lv_electric_motor", input:"gtceu:magnetic_steel_rod" });
  greg
      .assembler("gfs:lv_motor")
      .itemInputs("#forge:rods/magnetic_steel", "2x #forge:rods/steel", "2x gtceu:tin_single_cable", "4x gtceu:annealed_copper_single_wire")
      .itemOutputs("2x gtceu:lv_electric_motor")
      .duration(120)
      .EUt(30);


  event.remove({ output: "minecraft:iron_bars",type:"gtceu:assebler"});
  greg
      .assembler("gfs:iron_bars")
      .itemInputs("3x #forge:rods/iron")
      .itemOutputs("4x minecraft:iron_bars")
      .circuit(2)
      .duration(15*20)
      .EUt(30);



  // lol assembler assembler

  voltages.forEach((volt)=>{
    greg.assembler(`gfs:${volt}_assembler`)
        .itemInputs(`2x gtceu:${volt}_robot_arm`)
        .itemInputs(`2x gtceu:${volt}_conveyor_module`)
        .itemInputs(`gtceu:${volt}_machine_hull`)
        .itemInputs(`2x #gtceu:circuits/${volt}`)
        .itemInputs(`2x gtceu:${voltage_to_cable[volt]}_single_cable`)
        .itemOutputs(`gtceu:${volt}_assembler`)
        .duration(400)
        .EUt(voltage_to_eu[volt]/4);
  });




});
