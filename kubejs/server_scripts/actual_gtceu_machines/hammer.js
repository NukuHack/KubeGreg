ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


// netherite scrap

    greg
        .forge_hammer('gfs:nether_scrap')
        .itemInputs('4x gtceu:double_strong_mix_plate')
        .itemOutputs('minecraft:netherite_scrap')
        .duration(10*20)
        .EUt(500);


// paper_dust

    greg
        .forge_hammer('gfs:paper_dust')
        .itemInputs('minecraft:sugar_cane')
        .itemOutputs('2x gtceu:paper_dust')
        .duration(20)
        .EUt(8);

// clay

    greg
        .forge_hammer('gfs:clay')
        .itemInputs('minecraft:clay')
        .itemOutputs('4x minecraft:clay_ball')
        .duration(20)
        .EUt(8);

// dust

    greg.forge_hammer("gfs:dust")
        .itemInputs("minecraft:sand")
        .itemOutputs("gfs:dust")
        .EUt(16)
        .duration(10);



});