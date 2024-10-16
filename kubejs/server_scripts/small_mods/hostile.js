//sadly i had to make it harder 'cus it would be too easy to get without changes


ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

    event.remove ({output: 'hostilenetworks:prediction_matrix'});
    event.remove ({output: 'hostilenetworks:blank_data_model'});

greg
  .large_chemical_reactor('gfs:prediction_matrix')
  .itemInputs('3x #forge:dusts/ender_pearl')
  .itemInputs('3x #forge:dusts/nether_quartz')
  .itemInputs('gtceu:ram_chip')
  .inputFluids(Fluid.of('gtceu:oxygen', 2000))
  .itemOutputs('4x hostilenetworks:prediction_matrix')
  .duration(200)
  .EUt(120);

greg
  .assembler('gfs:blank_data')
  .itemInputs('2x minecraft:comparator')
  .itemInputs('16x #forge:dusts/redstone')
  .itemInputs('#forge:ingots/blue_alloy')
  .itemInputs('gtceu:data_stick')
  .itemOutputs('2x hostilenetworks:blank_data_model')
  .duration(400)
  .EUt(120);

greg
  .assembler('gfs:sim_chamber')
  .itemInputs('gtceu:hv_assembler')
  .itemInputs('#forge:dusts/ender_eye')
  .itemOutputs('hostilenetworks:sim_chamber')
  .duration(800)
  .EUt(300);

greg
  .assembler('gfs:loot_fabricator')
  .itemInputs('gtceu:hv_assembler')
  .itemInputs('#forge:ingots/netherite')
  .itemOutputs('hostilenetworks:loot_fabricator')
  .duration(800)
  .EUt(300);


});