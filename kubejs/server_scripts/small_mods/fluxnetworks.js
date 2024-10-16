
ServerEvents.recipes(event => {

	// making it ..... obtainable in void world

    event.recipes.gtceu.chemical_reactor('flux_dust')
    .itemInputs('8x #forge:dusts/redstone')
    .itemInputs('8x #forge:dusts/obsidian')
    .inputFluids('minecraft:lava 32000')
    .itemOutputs('16x fluxnetworks:flux_dust')
    .duration(2400)
    .EUt(120)
    .circuit(1);

});