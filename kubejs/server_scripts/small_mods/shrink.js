ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    // shrinking_device
    event.remove({mod: 'shrink'});

    greg
        .assembler('gfs:shrinking_device')
        .itemInputs('2x #forge:plates/steel')
        .itemInputs('2x #forge:foils/steel')
        .itemInputs('2x #forge:screws/steel')
        .itemInputs('4x #forge:fine_wires/copper')
        .itemInputs('gtceu:lv_emitter')
        .itemInputs('#minecraft:stone_buttons')
        .inputFluids(Fluid.of('gtceu:rubber', 576))
        .itemOutputs('shrink:shrinking_device')
        .duration(200)
        .EUt(30);


});