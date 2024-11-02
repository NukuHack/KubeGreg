ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    greg
        .distillation_tower("gfs:steam_cracked_methane")
        .inputFluids(Fluid.of("gtceu:steam_cracked_methane",1000))
        .outputFluids(
            Fluid.of("gtceu:ethylene",480),
            Fluid.of("gtceu:hydrogen",240),
            Fluid.of("gtceu:propana",100),
            Fluid.of("gtceu:butane",100)
        )
        .duration(20*20)
        .EUt(480*16);


    greg
        .distillation_tower("gfs:severly_hydrocracked_methane")
        .inputFluids(Fluid.of("gtceu:severly_hydrocracked_methane",1000))
        .outputFluids(
            Fluid.of("gtceu:propana",350),
            Fluid.of("gtceu:ethane",250),
            Fluid.of("gtceu:ethylene",250),
            Fluid.of("gtceu:butane",200),
            Fluid.of("gtceu:C3H6",150)
        )
        .duration(20*20)
        .EUt(480*16);


    greg
        .distillation_tower("gfs:double_cracked_methane")
        .inputFluids(Fluid.of("gtceu:double_cracked_methane",1000))
        .outputFluids(
            Fluid.of("gtceu:hydrogen",3000),
            Fluid.of("gtceu:ethane",2000),
            Fluid.of("gtceu:ethylene",1000),
            Fluid.of("gtceu:propana",1000),
            Fluid.of("gtceu:butane",1000),
            Fluid.of("gtceu:C3H6",500),
            Fluid.of("gtceu:benzene",300),
            Fluid.of("gtceu:toluene",300)
        )
        .duration(20*20)
        .EUt(480*16);


    greg
        .distillation_tower("gfs:butane")
        .inputFluids(Fluid.of("gtceu:xbutane",100))
        .outputFluids(
            Fluid.of("gtceu:butene",65),
            Fluid.of("gtceu:butadiene",35)
        )
        .duration(2*20)
        .EUt(480);


    greg
        .distillation_tower("gfs:propana")
        .inputFluids(Fluid.of("gtceu:xpropana",50))
        .outputFluids(
            Fluid.of("gtceu:propane",42),
            Fluid.of("gtceu:propene",8)
        )
        .duration(1*20)
        .EUt(480);

});