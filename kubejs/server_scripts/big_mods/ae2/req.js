ServerEvents.recipes((event) => {

    const greg = event.recipes.gtceu;

	event.remove({mod:"merequester"});

    // Requester
    greg.assembler("gfs:requester")
        .itemInputs("ae2:cell_component_256k", "ae2:controller", "2x megacells:mega_interface", "megacells:mega_pattern_provider",
            "8x ae2:quartz_vibrant_glass", "32x #forge:dusts/sky_stone", "megacells:mega_crafting_accelerator")
        .itemOutputs("merequester:requester")
        .EUt(6000)
        .duration(200);

	event.shapeless("merequester:requester","merequester:requester_terminal");
	event.shapeless("merequester:requester_terminal","merequester:requester");


});
