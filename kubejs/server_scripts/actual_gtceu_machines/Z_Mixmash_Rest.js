ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;



// titanium_fluid_cell

event.remove ({ id: 'gtceu:arc_furnace/arc_titanium_fluid_cell'})
greg
.arc_furnace('gfs:titanium_fluid_cell')
.itemInputs('gtceu:titanium_fluid_cell')
.inputFluids(Fluid.of('gtceu:oxygen', 714))
.itemOutputs('6x gtceu:titanium_ingot')
.duration(700)
.EUt(30);





// stick from plank
greg.lathe('gfs:stick_f_plank')
  .itemInputs("#forge:plates/wood")
  .itemOutputs('#forge:rods/wood')
  .duration(20)
  .EUt(8);



});


