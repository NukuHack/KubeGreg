ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    const wireTypes = ["single", "double", "quadruple", "octal", "hex"];
    const ioTypes = ["output", "input"];


    // Loop through each voltage tier
    voltages.forEach((tier, index) => {

        let tierN = index;
        let lesser = voltages[tierN - 1] || null;
        let higher = voltages[tierN + 1] || null;
        let [mat1, mat2, wire2] = volt_to_material[tier] || [];
        let [hmat1, hmat2, hwire2] = volt_to_material[higher] || [];
        let wire1 = volt_to_cable[tier] || null;
        let hwire1 = volt_to_cable[higher] || null;
        let eut = voltage_to_eu[tier];
        let [solder, poly, rubber, lube, assembling] = volt_to_extra[tier] || [];


        // Energy Converters
        ["1a", "bread", "4a", "bread", "16a"].forEach((amperage, amperageIndex) => {
            if (amperage != "bread") {
                let wireType = wireTypes[amperageIndex];
                event.remove({output: `gtceu:${tier}_${amperage}_energy_converter`});
                event.shaped(Item.of(`gtceu:${tier}_${amperage}_energy_converter`), [
                    ' BB',
                    'AHC',
                    ' BB'
                ], {
                    A: `gtceu:red_alloy_${wireType}_cable`,
                    B: `gtceu:${wire1}_${wireType}_${index < 10 ? "cable" : "wire"}`,
                    H: `gtceu:${tier}_machine_hull`,
                    C: `#gtceu:circuits/${tier}`,
                });
            }
        });

        if (tierN > 0 && tierN < 14) {
            // transformers :
            ["1a", "2a", "4a", "bread", "bread"].forEach((amperage, amperageIndex) => {
                if (amperage != "bread") {
                    let wireType = wireTypes[amperageIndex];
                    event.remove({output: `gtceu:${tier}_transformer_${amperage}`});
                    event.shaped(Item.of(`gtceu:${tier}_transformer_${amperage}`), [
                        'XBB',
                        'AHC',
                        'XBB'
                    ], {
                        A: `gtceu:${hwire1}_${wireType}_${index < 9 ? "cable" : "wire"}`,
                        B: `gtceu:${wire1}_${wireType}_${index < 10 ? "cable" : "wire"}`,
                        H: `gtceu:${tier}_machine_hull`,
                        C: `#gtceu:circuits/${tier}`,               // will make the last uhpic to gfs:epic_chip ... later
                        X: `gtceu:${index < 5 ? "mpic" : (index < 7 ? "hpic" : (index < 11 ? "uhpic" : "uhpic"))}_chip`,
                    });
                }
            });
            // this should redo every transformer even the lv ones
            // for 1,2,4
            //`gtceu:${tier}_transformer_16a`,
            //-ev mpic
            //iv-luv hpic
            //zmp-uev uhpic
            //uiv- epic (gfs- extreme power circuit)

            ["16a"].forEach((amperage, amperageIndex) => {
                let wireType = wireTypes[4];
                greg.assembler(`gtceu:${tier}_transformer_${amperage}`)
                    .itemInputs(
                        `gtceu:${tier}_transformer_4a`,
                        `gtceu:${tier}_electric_motor`,
                        `gtceu:${tier}_electric_pump`,

                        `gtceu:${hwire1}_${"octal"}_${index < 9 ? "cable" : "wire"}`,
                        `2x gtceu:${wire1}_${wireType}_${index < 10 ? "cable" : "wire"}`,
                        `#forge:springs/small/${hwire1}`,
                        `2x #forge:springs/${wire1}`,

                        `gtceu:${index < 5 ? "mpic" : (index < 7 ? "hpic" : (index < 11 ? "uhpic" : "uhpic"))}_chip`,
                        `#gtceu:circuits/${tier}`,
                    )
                    .inputFluids(`gtceu:${lube} ${2000}`)
                    .itemOutputs(`gtceu:${tier}_energy_${type}_hatch`)
                    .duration(20 * 20)
                    .EUt(eut);
            });
        }

        if (index > 3) {


            let EnergyHatchHelper = [
                [`gtceu:sodium_potassium ${tier * 1000}`, `gtceu:${mat1} 1152`, `gtceu:${solder} 576`],
                [`gtceu:sodium_potassium ${tier * 1000}`, `gtceu:${assembling} 3000`, `gtceu:${solder} 5760`],
            ];

            // Energy Hatches (input/output)
            ioTypes.forEach((type, ioIndex) => {
                // Remove old recipes
                ["", "_4a", "_16a"].forEach(suffix => {
                    event.remove({output: `gtceu:${tier}_energy_${type}_hatch${suffix}`});
                });
                event.remove({output: `gtceu:${tier}_substation_${type}_hatch_64a`});

                // Basic energy hatch recipe
                if (index < 6) {
                    greg.assembler(`gfs:${tier}_energy_${type}_hatch`)
                        .itemInputs(
                            `gtceu:${tier}_machine_hull`,
                            `${type == "output" ?
                                `4x #forge:springs/${wire1}`
                                :
                                `4x gtceu:${wire1}_single_${index < 10 ? "cable" : "wire"}`
                            }`,
                            `2x gtceu:${index < 7 ? "hpic" : "uhpic"}_chip`,
                            `#gtceu:circuits/${tier}`,
                            (index < 9 ?
                                    `2x gtceu:${tier}_voltage_coil`
                                    :
                                    `2x #forge:rods/long/${"magnetic_samarium"}`,
                                    `32x #forge:fine_wires/${wire1}`
                            )
                        )
                        .inputFluids(EnergyHatchHelper[ioIndex][0])
                        .itemOutputs(`gtceu:${tier}_energy_${type}_hatch`)
                        .duration(20 * 20)
                        .EUt(eut);
                } else {
                    let [res_cwu, res_dur, res_eut] = volt_to_research[lesser];
                    greg.assembly_line(`gfs:${tier}_energy_${type}_hatch`)
                        .itemInputs(
                            `gtceu:${tier}_machine_hull`,
                            `${type == "output" ?
                                `4x #forge:springs/${wire1}`
                                :
                                `4x gtceu:${wire1}_single_${index < 10 ? "cable" : "wire"}`
                            }`,
                            `2x gtceu:${index < 7 ? "hpic" : "uhpic"}_chip`,
                            `#gtceu:circuits/${tier}`,
                            (index < 9 ?
                                    `2x gtceu:${tier}_voltage_coil`
                                    :
                                    `2x #forge:rods/long/${"magnetic_samarium"}`,
                                    `32x #forge:fine_wires/${wire1}`
                            )
                        )
                        .inputFluids(EnergyHatchHelper[ioIndex])
                        .itemOutputs(`gtceu:${tier}_energy_${type}_hatch`)
                        .duration(20 * 20)
                        .EUt(eut)
                        .stationResearch((b) => b
                            .researchId(`research/gtceu_${lesser}_energy_${type}_hatch_to_gtceu_${tier}_energy_${type}_hatch`)
                            .dataStack("gtceu:data_orb")
                            .researchStack(`gtceu:${lesser}_energy_${type}_hatch`)
                            .CWUt(res_cwu, res_dur)
                            .EUt(res_eut)
                        );
                }

                // Multi-energy hatches (4a and 16a and 64a)

                greg.assembler(`gfs:${tier}_energy_${type}_hatch_4a`)
                    .itemInputs(
                        `gtceu:${tier}_energy_${type}_hatch`,
                        `2x gtceu:${wire1}_quadruple_${index < 10 ? "cable" : "wire"}`,
                        `2x gtceu:${mat1}_plate`,
                    )
                    .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_4a`)
                    .duration(10 * 20)
                    .EUt(eut / 4);

                greg.assembler(`gfs:${tier}_energy_${type}_hatch_16a`)
                    .itemInputs(
                        `gtceu:${tier}_transformer_1a`,
                        `gtceu:${tier}_energy_${type}_hatch_4a`,
                        `4x gtceu:${wire1}_octal_${index < 10 ? "cable" : "wire"}`,
                        `4x gtceu:${mat1}_plate`,
                    )
                    .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_16a`)
                    .duration(20 * 20)
                    .EUt(eut);

                greg.assembler(`gfs:${tier}_substation_${type}_hatch_64a`)
                    .itemInputs(
                        `gtceu:${tier}_transformer_16a`,
                        `gtceu:${tier}_energy_${type}_hatch_16a`,
                        `4x gtceu:${wire1}_hex_${index < 10 ? "cable" : "wire"}`,
                        `6x gtceu:${mat1}_plate`,
                    )
                    .itemOutputs(`gtceu:${tier}_substation_${type}_hatch_64a`)
                    .duration(30 * 20)
                    .EUt(eut);


            });


            // Lasers
            if (index < voltages.length - 1) {
                [
                    ["256a", 1, wireTypes[0]],
                    ["1024a", 2, wireTypes[2]],
                    ["4096a", 4, wireTypes[3]],
                ].forEach(([suffix, multiplier, wire], idlaser) => {
                    ["target", "source"].forEach((special, ioIndex) => {
                        event.remove({output: `gtceu:${tier}_${suffix}_laser_${special}_hatch`});
                        greg.assembler(`gfs:${tier}_${suffix}_laser_${special}_hatch`)
                            .itemInputs(
                                `gtceu:${tier}_machine_hull`,
                                `${multiplier}x gtceu:diamond_lens`,
                                `${multiplier}x gtceu:${tier}_${special == "target" ? "sensor" : "emitter"}`,
                                `${multiplier}x gtceu:${tier}_electric_pump`,
                                `4x gtceu:${wire1}_${wire}_${index < 10 ? "cable" : "wire"}`,
                            )
                            .itemOutputs(`gtceu:${tier}_${suffix}_laser_${special}_hatch`)
                            .circuit(3)
                            .duration(20 * 20)
                            .EUt(eut);
                    });
                });
            }

            // Machine Hull and Casing Assemblies
            event.remove({output: `gtceu:${tier}_machine_hull`});
            event.remove({output: `gtceu:${tier}_machine_casing`});

            greg.assembler(`gfs:${tier}_hull`)
                .itemInputs(
                    `gtceu:${tier}_machine_casing`,
                    `2x gtceu:${wire1}_single_${index < 10 ? "cable" : "wire"}`,
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
        }
    });
});
