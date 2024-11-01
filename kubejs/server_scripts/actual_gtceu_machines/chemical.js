ServerEvents.recipes((event) => {

  const greg = event.recipes.gtceu;

// crying_obsidian

  greg
      .chemical_reactor('gfs:crying_obsidian')
      .itemInputs('minecraft:obsidian')
      .inputFluids(Fluid.of('gtceu:lead', 288))
      .itemOutputs('minecraft:crying_obsidian')
      .duration(2*20)
      .EUt(120);

// moss_block

  greg
      .chemical_reactor('gfs:moss_block')
      .itemInputs('4x gtceu:bio_chaff')
      .itemInputs('1x minecraft:dirt')
      .inputFluids(Fluid.of('gtceu:distilled_water', 500))
      .itemOutputs('2x minecraft:moss_block')
      .duration(5*20)
      .EUt(30);

// lily_pad

  greg
      .chemical_reactor('gfs:lily_pad')
      .itemInputs('4x gtceu:bio_chaff')
      .itemInputs('1x #minecraft:leaves')
      .inputFluids(Fluid.of('gtceu:distilled_water', 500))
      .itemOutputs('2x minecraft:lily_pad')
      .duration(5*20)
      .EUt(30);

// cobweb

  greg
      .chemical_reactor('gfs:cobweb')
      .itemInputs('4x gtceu:bio_chaff')
      .itemInputs('5x #forge:string')
      .inputFluids(Fluid.of('gtceu:glue', 250))
      .itemOutputs('1x minecraft:cobweb')
      .duration(5*20)
      .EUt(30);

// soul_sand

  greg
      .chemical_reactor('gfs:soul_sand')
      .itemInputs('#forge:sand')
      .itemInputs('wstweaks:fragment')
      .inputFluids(Fluid.of('gtceu:nitric_acid', 250))
      .itemOutputs('minecraft:soul_sand')
      .duration(5*20)
      .EUt(120);

// soul_soil

  greg
      .chemical_reactor('gfs:soul_soil')
      .itemInputs('#minecraft:dirt')
      .itemInputs('wstweaks:fragment')
      .inputFluids(Fluid.of('gtceu:nitric_acid', 250))
      .itemOutputs('minecraft:soul_soil')
      .duration(5*20)
      .EUt(120);

// quartz_dust

  greg
      .chemical_reactor("gfs:quartz_dust")
      .itemInputs("#forge:dusts/quartzite")
      .itemOutputs("#forge:dusts/nether_quartz")
      .inputFluids(Fluid.of("gtceu:oxygen", 500))
      .EUt(60)
      .circuit(5)
      .duration(20*20);


// sodium hydroxide from sodium chloride

  greg
      .chemical_reactor('gfs:sodium_hydroxide_f_chloride')
      .inputFluids(Fluid.of('gtceu:salt', 1000))					// NaCl
      .inputFluids(Fluid.of('minecraft:water', 1000))				// H2O
      .outputFluids(Fluid.of('gtceu:sodium_hydroxide', 1000))		// NaHO
      .outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))	// HCl
      .duration(20*20)
      .EUt(200);



// iron ii chloride

  greg
      .chemical_reactor('gfs:iron_ii_chloride')
      .itemInputs('#forge:dusts/iron')
      .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
      .outputFluids(Fluid.of('gtceu:iron_ii_chloride', 1000))
      .outputFluids(Fluid.of('gtceu:hydrogen', 2000))
      .circuit(2)
      .duration(15*20)
      .EUt(120);

// sodium_chlorid

  greg
      .chemical_reactor('gfs:sodium_chlorid')
      .itemInputs('#forge:dusts/sodium')
      .inputFluids(Fluid.of('gtceu:chlorine', 1000))
      .outputFluids(Fluid.of('gtceu:salt', 1000))
      .duration(15*20)
      .EUt(120);




});
