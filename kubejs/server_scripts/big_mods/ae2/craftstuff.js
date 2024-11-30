ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

	event.remove({ output: `mae2:4x_crafting_accelerator` });
	event.remove({ output: `mae2:16x_crafting_accelerator` });
	event.remove({ output: `mae2:64x_crafting_accelerator` });
	event.remove({ output: `mae2:256x_crafting_accelerator` });

	// Crafting Unit
	event.remove({ id: "ae2:network/crafting/cpu_crafting_unit" });
	greg.assembler('gfs:crafting_unit')
		.itemInputs(["gtceu:hv_machine_hull", "4x #forge:plates/stainless_steel","ae2:calculation_processor",
			"ae2:logic_processor","2x ae2:fluix_glass_cable"])
		.itemOutputs('ae2:crafting_unit')
		.duration(160)
		.EUt(GTValues.VA[GTValues.HV]);

	// Crafting Monitor
	event.remove({ id: "ae2:network/crafting/cpu_crafting_monitor" });
	greg
		.canner("gfs:crafting_monitor")
		.itemInputs("ae2:crafting_unit", "ae2:storage_monitor")
		.itemOutputs("ae2:crafting_monitor")
		.duration(100)
		.EUt(480);

	// Crafting Storage(s)
	["1k","4k","16k","64k","256k"].forEach((k,index) => {
		event.remove({ output: `ae2:${k}_crafting_storage` });
		greg
			.canner(`gfs:crafting_storage_${k}`)
			.itemInputs(`ae2:crafting_unit`, `ae2:cell_component_${k}`)
			.itemOutputs(`ae2:${k}_crafting_storage`)
			.duration(100)
			.EUt(480*(index+1));
	});


	// Crafting Co-Processing Unit
	event.remove({ id: "ae2:network/crafting/cpu_crafting_accelerator" });
	greg
		.canner("gfs:ae2_accelerator")
		.itemInputs("ae2:crafting_unit", "ae2:engineering_processor")
		.itemOutputs("ae2:crafting_accelerator")
		.duration(100)
		.EUt(480);

	// Crafting Acc ++
	const nums_cpu = ["4","16","64","256"];
	nums_cpu.forEach((k,index) => {
		greg
			.canner(`gfs:crafting_accelerator_${k}`)
			.itemInputs((index==0?"ae2:crafting_accelerator":
					`mae2:${nums_cpu[index-1]}x_crafting_accelerator`),
				`${(index+1)*2}x ae2:cell_component_${k}k`)
			.itemOutputs(`mae2:${k}x_crafting_accelerator`)
			.duration(100)
			.EUt(480*(index+2));
	});


});
