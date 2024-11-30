ServerEvents.recipes(event => {

    event.remove({mod: "enderstorage"});
    event.remove({mod: "proxy"});

    event.recipes.gtceu.assembler('gfs:e_ender_chest')
        .itemInputs('8x #forge:plates/redstone')
        .itemInputs('8x #forge:dense_plates/obsidian')
        .itemInputs('8x #forge:plates/ender_eye')
        .itemInputs('minecraft:ender_chest')
        .itemInputs('gtceu:stainless_steel_crate')
        .inputFluids(Fluid.of("gtceu:ender_air", 6000))
        .itemOutputs('enderstorage:ender_chest')
        .circuit(11)
        .duration(40)
        .EUt(100);

    event.recipes.gtceu.assembler('gfs:ender_tank')
        .itemInputs('8x #forge:plates/redstone')
        .itemInputs('8x #forge:dense_plates/obsidian')
        .itemInputs('8x #forge:plates/ender_eye')
        .itemInputs('minecraft:ender_chest')
        .itemInputs('gtceu:stainless_steel_drum')
        .inputFluids(Fluid.of("gtceu:ender_air", 6000))
        .itemOutputs('enderstorage:ender_tank')
        .circuit(11)
        .duration(40)
        .EUt(100);


    event.shapeless('enderstorage:ender_pouch', 'enderstorage:ender_chest');
    event.shapeless('enderstorage:ender_chest', 'enderstorage:ender_pouch');
    event.shapeless('proxy:proxy', ['enderstorage:ender_chest', 'enderstorage:ender_tank']);
})