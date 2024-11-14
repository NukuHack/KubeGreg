
const $EnergyHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine')
const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')

StartupEvents.registry('block', event => {
    event.create('micro_universe_energy_transmitter')
        .displayName('Micro Universe Energy Transmitter')
    event.create('micro_universe_focus_lens')
        .displayName('Micro Universe Focus Lens')
})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('energy_input_hatch', 'custom', (holder, tier) => {
        return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 2)
    }, GTValues.MAX)
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.INPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.input");

});

