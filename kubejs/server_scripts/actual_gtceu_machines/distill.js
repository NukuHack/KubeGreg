ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    greg
        .distillation_tower("gfs:steam_crack_methane")
        .inputFluids(Fluid.of("gtceu:steam_crack_methane",1000))
        .outputFluids(
            Fluid.of("gtceu:ethylene",480),
            Fluid.of("gtceu:hydrogen",240),
            Fluid.of("gtceu:xpropana",100),
            Fluid.of("gtceu:xbutane",100)
        )
        .duration(10*20)
        .EUt(480*16);


    greg
        .distillation_tower("gfs:hydro_crack_methane")
        .inputFluids(Fluid.of("gtceu:hydro_crack_methane",1000))
        .outputFluids(
            Fluid.of("gtceu:xpropana",500),
            Fluid.of("gtceu:ethane",250),
            Fluid.of("gtceu:ethylene",250),
            Fluid.of("gtceu:xbutane",200),
        )
        .duration(15*20)
        .EUt(480*16);


    greg
        .distillation_tower("gfs:double_crack_methane")
        .inputFluids(Fluid.of("gtceu:double_crack_methane",1000))
        .outputFluids(
            Fluid.of("gtceu:hydrogen",3000),
            Fluid.of("gtceu:ethane",2000),
            Fluid.of("gtceu:ethylene",1000),
            Fluid.of("gtceu:xpropana",1500),
            Fluid.of("gtceu:xbutane",1000),
            Fluid.of("gtceu:benzene",300),
            Fluid.of("gtceu:toluene",300)
        )
        .duration(20*20)
        .EUt(480*16);


    greg
        .distillation_tower("gfs:xbutane")
        .inputFluids(Fluid.of("gtceu:xbutane",100))
        .outputFluids(
            Fluid.of("gtceu:butene",60),
            Fluid.of("gtceu:butane",25),
            Fluid.of("gtceu:butadiene",15)
        )
        .duration(3*20)
        .EUt(480);


    greg
        .distillation_tower("gfs:xpropana")
        .inputFluids(Fluid.of("gtceu:xpropana",50))
        .outputFluids(
            Fluid.of("gtceu:propane",42),
            Fluid.of("gtceu:propene",8)
        )
        .duration(2*20)
        .EUt(480);

});