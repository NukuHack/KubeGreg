ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;



// process sodium_hydroxide_residue

greg
    .electrolyzer('gfs:sodium_hydroxide_residue')
    .inputFluids(Fluid.of('gtceu:sodium_hydroxide_residue', 1000))
    .itemOutputs('#forge:dusts/sodium_hydroxide')
    .outputFluids(Fluid.of('gtceu:oxygen', 1000))
    .outputFluids(Fluid.of('gtceu:hydrogen', 1000))
    .itemOutputs('#forge:small_dusts/gallium')
    .circuit(1)
    .duration(10*20)
    .EUt(30);

// process sodium_hydroxide_residue 2

greg
    .electrolyzer('gfs:sodium_hydroxide_residue_big')
    .inputFluids(Fluid.of('gtceu:sodium_hydroxide_residue', 4000))
    .itemOutputs('4x #forge:dusts/sodium_hydroxide')
    .outputFluids(Fluid.of('gtceu:oxygen', 4000))
    .outputFluids(Fluid.of('gtceu:hydrogen', 4000))
    .itemOutputs('#forge:dusts/gallium')
    .circuit(2)
    .duration(20*20)
    .EUt(30);





});