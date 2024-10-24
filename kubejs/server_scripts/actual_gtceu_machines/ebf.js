ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

	// random useful stuff





// bath bauxite in sodium hydroxide

greg
.electric_blast_furnace('gfs:bauxite_f_sodium_hydroxide')
.itemInputs('5x #forge:dusts/bauxite') 				// 2Al 3O
.inputFluids(Fluid.of('gtceu:sodium_hydroxide', 2000))  	// 2Na 2O 2H
.outputFluids(Fluid.of('gtceu:sodium_hydroxide_residue', 1000)) // Na 2O 2H xx(Ga)
.itemOutputs('2x #forge:ingots/aluminium')			// 2Al
.itemOutputs('#forge:dusts/sodium_trioxide')			// Na 3O
.blastFurnaceTemp(2300)
.duration(15*20)
.EUt(120);


// soldering 

greg
.electric_blast_furnace('gfs:soldering')
.itemInputs('6x #forge:ingots/tin')
.itemInputs('3x #forge:ingots/lead')
.itemInputs('#forge:ingots/antimony')
.itemOutputs('9x #forge:ingots/soldering_alloy')
.blastFurnaceTemp(1800)
.duration(20*20)
.EUt(120);


// steel f carbon

greg
.electric_blast_furnace('gfs:steel_2')
.itemInputs('2x #forge:ingots/wrought_iron')
.itemInputs('1x #forge:dusts/carbon')
.itemOutputs('1x #forge:ingots/steel')
.circuit(5)
.chancedOutput('1x #forge:dusts/ash',1111,1111)
.blastFurnaceTemp(1800)
.duration(20*10)
.EUt(120);

// steel f iron
event.remove({id:"gtceu:electric_blast_furnace/steel_from_iron"})
greg
.electric_blast_furnace('gfs:steel')
.itemInputs('#forge:ingots/iron')
.inputFluids(Fluid.of("gtceu:oxygen", 200))
.itemOutputs('1x #forge:ingots/steel')
.chancedOutput('1x #forge:dusts/ash',1111,0)
.circuit(1)
.blastFurnaceTemp(1000)
.duration(20*25)
.EUt(120);


// wrought_iron

greg
.electric_blast_furnace('gfs:wrought_iron')
.itemInputs('1x #forge:ingots/iron')
.inputFluids(Fluid.of("gtceu:oxygen", 50))
.itemOutputs('1x #forge:ingots/wrought_iron')
.blastFurnaceTemp(1800)
.duration(20*1)
.EUt(120);

});
