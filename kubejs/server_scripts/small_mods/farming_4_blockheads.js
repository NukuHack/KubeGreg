
ServerEvents.recipes(event => {

	event.shapeless("farmingforblockheads:fertilized_farmland_stable",["minecraft:farmland","farmingforblockheads:yellow_fertilizer"]);
	event.shapeless("farmingforblockheads:fertilized_farmland_healthy_stable",["farmingforblockheads:fertilized_farmland_stable","farmingforblockheads:red_fertilizer"]);
	event.shapeless("farmingforblockheads:fertilized_farmland_rich_stable",["farmingforblockheads:fertilized_farmland_stable","farmingforblockheads:green_fertilizer"]);
	event.shapeless("farmingforblockheads:fertilized_farmland_healthy_stable",["farmingforblockheads:fertilized_farmland_healthy","farmingforblockheads:yellow_fertilizer"]);
	event.shapeless("farmingforblockheads:fertilized_farmland_healthy",["minecraft:farmland","farmingforblockheads:red_fertilizer"]);
	event.shapeless("farmingforblockheads:fertilized_farmland_rich_stable",["farmingforblockheads:fertilized_farmland_rich","farmingforblockheads:yellow_fertilizer"]);
	event.shapeless("farmingforblockheads:fertilized_farmland_rich",["minecraft:farmland","farmingforblockheads:green_fertilizer"]);



});
