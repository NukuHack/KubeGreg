ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    const wireTypes = ["single", "double", "quadruple", "octal", "hex"];
    const amperages = ["1a", "2a", "4a", "8a", "16a"];
    const ioTypes = ["output", "input"];


    // Loop through each voltage tier
    ["uhv", "uev", "uiv", "uxv", "opv", "max"].forEach((tier, index) => {
		
        let materials = volt_to_material[tier];
        let [mat1, mat2, wire2] = materials;
        let tierN = index + 8;
        let wire1 = volt_to_cable[tier];
        let eut = voltage_to_eu[tier];
        let extra = volt_to_extra[tier] || [];
        let [solder, poly, rubber, lube, assembling] = extra;

        let EnergyHatchHelper = [
            [`gtceu:sodium_potassium 12000`, `gtceu:${mat1} 1152`, `gtceu:${solder} 576`],
            [`gtceu:${assembling} 11520`, `gtceu:${solder} 5760`],
        ];

        // Energy Converters
        amperages.forEach((amperage, amperageIndex) => {
            if ([2, 4].includes(amperageIndex)) {
                let wireType = wireTypes[amperageIndex];
                event.remove({ output: `gtceu:${tier}_${amperage}_energy_converter` });
                event.shaped(Item.of(`gtceu:${tier}_${amperage}_energy_converter`), [
                    ' BB',
                    'AHC',
                    ' BB'
                ], {
                    A: `gtceu:red_alloy_${wireType}_wire`,
                    B: `gtceu:${wire1}_${wireType}_wire`,
                    H: `gtceu:${tier}_machine_hull`,
                    C: `#gtceu:circuits/${tier}`
                });
            }
        });

        // Energy Hatches (input/output)
        ioTypes.forEach((type, ioIndex) => {
            // Remove old recipes
            ["", "_4a", "_16a"].forEach(suffix =>
                event.remove({ output: `gtceu:${tier}_energy_${type}_hatch${suffix}` })
            );

            // Basic energy hatch recipe
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

            // Multi-energy hatches (4a and 16a)
            [
                [amperages[2], wireTypes[2]], // 4a
                [amperages[4], wireTypes[4]], // 16a
            ].forEach(([amperage, wireType], idx) =>
                greg.assembler(`gfs:${tier}_energy_${type}_hatch_${amperage}`)
                    .itemInputs(
                        `gtceu:${tier}_energy_${type}_hatch${amperage === "4a" ? "" : "_4a"}`,
                        `2x gtceu:${mat1}_plate`,
                        `2x gtceu:${wire1}_${wireType}`
                    )
                    .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_${amperage}`)
                    .duration(10 * 20)
                    .EUt(eut * (4 ** (1 + idx)))
            );
        });

        // Lasers (only for voltages below 11)
        if (index < 12) {
            [
                ["256a", 1, wireTypes[0]],
                ["1024a", 2, wireTypes[2]],
                ["4096a", 4, wireTypes[4]],
            ].forEach(([suffix, multiplier, wire], idx) => {
                ["target", "source"].forEach((specialInput, ioIndex) => {
                    greg.assembler(`gfs:${tier}_${suffix}_laser_${specialInput}_hatch`)
                        .itemInputs(
                            `gtceu:${tier}_machine_hull`,
                            `${multiplier}x gtceu:diamond_lens`,
                            `${multiplier}x gtceu:${tier}_${(specialInput=="target"?"sensor":"emitter")}`,
                            `${multiplier}x gtceu:${tier}_electric_pump`,
                            `4x gtceu:${wire1}_${wire}_wire`
                        )
                        .itemOutputs(`gtceu:${tier}_${suffix}_laser_${specialInput}_hatch`)
                        .circuit(idx + 1 + (specialInput === "source" ? 6 : 0))
                        .duration(20 * 20)
                        .EUt(eut);
                });
            });
        }

        // Machine Hull and Casing Assemblies
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
});
