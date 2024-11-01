ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


// sodium hydroxide from dust
    event.remove({id: "gtceu:extractor/extract_sodium_hydroxide_dust"});
    greg
        .extractor('gfs:sodium_hydroxide_f_dust')
        .itemInputs('#forge:dusts/sodium_hydroxide')
        .outputFluids(Fluid.of('gtceu:sodium_hydroxide', 500))
        .duration(10 * 20)
        .EUt(120);


});