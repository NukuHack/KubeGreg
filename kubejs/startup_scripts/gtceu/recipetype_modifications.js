GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    // Alloy smelter (used to be 2,1,0,0)
    GTRecipeTypes.ALLOY_SMELTER_RECIPES.setMaxIOSize(3, 2, 0,0)
    // Emectric Blast FUrnace (used to be 3,3,1,1)
    GTRecipeTypes.BLAST_RECIPES.setMaxIOSize(3, 3, 3,3)

});
