ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;



// Function for defining machine part materials
    function MachinePartsMaterials(tier, tierN, [mat1, mat2, wire1, wire2], [multi, multi_small, multi_l],
                                   [solder, poly, rubber, lube, assembling, extra], name) {
        //console.log("MachinePartsMaterials Function called!");
        //console.log([tier, tierN]);
		
		let multiHelp = (tierN-8)/2;
		
		let magnet = "magnetic_samarium";

        let ReturnOutput = [];

        if (name == machinePartHelp[0]) { // Electric Motor
            //console.log("Electric Motor run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x #forge:rods/long/${magnet}`,
                    `${Math.round(4 * multi)}x #forge:rods/long/${mat1}`,
                    `${Math.round(4 * multi)}x #forge:rings/${mat2}`,
                    `${Math.round(8 * multi)}x #forge:rounds/${mat2}`,
                    `${Math.round(128 * multi)}x #forge:fine_wires/${wire2}`,
                    `${Math.round(2 * multi)}x gtceu:${wire1}_single_wire`,
                ],
                [
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${lube} ${Math.round(2000 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
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
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${lube} ${Math.round(2000 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
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
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${lube} ${Math.round(2000 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
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
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${lube} ${Math.round(2000 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
                ],
            ];
        } else if (name == machinePartHelp[4]) { // Emitter
            //console.log("Emitter run");
            ReturnOutput = [
                [
                    `${Math.round(4 * multi)}x #forge:rods/long/${mat2}`,
                    `${Math.round(1 * multi)}x #forge:gears/${mat1}`,
                    `${Math.round(3 * multi)}x #forge:small_gears/${mat1}`,
                    `${Math.round(2 * multi)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(1 * multi)}x gtceu:${tier}_electric_piston`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(2 * multi_small)}x #gtceu:circuits/${voltages[tierN - 1]}`,
                    `${Math.round(4 * multi_small)}x #gtceu:circuits/${voltages[tierN - 2]}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${lube} ${Math.round(2000 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
                ],
            ];
        } else if (name == machinePartHelp[5]) { // Field Generator
            //console.log("Field Generator run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x #forge:frames/${mat1}`,
                    `${Math.round(1 * multi_small)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(4 * multi)}x #forge:plates/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:gravi_star`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(96 * multi)}x #forge:foils/${wire2}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
                ],
            ];
        } else if (name == machinePartHelp[6]) { // Conveyor Module
            //console.log("Conveyor Module run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x #forge:frames/${mat1}`,
                    `${Math.round(1 * multi_small)}x gtceu:${tier}_electric_motor`,
                    `${Math.round(4 * multi)}x #forge:long_rods/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:gravi_star`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(64 * multi)}x #forge:foils/${wire2}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
                ],
            ];
        } else if (name == machinePartHelp[7]) { // Electric Pump
            //console.log("Electric Pump run");
            ReturnOutput = [
                [
                    `${Math.round(1 * multi)}x #forge:frames/${mat1}`,
                    `${Math.round(6 * multi)}x #forge:plates/${mat2}`,
                    `${Math.round(2 * multi)}x gtceu:gravi_star`,
                    `${Math.round(1 * multi_small)}x gtceu:${tier}_emitter`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${tier}`,
                    `${Math.round(2 * 64 * multi)}x #forge:fine_wires/${wire2}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_double_wire`,
                ],
                [
                    `gtceu:${solder} ${Math.round(5760 * multiHelp)}`,
                    `gtceu:${assembling} ${Math.round(1152 * multiHelp)}`,
                    `gtceu:${extra} ${Math.round(576 * multiHelp)}`
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

            let lesser = voltages[index + 7];
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
                    .researchStack(`gtceu:${lesser}_${name}`)
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
