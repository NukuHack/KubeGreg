/*
    stuff
*/

ServerEvents.recipes(event => {

	event.shapeless("minecraft:farmland",["#forge:dirt/hoable","#forge:tools/hoes"])
		.damageIngredient("#forge:tools/hoes",'1');
	event.shapeless("minecraft:dirt_path",["#forge:dirt/shovelable","#forge:tools/shovels"])
		.damageIngredient("#forge:tools/shovels",'1');
	event.shapeless("minecraft:dirt",["minecraft:rooted_dirt","#forge:tools/hoes"])
		.replaceIngredient("minecraft:rooted_dirt",'minecraft:hangigng_roots')
		.damageIngredient("#forge:tools/hoes",'1');
	event.shapeless("minecraft:rooted_dirt",["minecraft:hanging_roots","minecraft:dirt"]);
	event.shapeless("minecraft:dirt",["minecraft:coarse_dirt","#forge:tools/hoes"])
		.damageIngredient("#forge:tools/hoes",'1');
	event.shapeless("4x minecraft:string",["#forge:wool","#forge:tools/shears"])
		.damageIngredient("#forge:tools/shears",'1');
	event.shapeless("minecraft:grass_block",["#forge:dirt","#forge:seeds"]);
	event.shapeless("minecraft:grass_block",["#forge:dirt","minecraft:bone_meal"]);
	event.shapeless("minecraft:dirt",["minecraft:farmland"]);

	event.remove({input:"minecraft:lapis_lazuli",output:"minecraft:blue_dye"})
	event.shapeless("minecraft:blue_dye",["minecraft:lapis_lazuli","#forge:tools/mortars"]);

	event.remove({input:"minecraft:bone_meal",output:"minecraft:white_dye"})
	event.shapeless("minecraft:white_dye",["minecraft:bone_meal","#forge:tools/mortars"]);

	event.shaped("6x minecraft:iron_nugget",
		["A", "B", "C"],
		{ B: "#forge:ingots/iron", A: "#forge:tools/hammers",
			C: "minecraft:water_bucket" })
		.replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');

	event.remove({ output: "minecraft:furnace" });
	event.shaped("minecraft:furnace",
		["ECF", "DBD", "DAD"],
		{ A: "minecraft:bricks", B: "minecraft:campfire", C: "minecraft:flint",
			D:"minecraft:gravel", E: "#forge:tools/knives", F: "#forge:tools/mallets"});
	event.shaped("minecraft:furnace",
		["ECF", "DBD", "DAD"],
		{ A: "minecraft:bricks", B: "minecraft:lava_bucket", C: "#forge:tools/hammers",
			D:"minecraft:stone", E: "#forge:tools/knives", F: "#forge:tools/mallets"})
		.replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket');

	event.shaped("minecraft:campfire",
		["EAF", "ACA", "DDD"],
		{ A: "#forge:rods/wood", C: "minecraft:flint",
			D:"#forge:logs", E: "#forge:tools/knives", F: "#forge:tools/mallets"});

	event.remove ({ output: 'minecraft:barrel'});
	event.shaped('minecraft:barrel',
		['ABA', 'BCB', 'ABA'],
		{ A: '#forge:planks/wood', B: '#forge:logs', C: '#forge:gems/flint' });

	event.remove({ id: "gtceu:shaped/crafting_table" });
	event.shaped("minecraft:crafting_table",
		["BB", "AA"],
		{ A: "#forge:logs", B: "#forge:planks/wood" });

	event.shaped("minecraft:dragon_egg", ["AAA","ABA","AAA"],
		{A:"minecraft:egg",B:"minecraft:dragon_head"});
	event.shaped("minecraft:dragon_head", ["ABA","BCB","ABA"],
		{A:"minecraft:ender_eye",B:"minecraft:obsidian",C:"minecraft:player_head"});
	event.shaped("minecraft:end_portal_frame", ["AAA","AEA","SSS"],
		{A:"minecraft:ender_eye",E:"minecraft:dragon_egg",S:"minecraft:end_stone"});
	event.shaped("minecraft:shulker_shell", ["AAA","ABA"],
		{A:"minecraft:purpur_block",B:"minecraft:dragon_head"});
	event.shaped("8x minecraft:dragon_breath", ["AAA","ABA","AAA"],
		{A:"minecraft:bottle",B:"minecraft:dragon_head"});
	event.shaped("minecraft:player_head", ["ABA","CDC","ECE"],
		{B:"minecraft:leather_helmet",A:"minecraft:wooden_pickaxe",C:"minecraft:diamond_block",
			E:"minecraft:netherite_block",D:"minecraft:nether_star"});
	event.shaped("minecraft:wither_rose", ["A","B"],
		{A:"minecraft:wither_skeleton_skull",B:"#minecraft:small_flowers"});
	event.shaped("minecraft:zombie_head", ["CCC","DBD","CCC"],
		{B:"minecraft:player_head",C:"forbidden_arcanus:rotten_leather",D:"minecraft:exposed_copper"});
	event.shaped("minecraft:zombie_head", ["CCC","DBD","CCC"],
		{B:"minecraft:skeleton_skull",C:"forbidden_arcanus:rotten_leather",D:"minecraft:exposed_copper"});
	event.shaped("minecraft:elytra", ["ABA", "ACA", "ABA"],
		{ A: "minecraft:phantom_membrane", B: "minecraft:string", C: "gtceu:iv_field_generator" });
	event.shaped("cookingforblockheads:cow_jar", ["A", "B", "C"],
		{ A: "minecraft:iron_block", B: "minecraft:cow_spawn_egg", C: "cookingforblockheads:milk_jar" });
	event.shaped("minecraft:gilded_blackstone", ["AAA", "ABA", "AAA"],
		{ A: "#forge:ingots/gold", B: "minecraft:blackstone"});
	event.shaped("minecraft:bundle", ["FRF","R R","RRR"],
		{ F: "minecraft:string", R: "minecraft:leather"});
	event.shaped("minecraft:iron_ore", ["ABA","BAB","ABA"],
		{ A: "minecraft:stone", B: "minecraft:raw_iron_block"});

	event.shapeless("2x minecraft:string","#forge:wool");
	event.shapeless("minecraft:obsidian", ["minecraft:lava_bucket","minecraft:water_bucket"])
		.replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket')
		.replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');
	event.shapeless("2x minecraft:quartz","minecraft:quartz_block");

	event.shapeless("2x minecraft:echo_shard",["3x minecraft:sculk", "3x minecraft:amethyst_shard", "3x minecraft:sculk"]);
	event.shapeless("4x apotheosis:warden_tendril",["4x minecraft:echo_shard", "minecraft:reinforced_deepslate", "4x minecraft:echo_shard"]);
	event.shapeless("4x minecraft:reinforced_deepslate",["4x minecraft:deepslate", "minecraft:bedrock", "4x minecraft:deepslate"]);

	event.shapeless("8x minecraft:phantom_membrane",["minecraft:shears","minecraft:dragon_head"])
		.damageIngredient("#forge:tools/shears",'1');
	event.shapeless("minecraft:rotten_flesh",["minecraft:experience_bottle","#minecraft:fishes"]);

	event.shapeless("minecraft:grass","minecraft:fern");
	event.shapeless("minecraft:fern","minecraft:grass");
	event.shapeless("2x minecraft:grass","minecraft:tall_grass");
	event.shapeless("2x minecraft:fern","minecraft:large_fern");

	event.shaped("4x minecraft:bamboo_planks",
		[" A", " B"],
		{B: "minecraft:bamboo_block",A: "#forge:tools/saws" });
	event.shaped("9x minecraft:bamboo",
		["A ", " B"],
		{ B: "minecraft:bamboo_block", A: "#forge:tools/saws" });
	event.shaped("minecraft:oak_slab",
		["AAA"],
		{ A: "#forge:planks/wood"});

	event.shaped('minecraft:red_dye', ['A', 'B'], { A:'#forge:dusts/redstone', B:'#forge:tools/mortars' });
	event.shaped('minecraft:black_dye', ['A', 'B'], { A: '#forge:dusts/coal', B: '#forge:tools/mortars' });
	event.shaped('minecraft:black_dye', ['A', 'B'], { A: '#forge:dusts/charcoal', B: '#forge:tools/mortars' });
	event.shaped('minecraft:black_dye', ['A', 'B'], { A: '#forge:dusts/carbon', B: '#forge:tools/mortars' });

	event.shapeless("#forge:storage_blocks/slime",["minecraft:milk_bucket","8x gtceu:sticky_resin"])
		.replaceIngredient('minecraft:milk_bucket', 'minecraft:bucket');

	event.shapeless('ironfurnaces:emerald_furnace',"ironfurnaces:crystal_furnace");
	event.shapeless('ironfurnaces:crystal_furnace',"ironfurnaces:emerald_furnace");

	// extra recipes

	// Fire Resistance
	event.shapeless(
		Item.of("minecraft:potion").withNBT({
			Potion: "minecraft:fire_resistance",
		}),
		[
			Item.of("minecraft:potion").withNBT({
				Potion: "minecraft:water",
			}),
			"#forge:dusts/sugar",
			"#forge:dusts/stone",
			"#forge:dusts/lead",
		]
	);
	event.shapeless(
		Item.of("minecraft:potion").withNBT({
			Potion: "minecraft:long_fire_resistance",
		}),
		[
			Item.of("minecraft:potion").withNBT({
				Potion: "minecraft:water",
			}),
			"#forge:dusts/redstone",
			"#forge:dusts/sugar",
			"#forge:dusts/stone",
			"#forge:dusts/lead",
		]
	);

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1),
		["RWR", "WBW", "RmR"], {
			R: "#forge:plates/rubber",
			W: "#minecraft:wool",
			B: "minecraft:book",
			m: "#forge:tools/mallets"
		});


});
