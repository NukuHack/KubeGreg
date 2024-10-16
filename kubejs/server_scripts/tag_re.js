priority: 60

ServerEvents.tags('item', event => {

	event.remove("minecraft:planks", "gtceu:treated_wood_planks");
	event.remove("forge:planks/wood", "gtceu:treated_wood_planks");

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
