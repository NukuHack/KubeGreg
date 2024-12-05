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
        [voltages[9], 'omnium', volt_to_cable[voltages[9]], voltage_to_eu[voltages[8]]],
        [voltages[10], 'holmium', volt_to_cable[voltages[10]], voltage_to_eu[voltages[9]]],
        [voltages[11], 'monium', volt_to_cable[voltages[11]], voltage_to_eu[voltages[10]]],
    ].forEach(([tier, mat, mat_wire, eut], index) => {
        // energy converters
        amper_list.forEach((suffix, index_a) => {
            if (index_a != 1 && index_a != 3) {
                let wireType = wire_list[index_a];
                event.remove({output: `gtceu:${tier}_${suffix}_energy_converter`});
                event.shaped(Item.of(`gtceu:${tier}_${suffix}_energy_converter`),
                    [' BB', 'AHC', ' BB'], {
                        A: `gtceu:red_alloy_${wireType}_wire`,
                        B: `gtceu:${mat_wire}_${wireType}_wire`,
                        H: `gtceu:${tier}_machine_hull`,
                        C: `#gtceu:circuits/${tier}`
                    });
            }
        });

        // energy hatches
        io.forEach((type, index_io) => {
            // removing energy hatches
            ["", "_4a", "_16a"].forEach((v) =>
                event.remove({output: `gtceu:${tier}_energy_${type}_hatch${v}`})
            )
            // single energy hatches
            greg.assembly_line(`gfs:${tier}_energy_${type}_hatch`)
                .itemInputs(
                    `gtceu:${tier}_machine_hull`,
                    `4x #forge:springs/${mat_wire}`,
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
                greg.assembler(`gfs:${tier}_energy_${type}_hatch_${v}`)
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
                    greg.assembler(`gfs:${tier}_${suffix}_laser_${type}_hatch`)
                        .itemInputs(
                            `gtceu:${tier}_machine_hull`,
                            `${multi}x gtceu:diamond_lens`,
                            `${multi}x gtceu:${tier}_${specialInput}`,
                            `${multi}x gtceu:${tier}_electric_pump`,
                            `4x gtceu:${mat_wire}_${wire}_wire`
                        )
                        .itemOutputs(`gtceu:${tier}_${suffix}_laser_${type}_hatch`)
                        .circuit(index_laser + 1 * (index_io == 0 ? 1 : 6))
                        .duration(20*20)
                        .EUt(eut)
                )
            );
        }

    });


    // casing & machine hull
    [
        [voltages[9], 'omnium', volt_to_cable[voltages[9]]],
        [voltages[10], 'infinity', volt_to_cable[voltages[10]]],
        [voltages[11], 'monium', volt_to_cable[voltages[11]]],
    ].forEach(([tier, mat_casing, mat_wire]) => {
        event.remove({output: `gtceu:${tier}_machine_hull`});
        event.remove({output: `gtceu:${tier}_machine_casing`});

        // Hull assembler
        greg.assembler(`gfs:${tier}_hull`)
            .itemInputs(
                `gtceu:${tier}_machine_casing`,
                `2x gtceu:${mat_wire}_single_wire`,
            )
            .inputFluids("gtceu:polyether_ether_ketone 288")
            .itemOutputs(`gtceu:${tier}_machine_hull`)
            .duration(5 * 20)
            .EUt(16);


        // Casing assembler
        greg.assembler(`gfs:${tier}_casing`)
            .itemInputs(`8x gtceu:${mat_casing}_plate`)
            .itemOutputs(`gtceu:${tier}_machine_casing`)
            .circuit(8)
            .duration(5 * 20)
            .EUt(16);
    });


// Function for defining machine part materials
    function MachinePartsMaterials(tier, tierN, [mat1, mat2, wire1, wire2], [multi, multi_small, multi_l],
                                   [solder, poly, rubber, lube, assembling, extra], name) {
        //console.log("MachinePartsMaterials Function called!");
        //console.log([tier, tierN]);
		
		let magnet = "magnetic_samarium";

        let ReturnOutput = [];

        if (name == machinePartHelp[0]) { // Electric Motor
            //console.log("Electric Motor run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x #forge:long_rods/${magnet}`,
                    `${Math.round(4 * multi)}x #forge:long_rods/${mat2}`,
                    `${Math.round(4 * multi)}x #forge:rings/${mat2}`,
                    `${Math.round(8 * multi)}x #forge:rounds/${mat2}`,
                    `${Math.round(2 * 64 * multi)}x #forge:fine_wires/${wire2}`,
                    `${Math.round(2 * multi)}x gtceu:${mat1}_single_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${lube} ${Math.round(2000 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        } else if (name == machinePartHelp[1]) { // Electric Piston
            //console.log("Electric Piston run");
            ReturnOutput = [
                [
                    `${Math.round(4 * multi)}x #forge:plates/${mat1}`,
                    `${Math.round(4 * multi)}x #forge:rings/${mat2}`,
                    `${Math.round(16 * multi)}x #forge:rounds/${mat2}`,
                    `${Math.round(4 * multi)}x #forge:rods/${mat1}`,
                    `${Math.round(1 * multi)}x #forge:gears/${mat2}`,
                    `${Math.round(2 * multi)}x #forge:small_gears/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:${wire2}_double_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${lube} ${Math.round(2000 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        } else if (name == machinePartHelp[2]) { // Robot Arm
            //console.log("Robot Arm run");
            ReturnOutput = [
                [
                    `${Math.round(2 * multi_small)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(2 * multi)}x #forge:plates/${mat1}`,
                    `${Math.round(4 * multi)}x #forge:rings/${mat2}`,
                    `${Math.round(16 * multi)}x #forge:rounds/${mat2}`,
                    `${Math.round(4 * multi)}x #forge:screws/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${lube} ${Math.round(2000 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        } else if (name == machinePartHelp[3]) { // Sensor
            //console.log("Sensor run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi_small)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(1 * multi)}x gtceu:${mat2}_huge_fluid_pipe`,
                    `${Math.round(2 * multi)}x #forge:plates/${mat1}`,
                    `${Math.round(8 * multi)}x #forge:screws/${mat2}`,
                    `${Math.round(32 * multi)}x #forge:rings/${rubber}`,
                    `${Math.round(1 * multi_small)}x gtceu:${wire2}_rotor`,
                    `${Math.round(2 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${lube} ${Math.round(2000 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        } else if (name == machinePartHelp[4]) { // Emitter
            //console.log("Emitter run");
            ReturnOutput = [
                [
                    `${Math.round(4 * multi)}x #forge:long_rods/${mat2}`,
                    `${Math.round(1 * multi)}x #forge:gears/${mat1}`,
                    `${Math.round(3 * multi)}x #forge:small_gears/${mat1}`,
                    `${Math.round(2 * multi)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(1 * multi)}x gtceu:${tier}_electric_piston`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(2 * multi_small)}x #gtceu:circuits/${voltages[tierN - 1]}`,
                    `${Math.round(4 * multi_small)}x #gtceu:circuits/${voltages[tierN - 2]}`,
                    `${Math.round(4 * multi)}x gtceu:${mat1}_double_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${lube} ${Math.round(2000 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        } else if (name == machinePartHelp[5]) { // Field Generator
            //console.log("Field Generator run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x gtceu:${mat1}_frame`,
                    `${Math.round(1 * multi_small)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(4 * multi)}x #forge:plates/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:gravi_star`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(64 * multi)}x #forge:foils/${wire2}`,
                    `${Math.round(32 * multi)}x #forge:foils/${wire2}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        } else if (name == machinePartHelp[6]) { // Conveyor Module
            //console.log("Conveyor Module run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x gtceu:${mat1}_frame`,
                    `${Math.round(1 * multi_small)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(4 * multi)}x #forge:long_rods/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:gravi_star`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(64 * multi)}x #forge:foils/${wire2}`,
                    `${Math.round(32 * multi)}x #forge:foils/${wire2}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        } else if (name == machinePartHelp[7]) { // Electric Pump
            //console.log("Electric Pump run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x gtceu:${mat1}_frame`,
                    `${Math.round(6 * multi)}x #forge:plates/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:gravi_star`,
                    `${Math.round(1 * multi_small)}x gtceu:${tier}_emitter`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(2 * 64 * multi)}x #forge:fine_wires/${wire2}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `${solder} ${Math.round(5760 * multi_l)}`,
                    `${assembling} ${Math.round(1152 * multi_l)}`,
                    `${extra} ${Math.round(576 * multi_l)}`
                ],
            ];
        }

        //console.log(ReturnOutput);
        return ReturnOutput;
    }



    machinePartHelp.forEach((name) => {
        [
            'uhv', "uev", "uiv", "uxv", "opv",
            //"max",
        ].forEach((tier, index) => {

            let tierN = 8 + index;

            let lesser = voltages[index_stuff + 7];
            //console.log(`${index} ID ${lesser} is the lesser`);
            let tierNumber = index_stuff + 9;
            //console.log(`${index} ID ${tierNumber} is the tierNumber`);
            let [mat1, mat2, wire2] = volt_to_material[tier];
            //console.log(`${index} ID [${mat1}, ${mat2}, ${wire2}] is the mats`);
            let wire1 = volt_to_cable[tier];
            //console.log(`${index} ID [${wire1}] is the wire1`);
            let [solder, poly, rubber, lube, assembling, extra] = volt_to_extra[tier];
            //console.log(`${index} ID ${liq_help} is the liq_help`);
            let [[multi, multi_small, multi_l], type_s] = volt_to_small[tier];
            //console.log(`${index} ID ${multi_s} ${type_s} is the multi,type stuff`);

            //(tier, tierN, [mat1, mat2, wire1, wire2], [multi, multi_small, multi_l],
            //[solder, lube, assembling, extra], name)
            let [solid, liquid] = MachinePartsMaterials(
                tier, tierN,
                [mat1, mat2, wire1, wire2],
                [multi, multi_small, multi_l],
                [solder, lube, assembling, extra],
                name
            );

            let [res_cwu, res_dur, res_eut] = volt_to_research[lesser];

            greg.assembly_line(`gfs:${tier}_${name}_n_research`)
                .itemInputs(solid)
                .inputFluids(liquid)
                .itemOutputs(`gtceu:${tier}_${name}`)
                .duration(20 * 20)
                .EUt(voltage_to_eu[lesser])
                .stationResearch((b) => b
                    .researchId(`${Item.of(`gtceu:${lesser}_${name}`)}_to_gtceu:${tier}_${name}`)
                    .dataStack(Item.of("gtceu:data_orb"))//gtceu:data_module
                    .researchStack(Item.of(`gtceu:${tier}_${name}`))
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
