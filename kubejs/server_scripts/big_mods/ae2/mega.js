ServerEvents.recipes((event) => {

    const greg = event.recipes.gtceu;

    event.replaceInput({mod: "megacells"}, "megacells:sky_steel_ingot", "#forge:plates/black_steel");
    event.replaceInput({mod: "megacells"}, "#forge:ingots/iron", "#forge:plates/black_steel");
    event.replaceInput({mod: "megacells"}, "megacells:sky_steel_block", "#forge:plates/black_steel");
    event.replaceInput({mod: "megacells"}, "#forge:ingots/copper", "#forge:plates/beryllium");
    event.replaceInput({mod: "megacells"}, "#forge:storage_blocks/copper", "#forge:plates/beryllium");

    /*
        // removed these because other mods have much-much better for each of these
        // Mega Crafting Accelerator
        greg
            .canner("gfs:mega_crafting_accelerator")
            .itemInputs("megacells:mega_crafting_unit", "ae2:crafting_accelerator")
            .itemOutputs("megacells:mega_crafting_accelerator")
            .duration(100)
            .EUt(600);

        // Mega Pattern Provider
        greg
            .canner("gfs:mega_pattern_provider")
            .itemInputs("megacells:mega_crafting_unit", "expatternprovider:ex_pattern_provider")
            .itemOutputs("megacells:mega_pattern_provider")
            .duration(100)
            .EUt(600);

        // Mega Interface
        greg
            .canner("gfs:mega_interface")
            .itemInputs("megacells:mega_crafting_unit", "expatternprovider:ex_interface")
            .itemOutputs("megacells:mega_interface")
            .duration(100)
            .EUt(600);
    */

    // Mega Crafting Monitor
    greg
        .canner("gfs:mega_crafting_monitor")
        .itemInputs("megacells:mega_crafting_unit", "ae2:crafting_monitor")
        .itemOutputs("megacells:mega_crafting_monitor")
        .duration(100)
        .EUt(600);

    // Mega Crafting Storage(s)
    ["1m", "4m", "16m", "64m", "256m"].forEach((k) => {
        event.remove({output: `megacells:${k}_crafting_storage`});
        greg
            .canner(`gfs:${k}_crafting_storage`)
            .itemInputs(`megacells:mega_crafting_unit`, `megacells:cell_component_${k}`)
            .itemOutputs(`megacells:${k}_crafting_storage`)
            .duration(100)
            .EUt(480);
    });

    // Bulk Storage Component
    greg.assembler("gfs:bulk_cell_component")
        .itemInputs("2x megacells:cell_component_4m", "4x megacells:accumulation_processor"
            , "8x ae2:quartz_vibrant_glass", "32x ae2:sky_dust", "ae2:spatial_cell_component_128")
        .itemOutputs("megacells:bulk_cell_component")
        .EUt(480)
        .duration(200);

    // Surperdense Energy Cell
    greg.assembler("gfs:superdense_energy_cell")
        .itemInputs("5x megacells:accumulation_processor", "10x ae2:dense_energy_cell"
            , "gtceu:lapotronic_energy_orb")
        .itemOutputs("megacells:mega_energy_cell")
        .EUt(480 * 5)
        .duration(200);


});
