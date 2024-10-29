priority: 1

ServerEvents.recipes(event => {

  // plan to shorten the LCR and Autoclave
  // type:'autoclave'
    event.forEachRecipe({mod:'gtceu',type:'electric_blast_furnace'}, recipe => {
        try {
            //var energy = recipe.get("EUt")
            var oldDuration = recipe.get("duration");
            var oldDS = oldDuration / 20;
            if (oldDS>100)
              recipe.set("duration", 100*20);
            else if (oldDS>20)
              recipe.set("duration", 20*20);
            else
              recipe.set("duration", 5*20);
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.")
        };
    });
  
  
})
