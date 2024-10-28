/*
* machines.js - Register new recipe types and machines.
*/
const WorkableSteamHullRenderer = Java.loadClass("com.gregtechceu.gtceu.client.renderer.machine.WorkableSteamMachineRenderer");

GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    // inscriber
    event.create("inscriber")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(4, 1, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);

    // rock generator
    event.create("rock_generator")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(3, 2, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);

    // miniature_ebf
    event.create("miniature_ebf")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(6, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);

    // miniature_pyrolyse_oven
    event.create("miniature_pyrolyse_oven")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(3, 2, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});


GTCEuStartupEvents.registry("gtceu:machine", event => {

    event.create("rock_generator", "simple",
        GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("rock_generator", true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer("gtceu:block/machines/rock_generator");

    event.create("miniature_pyrolyse_oven", "simple",
        GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("pyrolyse_oven")
        .rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer("gtceu:block/machines/miniature_pyrolyse_oven");

    event.create("miniature_ebf", "simple",
        GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("electric_blast_furnace", true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer("gtceu:block/machines/miniature_ebf");

    event.create("inscriber", "simple",
        GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("inscriber", true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer("gtceu:block/machines/inscriber");
});
