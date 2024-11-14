
const $EnergyHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine')
const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('energy_input_hatch', 'custom', (holder, tier) => {
        return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 2)
    }, GTValues.MAX)
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.INPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.input");

});

