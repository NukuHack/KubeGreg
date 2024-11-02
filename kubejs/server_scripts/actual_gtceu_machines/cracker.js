ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    greg.cracker('gfs:steam_methane')
        .inputFluids(Fluid.of("gtceu:methane", 1000),
            Fluid.of("gtceu:steam", 1000))
        .outputFluids(Fluid.of("gtceu:steam_crack_methane", 1000))
        .EUt(480*16) // Iv ?
        .circuit(6)
        .duration(6*20);

    greg.cracker('gfs:hydro_methane')
        .inputFluids(Fluid.of("gtceu:methane", 1000),
            Fluid.of("gtceu:hydrogen", 6000))
        .outputFluids(Fluid.of("gtceu:hydro_crack_methane", 1000))
        .EUt(480*16) // Iv ?
        .circuit(6)
        .duration(6*20);

    greg.cracker('gfs:double_methane')
        .inputFluids(Fluid.of("gtceu:hydro_crack_methane", 1000),
            Fluid.of("gtceu:carbon_monoxide", 2000))
        .outputFluids(Fluid.of("gtceu:double_crack_methane", 1000))
        .EUt(480*16) // Iv ?
        .circuit(6)
        .duration(12*20);



});