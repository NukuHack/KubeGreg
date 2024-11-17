
ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;
// tiers : zmp,uv,uhv,uev,uiv,ux,opv,max
// Wetware tweaks
    event.remove({output: 'gtceu:neuro_processing_unit'})
    greg.circuit_assembler('gfs:neuro_processing_unit')
        .itemInputs('gtceu:wetware_printed_circuit_board', '4x gtceu:stem_cells', '8x gtceu:polybenzimidazole_small_fluid_pipe', '4x gtceu:neutronium_plate', '16x gtceu:silicone_rubber_foil', '8x gtceu:hsse_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('gtceu:neuro_processing_unit')
        .duration(600)
        .EUt(80000)
        .cleanroom(CleanroomType.CLEANROOM)

// WIP: Matter Circuits
    greg.circuit_assembler('matter_circuit_board')
        .itemInputs('16x gtceu:omnium_plate', '32x gtceu:activated_netherite_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:neuro_processing_unit', 'gtceu:iv_emitter',
            '8x gtceu:omnic_acid_dust')
        .inputFluids('minecraft:water 500')
        .itemOutputs('16x gfs:matter_circuit_board')
        .duration(1200)
        .EUt(250000)

    greg.circuit_assembler('matter_processing_unit')
        .itemInputs('2x gfs:matter_circuit_board', '2x gtceu:crystal_matrix_plate', '2x gtceu:activated_netherite_double_wire', 'gtceu:highly_advanced_soc')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x gfs:matter_processing_unit')
        .duration(100)
        .EUt(250000)

    greg.circuit_assembler('matter_processor')
        .itemInputs('gfs:matter_processing_unit', '8x gtceu:advanced_smd_capacitor', '4x gtceu:advanced_smd_transistor',
            '4x gfs:multidimensional_cpu_chip', '4x gtceu:fine_naquadria_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('8x gfs:matter_processor')
        .duration(160)
        .EUt(250000)

    greg.circuit_assembler('matter_processor_assembly')
        .itemInputs('gfs:matter_processing_unit', '4x gfs:matter_processor', '12x gfs:multidimensional_cpu_chip',
            '12x gtceu:advanced_smd_capacitor', '6x gtceu:advanced_smd_transistor', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x gfs:matter_processor_assembly')
        .duration(160)
        .EUt(250000)

    greg.assembly_line('matter_processor_computer')
        .itemInputs('gfs:matter_processing_unit', '2x gfs:matter_processor_assembly', '24x gfs:multidimensional_cpu_chip',
            '12x gtceu:advanced_smd_capacitor', '8x gtceu:advanced_smd_transistor', '8x gtceu:advanced_smd_diode', '8x gtceu:advanced_smd_resistor',
            '8x gtceu:uhpic_chip', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', '8x gtceu:polyether_ether_ketone_foil')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 144')
        .itemOutputs('gfs:matter_processor_computer')
        .duration(200)
        .EUt(250000)

    greg.assembly_line('matter_processor_mainframe')
        .itemInputs('4x gtceu:activated_netherite_frame', '16x gfs:matter_processor_computer', '24x gtceu:advanced_smd_capacitor',
            '24x gtceu:advanced_smd_transistor', '24x gtceu:advanced_smd_diode', '24x gtceu:advanced_smd_resistor', '24x gtceu:advanced_smd_inductor',
            '32x gtceu:ram_chip', '16x gtceu:polyether_ether_ketone_foil', '8x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '8x gtceu:crystal_matrix_plate') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 288')
        .itemOutputs('gfs:matter_processor_mainframe')
        .duration(1200)
        .EUt(1000000)

// WIP: Dimensional Circuits
    greg.circuit_assembler('dimensional_circuit_board')
        .itemInputs('16x gfs:matter_circuit_board', '32x gtceu:holmium_foil', '#gtceu:circuits/zpm', 'gtceu:luv_field_generator',
            '8x gtceu:nether_star_lens')
        .inputFluids('gtceu:omnium 288')
        .itemOutputs('16x gfs:dimensional_circuit_board')
        .duration(1200)
        .EUt(500000)

    greg.circuit_assembler('dimensional_processing_unit')
        .itemInputs('4x gfs:dimensional_circuit_board', 'gtceu:infinity_plate', '4x gfs:the_ultimate_material',
            '4x gtceu:activated_netherite_double_wire', '2x gtceu:flawless_monazite_gem',  '2x gtceu:flawless_glass_gem')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('4x gfs:dimensional_processing_unit')
        .duration(100)
        .EUt(1966080)

    const smds = [
        ['transistor', 'gtceu:diamond_plate', '8x gtceu:fine_holmium_wire'],
        ['resistor', 'gtceu:activated_netherite_dust', '4x gtceu:fine_holmium_wire'],
        ['capacitor', 'gtceu:polyether_ether_ketone_foil', 'gtceu:holmium_foil'],
        ['diode', 'gtceu:ruthenium_trinium_americium_neutronate_dust', '16x gtceu:fine_holmium_wire'],
        ['inductor', 'gtceu:tritanium_ring', '16x gtceu:fine_holmium_wire']
    ]

    for (const [item, primary, secondary] of smds) {
        greg.assembler(`complex_smd_${item}`)
            .itemInputs(primary, secondary)
            .itemOutputs(`32x gfs:complex_smd_${item}`)
            .duration(160)
            .EUt(245760)
    }

    greg.circuit_assembler('dimensional_processor')
        .itemInputs('gfs:dimensional_processing_unit', '4x gfs:complex_smd_capacitor', '2x gfs:complex_smd_transistor',
            '4x gfs:multidimensional_cpu_chip', '2x gtceu:fine_holmium_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('16x gfs:dimensional_processor')
        .duration(160)
        .EUt(1966080)

    greg.circuit_assembler('dimensional_processor_assembly')
        .itemInputs('gfs:dimensional_processing_unit', '4x gfs:dimensional_processor', '2x gfs:multidimensional_cpu_chip',
            '8x gfs:complex_smd_capacitor', '8x gfs:complex_smd_resistor', '4x gtceu:ruthenium_trinium_americium_neutronate_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('4x gfs:dimensional_processor_assembly')
        .duration(160)
        .EUt(1966080)

    greg.assembly_line('dimensional_processor_computer')
        .itemInputs('gfs:dimensional_processing_unit', '4x gfs:dimensional_processor_assembly', '8x gfs:multidimensional_cpu_chip',
            '16x gfs:complex_smd_capacitor', '16x gfs:complex_smd_transistor', '8x gfs:complex_smd_diode', '8x gfs:complex_smd_resistor',
            '16x gtceu:uhpic_chip', '4x gtceu:ruthenium_trinium_americium_neutronate_double_wire',  '16x gtceu:polyether_ether_ketone_foil')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gfs:dimensional_processor_computer')
        .duration(200)
        .EUt(1966080)

    greg.assembly_line('dimensional_processor_mainframe')
        .itemInputs('4x gtceu:infinity_frame', '16x gfs:dimensional_processor_computer', '32x gfs:complex_smd_capacitor',
            '32x gfs:complex_smd_transistor', '32x gfs:complex_smd_diode', '32x gfs:complex_smd_resistor', '32x gfs:complex_smd_inductor',
            '32x gfs:hyperdynamic_ram_chip', '32x gtceu:polyether_ether_ketone_foil', '8x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '4x gtceu:double_holmium_plate') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gfs:dimensional_processor_mainframe')
        .duration(1200)
        .EUt(3932160)

// Monic Circuits
    greg.circuit_assembler('monic_circuit_board')
        .itemInputs('16x gfs:dimensional_circuit_board', '16x gtceu:activated_netherite_plate', '8x gtceu:holmium_plate',
            '#gtceu:circuits/uv', 'gtceu:zpm_field_generator', '4x gfs:quasi_stable_neutron_star')
        .inputFluids('gtceu:omnium 576')
        .itemOutputs('16x gfs:monic_circuit_board')
        .duration(1200)
        .EUt(2000000)

    greg.circuit_assembler('monic_processing_unit')
        .itemInputs('8x gfs:monic_circuit_board', '1x gtceu:monium_plate', '16x gtceu:holmium_double_wire', '4x gfs:ultimate_gem',
            '4x gtceu:exquisite_glass_gem')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('8x gfs:monic_processing_unit')
        .duration(100)
        .EUt(3932160)

    greg.circuit_assembler('monic_processor')
        .itemInputs('gfs:monic_processing_unit', '16x gfs:complex_smd_capacitor', '8x gfs:complex_smd_transistor',
            'gfs:contained_singularity', '16x gtceu:fine_holmium_wire')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('32x gfs:monic_processor')
        .duration(160)
        .EUt(1966080)

    greg.circuit_assembler('monic_processor_assembly')
        .itemInputs('gfs:monic_processing_unit', '8x gfs:monic_processor', '2x gfs:contained_singularity', '12x gfs:complex_smd_capacitor',
            '12x gfs:complex_smd_transistor', '8x gtceu:activated_netherite_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('8x gfs:monic_processor_assembly')
        .duration(160)
        .EUt(1966080)

    greg.assembly_line('monic_processor_computer')
        .itemInputs('gfs:monic_processing_unit', '2x gfs:monic_processor_assembly', '4x gfs:contained_singularity',
            '16x gfs:complex_smd_capacitor', '16x gfs:complex_smd_transistor', '16x gfs:complex_smd_diode', '16x gfs:complex_smd_resistor',
            '16x gtceu:uhpic_chip', '4x gtceu:activated_netherite_double_wire',  '32x gtceu:polyether_ether_ketone_foil')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x gfs:monic_processor_computer')
        .duration(200)
        .EUt(1966080)

    greg.assembly_line('monic_processor_mainframe')
        .itemInputs('8x gtceu:monium_frame', '2x gfs:monic_processing_unit', '16x gfs:monic_processor_computer', '64x gfs:complex_smd_capacitor', '64x gfs:complex_smd_transistor',
            '64x gfs:complex_smd_diode', '64x gfs:complex_smd_resistor', '64x gfs:complex_smd_inductor',
            '64x gfs:contained_singularity', '64x gfs:contained_singularity', '64x gfs:multidimensional_cpu_chip',
            '64x gfs:hyperdynamic_ram_chip', '64x gtceu:polyether_ether_ketone_foil', '64x gfs:quantum_soc_chip', '4x gtceu:double_infinity_plate', '8x gtceu:sculk_superconductor_double_wire') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gfs:monic_processor_mainframe')
        .duration(1200)
        .EUt(134217728)
})
