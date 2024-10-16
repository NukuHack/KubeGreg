
ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

  greg
    .alloy_smelter('gfs:coke_oven_brick')
    .itemInputs('#minecraft:smelts_to_glass')
    .itemInputs('gtceu:compressed_clay')
    .itemOutputs('2x gtceu:coke_oven_brick')
    .duration(150)
    .EUt(7);

  greg
    .alloy_smelter('gfs:overworld_marker')
    .itemInputs('8x minecraft:dirt')
    .notConsumable("gtceu:block_casting_mold")
    .itemOutputs('gtceu:overworld_marker')
    .duration(200)
    .EUt(30);
  greg
    .alloy_smelter('gfs:the_end_marker')
    .itemInputs('8x minecraft:end_stone')
    .notConsumable("gtceu:block_casting_mold")
    .itemOutputs('gtceu:the_end_marker')
    .duration(200)
    .EUt(60);
  greg
    .alloy_smelter('gfs:the_nether_marker')
    .itemInputs('8x minecraft:netherrack')
    .notConsumable("gtceu:block_casting_mold")
    .itemOutputs('gtceu:the_nether_marker')
    .duration(200)
    .EUt(40);





// steel_ingot

greg
.alloy_smelter('gfs:steel_ingot')
.itemInputs('2x #forge:ingots/wrought_iron')
.itemInputs('3x #forge:dusts/carbon')
.itemOutputs('gtceu:steel_ingot')
.duration(300)
.EUt(120);

// brick 2

greg
.alloy_smelter('gfs:brick_2')
.itemInputs('2x #forge:ingots/clay')
.notConsumable("gtceu:ingot_casting_mold")
.itemOutputs('minecraft:brick')
.duration(100)
.EUt(120);

// brick 3

greg
.alloy_smelter('gfs:brick_3')
.itemInputs('#forge:storage_blocks/clay')
.notConsumable("gtceu:ingot_casting_mold")
.itemOutputs('2x minecraft:brick')
.duration(200)
.EUt(120);

// slime

greg
.alloy_smelter('gfs:slime')
.itemInputs('#forge:storage_blocks/slime')
.notConsumable("gtceu:ball_casting_mold")
.itemOutputs('8x minecraft:slime_ball')
.duration(200)
.EUt(7);








  // Netherite
  greg
    .alloy_smelter("gtceu:better_netherite")
    .itemInputs("3x netherite_scrap", "3x #forge:ingots/gold")
    .itemOutputs("1x netherite_ingot")
    .duration(150)
    .EUt(100);






});