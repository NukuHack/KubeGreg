ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;
  
  
  // ME Cores
    greg.assembler("gfs:formation_core")
        .itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
		"#forge:gems/certus_quartz", "ae2:logic_processor")
        .inputFluids(Fluid.of("gtceu:red_alloy",288))
        .itemOutputs("ae2:formation_core")
        .EUt(480)
        .duration(100);
    greg.assembler("gfs:annihilation_core")
        .itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
		"#forge:gems/quartz", "ae2:logic_processor")
        .inputFluids(Fluid.of("gtceu:red_alloy",288))
        .itemOutputs("ae2:annihilation_core")
        .EUt(480)
        .duration(100);
  
  	
});
