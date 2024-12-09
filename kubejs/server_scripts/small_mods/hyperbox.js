ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
	
    event.remove({id: 'hyperbox:hyperbox'});

    greg
        .assembler('gfs:hyperbox')
        .itemInputs('4x #forge:frames/stainless_steel')
        .itemInputs('2x #forge:frames/titanium')
        .itemInputs('4x #forge:plates/titanium')
        .itemInputs('2x #forge:small_gears/titanium')
        .itemInputs('2x #forge:screws/stainless_steel')
        .itemInputs('gtceu:hv_emitter')
        .itemInputs('gtceu:hv_sensor')
        .itemInputs('gtceu:hv_field_generator')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 1296*2))
        .itemOutputs('hyperbox:hyperbox')
        .duration(200)
        .EUt(480);


});