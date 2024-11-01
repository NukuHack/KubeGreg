priority: -1000

ServerEvents.recipes(event => {

    // does work but it's a bit too good
    // var energy = recipe.get("EUt")

    const stupeed = [
        [0.25,'electric_blast_furnace'],
        [0.25,'alloy_blast_smelter'],
        [0.3,'autoclave'],
        [0.5,'large_chemical_reactor'],
        [4,'large_boiler'],
        //];
        //const stupaad = [
        [2,'combustion_generator'],
        [2,'gas_turbine'],
        [4,'steam_turbine'],
        [2,'plasma_generator'],
    ];

    stupeed.forEach(([du, ty]) => {
        event.forEachRecipe({ mod: 'gtceu', type: `gtceu:${ty}` }, recipe => {
            try {
                const oldDuration = recipe.get("duration");
                recipe.set("duration", Math.round((oldDuration*du)*10)/10);
            } catch (err) {
                console.log(recipe.id + " has no duration field, skipped.");
            }
        });
    });

    /*
    stupeed.forEach(([du, ty]) => {
      event.forEachRecipe({ mod: 'gtceu', type: `gtceu:${ty}` }, recipe => {
          try {
              const oldEU = recipe.get("EUt");
              recipe.set("EUt", Math.round(oldEU * du * 10) / 10);
          } catch (err) {
              console.log(recipe.id + " has no eu_t field, skipped.");
          }
      });
    });
    */

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:macerator' }, recipe => {
        try {
            let oldDuration = recipe.get("duration");
            if (oldDuration === 20 * 20) {
                recipe.set("duration", 5 * 20);
            }
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.");
        }
    });

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:ore_washer' }, recipe => {
        try {
            let oldDuration = recipe.get("duration");
            if (oldDuration === 20 * 20) {
                recipe.set("duration", 10 * 20);
            }
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.");
        }
    });

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:extractor' }, recipe => {
        try {
            let oldDuration = recipe.get("duration");
            if (oldDuration <= 10 * 20) {
                recipe.set("duration", 10 * 20);
            }
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.");
        }
    });

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:mixer' }, recipe => {
        try {
            let oldDuration = recipe.get("duration");
            if (oldDuration >= 20 * 20) {
                recipe.set("duration", oldDuration - (5 * 20));
            }
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.");
        }
    });

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:fluid_solidifier' }, recipe => {
        try {
            let oldDuration = recipe.get("duration");
            if (oldDuration >= 20 * 20) {
                recipe.set("duration", 20 * 20);
            }
        } catch (err) {
            console.log(recipe.id + " has no duration field, skipped.");
        }
    });



})
