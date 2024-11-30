
ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;

  // super_factory_manager

  event.remove ({ output: 'sfm:manager'});
  event.remove ({ output: "sfm:cable"});
  event.remove ({ output: "sfm:water_tank"});



  greg
      .assembler("gfs:sfmanager")
      .itemInputs("8x #forge:plates/iron","#gtceu:circuits/mv",
          "4x minecraft:ender_pearl","64x minecraft:crafting_table")
      .itemOutputs("sfm:manager")
      .EUt(40)
      .duration(200);

  // super_factory_cable
  greg
      .assembler("gfs:sfm_cable")
      .itemInputs("8x #forge:plates/titanium","2x #gtceu:circuits/iv",
          "4x #forge:plates/ender_eye","sfm:manager")
      .itemOutputs("sfm:cable")
      .EUt(40)
      .duration(200);


});
