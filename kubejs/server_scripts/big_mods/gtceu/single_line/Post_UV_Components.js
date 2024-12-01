ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    const EnergyHatchHelper = [
        // in
        ['gtceu:sodium_potassium 12000', 'gtceu:omnium 1152', 'gtceu:soldering_alloy 576'],
        // out
        ['gtceu:crystal_matrix 11520', 'gtceu:soldering_alloy 5760'],
    ];


    [
        [voltages[9], 'omnium', voltage_to_cable[voltages[9]], voltage_to_eu[voltages[8]]],
        [voltages[10], 'holmium', voltage_to_cable[voltages[10]], voltage_to_eu[voltages[9]]],
        [voltages[11], 'monium', voltage_to_cable[voltages[11]], voltage_to_eu[voltages[10]]],
    ].forEach(([tier, mat, mat_wire, eut], index) => {
        // energy converters
        amper_list.forEach((suffix, index_a) => {
            let wireType = wire_list[index_a];
            event.remove({output: `gtceu:${tier}_${suffix}_energy_converter`});
            event.shaped(Item.of(`gtceu:${tier}_${suffix}_energy_converter`),
                [' BB', 'AHC', ' BB'], {
                    A: `gtceu:red_alloy_${wireType}`,
                    B: `gtceu:${mat_wire}_${wireType}`,
                    H: `gtceu:${tier}_machine_hull`,
                    C: `#gtceu:circuits/${tier}`
                });
        });

        // energy hatches
        io.forEach((type, index_io) => {
            // removing energy hatches
            ["", "_4a", "_16a"].forEach((v) =>
                event.remove({output: `gtceu:${tier}_energy_${type}_hatch${v}`})
            )
            // single energy hatches
            greg.assembly_line(`gtceu:${tier}_energy_${type}_hatch`)
                .itemInputs(
                    `gtceu:${tier}_machine_hull`,
                    `4x gtceu:${mat_wire}_spring`,
                    `2x gtceu:uhpic_chip`,
                    `#gtceu:circuits/${tier}`,
                    `2x gtceu:${mat}_double_wire`
                )
                .inputFluids(EnergyHatchHelper[index_io])
                .itemOutputs(`gtceu:${tier}_energy_${type}_hatch`)
                .duration(50 * 20)
                .EUt(eut);

            [
                [amper_list[1], wire_list[2]],
                [amper_list[3], wire_list[4]],
            ].forEach(([v, w], index_amper) =>
                // multi energy hatches
                greg.assembler(`${tier}_energy_${type}_hatch_${v}`)
                    .itemInputs(
                        `gtceu:${tier}_energy_${type}_hatch_${v == "4a" ? "" : "4a"}`,
                        `2x gtceu:${mat}_plate`,
                        `2x gtceu:${mat_wire}_${w}`
                    )
                    .itemOutputs(`${tier}_energy_${type}_hatch_${v}`)
                    .duration(10 * 20)
                    .EUt(eut * (4 ** (1 + index_amper)))
            );
        });

        // lasers
        if (voltages.indexOf(tier) < 11) {
            [
                // [suffix, input_multiplier, circuit, wireType]
                ["256a", 1, wire_list[0]],
                ["1024a", 2, wire_list[2]],
                ["4096a", 4, wire_list[4]],
            ].forEach(([suffix, multi, wire], index_laser) =>
                [
                    // [type, specialInput]
                    ["target", "emitter"],
                    ["source", "sensor"],
                ].forEach(([type, specialInput], index_io) =>
                    greg.assembler(`${tier}_${suffix}_laser_${type}_hatch`)
                        .itemInputs(
                            `gtceu:${tier}_machine_hull`,
                            `${multi}x gtceu:diamond_lens`,
                            `${multi}x gtceu:${tier}_${specialInput}`,
                            `${multi}x gtceu:${tier}_electric_pump`,
                            `4x gtceu:${mat_wire}_${wire}`
                        )
                        .itemOutputs(`gtceu:${tier}_${suffix}_laser_${type}_hatch`)
                        .circuit(index_laser + 1 * (index_io == 0 ? 1 : 6))
                        .duration(400)
                        .EUt(eut)
                )
            );
        }

    });


    // casing & machine hull
    [
        [voltages[9], 'omnium', voltage_to_cable[voltages[9]]],
        [voltages[10], 'infinity', voltage_to_cable[voltages[10]]],
        [voltages[11], 'monium', voltage_to_cable[voltages[11]]],
    ].forEach(([tier, mat_casing, mat_wire]) => {
        event.remove({output: `gtceu:${tier}_machine_hull`});
        event.remove({output: `gtceu:${tier}_machine_casing`});

        // Hull assembler
        greg.assembler(`${tier}_hull`)
            .itemInputs(
                `gtceu:${tier}_machine_casing`,
                `2x gtceu:${mat_wire}_single_wire`,
                `2x gtceu:polyether_ether_ketone_plate`
            )
            .itemOutputs(`gtceu:${tier}_machine_hull`)
            .duration(5 * 20)
            .EUt(16);

        // Casing assembler
        greg.assembler(`${tier}_casing`)
            .itemInputs(`8x gtceu:${mat_casing}_plate`)
            .itemOutputs(`gtceu:${tier}_machine_casing`)
            .circuit(8)
            .duration(5 * 20)
            .EUt(16);
    });



            .circuit(1)
    // Motors
    greg.assembly_line('uhv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_neutronium_rod', '8x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:tritanium_quadruple_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_motor')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_electric_motor')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_omnium_rod', '8x gtceu:omnium_ring', '16x gtceu:omnium_round', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '4x gtceu:tritanium_octal_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_motor')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_electric_motor')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    greg.assembly_line('uiv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '12x gtceu:long_infinity_rod', '12x gtceu:infinity_ring', '24x gtceu:infinity_round', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:tritanium_hex_cable')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_motor')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_electric_motor')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Pistons
    greg.assembly_line('uhv_piston')
        .itemInputs('gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_rod', 'gtceu:neutronium_gear', '2x gtceu:small_neutronium_gear', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_piston')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_electric_piston')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_piston')
        .itemInputs('gtceu:uev_electric_motor', '4x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_rod', 'gtceu:omnium_gear', '2x gtceu:small_omnium_gear', '2x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_piston')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_electric_piston')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    greg.assembly_line('uiv_piston')
        .itemInputs('gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_rod', 'gtceu:infinity_gear', '2x gtceu:small_infinity_gear', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_piston')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_electric_piston')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Robot Arms
    greg.assembly_line('uhv_robot_arm')
        .itemInputs('4x gtceu:long_neutronium_rod', 'gtceu:neutronium_gear', '3x gtceu:small_neutronium_gear', '3x gtceu:uhv_electric_motor', 'gtceu:uhv_electric_piston', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '4x #gtceu:circuits/zpm', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_robot_arm')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_robot_arm')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_robot_arm')
        .itemInputs('4x gtceu:long_omnium_rod', 'gtceu:omnium_gear', '3x gtceu:small_omnium_gear', '3x gtceu:uev_electric_motor', 'gtceu:uev_electric_piston', '#gtceu:circuits/uev', '2x #gtceu:circuits/uhv', '4x #gtceu:circuits/uv', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_robot_arm')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_robot_arm')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    greg.assembly_line('uiv_robot_arm')
        .itemInputs('4x gtceu:long_infinity_rod', 'gtceu:infinity_gear', '3x gtceu:small_infinity_gear', '3x gtceu:uiv_electric_motor', 'gtceu:uiv_electric_piston', '#gtceu:circuits/uiv', '2x #gtceu:circuits/uev', '4x #gtceu:circuits/uhv', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_robot_arm')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_robot_arm')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Sensors
    greg.assembly_line('uhv_sensor')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_sensor')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_sensor')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_sensor')
        .itemInputs('gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_plate', 'gfs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_sensor')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_sensor')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    greg.assembly_line('uiv_sensor')
        .itemInputs('gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '2x gfs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_sensor')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_sensor')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Emitters
    greg.assembly_line('uhv_emitter')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_rod', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_emitter')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_emitter')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_emitter')
        .itemInputs('gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_rod', 'gfs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_emitter')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_emitter')
            .CWUt(128, 512000)
            .EUt(524288)
        )


    greg.assembly_line('uiv_emitter')
        .itemInputs('gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_rod', '2x gfs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_emitter')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_emitter')
            .CWUt(144, 576000)
            .EUt(1048576)
        )


    // Field Generators
    greg.assembly_line('uhv_field_generator')
        .itemInputs('gtceu:neutronium_frame', '6x gtceu:neutronium_plate', '2x gtceu:gravi_star', '2x gtceu:uhv_emitter', '2x #gtceu:circuits/uhv', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_field_generator')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_field_generator')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_field_generator')
        .itemInputs('gtceu:omnium_frame', '6x gtceu:omnium_plate', 'gfs:quasi_stable_neutron_star', '2x gtceu:uev_emitter', '2x #gtceu:circuits/uev', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_field_generator')
        .duration(600)
        .EUt(1966080)


        .stationResearch(b => b
            .researchStack('gtceu:uhv_field_generator')
            .CWUt(128, 512000)
            .EUt(524288)
        )


    greg.assembly_line('uiv_field_generator')
        .itemInputs('gtceu:infinity_frame', '6x gtceu:infinity_plate', '2x gfs:quasi_stable_neutron_star', '2x gtceu:uiv_emitter', '2x #gtceu:circuits/uiv', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_field_generator')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_field_generator')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Conveyors
    greg.assembly_line('uhv_conveyor')
        .itemInputs('2x gtceu:uhv_electric_motor', '2x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_screw', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_conveyor_module')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_conveyor_module')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_conveyor')
        .itemInputs('2x gtceu:uev_electric_motor', '2x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_screw', '2x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_conveyor_module')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_conveyor_module')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    greg.assembly_line('uiv_conveyor')
        .itemInputs('2x gtceu:uiv_electric_motor', '2x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_screw', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_conveyor_module')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_conveyor_module')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Pumps
    greg.assembly_line('uhv_pump')
        .itemInputs('gtceu:uhv_electric_motor', 'gtceu:crystal_matrix_huge_fluid_pipe', '2x gtceu:neutronium_plate', '8x gtceu:neutronium_screw', '32x gtceu:neutronium_ring', 'gtceu:crystal_matrix_rotor', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_pump')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_electric_pump')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    greg.assembly_line('uev_pump')
        .itemInputs('gtceu:uev_electric_motor', 'gtceu:activated_netherite_huge_fluid_pipe', '2x gtceu:omnium_plate', '8x gtceu:omnium_screw', '48x gtceu:omnium_ring', 'gtceu:activated_netherite_rotor', '2x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_pump')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_electric_pump')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    greg.assembly_line('uiv_pump')
        .itemInputs('gtceu:uiv_electric_motor', 'gtceu:holmium_huge_fluid_pipe', '2x gtceu:infinity_plate', '8x gtceu:infinity_screw', '64x gtceu:infinity_ring', 'gtceu:holmium_rotor', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_pump')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_electric_pump')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Fluid Regulators
    greg.assembler('uhv_fluid_regulator')
        .itemInputs('gtceu:uhv_electric_pump', '2x #gtceu:circuits/uhv')
        .circuit(1)
        .itemOutputs('gtceu:uhv_fluid_regulator')
        .duration(50)
        .EUt(1966080)

    greg.assembler('uev_fluid_regulator')
        .itemInputs('gtceu:uev_electric_pump', '2x #gtceu:circuits/uev')
        .circuit(1)
        .itemOutputs('gtceu:uev_fluid_regulator')
        .duration(50)
        .EUt(3932160)

    greg.assembler('uiv_fluid_regulator')
        .itemInputs('gtceu:uiv_electric_pump', '2x #gtceu:circuits/uiv')
        .circuit(1)
        .itemOutputs('gtceu:uiv_fluid_regulator')
        .duration(50)
        .EUt(15728640)
})
