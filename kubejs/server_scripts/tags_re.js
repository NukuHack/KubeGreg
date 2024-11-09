priority: 60

ServerEvents.tags('item', event => {

	event.remove(["minecraft:planks","forge:planks/wood"], "gtceu:treated_wood_planks");

	event.remove(["forge:dye","forge:dye/red","forge:red_dye","c:dyes"], "minecraft:redstone");
	event.remove(["forge:dye","forge:dye/grey","forge:grey_dye","c:dyes"], "gtceu:metal_mixture_dust");

	replacements.forEach((id) => {
		event.remove(id[0], id[1]);
	});

});

/*
ServerEvents.tags("fluid", (event) => {

});


ServerEvents.tags('block', event => {

});
*/
