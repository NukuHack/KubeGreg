
ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

  greg
    .compressor("gfs:mud_bricks")
    .itemInputs("4x gfs:mud_brick")
    .itemOutputs("minecraft:mud_bricks")
    .duration(100)
    .EUt(4);

	event.shaped("gfs:magical_farmland", ["ABC", "DEF", "GGG"],
		{ A: "farmingforblockheads:fertilized_farmland_rich_stable", B: "farmingforblockheads:fertilized_farmland_stable",
		C: "farmingforblockheads:fertilized_farmland_healthy_stable", D: "farmingforblockheads:green_fertilizer",
		E: "farmingforblockheads:yellow_fertilizer", F: "farmingforblockheads:red_fertilizer", G: "gtceu:fertilizer"});



	event.shapeless("minecraft:clay",["5x minecraft:clay_ball","gfs:water_bowl"])
	.replaceIngredient("gfs:water_bowl",'minecraft:bowl');
	event.shapeless("minecraft:clay",["2x minecraft:clay_ball","minecraft:water_bucket","2x minecraft:clay_ball"])
	.replaceIngredient("minecraft:water_bucket",'minecraft:bucket');

	event.shapeless("minecraft:mud",["#forge:dirt","gfs:water_bowl"])
	.replaceIngredient("gfs:water_bowl",'minecraft:bowl');
	event.shapeless("minecraft:mud",["#forge:dirt","minecraft:water_bucket"])
	.replaceIngredient("minecraft:water_bucket",'minecraft:bucket');

	event.shapeless("2x minecraft:clay_ball",["gfs:dust","gfs:water_bowl"])
	.replaceIngredient("gfs:water_bowl",'minecraft:bowl');
	event.shapeless("3x minecraft:clay_ball",["gfs:dust","minecraft:water_bucket"])
	.replaceIngredient("minecraft:water_bucket",'minecraft:bucket');

	event.remove({ id: "minecraft:mud_bricks" });
	event.campfireCooking('gfs:mud_brick','minecraft:packed_mud');
	event.smelting('gfs:mud_brick','minecraft:packed_mud');
	event.shapeless("minecraft:mud_bricks",["2x gfs:mud_brick","gfs:water_bowl","2x gfs:mud_brick"])
	.replaceIngredient("gfs:water_bowl",'minecraft:bowl');
	event.shapeless("minecraft:mud_bricks",["2x gfs:mud_brick","minecraft:water_bucket","2x gfs:mud_brick"])
	.replaceIngredient("minecraft:water_bucket",'minecraft:bucket');
	event.shapeless("2x minecraft:mud_bricks",["4x gfs:mud_brick","minecraft:water_bucket","4x gfs:mud_brick"])
	.replaceIngredient("minecraft:water_bucket",'minecraft:bucket');

	event.shapeless("minecraft:bricks",["2x minecraft:brick","gfs:water_bowl","2x minecraft:brick"])
	.replaceIngredient("gfs:water_bowl",'minecraft:bowl');
	event.shapeless("minecraft:bricks",["2x minecraft:brick","minecraft:water_bucket","2x minecraft:brick"])
	.replaceIngredient("minecraft:water_bucket",'minecraft:bucket');

	event.shaped("gfs:wooden_crook",
		["AA", " A", " A"],
		{A: "#forge:rods/wooden"});
	event.shaped("gfs:stone_crook",
		["AA", " A", " A"],
		{A: "minecraft:cobblestone"});

	event.shaped("gfs:wooden_hammer",
		[" B ", " AB", "A  "],
		{ B: "#forge:planks/wood", A: "#forge:rods/wooden"});
	event.shaped("gfs:stone_hammer",
		[" B ", " AB", "A  "],
		{ B: "#forge:cobblestone", A: "#forge:rods/wooden"});

	event.shapeless("gfs:wood_comp","9x #forge:rods/wood");
	event.shapeless("9x #forge:rods/wood","gfs:wood_comp");

});
