ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    const EnergyHatchHelper = [
        // in
        ['gtceu:sodium_potassium 12000', 'gtceu:omnium 1152', 'gtceu:soldering_alloy 576'],
        // out
        ['gtceu:crystal_matrix 11520', 'gtceu:soldering_alloy 5760'],
    ];


    const wire_list = ["single", "double", "quadruple", "octal", "hex"];
    // probably does not need the 2a and the default is just that
    const amper_list = ["1a", "2a", "4a", "8a", "16a"];
    const io = ["output", "input"];


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
                    A: `gtceu:red_alloy_${wireType}_wire`,
                    B: `gtceu:${mat_wire}_${wireType}_wire`,
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
                [amper_list[2], wire_list[2]],
                [amper_list[4], wire_list[4]],
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


    // Define motor configurations in an array
    const motorConfigs = [
        // 1x magnet long rod, 4x mat2 long rod, 4x mat2 ring, 8x mat2 round, 2x64 wire2 fine wire, 2x wire1 wire
        [['gtceu:long_magnetic_samarium_rod', '8x gtceu:long_neutronium_rod', '8x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:tritanium_quadruple_cable'],
            ['gtceu:soldering_alloy', 5760, 'gtceu:lubricant', 2000, 'gtceu:crystal_matrix', 1152, 'gtceu:naquadria', 576],],
        [['gtceu:long_magnetic_samarium_rod', '8x gtceu:long_omnium_rod', '8x gtceu:omnium_ring', '16x gtceu:omnium_round', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '4x gtceu:tritanium_octal_cable'],
            ['gtceu:soldering_alloy', 7680, 'gtceu:lubricant', 3000, 'gtceu:crystal_matrix', 1152 * 2, 'gtceu:naquadria', 576 * 2],],
        [['gtceu:long_magnetic_samarium_rod', '12x gtceu:long_infinity_rod', '12x gtceu:infinity_ring', '24x gtceu:infinity_round', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:tritanium_hex_cable'],
            ['gtceu:soldering_alloy', 5760 * 2, 'gtceu:lubricant', 4000, 'gtceu:crystal_matrix', 1152 * 4, 'gtceu:naquadria', 576 * 4],],
    ];


    // Define piston configurations in an array
    const pistonConfigs = [
        // 4x mat2 plate, 4x mat2 ring, 16x mat2 round,4x mat2 rod, 1x wire2 gear, 2x wire2 small_gear
        [['4x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_rod', 'gtceu:neutronium_gear', '2x gtceu:small_neutronium_gear', '2x gtceu:europium_double_cable'],
            ['gtceu:soldering_alloy', 5760, 'gtceu:lubricant', 2000, 'gtceu:crystal_matrix', 1152, 'gtceu:naquadria', 576],],
        [['4x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_rod', 'gtceu:omnium_gear', '2x gtceu:small_omnium_gear', '2x gtceu:activated_netherite_double_wire'],
            ['gtceu:soldering_alloy', 7680, 'gtceu:lubricant', 3000, 'gtceu:crystal_matrix', 1152 * 2, 'gtceu:naquadria', 576 * 2],],
        [['4x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_rod', 'gtceu:infinity_gear', '2x gtceu:small_infinity_gear', '2x gtceu:holmium_double_wire'],
            ['gtceu:soldering_alloy', 5760 * 2, 'gtceu:lubricant', 4000, 'gtceu:crystal_matrix', 1152 * 4, 'gtceu:naquadria', 576 * 4],],
    ];


    // Define the conveyor configurations in an array
    const conveyorConfigs = [
        // 2x motor, 2x mat2 plate, 4x mat2 ring, 16x mat2 round,4x mat2 screw, 2x wire1 wire
        [['2x gtceu:uhv_electric_motor', '2x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_screw', '2x gtceu:europium_double_cable'],
            ['gtceu:soldering_alloy', 5760, 'gtceu:lubricant', 2000, 'gtceu:crystal_matrix', 1152, 'gtceu:naquadria', 576],], // rubber not crystal
        [['2x gtceu:uev_electric_motor', '2x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_screw', '2x gtceu:activated_netherite_double_wire'],
            ['gtceu:soldering_alloy', 7680, 'gtceu:lubricant', 3000, 'gtceu:crystal_matrix', 1152 * 2, 'gtceu:naquadria', 576 * 2],],
        [['2x gtceu:uiv_electric_motor', '2x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_screw', '2x gtceu:holmium_double_wire'],
            ['gtceu:soldering_alloy', 5760 * 2, 'gtceu:lubricant', 4000, 'gtceu:crystal_matrix', 1152 * 4, 'gtceu:naquadria', 576 * 4],],
    ];


    // Define the pump configurations in an array
    const pumpConfigs = [
        // wire2 large_fluid, 2x mat2 plate, 8x mat2 screw, 16x rubber ring, wire2 rotor, 2x wire1 wire
        [['gtceu:uhv_electric_motor', 'gtceu:crystal_matrix_huge_fluid_pipe', '2x gtceu:neutronium_plate', '8x gtceu:neutronium_screw', '32x gtceu:neutronium_ring', 'gtceu:crystal_matrix_rotor', '2x gtceu:europium_double_cable',],
            ['gtceu:soldering_alloy', 5760, 'gtceu:lubricant', 2000, 'gtceu:crystal_matrix', 1152, 'gtceu:naquadria', 576],],
        [['gtceu:uev_electric_motor', 'gtceu:activated_netherite_huge_fluid_pipe', '2x gtceu:omnium_plate', '8x gtceu:omnium_screw', '48x gtceu:omnium_ring', 'gtceu:activated_netherite_rotor', '2x gtceu:activated_netherite_double_wire',],
            ['gtceu:soldering_alloy', 7680, 'gtceu:lubricant', 3000, 'gtceu:crystal_matrix', 1152 * 2, 'gtceu:naquadria', 576 * 2],],
        [['gtceu:uiv_electric_motor', 'gtceu:holmium_huge_fluid_pipe', '2x gtceu:infinity_plate', '8x gtceu:infinity_screw', '64x gtceu:infinity_ring', 'gtceu:holmium_rotor', '2x gtceu:holmium_double_wire',],
            ['gtceu:soldering_alloy', 5760 * 2, 'gtceu:lubricant', 4000, 'gtceu:crystal_matrix', 1152 * 4, 'gtceu:naquadria', 576 * 4],],
    ];


    // Define the robot arm configurations in an array
    const robotArmConfigs = [
        // 4x mat2 long rod, 1x mat1 gear, 3x mat1 small_gear, 2 motor, 1 piston, circuit, 2 circuit-1, 4 circuit-2, 4x wire1 wire
        [['4x gtceu:long_neutronium_rod', 'gtceu:neutronium_gear', '3x gtceu:small_neutronium_gear', '3x gtceu:uhv_electric_motor', 'gtceu:uhv_electric_piston', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '4x #gtceu:circuits/zpm', '4x gtceu:europium_double_cable'],
            ['gtceu:soldering_alloy', 5760, 'gtceu:lubricant', 2000, 'gtceu:crystal_matrix', 1152, 'gtceu:naquadria', 576],],
        [['4x gtceu:long_omnium_rod', 'gtceu:omnium_gear', '3x gtceu:small_omnium_gear', '3x gtceu:uev_electric_motor', 'gtceu:uev_electric_piston', '#gtceu:circuits/uev', '2x #gtceu:circuits/uhv', '4x #gtceu:circuits/uv', '4x gtceu:activated_netherite_double_wire'],
            ['gtceu:soldering_alloy', 7680, 'gtceu:lubricant', 3000, 'gtceu:crystal_matrix', 1152 * 2, 'gtceu:naquadria', 576 * 2],],
        [['4x gtceu:long_infinity_rod', 'gtceu:infinity_gear', '3x gtceu:small_infinity_gear', '3x gtceu:uiv_electric_motor', 'gtceu:uiv_electric_piston', '#gtceu:circuits/uiv', '2x #gtceu:circuits/uev', '4x #gtceu:circuits/uhv', '4x gtceu:holmium_double_wire'],
            ['gtceu:soldering_alloy', 5760 * 2, 'gtceu:lubricant', 4000, 'gtceu:crystal_matrix', 1152 * 4, 'gtceu:naquadria', 576 * 4],],
    ];


    // Define the sensor configurations in an array
    const sensorConfigs = [
        // mat1 frame, motor, 4x mat2 plate, gravi_star, 2x circuit, 2,5x64 wire2 foil, 4x wire1 wire
        [['gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable'],
            ['gtceu:soldering_alloy', 11520 / 2, 'gtceu:crystal_matrix', 5760 / 4, 'gtceu:naquadria', 2304 / 4],],
        [['gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_plate', 'gfs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:activated_netherite_double_wire'],
            ['gtceu:soldering_alloy', 7680, 'gtceu:crystal_matrix', 5760 / 2, 'gtceu:naquadria', 2304 / 2],],
        [['gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '2x gfs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire'],
            ['gtceu:soldering_alloy', 11520, 'gtceu:crystal_matrix', 5760, 'gtceu:naquadria', 2304],],
    ];


    // Define the emitter configurations in an array
    const emitterConfigs = [
        // mat1 frame, motor, 4x mat2 long rod, gravi_star, 2x circuit, 2,5x64 wire2 foil, 4x wire1 wire
        [['gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_rod', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable'],
            ['gtceu:soldering_alloy', 11520 / 2, 'gtceu:crystal_matrix', 5760 / 4, 'gtceu:naquadria', 2304 / 4],],
        [['gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_rod', 'gfs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:activated_netherite_double_wire'],
            ['gtceu:soldering_alloy', 7680, 'gtceu:crystal_matrix', 5760 / 2, 'gtceu:naquadria', 2304 / 2],],
        [['gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_rod', '2x gfs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire'],
            ['gtceu:soldering_alloy', 11520, 'gtceu:crystal_matrix', 5760, 'gtceu:naquadria', 2304],],
    ];


    // Define the field generator configurations in an array
    const fieldGeneratorConfigs = [
        // mat1 frame, motor, 6x mat2 plate, gravi_star, 2x emitter, 2x circuit, 2x64 wire1 fine_wire, 4x wire1 wire
        [['gtceu:neutronium_frame', '6x gtceu:neutronium_plate', '2x gtceu:gravi_star', '2x gtceu:uhv_emitter', '2x #gtceu:circuits/uhv', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:europium_double_cable'],
            ['gtceu:soldering_alloy', 11520 / 2, 'gtceu:crystal_matrix', 5760 / 4, 'gtceu:naquadria', 2304 / 4],],
        [['gtceu:omnium_frame', '6x gtceu:omnium_plate', 'gfs:quasi_stable_neutron_star', '2x gtceu:uev_emitter', '2x #gtceu:circuits/uev', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '4x gtceu:activated_netherite_double_wire'],
            ['gtceu:soldering_alloy', 7680, 'gtceu:crystal_matrix', 5760 / 2, 'gtceu:naquadria', 2304 / 2],],
        [['gtceu:infinity_frame', '6x gtceu:infinity_plate', '2x gfs:quasi_stable_neutron_star', '2x gtceu:uiv_emitter', '2x #gtceu:circuits/uiv', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:holmium_double_wire'],
            ['gtceu:soldering_alloy', 11520, 'gtceu:crystal_matrix', 5760, 'gtceu:naquadria', 2304],],
    ];


    //wire2 : fine_wire,gear,small_gear,large_fluid,rotor,foil
    //wire1 : wire,fine_wire
    //mat1 : frame,gear,small_gear
    //mat2 : plate,long rod,rod,ring,round,screw

    // amount*(2**index)
    // amount*(index+1)

    const Post_UV_Components = [
        ["electric_motor", motorConfigs],
        ["electric_piston", pistonConfigs],
        ["robot_arm", robotArmConfigs],
        ["sensor", sensorConfigs],
        ["emitter", emitterConfigs],
        ["field_generator", fieldGeneratorConfigs],
        ["conveyor_module", conveyorConfigs],
        ["electric_pump", pumpConfigs],
    ];

    // calling and doing waaaaaay too fucking much
    Post_UV_Components.forEach(([BigArray, craft_item], index_array) => {
        BigArray.forEach(({parts, liquids}, index) => {
            let tier = index + 8;
            let [help, eut] = [voltage_lesser(tier), voltage_to_eu[tier]];
            let [res_cwu, res_dur, res_eut] = tier_to_research[tier];
            let [[material, materialSecond, wireSecond], wire] = [volt_to_material[tier], voltage_to_cable[tier]];
            //                                          // 2/3                         // 2                    // 2                                   // 2
            let fluids = ['gtceu:soldering_alloy', 5760, 'gtceu:crystal_matrix', 2304, 'gtceu:naquadria', 691, 'gtceu:styrene_butadiene_rubber', 2304]
            greg.assembly_line(`gfs:${tier}_${craft_item}_n_research`)
                .itemInputs(inp)
                .inputFluids(in_f)
                .itemOutputs(`gtceu:${tier}_${craft_item}`)
                .duration(10 * 20 * (index + 1))
                .EUt(eut)
                .stationResearch(b => b
                    .researchStack(`gtceu:${help}_${craft_item}`)
                    .CWUt(res_cwu, res_dur)
                    .EUt(res_eut)
                );
        });
    });

    // Define the fluid regulator configurations as arrays
    [
        [voltages[8], voltage_to_eu[voltages[8]]],
        [voltages[9], voltage_to_eu[voltages[9]]],
        [voltages[10], voltage_to_eu[voltages[10]]],
    ].forEach(([tier, eut]) => {
        let craft_item = "fluid_regulator";
        greg.assembler(`gfs:${tier}_${craft_item}`)
            .itemInputs(`gtceu:${tier}_electric_pump`, `2x #gtceu:circuits/${tier}`)
            .circuit(1)
            .itemOutputs(`gtceu:${tier}_${craft_item}`)
            .duration(5 * 20)
            .EUt(eut);
    });


});
