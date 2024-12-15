ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    const wireTypes = ["single", "double", "quadruple", "octal", "hex"];
    const amperages = ["1a", "2a", "4a", "8a", "16a"];
    const ioTypes = ["output", "input"];


    // Loop through each voltage tier
    voltages.forEach((tier, index) => {
		
        let tierN = index + 9;
        let lesser = voltages[tierN-1];
        let [mat1, mat2, wire2] = volt_to_material[tier];
        let wire1 = volt_to_cable[tier];
        let eut = voltage_to_eu[tier];
        let [solder, poly, rubber, lube, assembling] = volt_to_extra[tier] || [];



        // Energy Converters
        amperages.forEach((amperage, amperageIndex) => {
            if (amperageIndex!=1&&amperageIndex!=3) {
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


		if (index>7){
			
			
        let EnergyHatchHelper = [
            [`gtceu:sodium_potassium 12000`, `gtceu:${mat1} 1152`, `gtceu:${solder} 576`],
            [`gtceu:${assembling} 11520`, `gtceu:${solder} 5760`],
        ];

        // Energy Hatches (input/output)
        ioTypes.forEach((type, ioIndex) => {
            // Remove old recipes
            ["", "_4a", "_16a"].forEach(suffix =>{
                event.remove({ output: `gtceu:${tier}_energy_${type}_hatch${suffix}` });
            });
                event.remove({ output: `gtceu:${tier}_substation_${type}_hatch_64a` });

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
                .duration(20 * 20)
                .EUt(eut);

            // Multi-energy hatches (4a and 16a and 64a)
			
                greg.assembler(`gfs:${tier}_energy_${type}_hatch_4a`)
                    .itemInputs(
                        `gtceu:${tier}_energy_${type}_hatch`,
                        `2x gtceu:${mat1}_plate`,
                        `2x gtceu:${wire1}_quadruple_wire`
                    )
                    .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_4a`)
                    .duration(10 * 20)
                    .EUt(voltage_to_eu[lesser]);
					
                greg.assembler(`gfs:${tier}_energy_${type}_hatch_16a`)
                    .itemInputs(
                        `gtceu:${tier}_transformer_1a`,
                        `gtceu:${tier}_energy_${type}_hatch_4a`,
                        `2x gtceu:${wire1}_hex_wire`
                        `4x gtceu:${mat1}_plate`,
                    )
                    .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_16a`)
                    .duration(20 * 20)
                    .EUt(eut);
			
                greg.assembler(`gfs:${tier}_substation_${type}_hatch_64a`)
                    .itemInputs(
                        `gtceu:${tier}_transformer_16a`,
                        `gtceu:${tier}_energy_${type}_hatch_16a`,
                        `2x gtceu:${wire1}_hex_wire`
                        `6x gtceu:${mat1}_plate`,
                    )
                    .itemOutputs(`gtceu:${tier}_substation_${type}_hatch_64a`)
                    .duration(30 * 20)
                    .EUt(eut);
				
			
        });
					
			// transformers :
				// this should redo every transformer even the lv ones
			// for 1,2,4
				// pic chip 2
				// 1 higher x cable
				// 4 tier x cable
				// 1 tier machine Hull
				// = 
				// tier transformer x
			// for 16
				// 1 tier transformer 4
				// 1 lesser electric motor
				// 1 lesser electric pump
				// 1 higher cable 8
				// 2 tier cable 16
				// 1 higher wire1 small spring
				// 2 wire1 springs
				// 2k lube

        // Lasers
        if (index < voltages.length-1) {
            [
                ["256a", 1, wireTypes[0]],
                ["1024a", 2, wireTypes[2]],
                ["4096a", 4, wireTypes[4]],
            ].forEach(([suffix, multiplier, wire], idx) => {
                ["target", "source"].forEach((special, ioIndex) => {
                event.remove({ output: `gtceu:${tier}_${suffix}_laser_${special}_hatch` });
                    greg.assembler(`gfs:${tier}_${suffix}_laser_${special}_hatch`)
                        .itemInputs(
                            `gtceu:${tier}_machine_hull`,
                            `${multiplier}x gtceu:diamond_lens`,
                            `${multiplier}x gtceu:${tier}_${special=="target"?"sensor":"emitter"}`,
                            `${multiplier}x gtceu:${tier}_electric_pump`,
                            `4x gtceu:${wire1}_${wire}_wire`
                        )
                        .itemOutputs(`gtceu:${tier}_${suffix}_laser_${special}_hatch`)
                        .circuit(3)
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
                `2x gtceu:${wire1}_single_${tierN>9?"cable":"wire"}`
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
