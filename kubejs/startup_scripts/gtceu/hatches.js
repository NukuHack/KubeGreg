
priority: 0
//priority: 0

/* // most of this does work i just disabled it because there is no reason to have these : gt has big enough hatches

GTCEuStartupEvents.registry('gtceu:machine', event => {

    // the best max input hatch is already at 64A so to make it better I need to make laser hatches ... :doom:

    event.create('input_hatch_custom_64', 'custom', (holder, tier) => {
        return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 64)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.input_hatch"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.INPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.input");

    event.create('output_hatch_custom_64', 'custom', (holder, tier) => {
        return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 64)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.output_hatch"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.output");


    // works but gregtech handles inputs only up to 100 itemslot so you can not get a better input that the original Max input (actually the UHV already reaches that limit)

    event.create('input_bus_custom', 'custom', (holder, tier) => {
        return new $ItemBusPartMachine(holder, tier, $IO.IN)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.input_bus"),
            Component.translatable("gfs.custom_machines.input_bus_size",(100)))
        .rotationState(RotationState.ALL)
        .abilities([PartAbility.IMPORT_ITEMS, PartAbility.STEAM_IMPORT_ITEMS])
        .overlayTieredHullRenderer("item_bus.import");

    event.create('output_bus_custom', 'custom', (holder, tier) => {
        return new $ItemBusPartMachine(holder, tier, $IO.OUT)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.output_bus"),
            Component.translatable("gfs.custom_machines.output_bus_size"))
        .rotationState(RotationState.ALL)
        .abilities([PartAbility.STEAM_EXPORT_ITEMS,PartAbility.EXPORT_ITEMS])
        .overlayTieredHullRenderer("item_bus.export");




	// should not be placed down, 'cus it crashes

    event.create('laser_target_1024_custom', 'custom', (holder, tier) => {
        return new $LaserHatchPartMachine(holder, tier, $IO.IN, 1024)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.laser_target"),
				Component.translatable("gfs.custom_machines.laser_target_size"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.INPUT_LASER)
        .overlayTieredHullRenderer("laser_hatch.target");

    event.create('laser_source_1024_custom', 'custom', (holder, tier) => {
        return new $LaserHatchPartMachine(holder, tier, $IO.OUT, 1024)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.laser_source"),
				Component.translatable("gfs.custom_machines.laser_source_size"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_LASER)
        .overlayTieredHullRenderer("laser_hatch.source");



	// it's stupid and still does not work

    // sterile ?
	// da hack ? why is there no class to just call the MaintenanceHatchPartRenderer ????
    event.create('super_cleaning_maintenance_hatch', 'custom', (holder) => {
        return new $CleaningPartMachine(holder, CleanroomType.CLEANROOM)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.super_cleaning"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.MAINTENANCE)
        .renderer(() => new new $MyApp.Renderers.MaintenanceRenderer(3, GTCEu.id("block/machine/part/maintenance.cleaning")));






    event.create('fluid_input_bus_custom_multiple', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier,$IO.IN, (bucket), 10)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.fluid_input_multiple"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.IMPORT_FLUIDS, PartAbility.IMPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.import_9x");


    event.create('fluid_input_bus_custom_giant', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier,$IO.IN, (bucket*10), 9)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.fluid_input_giant"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.IMPORT_FLUIDS, PartAbility.IMPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.import_9x");


    event.create('fluid_input_bus_custom', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier,$IO.IN, $FluidHatchPartMachine.INITIAL_TANK_CAPACITY_9X, 9)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.fluid_input"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.IMPORT_FLUIDS, PartAbility.IMPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.import_9x");

    event.create('fluid_output_bus_custom', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier,$IO.OUT, $FluidHatchPartMachine.INITIAL_TANK_CAPACITY_9X, 9)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gfs.custom_machines.fluid_output"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.EXPORT_FLUIDS, PartAbility.EXPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.export_9x");


});

*/
