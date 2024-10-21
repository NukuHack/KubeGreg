ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;


// compressed clay
  greg
    .compressor("gfs:compressed_clay")
    .itemInputs("minecraft:clay")
    .itemOutputs("gtceu:compressed_clay")
    .duration(200)
    .EUt(2);

// compressed wood
  greg
    .compressor("gfs:wood_comp")
    .itemInputs("9x #forge:rods/wooden")
    .itemOutputs("gfs:wood_comp")
    .duration(200)
    .EUt(2);

// compressed wood
  greg
    .compressor("gfs:wood_comp_dust")
    .itemInputs("18x #forge:dusts/wood")
    .itemOutputs("gfs:wood_comp")
    .duration(200)
    .EUt(2);
	
// compress fluix
event.remove({output:"#forge:storage_blocks/fluix"});
  greg
    .compressor("gfs:fluix_block")
    .itemInputs("4x #forge:gems/fluix")
    .itemOutputs("#forge:storage_blocks/fluix")
    .duration(200)
    .EUt(2);







//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------








// magnesium_diboride_ingot

greg
.chemical_bath('gfs:magnesium_diboride_ingot')
.itemInputs('#forge:hot_ingots/magnesium_diboride')
.inputFluids(Fluid.of('minecraft:water', 100))
.itemOutputs('gtceu:magnesium_diboride_ingot')
.duration(400)
.EUt(120);

// magnesium_diboride_ingot_2

greg
.chemical_bath('gfs:magnesium_diboride_ingot_2')
.itemInputs('#forge:hot_ingots/magnesium_diboride')
.inputFluids(Fluid.of('gtceu:distilled_water', 100))
.itemOutputs('gtceu:magnesium_diboride_ingot')
.duration(250)
.EUt(120);

// deepslate

greg
.chemical_bath('gfs:deepslate')
.itemInputs('#forge:dusts/stone')
.inputFluids(Fluid.of('gtceu:blask_steel', 10))
.itemOutputs('#forge:dusts/deepslate')
.duration(40)
.EUt(120);











//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------










// paper_dust

greg
.forge_hammer('gfs:paper_dust')
.itemInputs('minecraft:sugar_cane')
.itemOutputs('2x gtceu:paper_dust')
.duration(20)
.EUt(8);

// clay

greg
.forge_hammer('gfs:clay')
.itemInputs('minecraft:clay')
.itemOutputs('4x minecraft:clay_ball')
.duration(20)
.EUt(8);

// dust

 greg.forge_hammer("gfs:dust")
        .itemInputs("minecraft:sand")
        .itemOutputs("gfs:dust")
        .EUt(16)
        .duration(10);









//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// wither skel. skull "dust"

greg
.macerator("gfs:skull_fragments")
.itemInputs("minecraft:wither_skeleton_skull")
.itemOutputs("9x wstweaks:fragment")
.EUt(30)
.duration(240);

// zombiw skull "dust"

greg
.macerator("gfs:zombie_flesh_from_head")
.itemInputs("minecraft:zombie_head")
.itemOutputs("4x minecraft:rotten_flesh")
.EUt(30)
.duration(240);

// zombiw skull "dust"

greg
.macerator("gfs:bones_from_skull")
.itemInputs("minecraft:skeleton_skull")
.itemOutputs("4x minecraft:bone")
.EUt(30)
.duration(240);

// compressed wood
  greg
    .macerator("gfs:wood_comp")
    .itemInputs("gfs:wood_comp")
    .itemOutputs("9x #forge:dusts/wood")
    .duration(200)
    .EUt(2);

// treated wood crushing
  greg
    .macerator("gfs:treated_wood")
    .itemInputs("gtceu:treated_wood_planks")
    .itemOutputs("#forge:dusts/treated_wood")
    .duration(200)
    .EUt(2);









//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







// titanium_fluid_cell

event.remove ({ id: 'gtceu:arc_furnace/arc_titanium_fluid_cell'})
greg
.arc_furnace('gfs:titanium_fluid_cell')
.itemInputs('gtceu:titanium_fluid_cell')
.inputFluids(Fluid.of('gtceu:oxygen', 714))
.itemOutputs('6x gtceu:titanium_ingot')
.duration(700)
.EUt(30);








//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// ob from liquid mixing

greg.mixer('gfs:obsidian')
  .inputFluids(Fluid.of('minecraft:lava', 1000))
  .inputFluids(Fluid.of('minecraft:water', 1000))
  .itemOutputs('minecraft:obsidian')
  .duration(200)
  .EUt(30);
  
// glowstone from mixing

greg.mixer('gfs:glowstone')
  .itemInputs('#forge:dusts/gold')
  .itemInputs('#forge:dusts/redstone')
  .itemOutputs('#forge:dusts/glowstone')
  .duration(800)
  .EUt(120);







//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// stick from plank
greg.lathe('gfs:stick_f_plank')
  .itemInputs("#forge:plates/wood")
  .itemOutputs('#forge:rods/wood')
  .duration(20)
  .EUt(8);




});


