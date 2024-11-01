ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    greg.cracker('gfs:steam_methane')
        .inputFluids(Fluid.of("gtceu:methane", 1000),
            Fluid.of("gtceu:steam", 1000))
        .outputFluids(Fluid.of("gtceu:steam_cracked_methane", 1000))
        .EUt(480*16) // Iv ?
        .circuit(6)
        .duration(5*20);

    greg.cracker('gfs:hydrogen_methane')
        .inputFluids(Fluid.of("gtceu:methane", 1000),
            Fluid.of("gtceu:hydrogen", 6000))
        .outputFluids(Fluid.of("gtceu:severly_hydrocracked_methane", 1000))
        .EUt(480*16) // Iv ?
        .circuit(6)
        .duration(8*20);

    greg.cracker('gfs:double_methane')
        .inputFluids(Fluid.of("gtceu:severly_hydrocracked_methane", 1000),
            Fluid.of("gtceu:carbon_monoxide", 2000))
        .outputFluids(Fluid.of("gtceu:double_cracked_methane", 1000))
        .EUt(480*16) // Iv ?
        .circuit(6)
        .duration(10*20);



});