ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


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