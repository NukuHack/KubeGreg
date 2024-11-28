GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    // Alloy smelter (used to be 2,1,0,0)
    GTRecipeTypes.ALLOY_SMELTER_RECIPES.setMaxIOSize(3, 2, 0, 0)
    // Emectric Blast FUrnace (used to be 3,3,1,1)
    GTRecipeTypes.BLAST_RECIPES.setMaxIOSize(3, 3, 3, 3)
    // Compressor (used to be 1,1,0,0)
    GTRecipeTypes.COMPRESSOR_RECIPES.setMaxIOSize(2, 2, 1, 1)
    // Mixer (used to be 6,3,1,1)
    GTRecipeTypes.MIXER_RECIPES.setMaxIOSize(6, 3, 3, 1)
    // GTRecipeTypes.FORGE_HAMMER_RECIPES.setMaxIOSize(1, 3, 0, 0) // FOR SOME REASON I REFUSES TO WORK!
    GTRecipeTypes.FUSION_RECIPES.setMaxIOSize(3, 3, 6, 6)
    // GTRecipeTypes.CENTRIFUGE_RECIPES.setMaxIOSize(9, 4, 6, 5)
});
