
const $EnergyHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine')
const $ItemBusPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ItemBusPartMachine')
const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('nice_input_hatch', 'custom', (holder, tier) => {
        return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 2)
    }, GTValues.MAX)
        .langValue("Really Nice Hatch")
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.INPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.input");

    /*

        public final static MachineDefinition[] FLUID_IMPORT_HATCH = registerFluidHatches(
            "input_hatch", "Input Hatch", "fluid_hatch.import", "fluid_hatch.import",
            IO.IN, FluidHatchPartMachine.INITIAL_TANK_CAPACITY_1X, 1,
            ALL_TIERS, PartAbility.IMPORT_FLUIDS,
            PartAbility.IMPORT_FLUIDS_1X);

    */

    event.create('cool_input_hatch', 'custom', (holder, tier) => {
        return new $ItemBusPartMachine(holder, tier, $IO.IN)
    }, GTValues.MAX)
        .langValue("Cool Hatch")
        .rotationState(RotationState.ALL)
        .abilities([PartAbility.IMPORT_ITEMS, PartAbility.STEAM_IMPORT_ITEMS])
        .overlayTieredHullRenderer("item_bus.import");

});

