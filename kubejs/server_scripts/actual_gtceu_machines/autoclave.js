ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;




materials.forEach((material) => {
	//console.log("the material is: " + material)
		greg
		.autoclave('gfs:'+material)
		.itemInputs('#forge:dusts/'+material)
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('#forge:gems/'+material)
		.duration(30*20)
		.EUt(30);

		greg
		.autoclave('gfs:'+material+"_2")
		.itemInputs('#forge:dusts/'+material)
		.inputFluids(Fluid.of('gtceu:distilled_water', 250))
		.itemOutputs('#forge:gems/'+material)
		.duration(15*20)
		.EUt(30);
});


autoClay.forEach((clays) => {
	//console.log("the dust is: " + clays[0])

	greg
	.autoclave('gfs:'+clays[0])
	.itemInputs('gtceu:'+clays[0]+'_dust')
	.inputFluids(Fluid.of('minecraft:water', 100))
	.itemOutputs(clays[1])
	.duration(15*20)
	.EUt(30);

	greg
	.autoclave('gfs:'+clays[0]+'_2')
	.itemInputs('gtceu:'+clays[0]+'_dust')
	.inputFluids(Fluid.of('gtceu:distilled_water', 100))
	.itemOutputs(clays[1])
	.duration(7*20)
	.EUt(30);

});

// clay

greg
.autoclave('gfs:clay_from_dust')
.itemInputs('gfs:dust')
.inputFluids(Fluid.of('minecraft:water', 1000))
.itemOutputs("4x minecraft:clay_ball")
.duration(30*20)
.EUt(30);

// clay 2

greg
.autoclave('gfs:clay_from_dust_2')
.itemInputs('gfs:dust')
.inputFluids(Fluid.of('gtceu:distilled_water', 250))
.itemOutputs("minecraft:clay")
.duration(20*20)
.EUt(30);



});


