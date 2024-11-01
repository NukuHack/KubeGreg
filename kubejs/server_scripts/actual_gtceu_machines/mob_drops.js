ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  //Ghast Tear
  greg
      .chemical_reactor("gtceu:ghast_tear")
      .itemInputs("#forge:tiny_dusts/potassium", "#forge:tiny_dusts/lithium")
      .inputFluids("gtceu:salt_water 1000")
      .itemOutputs("minecraft:ghast_tear")
      .duration(400)
      .EUt(30);
  // Bones
  greg
      .extractor("gtceu:bones")
      .itemInputs("#minecraft:dirt")
      .itemOutputs("bone")
      .duration(100)
      .EUt(16);

  // Prismarine
  greg
      .autoclave("gtceu:prismarine")
      .itemInputs("minecraft:prismarine_crystals")
      .inputFluids("minecraft:water 100")
      .itemOutputs("prismarine_shard")
      .duration(1200)
      .EUt(24);
  greg
      .autoclave("gtceu:prismarine_distilled")
      .itemInputs("minecraft:prismarine_crystals")
      .inputFluids("gtceu:distilled_water 100")
      .itemOutputs("prismarine_shard")
      .duration(600)
      .EUt(24);
  greg
      .macerator("gtceu:prismarine_crushed")
      .itemInputs("minecraft:prismarine_shard")
      .itemOutputs("prismarine_crystals")
      .duration(120)
      .EUt(2);

  // Slimeballs
  greg
      .chemical_bath("gtceu:slimeball_bath")
      .itemInputs("#forge:dusts/asbestos")
      .inputFluids("gtceu:glue 250")
      .itemOutputs("slime_ball")
      .duration(200)
      .EUt(24);
  greg
      .centrifuge("gtceu:slimeballs_centrifuge")
      .itemInputs("slime_ball")
      .outputFluids("gtceu:glue 250")
      .itemOutputs("#forge:dusts/asbestos")
      .duration(200)
      .EUt(24);

  // Sponge
  greg
      .compressor("gtceu:spongebob")
      .itemInputs("2x #forge:foils/polycaprolactam")
      .itemOutputs("sponge")
      .duration(200)
      .EUt(2);

  // XP
  greg
      .large_chemical_reactor("gtceu:bottle_o_enchanting")
      .itemInputs(
          "glass_bottle",
          "#forge:tiny_dusts/gold",
          "#forge:tiny_dusts/sugar"
      )
      .inputFluids("water 100")
      .itemOutputs("experience_bottle")
      .duration(20)
      .EUt(256);

// heart_of_the_sea

  greg
      .large_chemical_reactor('gfs:heart_of_the_sea')
      .itemInputs('1x minecraft:nautilus_shell')
      .itemInputs('1x gtceu:quantum_eye')
      .inputFluids(Fluid.of('gtceu:radon', 1000))
      .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
      .itemOutputs('1x minecraft:heart_of_the_sea')
      .duration(200)
      .EUt(200);

// leather

  greg
      .chemical_reactor('gfs:leather')
      .itemInputs('2x gtceu:bio_chaff')
      .inputFluids(Fluid.of('gtceu:distilled_water', 250))
      .itemOutputs('minecraft:leather')
      .duration(100)
      .EUt(30);

// leather

  greg
      .large_chemical_reactor('gfs:leather')
      .itemInputs('2x gtceu:bio_chaff')
      .inputFluids(Fluid.of('gtceu:distilled_water', 250))
      .itemOutputs('minecraft:leather')
      .duration(100)
      .EUt(30);

// nautilus_shell

  greg
      .large_chemical_reactor('gfs:nautilus_shell')
      .itemInputs('3x #forge:gems/quartzite')
      .inputFluids(Fluid.of('gtceu:acetic_acid', 500))
      .inputFluids(Fluid.of('gtceu:salt_water', 500))
      .inputFluids(Fluid.of('gtceu:distilled_water', 500))
      .itemOutputs('1x minecraft:nautilus_shell')
      .duration(200)
      .EUt(120);

  // Nether Star
  greg
      .chemical_reactor("gtceu:nether_star")
      .itemInputs("#forge:dusts/diamond", "#forge:dusts/iridium")
      .inputFluids("gtceu:rocket_fuel 1000", "gtceu:nether_air 8000")
      .itemOutputs("2x gtceu:nether_star_dust")
      .duration(200)
      .EUt(7680);






// blaze rod

  greg
      .fluid_solidifier('gfs:blaze_rod')
      .notConsumable('gtceu:rod_extruder_mold')
      .inputFluids(Fluid.of('gtceu:blaze', 144))
      .itemOutputs('#forge:rods/blaze')
      .duration(20)
      .EUt(30);





});
