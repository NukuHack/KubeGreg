priority: -1000

ServerEvents.recipes(event => {

  // does work but it's a bit too good
  // var energy = recipe.get("EUt")
  
  const stupeed = [
	[1/4,'electric_blast_furnace'],
	[1/4,'alloy_blast_smelter'],
	[1/3,'autoclave'],
	[1/2,'large_chemical_reactor'],
	[4,'large_boiler'],
  //];
  //const stupaad = [
	[2,'combustion_generator'],
	[2,'gas_turbine'],
	[4,'steam_turbine'],
	[2,'plasma_generator'],
  ];
  
  stupeed.forEach([du,ty]=>{
    event.forEachRecipe({mod:'gtceu',type:`gtceu:${ty}`}, recipe => {
        try {
            var oldDuration = recipe.get("duration");
              recipe.set("duration", Math.Round(oldDuration*du,1));
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
  });
  
  /*stupaad.forEach((aplee)=>{
    event.forEachRecipe({mod:'gtceu',type:`gtceu:${aplee[1]}`}, recipe => {
        try {
            var oldEUt = recipe.get("EUt");
              recipe.set("EUt", Math.Round(oldEUt*aplee[0],1));
        } catch (err) {
            console.log(recipe.id + " has no energy_unit_tick field, skipped.")
        };
    });
  });*/
  
  
    event.forEachRecipe({mod:'gtceu',type:'gtceu:macerator'}, recipe => {
        try {
            var oldDuration = recipe.get("duration");
			if (oldDuration==20*20)
              recipe.set("duration", 5*20);
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
    event.forEachRecipe({mod:'gtceu',type:'gtceu:ore_washer'}, recipe => {
        try {
            var oldDuration = recipe.get("duration");
			if (oldDuration==20*20)
              recipe.set("duration", 10*20);
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
    event.forEachRecipe({mod:'gtceu',type:'gtceu:extractor'}, recipe => {
        try {
            var oldDuration = recipe.get("duration");
			if (oldDuration<=10*20)
              recipe.set("duration", 10*20);
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
    event.forEachRecipe({mod:'gtceu',type:'gtceu:mixer'}, recipe => {
        try {
            var oldDuration = recipe.get("duration");
			if (oldDuration>=20*20)
              recipe.set("duration", oldDuration-(5*20));
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
    event.forEachRecipe({mod:'gtceu',type:'gtceu:fluid_solidifier'}, recipe => {
        try {
            var oldDuration = recipe.get("duration");
			if (oldDuration>=20*20)
              recipe.set("duration", 20*20);
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
  
  
})
