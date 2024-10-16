
ServerEvents.recipes(event => {


	event.replaceInput({output:"simple_resource_generators:raw_conversion_generator"},"#c:raw_ores","#c:raw_ores");
	event.replaceInput({output:"simple_resource_generators:random_ore_block_generator_placement"},"#forge:cobblestone","minecraft:furnace");
	event.replaceInput({output:"simple_resource_generators:random_ore_generator"},"#forge:planks/wood","minecraft:furnace");
	

});