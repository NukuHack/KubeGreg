
ServerEvents.recipes(event => {

	// making it ..... obtainable in void world
    const greg = event.recipes.gtceu;

    greg.chemical_reactor('flux_dust')
    .itemInputs('8x #forge:dusts/redstone')
    .itemInputs('8x #forge:dusts/obsidian')
    .inputFluids('minecraft:lava 32000')
    .itemOutputs('16x fluxnetworks:flux_dust')
    .duration(24*5*20)
    .EUt(120);
	
    greg.large_chemical_reactor('flux_dust')
    .itemInputs('8x #forge:dusts/redstone')
    .itemInputs('8x #forge:dusts/obsidian')
    .inputFluids('minecraft:lava 32000')
    .itemOutputs('16x fluxnetworks:flux_dust')
    .duration(24*5*20)
    .EUt(120);

});
