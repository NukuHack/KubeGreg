ServerEvents.recipes(event => {

    // making it ..... obtainable in void world
    const greg = event.recipes.gtceu;

    greg.chemical_reactor('flux_dust')
        .itemInputs('20x #forge:dusts/redstone')
        .itemInputs('20x #forge:dusts/obsidian')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('16x fluxnetworks:flux_dust')
        .duration(120 * 20)
        .EUt(480);

    greg.large_chemical_reactor('flux_dust')
        .itemInputs('16x #forge:dusts/redstone')
        .itemInputs('16x #forge:dusts/obsidian')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('16x fluxnetworks:flux_dust')
        .duration(80 * 20)
        .EUt(480);

});
