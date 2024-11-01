ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

	// random useful stuff

// sulfuric acid from sulfur
event.remove({id:"gtceu:large_chemical_reactor/sulfuric_acid_from_sulfur"});
greg
.large_chemical_reactor('gfs:sulfuric_acid')
.itemInputs('#forge:dusts/sulfur')
.inputFluids(Fluid.of('minecraft:water', 4000))
.outputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 4000))
.duration(16*20)
.circuit(24)
.EUt(480);

// methane from co2

greg
.large_chemical_reactor('gfs:methane_f_co2')
.inputFluids(Fluid.of('gtceu:hydrogen', 4000)) // 4 H
.inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000)) // C 2O
.outputFluids(Fluid.of('gtceu:methane', 1000)) // CH4
.outputFluids(Fluid.of('gtceu:oxygen', 2000)) // 2O
.duration(30*20)
.circuit(24)
.EUt(30);

// co from methane

greg
.large_chemical_reactor('gfs:co_f_methane')
.inputFluids(Fluid.of('gtceu:methane', 1000)) // CH4
.inputFluids(Fluid.of('minecraft:water', 1000)) // H2 O
.outputFluids(Fluid.of('gtceu:hydrogen', 6000)) // 6 H
.outputFluids(Fluid.of('gtceu:carbon_monoxide', 1000)) // C O
.duration(10*20)
.circuit(2)
.EUt(480);


// sodium hydroxide from sodium

greg
.large_chemical_reactor('gfs:sodium_hydroxide')
.itemInputs('#forge:dusts/sodium')
.inputFluids(Fluid.of('minecraft:water', 1000))
.outputFluids(Fluid.of('gtceu:sodium_hydroxide', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
.duration(20*20)
.EUt(120);

// sodium hydroxide from sodium chloride

greg
.large_chemical_reactor('gfs:sodium_hydroxide_f_chloride')
.inputFluids(Fluid.of('gtceu:salt', 1000))					// NaCl
.inputFluids(Fluid.of('minecraft:water', 1000))				// H2O
.outputFluids(Fluid.of('gtceu:sodium_hydroxide', 1000))		// NaHO
.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))	// HCl
.duration(20*20)
.EUt(120);

// sodium_chlorid = salt

greg
.large_chemical_reactor('gfs:sodium_chlorid')
.itemInputs('#forge:dusts/sodium')
.inputFluids(Fluid.of('gtceu:chlorine', 1000))
.outputFluids(Fluid.of('gtceu:salt', 1000))
.duration(15*20)
.EUt(120);

// iron ii chloride

greg
.large_chemical_reactor('gfs:iron_ii_chloride')
.itemInputs('#forge:dusts/iron')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
.outputFluids(Fluid.of('gtceu:iron_ii_chloride', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 2000))
.circuit(2)
.duration(15*20)
.EUt(120);

// iron ii chloride f iii

greg
.large_chemical_reactor('gfs:3iron_ii_chloride_f_2iii')
.itemInputs('#forge:dusts/iron')
.inputFluids(Fluid.of('gtceu:iron_iii_chloride', 2000))
.outputFluids(Fluid.of('gtceu:iron_ii_chloride', 3000))
.duration(40*20)
.EUt(120);








// flawless_budding_quartz

	greg
		.large_chemical_reactor('gfs:flawless_budding_quartz')
		.itemInputs('32x ae2:flawed_budding_quartz')
		.itemInputs('4x minecraft:budding_amethyst')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 32000))
		.itemOutputs('ae2:flawless_budding_quartz')
		.duration(5*20)
		.EUt(120);

// soul_sand

	greg
		.large_chemical_reactor('gfs:soul_sand')
		.itemInputs('#forge:sand')
		.itemInputs('wstweaks:fragment')
		.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
		.itemOutputs('minecraft:soul_sand')
		.duration(5*20)
		.EUt(120);

// soul_soil

	greg
		.large_chemical_reactor('gfs:soul_soil')
		.itemInputs('#minecraft:dirt')
		.itemInputs('wstweaks:fragment')
		.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
		.itemOutputs('minecraft:soul_soil')
		.duration(5*20)
		.EUt(120);

// quartz_dust

	greg
		.large_chemical_reactor("gfs:quartz_dust")
		.itemInputs("#forge:dusts/quartzite")
		.itemOutputs("#forge:dusts/nether_quartz")
		.inputFluids(Fluid.of("gtceu:oxygen", 500))
		.EUt(60)
		.circuit(5)
		.duration(5*20);

// bedrock

	greg
		.large_chemical_reactor('gfs:bedrock')
		.itemInputs('8x gtceu:black_steel_dust')
		.inputFluids(Fluid.of('gtceu:kanthal', 1296))
		.itemOutputs('minecraft:bedrock')
		.duration(5*20)
		.EUt(120);

// crying_obsidian

	greg
		.large_chemical_reactor('gfs:crying_obsidian')
		.itemInputs('minecraft:obsidian')
		.inputFluids(Fluid.of('gtceu:lead', 288))
		.itemOutputs('minecraft:crying_obsidian')
		.duration(2*20)
		.EUt(120);

// moss_block

	greg
		.large_chemical_reactor('gfs:moss_block')
		.itemInputs('4x gtceu:bio_chaff')
		.itemInputs('1x minecraft:dirt')
		.inputFluids(Fluid.of('gtceu:distilled_water', 500))
		.itemOutputs('2x minecraft:moss_block')
		.duration(5*20)
		.EUt(30);

// lily_pad

	greg
		.large_chemical_reactor('gfs:lily_pad')
		.itemInputs('4x gtceu:bio_chaff')
		.itemInputs('1x #minecraft:leaves')
		.inputFluids(Fluid.of('gtceu:distilled_water', 500))
		.itemOutputs('2x minecraft:lily_pad')
		.duration(5*20)
		.EUt(30);

// cobweb

	greg
		.large_chemical_reactor('gfs:cobweb')
		.itemInputs('4x gtceu:bio_chaff')
		.itemInputs('5x #forge:string')
		.inputFluids(Fluid.of('gtceu:glue', 250))
		.itemOutputs('1x minecraft:cobweb')
		.duration(5*20)
		.EUt(30);




// ethylene from methane with catalyst

	greg
		.large_chemical_reactor('gfs:ethylene_f_methane_w_catalyst')
		.notConsumable('4x #forge:dusts/molybdenum')
		.inputFluids(Fluid.of('gtceu:methane', 1000))
		.outputFluids(Fluid.of('gtceu:ethylene', 1000))
		.duration(20*20)
		.EUt(480*4);

	// ethylene from methane by carbon dioxide

	greg
		.large_chemical_reactor('gfs:ethylene_f_co_w_catalist')
		.notConsumable('4x #forge:dusts/molybdenum')
		.inputFluids(Fluid.of('gtceu:methane', 1000),
			Fluid.of('gtceu:carbon_monoxide', 1000))
		.outputFluids(Fluid.of('gtceu:ethylene', 1000),
			Fluid.of('gtceu:oxygen', 2000))
		.duration(20*20)
		.EUt(480*16);





});
