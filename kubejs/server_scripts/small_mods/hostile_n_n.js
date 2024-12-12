//sadly i had to make it harder 'cus it would be too easy to get without changes


ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    event.remove({output: 'hostilenetworks:prediction_matrix'});
    event.remove({output: 'hostilenetworks:blank_data_model'});
    event.remove({output: 'hostilenetworks:loot_fabricator'});
    event.remove({output: 'hostilenetworks:sim_chamber'});
    event.remove({output: 'hostilenetworks:deep_learner'});

    greg
        .large_chemical_reactor('gfs:prediction_matrix')
        .itemInputs('3x #forge:dusts/ender_pearl')
        .itemInputs('3x #forge:dusts/nether_quartz')
        .itemInputs('gtceu:ram_chip')
        .inputFluids(Fluid.of('gtceu:oxygen', 2000))
        .itemOutputs('4x hostilenetworks:prediction_matrix')
        .duration(10*20)
        .EUt(120);

    greg
        .assembler('gfs:blank_data')
        .itemInputs('2x minecraft:comparator')
        .itemInputs('16x #forge:dusts/redstone')
        .itemInputs('#forge:ingots/blue_alloy')
        .itemInputs('gtceu:data_stick')
        .itemOutputs('2x hostilenetworks:blank_data_model')
        .duration(20*20)
        .EUt(120);

    greg
        .assembler('gfs:deep_learner')
        .itemInputs('gtceu:stainless_steel_crate')
        .itemInputs('6x #forge:dense_plates/obsian')
        .itemInputs('2x minecraft:comparator')
        .itemInputs('16x #forge:dusts/redstone')
        .itemInputs('gtceu:data_stick')
        .itemOutputs('hostilenetworks:deep_learner')
        .duration(10*20)
        .EUt(120);

    greg
        .assembler('gfs:sim_chamber')
        .itemInputs('gtceu:hv_assembler')
        .itemInputs('#forge:dusts/ender_eye')
        .itemOutputs('hostilenetworks:sim_chamber')
        .duration(40*20)
        .EUt(480);

    greg
        .assembler('gfs:loot_fabricator')
        .itemInputs('gtceu:hv_assembler')
        .itemInputs('#forge:ingots/netherite')
        .itemOutputs('hostilenetworks:loot_fabricator')
        .duration(40*20)
        .EUt(480);


    event.shapeless("4x minecraft:netherrack", ["hostilenetworks:nether_prediction", "minecraft:dirt"]);

    event.remove({id: "minecraft:nether_star_from_living_matter_extraterrestrial"});
    event.shaped("#forge:dusts/nether_star",
        ["AAA", "BBB", "CBC"],
        {
            A: "minecraft:wither_skeleton_skull", B: "minecraft:soul_sand",
            C: "hostilenetworks:end_prediction"
        });


});
