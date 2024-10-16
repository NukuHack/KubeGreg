ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

// crying_obsidian

greg
.chemical_reactor('gfs:crying_obsidian')
.itemInputs('minecraft:obsidian')
.inputFluids(Fluid.of('gtceu:lead', 288))
.itemOutputs('minecraft:crying_obsidian')
.duration(20)
.EUt(120);

// moss_block

greg
.chemical_reactor('gfs:moss_block')
.itemInputs('4x gtceu:bio_chaff')
.itemInputs('1x minecraft:dirt')
.inputFluids(Fluid.of('gtceu:distilled_water', 500))
.itemOutputs('2x minecraft:moss_block')
.duration(100)
.EUt(30);

// lily_pad

greg
.chemical_reactor('gfs:lily_pad')
.itemInputs('4x gtceu:bio_chaff')
.itemInputs('1x #minecraft:leaves')
.inputFluids(Fluid.of('gtceu:distilled_water', 500))
.itemOutputs('2x minecraft:lily_pad')
.duration(100)
.EUt(30);

// cobweb

greg
.chemical_reactor('gfs:cobweb')
.itemInputs('4x gtceu:bio_chaff')
.itemInputs('5x #forge:string')
.inputFluids(Fluid.of('gtceu:glue', 250))
.itemOutputs('1x minecraft:cobweb')
.duration(100)
.EUt(30);

// soul_sand

greg
.chemical_reactor('gfs:soul_sand')
.itemInputs('#forge:sand')
.itemInputs('wstweaks:fragment')
.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
.itemOutputs('minecraft:soul_sand')
.duration(100)
.EUt(120);

// soul_soil

greg
.chemical_reactor('gfs:soul_soil')
.itemInputs('#minecraft:dirt')
.itemInputs('wstweaks:fragment')
.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
.itemOutputs('minecraft:soul_soil')
.duration(100)
.EUt(120);

// quartz_dust

greg
.chemical_reactor("gfs:quartz_dust")
.itemInputs("#forge:dusts/quartzite")
.itemOutputs("#forge:dusts/nether_quartz")
.inputFluids(Fluid.of("gtceu:oxygen", 500))
.EUt(60)
.circuit(5)
.duration(400);








//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------










// flawless_budding_quartz

greg
.large_chemical_reactor('gfs:flawless_budding_quartz')
.itemInputs('32x ae2:flawed_budding_quartz')
.itemInputs('4x minecraft:budding_amethyst')
.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 32000))
.itemOutputs('ae2:flawless_budding_quartz')
.duration(100)
.EUt(120);

// soul_sand

greg
.large_chemical_reactor('gfs:soul_sand')
.itemInputs('#forge:sand')
.itemInputs('wstweaks:fragment')
.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
.itemOutputs('minecraft:soul_sand')
.duration(100)
.EUt(120);

// soul_soil

greg
.large_chemical_reactor('gfs:soul_soil')
.itemInputs('#minecraft:dirt')
.itemInputs('wstweaks:fragment')
.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
.itemOutputs('minecraft:soul_soil')
.duration(100)
.EUt(120);

// quartz_dust

greg
.large_chemical_reactor("gfs:quartz_dust")
.itemInputs("#forge:dusts/quartzite")
.itemOutputs("#forge:dusts/nether_quartz")
.inputFluids(Fluid.of("gtceu:oxygen", 500))
.EUt(60)
.circuit(5)
.duration(100);

// bedrock

greg
.large_chemical_reactor('gfs:bedrock')
.itemInputs('8x gtceu:black_steel_dust')
.inputFluids(Fluid.of('gtceu:kanthal', 1296))
.itemOutputs('minecraft:bedrock')
.duration(100)
.EUt(120);

// crying_obsidian

greg
.large_chemical_reactor('gfs:crying_obsidian')
.itemInputs('minecraft:obsidian')
.inputFluids(Fluid.of('gtceu:lead', 288))
.itemOutputs('minecraft:crying_obsidian')
.duration(20)
.EUt(120);

// moss_block

greg
.large_chemical_reactor('gfs:moss_block')
.itemInputs('4x gtceu:bio_chaff')
.itemInputs('1x minecraft:dirt')
.inputFluids(Fluid.of('gtceu:distilled_water', 500))
.itemOutputs('2x minecraft:moss_block')
.duration(100)
.EUt(30);

// lily_pad

greg
.large_chemical_reactor('gfs:lily_pad')
.itemInputs('4x gtceu:bio_chaff')
.itemInputs('1x #minecraft:leaves')
.inputFluids(Fluid.of('gtceu:distilled_water', 500))
.itemOutputs('2x minecraft:lily_pad')
.duration(100)
.EUt(30);

// cobweb

greg
.large_chemical_reactor('gfs:cobweb')
.itemInputs('4x gtceu:bio_chaff')
.itemInputs('5x #forge:string')
.inputFluids(Fluid.of('gtceu:glue', 250))
.itemOutputs('1x minecraft:cobweb')
.duration(100)
.EUt(30);











});
