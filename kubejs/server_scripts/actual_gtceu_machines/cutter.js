ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

// obsidian_plate

greg
.cutter('gfs:obsidian_plate')
.itemInputs('minecraft:obsidian')
.inputFluids(Fluid.of('minecraft:water', 80))
.itemOutputs('4x gtceu:obsidian_plate')
.duration(800)
.EUt(120);

// obsidian_plate

greg
.cutter('gfs:obsidian_plate_2')
.itemInputs('minecraft:obsidian')
.inputFluids(Fluid.of('gtceu:distilled_water', 60))
.itemOutputs('4x gtceu:obsidian_plate')
.duration(600)
.EUt(120);

// obsidian_plate

greg
.cutter('gfs:obsidian_plate_3')
.itemInputs('minecraft:obsidian')
.inputFluids(Fluid.of('gtceu:lubricant', 20))
.itemOutputs('4x gtceu:obsidian_plate')
.duration(400)
.EUt(120);

// bamboo planks

greg
.cutter('gfs:bamboo_planks')
.itemInputs('minecraft:bamboo_block')
.inputFluids(Fluid.of('minecraft:water', 60))
.itemOutputs('6x minecraft:bamboo_planks')
.itemOutputs('2x gtceu:wood_dust')
.duration(60)
.EUt(30);

// bamboo planks 2

greg
.cutter('gfs:bamboo_planks_2')
.itemInputs('minecraft:bamboo_block')
.inputFluids(Fluid.of('gtceu:distilled_water', 40))
.itemOutputs('6x minecraft:bamboo_planks')
.itemOutputs('2x gtceu:wood_dust')
.duration(40)
.EUt(30);

// bamboo planks 3

greg
.cutter('gfs:bamboo_planks_3')
.itemInputs('minecraft:bamboo_block')
.inputFluids(Fluid.of('gtceu:lubricant', 20))
.itemOutputs('6x minecraft:bamboo_planks')
.itemOutputs('2x gtceu:wood_dust')
.duration(20)
.EUt(30);


});


