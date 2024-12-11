ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    // super_factory_manager

    event.remove({output: 'sfm:manager'});
    event.remove({output: "sfm:cable"});
    event.remove({output: "sfm:water_tank"});
    event.remove({output: "sfm:disk"});


    greg
        .assembler("gfs:sfm_manager")
        .circuit(12)
        .itemInputs(
            '2x #gtceu:circuits/ev',
            '3x gtceu:cobalt_brass_large_item_pipe',
            '4x gtceu:ev_robot_arm',
            'gtceu:computer_monitor_cover',
            '8x gtceu:double_stainless_steel_plate',
            '2x gtceu:item_filter',
            'gtceu:data_access_hatch'
        )
        .itemOutputs('sfm:manager')
        .duration(1200)
        .EUt(1760);

    // super_factory_cable
    greg
        .assembler("gfs:sfm_cable")
        .itemInputs("8x #forge:plates/titanium", "2x #gtceu:circuits/iv",
            "4x #forge:plates/ender_eye",
            '8x gtceu:long_distance_item_pipeline',
            '8x gtceu:long_distance_fluid_pipeline',
            '2x gtceu:ev_electric_motor',
            '18x gtceu:black_steel_plate'
        )
        .itemOutputs('8x sfm:cable')
        .duration(870)
        .EUt(980)


    greg.circuit_assembler('gfs:sfm_disk')
        .itemInputs(
            '16x gtceu:fine_electrum_wire',
            'gtceu:qbit_cpu_chip',
            '2x gtceu:nano_cpu_chip',
            '8x gtceu:ram_chip',
            '4x gtceu:polyethylene_plate'
        )
        .notConsumable('1x gtceu:data_stick')
        .inputFluids('gtceu:soldering_alloy 144')
        .duration(600)
        .EUt(1920)
        .itemOutputs('4x sfm:disk')


});
