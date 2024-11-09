priority: 80

ServerEvents.tags('item', event => {

	event.add('forge:clay','minecraft:clay_ball');
	event.add('forge:storage_blocks/slime', 'minecraft:slime_block');
	event.add('forge:dyes/red', 'minecraft:redstone');
	event.add('minecraft:logs', '#minecraft:bamboo_blocks');
	event.add('minecraft:logs_that_burn', '#minecraft:bamboo_blocks');
	event.add('forge:planks/wood', '#minecraft:planks');
	event.add('forge:logs', '#minecraft:logs');

	event.add('forge:logs/oak', 'minecraft:oak_log');
	event.add('forge:logs/dark_oak', 'minecraft:dark_oak_log');
	event.add('forge:logs/acacia', 'minecraft:acacia_log');
	event.add('forge:logs/spruce', 'minecraft:spruce_log');
	event.add('forge:logs/birch', 'minecraft:birch_log');
	event.add('forge:logs/mangrove', 'minecraft:mangrove_log');
	event.add('forge:logs/rubber', 'gtceu:rubber_log');
	event.add('forge:logs/jungle', 'minecraft:jungle_log');
	event.add('forge:logs/cherry', 'minecraft:cherry_log');

	event.add('forge:saplings/oak', 'minecraft:oak_sapling');
	event.add('forge:saplings/dark_oak', 'minecraft:dark_oak_sapling');
	event.add('forge:saplings/acacia', 'minecraft:acacia_sapling');
	event.add('forge:saplings/spruce', 'minecraft:spruce_sapling');
	event.add('forge:saplings/birch', 'minecraft:birch_sapling');
	event.add('forge:saplings/mangrove', 'minecraft:mangrove_propagule');
	event.add('forge:saplings/rubber', 'gtceu:rubber_sapling');
	event.add('forge:saplings/jungle', 'minecraft:jungle_sapling');
	event.add('forge:saplings/cherry', 'minecraft:cherry_sapling');

	event.add('forge:dirt', '#minecraft:dirt');
	event.add('forge:wool', '#minecraft:wool');
	event.add('forge:leaves', '#minecraft:leaves');
	//event.add('forge:rods/wood', 'minecraft:bamboo');
	event.add('forge:dusts/sky_stone', 'ae2:sky_dust');
	event.add('forge:stones/sky', 'ae2:sky_stone_block');
	event.add('forge:stones', 'ae2:sky_stone');
	event.add('forge:gems/charged', 'ae2:charged_certus_quartz_crystal');
	event.add('forge:farm_fertilizer', ["farmingforblockheads:green_fertilizer","farmingforblockheads:yellow_fertilizer","farmingforblockheads:red_fertilizer"]);

	event.add('forge:dirt/hoable', ['minecraft:dirt','minecraft:dirt_path','minecraft:mycelium','minecraft:podzol','minecraft:grass_block']);
	event.add('forge:dirt/shovelable', ['minecraft:dirt','minecraft:farmland','minecraft:mycelium','minecraft:podzol','minecraft:grass_block']);

	event.add('forge:tools',["gfs:wooden_crook","gfs:stone_crook","gfs:wooden_hammer","gfs:stone_hammer"]);
	event.add('forge:tools/crooks',["gfs:wooden_crook","gfs:stone_crook"]);
	event.add('forge:tools/bad_hammers',["gfs:wooden_hammer","gfs:stone_hammer"]);
	event.add('forge:tools/mining_hammers','industrialforegoing:infinity_hammer');

	event.add('forge:tools/pickaxes','#forge:tools/hammers');
	event.add('forge:tools/all_hammers',['#forge:tools/hammers','#forge:tools/bad_hammers','#forge:tools/mining_hammers']);

	event.add('gtceu:diodes', 'gtceu:advanced_smd_diode');
	event.add('gtceu:inductors', 'gtceu:advanced_smd_inductor');
	event.add('gtceu:transistors', 'gtceu:advanced_smd_transistor');
	event.add('gtceu:resistors', 'gtceu:advanced_smd_resistor');
	event.add('gtceu:capacitors', 'gtceu:advanced_smd_capacitor');
	
});

/*
ServerEvents.tags("fluid", (event) => {

});
*/

ServerEvents.tags('block', event => {

	event.add('minecraft:overworld_natural_logs',['gtceu:rubber_log',"minecraft:bamboo_block"]);

	event.add('minecraft:mineable/pickaxe',[
	'cobblefordays:tier_1',
	'cobblefordays:tier_2',
	'cobblefordays:tier_3',
	'cobblefordays:tier_4',
	'cobblefordays:tier_5',

	"engineersdecor:steel_catwalk",
	"engineersdecor:steel_railing",
	"engineersdecor:metal_rung_steps",
	"engineersdecor:steel_catwalk_stairs",
		]);

	event.add('minecraft:logs', '#minecraft:bamboo_blocks');
	event.add('forge:planks/wood', '#minecraft:planks');
	event.add('forge:logs', '#minecraft:logs');
	event.add('forge:dirt', '#minecraft:dirt');
	event.add('forge:wool', '#minecraft:wool');
	event.add('forge:leaves', '#minecraft:leaves');

});

