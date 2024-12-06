

priority: 99
//priority: 99








// constants for machines

const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');

const WorkableSteamHullRenderer = Java.loadClass("com.gregtechceu.gtceu.client.renderer.machine.WorkableSteamMachineRenderer");
const $ParallelHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine');

const $EnergyHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine');
const $ItemBusPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ItemBusPartMachine');
const $LaserHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.LaserHatchPartMachine');
const $CleaningPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.CleaningMaintenanceHatchPartMachine');
const $FluidHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine');
const $FluidType = Java.loadClass('net.minecraftforge.fluids.FluidType');
const bucket = $FluidType.BUCKET_VOLUME;





/* // it's stupid and still not work



const $TextureOverrideRenderer = Java.loadClass('com.gregtechceu.gtceu.client.renderer.block.TextureOverrideRenderer');
const $ICoverableRenderer = Java.loadClass('com.gregtechceu.gtceu.client.renderer.cover.ICoverableRenderer');
const $ICTMPredicate = Java.loadClass('com.lowdragmc.lowdraglib.client.model.custommodel.ICTMPredicate');
const $IModelRenderer = Java.loadClass('com.lowdragmc.lowdraglib.client.renderer.impl.IModelRenderer');

const $Locale = Java.loadClass('java.util.Locale');
const $Map = Java.loadClass('java.util.Map');


//const $Renderer = Java.loadClass('com.gregtechceu.gtceu.client.renderer.machine');
//const $MaintenanceRenderer = Java.loadClass('com.gregtechceu.gtceu.client.renderer.machine.MaintenanceHatchPartRenderer');
// da hack ? why is there no class to just call the MaintenanceHatchPartRenderer ????






// Create a namespace for all related renderers
const $MyApp = {
    Renderers: {}
};

// MachineRenderer
$MyApp.Renderers.MachineRenderer = function (modelLocation) {
    // Custom initialization, if necessary
    this.modelLocation = modelLocation; // Store modelLocation for future use
};
$MyApp.Renderers.MachineRenderer.PIPE_OVERLAY = GTCEu.id("block/overlay/machine/overlay_pipe");
$MyApp.Renderers.MachineRenderer.FLUID_OUTPUT_OVERLAY = GTCEu.id("block/overlay/machine/overlay_fluid_output");
$MyApp.Renderers.MachineRenderer.ITEM_OUTPUT_OVERLAY = GTCEu.id("block/overlay/machine/overlay_item_output");

// Set up prototype inheritance
$MyApp.Renderers.MachineRenderer.prototype = Object.create($TextureOverrideRenderer.prototype);
$MyApp.Renderers.MachineRenderer.prototype.constructor = $MyApp.Renderers.MachineRenderer;

// TieredHullMachineRenderer
$MyApp.Renderers.TieredHullMachineRenderer = function (tier, modelLocation) {
    // Initialize the parent "constructor"
    const parent = new $MyApp.Renderers.MachineRenderer(modelLocation);

    // Inherit parent's properties
    Object.assign(this, parent);

    // Custom initialization
    let voltageName = GTValues.VN[tier].toLowerCase($Locale.ROOT);
    this.setTextureOverride($Map.of(
                "bottom", GTCEu.id("block/casings/voltage/%s/bottom".formatted(voltageName)),
                "top", GTCEu.id("block/casings/voltage/%s/top".formatted(voltageName)),
                "side", GTCEu.id("block/casings/voltage/%s/side".formatted(voltageName))));
    ));
};

// Set up prototype inheritance
$MyApp.Renderers.TieredHullMachineRenderer.prototype = Object.create($MyApp.Renderers.MachineRenderer.prototype);
$MyApp.Renderers.TieredHullMachineRenderer.prototype.constructor = $MyApp.Renderers.TieredHullMachineRenderer;

// OverlayTieredMachineRenderer
$MyApp.Renderers.OverlayTieredMachineRenderer = function (tier, overlayModel) {
    // Initialize the parent "constructor"
    const parent = new $MyApp.Renderers.TieredHullMachineRenderer(tier, GTCEu.id("block/machine/hull_machine"));

    // Inherit parent's properties
    Object.assign(this, parent);

    // Custom initialization
    this.overlayModel = new $IModelRenderer(overlayModel);
};

// Set up prototype inheritance
$MyApp.Renderers.OverlayTieredMachineRenderer.prototype = Object.create($MyApp.Renderers.TieredHullMachineRenderer.prototype);
$MyApp.Renderers.OverlayTieredMachineRenderer.prototype.constructor = $MyApp.Renderers.OverlayTieredMachineRenderer;

// MaintenanceRenderer
$MyApp.Renderers.MaintenanceRenderer = function (tier, overlayModel) {
    // Initialize the parent "constructor"
    const parent = new $MyApp.Renderers.OverlayTieredMachineRenderer(tier, overlayModel);

    // Inherit parent's properties
    Object.assign(this, parent);

    // Custom initialization, if any
};
$MyApp.Renderers.MaintenanceRenderer.MAINTENANCE_OVERLAY_TAPED = GTCEu.id("block/overlay/machine/overlay_maintenance_taped");

// Set up prototype inheritance
$MyApp.Renderers.MaintenanceRenderer.prototype = Object.create($MyApp.Renderers.OverlayTieredMachineRenderer.prototype);
$MyApp.Renderers.MaintenanceRenderer.prototype.constructor = $MyApp.Renderers.MaintenanceRenderer;


*/







//multiblocks :


//const $SpaceElevator = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.SpaceElevator");
const $LargeBoilerMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.steam.LargeBoilerMachine");
const $LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine");
const $SteamParallelMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine");
const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine");
//const $ComputationProviderMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.research.ComputationProviderMachine");
//const $Slaughterhouse = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.Slaughterhouse");
//const $DysonSphere = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.DysonSphere");
//const $StorageMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.StorageMachine");
const $AssemblyLineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.AssemblyLineMachine");
//const $FissionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FissionReactorMachine");
const $FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine");
const $ItemRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability");
const $RecipeHelper = Java.loadClass("com.gregtechceu.gtceu.api.recipe.RecipeHelper");
//const $TeamUtil = Java.loadClass("com.hepdd.gtmthings.utils.TeamUtil");
const $FormattingUtil = Java.loadClass("com.gregtechceu.gtceu.utils.FormattingUtil");
//const $WirelessEnergyManager = Java.loadClass("com.hepdd.gtmthings.api.misc.WirelessEnergyManager");
const $BigInteger = Java.loadClass("java.math.BigInteger");
const $GTCapabilityHelper = Java.loadClass("com.gregtechceu.gtceu.api.capability.GTCapabilityHelper");
const tiers = [["ulv", 0], ["lv", 1], ["mv", 2], ["hv", 3], ["ev", 4], ["iv", 5], ["luv", 6], ["zpm", 7], ["uv", 8], ["uhv", 9], ["uev", 10], ["uiv", 11], ["uxv", 12], ["opv", 13], ["max", 14]];


