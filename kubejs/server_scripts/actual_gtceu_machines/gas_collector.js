ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;


// airs from markers
	greg
		.gas_collector('gfs:end_air')
		.itemInputs('gtceu:the_end_marker')
		.outputFluids(Fluid.of('gtceu:ender_air', 1000))
		.duration(30*20)
		.EUt(300);

	greg
		.gas_collector('gfs:nether_air')
		.itemInputs('gtceu:the_nether_marker')
		.outputFluids(Fluid.of('gtceu:nether_air', 1000))
		.duration(20*20)
		.EUt(300);

	greg
		.gas_collector('gfs:air')
		.itemInputs('gtceu:overworld_marker')
		.outputFluids(Fluid.of('gtceu:air', 1000))
		.duration(10*20)
		.EUt(300);



});


