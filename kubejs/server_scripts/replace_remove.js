priority: 50
/*
* just removing Sheeeet
*/

ServerEvents.recipes(event => {

	event.remove({ output: "minecraft:air" });
	event.remove({ input: 'minecraft:air' });

	event.remove({ mod: 'itemfilters' });

	event.remove({ input: "minecraft:slime_ball", output: "gtceu:raw_rubber_dust" });
	event.remove({ input: "minecraft:slime_ball", output: "gtceu:sticky_resin" });

	replacements.forEach((id) => {
		event.replaceInput({ input: id[1] }, id[1], id[0]);
		event.replaceOutput({ output: id[1] }, id[1], id[0]);
	});

	items.forEach((item) => {
		event.remove({ output: item });
	});

	ids.forEach((ide) => {
		event.remove({ id: ide });
	});
	console.log("Loaded all remove events");
// replacing

	event.replaceInput({input : 'dmlreloaded:soot_covered_redstone'}, 'dmlreloaded:soot_covered_redstone', "fluxnetworks:flux_dust");
	event.replaceInput({input : 'dmlreloaded:machine_casing'}, 'dmlreloaded:machine_casing', "fluxnetworks:flux_block");
	event.replaceInput({input : 'dmlreloaded:soot_covered_plate'}, 'dmlreloaded:soot_covered_plate', "fluxnetworks:flux_core");
	event.replaceInput({input : 'mob_grinding_utils:tank'}, 'mob_grinding_utils:tank', "gtceu:bronze_drum");

	event.replaceInput({output : 'ironfurnaces:augment_generator'}, 'minecraft:repeater', "ironfurnaces:obsidian_furnace");

	event.replaceInput({output : 'minecraft:cauldron', input:"#forge:tools/hammers"}, '#forge:plates/iron', "#forge:plates/bronze");

	event.replaceOutput([{output : '#forge:gems/certus_quartz'},{input : '#forge:gems/certus_quartz'}],
		'#forge:gems/certus_quartz', "#forge:gems/certus_quartz");
	event.replaceOutput([{output : '#forge:dusts/certus_quartz'},{input : '#forge:dusts/certus_quartz'}],
		'#forge:dusts/certus_quartz', "#forge:dusts/certus_quartz");
	event.replaceOutput([{output : '#forge:dusts/ender_pearl'},{input : '#forge:dusts/ender_pearl'}],
		'#forge:dusts/ender_pearl', "#forge:dusts/ender_pearl");

	event.replaceInput({ id: "megacells:cells/standard/item_storage_cell_4m" }, "#forge:dusts/ender_pearl", "#forge:plates/ender_pearl");
	event.replaceInput({ id: "megacells:cells/standard/item_storage_cell_16m" }, "#forge:dusts/ender_pearl", "#forge:plates/ender_pearl");

})
