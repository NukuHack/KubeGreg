ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;
  
  
  // ME Cores
    greg.assembler("gfs:formation_core")
        .itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
		"#forge:gems/certus_quartz", "ae2:logic_processor")
        .inputFluids(Fluid.of("gtceu:red_alloy",288))
        .itemOutputs("ae2:formation_core")
        .EUt(480)
        .duration(20*20);
    greg.assembler("gfs:annihilation_core")
        .itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
		"#forge:gems/quartz", "ae2:logic_processor")
        .inputFluids(Fluid.of("gtceu:red_alloy",288))
        .itemOutputs("ae2:annihilation_core")
        .EUt(480)
        .duration(20*20);
		
	greg.circuit_assembler("gfs:formation_better")
        .itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
		"#forge:gems/certus_quartz", "ae2:logic_processor")
        .inputFluids(Fluid.of("gtceu:red_alloy",288))
        .itemOutputs("ae2:formation_core")
        .EUt(480)
        .duration(5*20);
	greg.circuit_assembler("gfs:annihilation_better")
        .itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
		"#forge:gems/quartz", "ae2:logic_processor")
        .inputFluids(Fluid.of("gtceu:red_alloy",288))
        .itemOutputs("ae2:annihilation_core")
        .EUt(480)
        .duration(5*20);
		
  
  	
});
