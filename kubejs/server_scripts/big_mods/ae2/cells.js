ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;

  // Cell Workbench
  event.remove({ id: "ae2:network/blocks/cell_workbench" });
  event.shaped("ae2:cell_workbench", ["FKL", "PCP", "PPP"], {
    F: "gtceu:item_filter",
    K: "ae2:fluix_glass_cable",
    L: "gtceu:fluid_filter",
    P: "#forge:plates/steel",
    C: "#forge:chests/wooden",
  });

  // View Cell
  greg
    .canner("gfs:view_cell")
    .itemInputs("4x ae2:item_cell_housing", "32x gtceu:certus_quartz_gem", "gtceu:portable_scanner")
    .itemOutputs("ae2:view_cell")
    .duration(400)
    .EUt(64);


    greg.assembler("gfs:item_cell")
        .itemInputs("2x ae2:quartz_glass", "3x #forge:foils/red_alloy", "3x #forge:plates/stainless_steel")
        .itemOutputs("ae2:item_cell_housing")
        .EUt(300)
        .duration(80);

    greg.assembler("gfs:fluid_cell")
        .itemInputs("2x ae2:quartz_glass", "3x #forge:foils/red_alloy", "3x #forge:plates/bronze")
        .itemOutputs("ae2:fluid_cell_housing")
        .EUt(300)
        .duration(80);

    greg.assembler("gfs:mega_item_cell")
        .itemInputs("2x ae2:quartz_glass", "3x #forge:dusts/sky_stone", "3x #forge:plates/beryllium","ae2:item_cell_housing")
        .itemOutputs("megacells:mega_item_cell_housing")
        .EUt(600)
        .duration(160);

    greg.assembler("gfs:mega_fluid_cell")
        .itemInputs("2x ae2:quartz_glass", "3x #forge:dusts/sky_stone", "3x #forge:plates/black_steel","ae2:fluid_cell_housing")
        .itemOutputs("megacells:mega_fluid_cell_housing")
        .EUt(600)
        .duration(160);


    event.shapeless("megacells:bulk_item_cell",["8x megacells:mega_item_cell_housing","megacells:bulk_cell_component"]);




    greg.assembler("gfs:cell_component_1k")
        .itemInputs("ae2:logic_processor", "4x #forge:gems/certus_quartz", "4x gtceu:ram_chip", "4x minecraft:redstone", "2x ae2:fluix_glass_cable")
        .itemOutputs("ae2:cell_component_1k")
        .EUt(360)
        .duration(160);

    greg.assembler("gfs:cell_component_4k")
        .itemInputs("ae2:calculation_processor", "3x ae2:cell_component_1k", "4x #forge:foils/red_alloy", "ae2:quartz_glass")
        .itemOutputs("ae2:cell_component_4k")
        .EUt(720)
        .duration(200);

    greg.assembler("gfs:cell_component_16k")
        .itemInputs("ae2:calculation_processor", "3x ae2:cell_component_4k", "4x #forge:plates/glowstone", "ae2:quartz_glass")
        .itemOutputs("ae2:cell_component_16k")
        .EUt(1440)
        .duration(240);

    greg.assembler("gfs:cell_component_64k")
        .itemInputs("ae2:calculation_processor", "3x ae2:cell_component_16k", "4x #forge:plates/glowstone", "ae2:quartz_glass")
        .itemOutputs("ae2:cell_component_64k")
        .EUt(2880)
        .duration(280);

    greg.assembler("gfs:cell_component_256k")
        .itemInputs("ae2:calculation_processor", "3x ae2:cell_component_64k", "4x #forge:dusts/sky_stone", "ae2:quartz_glass")
        .itemOutputs("ae2:cell_component_256k")
        .EUt(5760)
        .duration(320);






    greg.assembler("gfs:spatial_cell_component_2")
        .itemInputs("ae2:engineering_processor", "4x ae2:fluix_pearl", "4x gtceu:ilc_chip", "4x #forge:plates/glowstone", "2x ae2:fluix_glass_cable")
        .itemOutputs("ae2:spatial_cell_component_2")
        .EUt(360)
        .duration(200);

    greg.assembler("gfs:spatial_cell_component_16")
        .itemInputs("ae2:engineering_processor", "4x ae2:spatial_cell_component_2", "4x #forge:plates/glowstone")
        .itemOutputs("ae2:spatial_cell_component_16")
        .EUt(720)
        .duration(200);

    greg.assembler("gfs:spatial_cell_component_128")
        .itemInputs("ae2:engineering_processor", "4x ae2:spatial_cell_component_16", "4x #forge:plates/glowstone")
        .itemOutputs("ae2:spatial_cell_component_128")
        .EUt(1440)
        .duration(200);








    greg.assembler("gfs:cell_component_1m")
        .itemInputs("megacells:accumulation_processor", "3x ae2:cell_component_256k", "4x #forge:dusts/sky_stone", "ae2:quartz_glass")
        .itemOutputs("megacells:cell_component_1m")
        .EUt(11520)
        .duration(360);

    greg.assembler("gfs:cell_component_4m")
        .itemInputs("megacells:accumulation_processor", "3x megacells:cell_component_1m", "4x #forge:plates/ender_pearl", "ae2:quartz_glass")
        .itemOutputs("megacells:cell_component_4m")
        .EUt(11520)
        .duration(360);

    greg.assembler("gfs:cell_component_16m")
        .itemInputs("megacells:accumulation_processor", "3x megacells:cell_component_4m", "4x #forge:plates/ender_pearl", "ae2:quartz_glass")
        .itemOutputs("megacells:cell_component_16m")
        .EUt(23040)
        .duration(400);

    greg.assembler("gfs:cell_component_64m")
        .itemInputs("megacells:accumulation_processor", "3x megacells:cell_component_16m", "4x ae2:matter_ball", "ae2:quartz_glass")
        .itemOutputs("megacells:cell_component_64m")
        .EUt(46080)
        .duration(440);

    greg.assembler("gfs:cell_component_256m")
        .itemInputs("megacells:accumulation_processor", "3x megacells:cell_component_64m", "4x ae2:singularity", "ae2:quartz_glass")
        .itemOutputs("megacells:cell_component_256m")
        .EUt(92160)
        .duration(480);

});
