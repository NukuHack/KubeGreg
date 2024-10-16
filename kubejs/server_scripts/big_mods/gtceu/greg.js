// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

	event.remove({ output: "minecraft:clay_ball" , input:"minecraft:clay"});
	event.shapeless("4x minecraft:clay_ball",["#forge:tools/hammers","minecraft:clay"]);
	event.shapeless("minecraft:clay",["2x minecraft:clay_ball","#forge:tools/hammers","2x minecraft:clay_ball"]);
	event.shapeless("2x minecraft:clay_ball","minecraft:clay");
	event.replaceInput({ input:'minecraft:clay_ball' , output: 'minecraft:brick' },"minecraft:clay_ball","gtceu:compressed_clay");

    event.shaped(Item.of('gtceu:wood_plate'), [
        'SSS'
    ], {
        S: '#minecraft:wooden_slabs'
    });

    event.shaped(Item.of('gtceu:glass_tube'), [
        '   ',
        'PPP',
        'PPP'
    ], {
        P: '#forge:glass_panes'
    });

	event.remove({ id: "gtceu:shapeless/compressed_clay" });
	event.shapeless("gtceu:compressed_clay",["gtceu:brick_wooden_form","minecraft:clay","gfs:water_bowl"])
	.keepIngredient("gtceu:brick_wooden_form")
	.replaceIngredient("gfs:water_bowl",'minecraft:bowl');
	event.shapeless("gtceu:compressed_clay",["gtceu:brick_wooden_form","minecraft:clay","minecraft:water_bucket"])
	.keepIngredient("gtceu:brick_wooden_form")
	.replaceIngredient("minecraft:water_bucket",'minecraft:bucket');

	event.remove({ output: "gtceu:coke_oven_brick" , input:"minecraft:clay_ball"});


// fireclay from mixing

greg.mixer('gfs:fireclay')
  .itemInputs('#forge:dusts/brick')
  .itemInputs('#forge:dusts/clay')
  .itemOutputs('#forge:dusts/fireclay')
  .duration(200)
  .EUt(120);

	event.shapeless("gtceu:overworld_marker",["9x minecraft:dirt"]);
	event.shapeless("gtceu:the_nether_marker",["9x minecraft:netherrack"]);
	event.shapeless("gtceu:the_end_marker",["9x minecraft:end_stone"]);

	event.campfireCooking('minecraft:brick','gtceu:compressed_coke_clay');
	event.smelting('minecraft:brick','gtceu:compressed_coke_clay');

	event.remove({ output: "gtceu:fireclay_dust" , input:"gtceu:brick_dust"});
	event.shaped("4x gtceu:fireclay_dust",
		["ABA","DCD","DAD"],
		{ B: "#forge:tools/hammers", C: "#forge:tools/mortars", A: "gtceu:brick_dust",
		D: "gtceu:clay_dust"});

	event.remove({ id: "gtceu:shaped/compressed_coke_clay" });
	event.shaped("3x gtceu:compressed_coke_clay",
	["CCC", "SBS", "SSS"], {
		C: "gtceu:compressed_clay",
		B: "gtceu:brick_wooden_form",
		S: "minecraft:sand",
	}).keepIngredient("gtceu:brick_wooden_form");

	event.remove({ id: "gtceu:shaped/casing_primitive_bricks" });
	event.shaped("gtceu:firebricks",
	["ABA", "CDC", "ABA"],{
		B: "gtceu:concrete_dust",
		A: "gtceu:firebrick",
		C: "gtceu:gypsum_dust" ,
		D: "minecraft:water_bucket"
	}).keepIngredient("minecraft:bucket");
	
	event.remove({ id: "gtceu:shaped/bronze_primitive_blast_furnace" });
	event.shaped("gtceu:primitive_blast_furnace",
		["ABC", "DEF", "GBC"],
		{ A: "#forge:tools/hammers", B: "#forge:rods/wrought_iron", C: "#forge:screws/wrought_iron",
		D: "#forge:plates/wrought_iron", E: "gtceu:firebricks", F: "#forge:tools/wrenches",
		G: "#forge:tools/screwdrivers"});

	event.remove({ id: "gtceu:shaped/bucket_of_concrete" });
	event.shaped("2x gtceu:concrete_dust",
	["ABA", "CDE", "FGF"],{
		A:"gtceu:calcite_dust",
		B:"#forge:tools/mortars",
		C:"gtceu:stone_dust",
		D:"#forge:tools/hammers",
		E:"gtceu:quartz_sand_dust",
		F:"gtceu:clay_dust",
		G:"minecraft:water_bucket"
	}).keepIngredient("minecraft:bucket");

	event.shaped("2x gtceu:small_stone_dust",
		[" A", " B"],
		{A:"#forge:cobblestone",B:"#forge:tools/mortars"});
		
	event.shaped("gtceu:empty_wooden_form",
	["ABA", "AAA"],
	{A:"#forge:planks/wood",B:"#forge:tools/mallets"});

	event.smelting('minecraft:bread','gtceu:wheat_dust');



// fin //

});