priority: -100
/*
* just removing Sheeeet
*/

ServerEvents.recipes(event => {

	event.remove({ output: "minecraft:air" });
	event.remove({ input: 'minecraft:air' });

// tbh this is actually useless and do NOT work 

})
