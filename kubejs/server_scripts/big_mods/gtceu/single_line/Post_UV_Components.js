ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;




    const wireTypes = ["single", "double", "quadruple", "octal", "hex"];
    const amperages = ["1a", "2a", "4a", "8a", "16a"];
    const ioTypes = ["output", "input"];

// Loop through each voltage tier
    ["uhv","uev","uiv","uxv","opv","max"].forEach((tier,index) => {
        let [mat1,mat2,wire2] = volt_to_material[tier];
        let tierN = idex+8;
        let wire1 = volt_to_cable[tier];
        let eut = voltage_to_eu[tier];
        let [solder, poly, rubber, lube, assembling, extra] = volt_to_extra[tier];

        let EnergyHatchHelper = [
            ['gtceu:sodium_potassium 12000', `gtceu:${mat1} 1152`, `gtceu:${solder} 576`],
            [`gtceu:${assembling} 11520`, `gtceu:${solder} 5760`],
        ];

        // Energy Converters
        amperages.forEach((amperage, amperageIndex) => {
            if (amperageIndex == 2 || amperageIndex == 4) {
                let wireType = wireTypes[amperageIndex];
                event.remove({ output: `gtceu:${tier}_${amperage}_energy_converter` });
                event.shaped(Item.of(`gtceu:${tier}_${amperage}_energy_converter`),
                    [' BB', 'AHC', ' BB'], {
                        A: `gtceu:red_alloy_${wireType}_wire`,
                        B: `gtceu:${wire1}_${wireType}_wire`,
                        H: `gtceu:${tier}_machine_hull`,
                        C: `#gtceu:circuits/${tier}`,
                    });
            }
        });

        // Energy Hatches (both input and output)
        ioTypes.forEach((type, ioIndex) => {
            // Remove energy hatches for specific amperage types
            ["", `_4a`, `_16a`].forEach(amperageSuffix =>
            event.remove({ output: `gtceu:${tier}_energy_${type}_hatch${amperageSuffix}` })
        );

        // Basic energy hatch assembly line
        greg.assembly_line(`gfs:${tier}_energy_${type}_hatch`)
            .itemInputs(
                `gtceu:${tier}_machine_hull`,
                `4x #forge:springs/${wire1}`,
                `2x gtceu:uhpic_chip`,
                `#gtceu:circuits/${tier}`,
                `2x gtceu:${wire1}_double_wire`
            )
            .inputFluids(EnergyHatchHelper[ioIndex])
            .itemOutputs(`gtceu:${tier}_energy_${type}_hatch`)
            .duration(50 * 20)
            .EUt(eut);

        // Multi-energy hatches (for amperages 4a and 16a)
        [
            [amperages[2], wireTypes[2]],  // 4a
            [amperages[4], wireTypes[4]],  // 16a
        ].forEach(([amperage, wireType], index) =>
            greg.assembler(`gfs:${tier}_energy_${type}_hatch_${amperage}`)
                .itemInputs(
                    `gtceu:${tier}_energy_${type}_hatch_${amperage === "4a" ? "" : "4a"}`,
                    `2x gtceu:${mat1}_plate`,
                    `2x gtceu:${wire1}_${wireType}`
                )
                .itemOutputs(`${tier}_energy_${type}_hatch_${amperage}`)
                .duration(10 * 20)
                .EUt(eut * (4 ** (1 + index)))
        );
    });

    // Lasers (only for voltages below 11)
    if (index < 12) {
        [
            ["256a", 1, wireTypes[0]],
            ["1024a", 2, wireTypes[2]],
            ["4096a", 4, wireTypes[4]],
        ].forEach(([suffix, multi, wire], index) => {
            ["target", "source"].forEach((specialInput, ioIndex) => {
                greg.assembler(`gfs:${tier}_${suffix}_laser_${specialInput}_hatch`)
                    .itemInputs(
                        `gtceu:${tier}_machine_hull`,
                        `${multi}x gtceu:diamond_lens`,
                        `${multi}x gtceu:${tier}_${specialInput}`,
                        `${multi}x gtceu:${tier}_electric_pump`,
                        `4x gtceu:${wire1}_wire_${wire}`,
                    )
                    .itemOutputs(`gtceu:${tier}_${suffix}_laser_${specialInput}_hatch`)
                    .circuit(index + 1 + (specialInput === "source" ? 6 : 0))
                    .duration(20 * 20)
                    .EUt(eut);
            });
        });
    }

    // Casing & Machine Hull Assemblies
    event.remove({ output: `gtceu:${tier}_machine_hull` });
    event.remove({ output: `gtceu:${tier}_machine_casing` });

    greg.assembler(`gfs:${tier}_hull`)
        .itemInputs(
            `gtceu:${tier}_machine_casing`,
            `2x gtceu:${wire1}_single_wire`
        )
        .inputFluids(`gtceu:${rubber} 288`)
        .itemOutputs(`gtceu:${tier}_machine_hull`)
        .duration(5 * 20)
        .EUt(16);

    greg.assembler(`gfs:${tier}_casing`)
        .itemInputs(`8x gtceu:${mat1}_plate`)
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
            //console.log(`${index} ID ${tierN} is the tierNumber`);

            let lesser = voltages[index + 6];
            //console.log(`${index} ID ${lesser} is the lesser`);
			
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
                [solder, poly, rubber, lube, assembling, extra],
                name
            )||["2x minecraft:iron_ingot","minecraft:water 1000"];

            let [res_cwu, res_dur, res_eut] = volt_to_research[lesser];

            greg.assembly_line(`gfs:${tier}_${name}_n_research`)
                .itemInputs(solid)
                .inputFluids(liquid)
                .itemOutputs(`gtceu:${tier}_${name}`)
                .duration(20 * 20)
                .EUt(voltage_to_eu[lesser])
                .stationResearch((b) => b
                    .researchId(`research/gtceu_${lesser}_${name}_to_gtceu_${tier}_${name}`)
                    .dataStack("gtceu:data_orb")//gtceu:data_module
                    .researchStack(`gtceu:${tier}_${name}`)
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
