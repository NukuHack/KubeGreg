ServerEvents.recipes(event => {

  // plan to shorten the LCR and Autoclave
  /*
    event.forEachRecipe({mod:'gtceu',type:'autoclave'}, recipe => {
        try {
            var energy = recipe.get("EUt")
            if (energy<480) { // it is not Hv or higher
            var oldDuration = recipe.get("duration")
            recipe.set("duration", oldDuration/10)
            };
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
  */
  
})
