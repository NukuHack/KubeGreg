ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    // Wetware tweaks
    event.remove({output: 'gtceu:neuro_processing_unit'})
    greg.circuit_assembler('gfs:neuro_processing_unit')
        .itemInputs('gtceu:wetware_printed_circuit_board', '4x gtceu:stem_cells', '8x gtceu:polybenzimidazole_small_fluid_pipe', '4x gtceu:neutronium_plate', '16x gtceu:silicone_rubber_foil', '8x gtceu:hsse_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('gtceu:neuro_processing_unit')
        .duration(5*20)
        .EUt(voltage_to_eu["zmp"])
        .cleanroom(CleanroomType.CLEANROOM)


    const smds = [
        ['transistor', 'gtceu:diamond_plate', '8x gtceu:fine_holmium_wire'],
        ['resistor', 'gtceu:activated_netherite_dust', '4x gtceu:fine_holmium_wire'],
        ['capacitor', 'gtceu:polyether_ether_ketone_foil', 'gtceu:holmium_foil'],
        ['diode', 'gtceu:ruthenium_trinium_americium_neutronate_dust', '16x gtceu:fine_holmium_wire'],
        ['inductor', 'gtceu:tritanium_ring', '16x gtceu:fine_holmium_wire']
    ]

    smds.forEach(([item,primary,secondary]) => {
        greg.assembler(`complex_smd_${item}`)
            .itemInputs(primary, secondary)
            .itemOutputs(`32x gfs:complex_smd_${item}`)
            .duration(7 * 20)
            .EUt(voltage_to_eu["uhv"]);
    })


    // Define input materials, fluids, and outputs separately
    const CircuitMaterials = {
        matter: {
            'circuit_board': ['16x gtceu:omnium_plate', '32x gtceu:activated_netherite_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:neuro_processing_unit', 'gtceu:iv_emitter', '8x gtceu:omnic_acid_dust'],
            'processing_unit': ['2x gfs:matter_circuit_board', '2x gtceu:crystal_matrix_plate', '2x gtceu:activated_netherite_double_wire', 'gtceu:highly_advanced_soc'],
            'processor': ['gfs:matter_processing_unit', '8x gtceu:advanced_smd_capacitor', '4x gtceu:advanced_smd_transistor', '4x gfs:multidimensional_cpu_chip', '4x gtceu:fine_naquadria_wire'],
            'processor_assembly': ['gfs:matter_processing_unit', '4x gfs:matter_processor', '12x gfs:multidimensional_cpu_chip', '12x gtceu:advanced_smd_capacitor', '6x gtceu:advanced_smd_transistor', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire'],
            'processor_computer': ['gfs:matter_processing_unit', '2x gfs:matter_processor_assembly', '24x gfs:multidimensional_cpu_chip', '12x gtceu:advanced_smd_capacitor', '8x gtceu:advanced_smd_transistor', '8x gtceu:advanced_smd_diode', '8x gtceu:advanced_smd_resistor', '8x gtceu:uhpic_chip', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', '8x gtceu:polyether_ether_ketone_foil'],
            'processor_mainframe': ['4x gtceu:activated_netherite_frame', '16x gfs:matter_processor_computer', '24x gtceu:advanced_smd_capacitor', '24x gtceu:advanced_smd_transistor', '24x gtceu:advanced_smd_diode', '24x gtceu:advanced_smd_resistor', '24x gtceu:advanced_smd_inductor', '32x gtceu:ram_chip', '16x gtceu:polyether_ether_ketone_foil', '8x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', '8x gtceu:crystal_matrix_plate']
        },
        dimensional: {
            'circuit_board': ['16x gfs:matter_circuit_board', '32x gtceu:holmium_foil', '#gtceu:circuits/zpm', 'gtceu:luv_field_generator', '8x gtceu:nether_star_lens'],
            'processing_unit': ['4x gfs:dimensional_circuit_board', 'gtceu:infinity_plate', '4x gfs:the_ultimate_material', '4x gtceu:activated_netherite_double_wire', '2x gtceu:flawless_monazite_gem', '2x gtceu:flawless_glass_gem'],
            'processor': ['gfs:dimensional_processing_unit', '4x gfs:complex_smd_capacitor', '2x gfs:complex_smd_transistor', '4x gfs:multidimensional_cpu_chip', '2x gtceu:fine_holmium_wire'],
            'processor_assembly': ['gfs:dimensional_processing_unit', '4x gfs:dimensional_processor', '2x gfs:multidimensional_cpu_chip', '8x gfs:complex_smd_capacitor', '8x gfs:complex_smd_resistor', '4x gtceu:ruthenium_trinium_americium_neutronate_single_wire'],
            'processor_computer': ['gfs:dimensional_processing_unit', '4x gfs:dimensional_processor_assembly', '8x gfs:multidimensional_cpu_chip', '16x gfs:complex_smd_capacitor', '16x gfs:complex_smd_transistor', '8x gfs:complex_smd_diode', '8x gfs:complex_smd_resistor', '16x gtceu:uhpic_chip', '4x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '16x gtceu:polyether_ether_ketone_foil'],
            'processor_mainframe': ['4x gtceu:infinity_frame', '16x gfs:dimensional_processor_computer', '32x gfs:complex_smd_capacitor', '32x gfs:complex_smd_transistor', '32x gfs:complex_smd_diode', '32x gfs:complex_smd_resistor', '32x gfs:complex_smd_inductor', '32x gfs:hyperdynamic_ram_chip', '32x gtceu:polyether_ether_ketone_foil', '8x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '4x gtceu:double_holmium_plate']
        },
        monic: {
            'circuit_board': ['16x gfs:dimensional_circuit_board', '16x gtceu:activated_netherite_plate', '8x gtceu:holmium_plate', '#gtceu:circuits/uv', 'gtceu:zpm_field_generator', '4x gfs:quasi_stable_neutron_star'],
            'processing_unit': ['8x gfs:monic_circuit_board', '1x gtceu:monium_plate', '16x gtceu:holmium_double_wire', '4x gfs:ultimate_gem', '4x gtceu:exquisite_glass_gem'],
            'processor': ['gfs:monic_processing_unit', '16x gfs:complex_smd_capacitor', '8x gfs:complex_smd_transistor', '4x gfs:hyperdimensional_cpu_chip', '8x gtceu:fine_glass_wire'],
            'processor_assembly': ['gfs:monic_processing_unit', '8x gfs:monic_processor', '16x gfs:hyperdimensional_cpu_chip', '32x gfs:complex_smd_capacitor', '16x gfs:complex_smd_resistor', '8x gtceu:naquadah_glass_wire'],
            'processor_computer': ['gfs:monic_processing_unit', '4x gfs:monic_processor_assembly', '64x gfs:hyperdimensional_cpu_chip', '32x gfs:complex_smd_capacitor', '32x gfs:complex_smd_transistor', '16x gfs:complex_smd_diode', '16x gfs:complex_smd_resistor', '32x gtceu:uhpic_chip', '8x gtceu:naquadah_glass_wire', '8x gtceu:neutron_stabilizer'],
            'processor_mainframe': ['8x gtceu:ultimate_frame', '32x gfs:monic_processor_computer', '64x gfs:complex_smd_capacitor', '64x gfs:complex_smd_transistor', '64x gfs:complex_smd_diode', '64x gfs:complex_smd_resistor', '64x gfs:complex_smd_inductor', '64x gfs:hyperdynamic_ram_chip', '32x gtceu:naquadah_glass_wire', '8x gtceu:double_holmium_plate']
        }
    };

    // Define fluid recipes separately
    const CircuitFluids = {
        matter: {
            'circuit_board': ['minecraft:water 500'],
            'processing_unit': ['gtceu:soldering_alloy 1152'],
            'processor': ['gtceu:soldering_alloy 144'],
            'processor_assembly': ['gtceu:soldering_alloy 1152'],
            'processor_computer': ['gtceu:soldering_alloy 1152', 'gtceu:omnium 144'],
            'processor_mainframe': ['gtceu:soldering_alloy 1152', 'gtceu:omnium 288']
        },
        dimensional: {
            'circuit_board': ['gtceu:omnium 288'],
            'processing_unit': ['gtceu:soldering_alloy 1152'],
            'processor': ['gtceu:soldering_alloy 144'],
            'processor_assembly': ['gtceu:soldering_alloy 1152'],
            'processor_computer': ['gtceu:soldering_alloy 1152'],
            'processor_mainframe': ['gtceu:soldering_alloy 1152']
        },
        monic: {
            'circuit_board': ['gtceu:omnium 576'],
            'processing_unit': ['gtceu:soldering_alloy 1152'],
            'processor': ['gtceu:soldering_alloy 144'],
            'processor_assembly': ['gtceu:soldering_alloy 1152'],
            'processor_computer': ['gtceu:soldering_alloy 1152'],
            'processor_mainframe': ['gtceu:soldering_alloy 1152']
        }
    };


    // Define crafting times and voltages
    const craftingDetails = [
        ['matter', "uhv"],
        ['dimensional', "uev"],
        ['monic', "uiv"],
    ];

    const procTiers = [
        'circuit_board',
        'processing_unit',
        'processor',
        'processor_assembly',
        'processor_computer',
        'processor_mainframe',
    ];
    let procNums = [16, 8, 8, 4, 1, 1,];
    const procDur = [30, 5, 7, 10, 15, 30];

    craftingDetails.forEach(([type,tier], index_stuff) => {
        procTiers.forEach((name, index) => {
            let num = procNums[index];
            let [currMat,currFlu] = [CircuitMaterials[type],CircuitFluids[type]];
            // decided to go with uv for everything (for now atleast)
            let [res_cwu, res_dur, res_eut] = tier_to_research["uv"];
            if (type == 'circuit_board') {
                greg.circuit_assembler(`gfs:${procTiers[index_stuff][0]}_${name}`)
                    .itemInputs(currMat[name])
                    .inputFluids(currFlu[name])
                    .itemOutputs(`${num}x gfs:${procTiers[index_stuff][0]}_${name}`)
                    .duration(procDur[index]*20)
                    .EUt(voltage_to_eu[tier]);
            } else {
                let help = (type=="matter"?`gtceu:neuro_${name}`:`gfs:${craftingDetails[index_stuff-1][0]}_${name}`)
                greg.assembly_line(`gfs:${procTiers[index_stuff][0]}_${name}`)
                    .itemInputs(currMat[name])
                    .inputFluids(currFlu[name])
                    .itemOutputs(`${num}x gfs:${procTiers[index_stuff][0]}_${name}`)
                    .duration(procDur[index]*20)
                    .EUt(voltage_to_eu[voltage_lesser[tier]])
                    .stationResearch(b => b
                        .researchStack(help)
                        .CWUt(res_cwu, res_dur)
                        .EUt(res_eut)
                    );
            }
        });
    });



    /*

            let [res_cwu, res_dur, res_eut] = tier_to_research[tier];

                .stationResearch(b => b
                    .researchStack(`gtceu:${help}_${craft_item}`)
                    .CWUt(res_cwu, res_dur)
                    .EUt(res_eut)
                );
     */

})
