ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;



// strong from all mixing

    greg.mixer('gfs:strong_mix')
        .itemInputs('2x #forge:dusts/platinum','2x #forge:dusts/palladium',
            '#forge:dusts/palladium_raw',"#forge:dusts/diamond")
        .inputFluids(Fluid.of('gtceu:red_steel', 576))
        .inputFluids(Fluid.of('gtceu:blue_steel', 576))
        .itemOutputs('4x #forge:dusts/strong_mix')
        .duration(20*20)
        .EUt(200);



// ob from liquid mixing

    greg.mixer('gfs:obsidian')
        .inputFluids(Fluid.of('minecraft:lava', 1000))
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('minecraft:obsidian')
        .duration(200)
        .EUt(30);

// glowstone from mixing

    greg.mixer('gfs:glowstone')
        .itemInputs('#forge:dusts/gold')
        .itemInputs('#forge:dusts/redstone')
        .itemOutputs('#forge:dusts/glowstone')
        .duration(800)
        .EUt(120);



});
