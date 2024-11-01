ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    greg.cracker('gfs:ethylene_f_methane')
        .inputFluids(Fluid.of("gtceu:methane", 2000),Fluid.of("gtceu:steam", 1000))
        .outputFluids(Fluid.of("gtceu:ethylene", 1000),Fluid.of("gtceu:hydrogen", 6000))
        .EUt(480*16) // Iv ?
        .circuit(6)
        .duration(40*20);


});