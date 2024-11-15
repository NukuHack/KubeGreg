

const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');

GTCEuStartupEvents.registry('gtceu:machine', event => {

    // the best max input hatch is already at 64A so to make it better I need to make laser hatches ... :doom:

    event.create('max_input_hatch_custom_64', 'custom', (holder, tier) => {
        return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 64)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_input_hatch_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.INPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.input");

    event.create('max_output_hatch_custom_64', 'custom', (holder, tier) => {
        return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 64)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_output_hatch_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.output");


    // works but gregtech handles inputs only up to 100 itemslot so you can not get a better input that the original Max input (actually the UHV already reaches that limit)

    event.create('max_input_bus_custom', 'custom', (holder, tier) => {
        return new $ItemBusPartMachine(holder, tier, $IO.IN)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_input_bus_custom"),
            Component.translatable("gtceu.machine.input_bus_size",(100)))
        .rotationState(RotationState.ALL)
        .abilities([PartAbility.IMPORT_ITEMS, PartAbility.STEAM_IMPORT_ITEMS])
        .overlayTieredHullRenderer("item_bus.import");

    event.create('max_output_bus_custom', 'custom', (holder, tier) => {
        return new $ItemBusPartMachine(holder, tier, $IO.IN)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_output_bus_custom"),
            Component.translatable("gtceu.machine.output_bus_size",(100)))
        .rotationState(RotationState.ALL)
        .abilities([PartAbility.STEAM_EXPORT_ITEMS,PartAbility.EXPORT_ITEMS])
        .overlayTieredHullRenderer("item_bus.export");






    event.create('max_laser_target_custom', 'custom', (holder, tier) => {
        return new $LaserHatchPartMachine(holder, tier, $IO.IN)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_laser_target_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.INPUT_LASER)
        .overlayTieredHullRenderer("laser_hatch.target");

    event.create('max_laser_source_custom', 'custom', (holder, tier) => {
        return new $LaserHatchPartMachine(holder, tier, $IO.IN)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_laser_source_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_LASER)
        .overlayTieredHullRenderer("laser_hatch.source");





    // sterile ?

    event.create('super_cleaning_maintenance_hatch', 'custom', (holder) => {
        return new $CleaningPartMachine(holder, CleanroomType.CLEANROOM)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.super_cleaning"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.MAINTENANCE)
        .renderer(() => new MaintenanceHatchPartRenderer(3, GTCEu.id("block/machine/part/maintenance.cleaning")));






    event.create('max_fluid_input_bus_custom_multiple', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier, IO.IN, bucket, 10)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_fluid_input_bus_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.IMPORT_FLUIDS, PartAbility.IMPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.import_9x");


    event.create('max_fluid_input_bus_custom_giant', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier, IO.IN, bucket*10, 9)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_fluid_input_bus_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.IMPORT_FLUIDS, PartAbility.IMPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.import_9x");


    event.create('max_fluid_input_bus_custom', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier, IO.IN, FluidHatchPartMachine.INITIAL_TANK_CAPACITY_9X, 9)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_fluid_input_bus_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.IMPORT_FLUIDS, PartAbility.IMPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.import_9x");

    event.create('max_fluid_output_bus_custom', 'custom', (holder, tier) => {
        return new $FluidHatchPartMachine(holder, tier, IO.IN, FluidHatchPartMachine.INITIAL_TANK_CAPACITY_9X, 9)
    }, GTValues.MAX)
        .tooltips(Component.translatable("gtceu.machine.max_fluid_output_bus_custom"))
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.EXPORT_FLUIDS, PartAbility.EXPORT_FLUIDS_9X)
        .overlayTieredHullRenderer("fluid_hatch.export_9x");






    // the original from github
    /*

        // input item
        public static final MachineDefinition[] ITEM_IMPORT_BUS = registerTieredMachines("input_bus",
            (holder, tier) -> new ItemBusPartMachine(holder, tier, IO.IN),
            (tier, builder) -> builder
                .langValue(VNF[tier] + " Input Bus")
                .rotationState(RotationState.ALL)
                .abilities([PartAbility.IMPORT_ITEMS, PartAbility.STEAM_IMPORT_ITEMS])
                .overlayTieredHullRenderer("item_bus.import")
                .tooltips(Component.translatable("gtceu.machine.item_bus.import.tooltip"),
                    Component.translatable("gtceu.universal.tooltip.item_storage_capacity",(100)))
                .compassNode("item_bus")
                .register(),
            ALL_TIERS);


        // export item
        public static final MachineDefinition[] ITEM_EXPORT_BUS = registerTieredMachines("output_bus",
            (holder, tier) -> new ItemBusPartMachine(holder, tier, IO.OUT),
            (tier, builder) -> builder
                .langValue(VNF[tier] + " Output Bus")
                .rotationState(RotationState.ALL)
                .abilities([PartAbility.STEAM_EXPORT_ITEMS,PartAbility.EXPORT_ITEMS])
                .overlayTieredHullRenderer("item_bus.export")
                .tooltips(Component.translatable("gtceu.machine.item_bus.export.tooltip"))
                .compassNode("item_bus")
                .register(),
            ALL_TIERS);




        // original amounts
        //INITIAL_TANK_CAPACITY_1X = 8 * FluidType.BUCKET_VOLUME;
        //INITIAL_TANK_CAPACITY_4X = 2 * FluidType.BUCKET_VOLUME;
        //INITIAL_TANK_CAPACITY_9X = FluidType.BUCKET_VOLUME;


        public final static MachineDefinition[] FLUID_IMPORT_HATCH = registerTieredMachines(
            "input_hatch",
            (holder, tier) -> new FluidHatchPartMachine(holder, tier, IO.IN, FluidHatchPartMachine.INITIAL_TANK_CAPACITY_1X, 1),
            (tier, builder) -> {
                builder.langValue(VNF[tier] + " Input Hatch")
                    .rotationState(RotationState.ALL)
                    .overlayTieredHullRenderer("fluid_hatch.import")
                    .abilities(PartAbility.IMPORT_FLUIDS, PartAbility.IMPORT_FLUIDS_1X)
                    .compassNode("fluid_hatch")
                    .tooltips(Component.translatable("gtceu.machine.fluid_hatch.import.tooltip"));

                return builder.register();
            },
            ALL_TIERS);

        public final static MachineDefinition[] FLUID_EXPORT_HATCH = registerTieredMachines(
            "output_hatch",
            (holder, tier) -> new FluidHatchPartMachine(holder, tier, IO.OUT, FluidHatchPartMachine.INITIAL_TANK_CAPACITY_1X, 1),
            (tier, builder) -> {
                builder.langValue(VNF[tier] + " Output Hatch")
                    .rotationState(RotationState.ALL)
                    .overlayTieredHullRenderer("fluid_hatch.export")
                    .abilities(PartAbility.EXPORT_FLUIDS, PartAbility.EXPORT_FLUIDS_1X)
                    .compassNode("fluid_hatch")
                    .tooltips(Component.translatable("gtceu.machine.fluid_hatch.export.tooltip"));

                return builder.register();
            },
            ALL_TIERS);







        public static final MachineDefinition[] ENERGY_INPUT_HATCH = registerTieredMachines("energy_input_hatch",
            (holder, tier) -> new EnergyHatchPartMachine(holder, tier, IO.IN, 2),
            (tier, builder) -> builder
                .langValue(VNF[tier] + " Energy Hatch")
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.INPUT_ENERGY)
                .tooltips(Component.translatable("gtceu.machine.energy_hatch.input.tooltip"))
                .overlayTieredHullRenderer("energy_hatch.input")
                .compassNode("energy_hatch")
                .register(),
            ALL_TIERS);

        public static final MachineDefinition[] ENERGY_OUTPUT_HATCH = registerTieredMachines("energy_output_hatch",
            (holder, tier) -> new EnergyHatchPartMachine(holder, tier, IO.OUT, 2),
            (tier, builder) -> builder
                .langValue(VNF[tier] + " Dynamo Hatch")
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.OUTPUT_ENERGY)
                .tooltips(Component.translatable("gtceu.machine.energy_hatch.output.tooltip"))
                .overlayTieredHullRenderer("energy_hatch.output")
                .compassNode("energy_hatch")
                .register(),
            ALL_TIERS);







    public static final MachineDefinition[] LASER_INPUT_HATCH_256 = registerTieredMachines(
        "256a_laser_target_hatch",
        (holder, tier) -> new LaserHatchPartMachine(holder, IO.IN, tier, 256),
        (tier, builder) -> builder
            .langValue(VNF[tier] + "A Laser Target Hatch")
            .rotationState(RotationState.ALL)
            .tooltips(Component.translatable("gtceu.machine.laser_hatch.target.tooltip"))
            .abilities(PartAbility.INPUT_LASER)
            .overlayTieredHullRenderer("laser_hatch.target")
            .register(),
        HIGH_TIERS
    );

    public static final MachineDefinition[] LASER_OUTPUT_HATCH_256 = registerTieredMachines(
        "256a_laser_source_hatch",
        (holder, tier) -> new LaserHatchPartMachine(holder, IO.OUT, tier, 256),
        (tier, builder) -> builder
            .langValue(VNF[tier] + "A Laser Source Hatch")
            .rotationState(RotationState.ALL)
            .tooltips(Component.translatable("gtceu.machine.laser_hatch.source.tooltip"))
            .abilities(PartAbility.OUTPUT_LASER)
            .overlayTieredHullRenderer("laser_hatch.source")
            .register(),
        HIGH_TIERS
    );








        public static final MachineDefinition CLEANING_MAINTENANCE_HATCH = REGISTRATE
            .machine("cleaning_maintenance_hatch",
                holder -> new CleaningPartMachine(holder, CleanroomType.CLEANROOM))
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.MAINTENANCE)
            .tooltips(Component.translatable("gtceu.universal.disabled"))
            .renderer(() -> new MaintenanceHatchPartRenderer(3, GTCEu.id("block/machine/part/maintenance.cleaning")))
            .register();


    */





});

