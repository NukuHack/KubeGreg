ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    // Wetware tweaks
    event.remove({output: 'gtceu:neuro_processing_unit'})
    greg.circuit_assembler('gfs:neuro_processing_unit')
        .itemInputs('gtceu:wetware_printed_circuit_board', '4x gtceu:stem_cells', '8x gtceu:polybenzimidazole_small_fluid_pipe',
            '4x gtceu:neutronium_plate', '16x gtceu:silicone_rubber_foil', '8x gtceu:hsse_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('gtceu:neuro_processing_unit')
        .duration(10 * 20)
        .EUt(voltage_to_eu["zpm"])
        .cleanroom(CleanroomType.CLEANROOM);


    [
        ['transistor', '1x #forge:foils/hsss', '8x #forge:fine_wires/holmium'],
        ['resistor', '1x gtceu:activated_netherite_dust', '4x gtceu:fine_holmium_wire'],
        ['capacitor', '2x gtceu:polyether_ether_ketone_foil', '1x gtceu:holmium_foil'],
        ['diode', '1x gtceu:ruthenium_trinium_americium_neutronate_dust', '16x gtceu:fine_holmium_wire'],
        ['inductor', '1x gtceu:tritanium_ring', '16x gtceu:fine_holmium_wire'],
    ].forEach(([item, primary, secondary]) => {
        greg.assembler(`gfs:complex_smd_${item}`)
            .itemInputs(primary, secondary)
            .itemOutputs(`32x gfs:complex_smd_${item}`)
            .inputFluids("gtceu:polyether_ether_ketone 144")
            .duration(7 * 20)
            .EUt(voltage_to_eu["uhv"]);
    });

    const circuitHelp = ['circuit_board', 'processing_unit', 'processor', 'processor_assembly', 'processor_computer', 'processor_mainframe',];

    const CircuitMaterials = [
        (tierN, [mat1, mat2, wire1, wire2], [multi, small_multi], [smd_type, ram_type, soc_type, chip_type, uhcp_type],
         [solder, plastic, rubber]) => [
            [
                `${4 * multi}x #forge:plates/${mat1}`,
                `${16 * multi}x #forge:foils/${wire1}`,
                `${16 * multi}x #forge:foils/${mat2}`,
                `${2 * multi}x ${tierN == 9 ? `gtceu:neuro` : `gfs:${voltages[tierN - 1]}`}_processing_unit`,
                `${1 * multi}x gregtech:circuits/${voltages[tierN - 3]}`,
                `${4 * multi}x #forge:dusts/${mat2}`,
            ],
            [`${mat2} ${144 * multi / 2}`],
            [4, 30],
        ],
        (tierN, [mat1, mat2, wire1, wire2], [multi, small_multi], [smd_type, ram_type, soc_type, chip_type, uhcp_type],
         [solder, plastic, rubber]) => [
            [
                `${1 * multi}x gfs:${tier}_circuit_board`,
                `${1 * multi}x #forge:plates/${mat2}`,
                `${2 * multi}x gtceu:${wire2}_double_wire`,
                `${1 * small_multi}x ${soc_type}`,
            ],
            [`${solder} ${576 * multi / 2}`],
            [4, 5],
        ],
        (tierN, [mat1, mat2, wire1, wire2], [multi, small_multi], [smd_type, ram_type, soc_type, chip_type, uhcp_type],
         [solder, plastic, rubber]) => [
            [
                `${1 * multi}x gfs:${tier}_processing_unit`,
                `${4 * small_multi}x ${smd_type}_capacitor`,
                `${2 * small_multi}x ${smd_type}_transistor`,
                `${2 * small_multi}x ${chip_type}`,
                `${2 * multi}x gtceu:${wire1}_single_wire`,
            ],
            [`${solder} ${144 * multi / 2}`],
            [4, 7],
        ],
        (tierN, [mat1, mat2, wire1, wire2], [multi, small_multi], [smd_type, ram_type, soc_type, chip_type, uhcp_type],
         [solder, plastic, rubber]) => [
            [
                `${1 * multi}x gfs:${tier}_processing_unit`,
                `${2 * multi}x gfs:${tier}_processor`,
                `${6 * small_multi}x ${chip_type}`,
                `${4 * small_multi}x ${smd_type}_capacitor`,
                `${3 * small_multi}x ${smd_type}_transistor`,
                `${2 * small_multi}x ${smd_type}_resistor`,
                `${2 * multi}x gtceu:${wire1}_double_wire`,
                `${2 * multi}x gtceu:${wire2}_double_wire`,
            ],
            [`${solder} ${576 * multi / 2}`],
            [4, 10],
        ],
        (tierN, [mat1, mat2, wire1, wire2], [multi, small_multi], [smd_type, ram_type, soc_type, chip_type, uhcp_type],
         [solder, plastic, rubber]) => [
            [
                `${1 * multi}x gfs:${tier}_processing_unit`,
                `${1 * multi}x gfs:${tier}_processor_assembly`,
                `${12 * small_multi}x ${chip_type}`,
                `${6 * small_multi}x ${smd_type}_capacitor`,
                `${4 * small_multi}x ${smd_type}_transistor`,
                `${4 * small_multi}x ${smd_type}_diode`,
                `${4 * small_multi}x ${smd_type}_resistor`,
                `${4 * small_multi}x ${uhcp_type}`,
                `${2 * multi}x gtceu:${wire1}_double_wire`,
                `${2 * multi}x gtceu:${wire2}_double_wire`,
                `${4 * multi}x #forge:foils/${plastic}`,
            ],
            [`${solder} ${576 * multi / 2}`, `${mat2} ${144 * multi / 2}`],
            [1, 15],
        ],
        (tierN, [mat1, mat2, wire1, wire2], [multi, small_multi], [smd_type, ram_type, soc_type, chip_type, uhcp_type],
         [solder, plastic, rubber]) => [
            [
                `${2 * multi}x #forge:frames/${mat1}`,
                `${4 * multi}x gfs:${tier}_processor_computer`,
                `${4 * multi}x #forge:plates/${mat2}`,
                `${12 * small_multi}x ${smd_type}_capacitor`,
                `${6 * small_multi}x ${smd_type}_transistor`,
                `${6 * small_multi}x ${smd_type}_diode`,
                `${6 * small_multi}x ${smd_type}_resistor`,
                `${6 * small_multi}x ${smd_type}_inductor`,
                `${16 * small_multi}x ${ram_type}`,
                `${4 * multi}x gtceu:${wire1}_double_wire`,
                `${4 * multi}x gtceu:${wire2}_double_wire`,
                `${8 * multi}x #forge:foils/${plastic}`,
            ],
            [`${solder} ${1152 * multi / 2}`, `${mat2} ${288 * multi / 2}`],
            [1, 30],
        ],
    ];

    // Define crafting themes and tiers
    [
        'matter',
        'dimensional',
        'monic',
        'cosmic',
        "4d",
    ].forEach((type, index_stuff) => {
        CircuitMaterials.forEach((MaterialHelper, index) => {
            let tier = voltages[index_stuff + 9];
            let lesser = voltages[index_stuff + 8];
            let tierNumber = index_stuff + 9;
            let [mat1, mat2, wire2] = volt_to_material[tier];
            let wire1 = volt_to_cable[tier];
            let liq_help = volt_to_extra[tier];
            let [multi_s, type_s] = MatTypesHelp[tier];
            // maybe I will just make a function for every type of circuit stuff, so it will just calculate it that time when it's called ....
            // I just hate function calls inside recipe creations
            let [inp, flui, [out_multi, dur]] = MaterialHelper(
                //(tier,tierN,[mat1,mat2,wire1,wire2],[multi,small_multi],
                //[smd_type,ram_type,soc_type,chip_type,uhcp_type],[solder,plastic,rubber])
                tier, tierNumber,
                [mat1, mat2, wire1, wire2],
                multi_s, type_s,
                liq_help
            );
            let name = circuitHelp[index];
            let nameLesser = index == 0 ? "noo" : circuitHelp[index - 1];

            if (name == 'circuit_board') {
                // something like : monic_circuit_board
                greg.circuit_assembler(`gfs:${type}_${name}`)
                    .itemInputs(inp)
                    .inputFluids(flui)
                    // something like : uev_circuit_board
                    .itemOutputs(`${out_multi}x gfs:${tier}_${name}`)
                    .duration(dur * 20)
                    .EUt(voltage_to_eu[lesser]);
            } else {
                // decided to go with uv for every research (for now atleast)
                let [res_cwu, res_dur, res_eut] = volt_to_research["uv"];
                let resHelp = (type == "matter" ? (name == "processing_unit" ? `gtceu:neuro_${name}` : `gtceu:wetware_${name}`) : `gfs:${lesser}_${nameLesser}`);
                //console.log(`${resHelp} is what I try to research for "gfs:${tier}_${name}" hope it works ... the helping variable is tier: "${tier}" and last made item: "${nameLesser}" - Yeah`)
                greg.assembly_line(`gfs:${type}_${name}`)
                    .itemInputs(inp)
                    .inputFluids(flui)
                    .itemOutputs(`${out_multi}x gfs:${tier}_${name}`)
                    .duration(dur * 20)
                    .EUt(voltage_to_eu[lesser])
                    .stationResearch((b) => b
                        .researchId(`${Item.of(resHelp)}_to_gfs:${tier}_${name}`)
                        .dataStack(Item.of("gtceu:data_module"))
                        .researchStack(Item.of(resHelp))
                        .CWUt(res_cwu, res_dur)
                        .EUt(res_eut)
                    );
            }
        });
    });

});
