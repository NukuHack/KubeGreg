ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    // Wetware tweaks
    event.remove({output: 'gtceu:neuro_processing_unit'})
    greg.circuit_assembler('gfs:neuro_processing_unit')
        .itemInputs('gtceu:wetware_printed_circuit_board', '4x gtceu:stem_cells', '8x gtceu:polybenzimidazole_small_fluid_pipe', '4x gtceu:neutronium_plate', '16x gtceu:silicone_rubber_foil', '8x gtceu:hsse_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('gtceu:neuro_processing_unit')
        .duration(5 * 20)
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


    let Materials = [
        () => ['circuit_board',
            [
                `${8 * multi}x #forge:plates/${mat1}`,
                `${32 * multi}x #forge:foils/${wire1}`,
                `${32 * multi}x #forge:foils/${mat2}`,
                `${4 * multi}x gfs:${voltages[tierN - 1]}_processing_unit`,
                `${1 * multi}x gregtech:circuits/${voltages[tierN - 3]}`,
                `${8 * multi}x #forge:dusts/${mat2}`
            ],
            [`${mat2} ${144 * multi / 2}`],
            [4, 30],
        ],
        () => ['processing_unit',
            [
                `${2 * multi}x gfs:${tier}_circuit_board`,
                `${2 * multi}x #forge:plates/${mat2}`,
                `${4 * multi}x gtceu:${wire2}_double_wire`,
                `${2 * small_multi}x ${soc_type}`
            ],
            [`${solder} ${576 * multi / 2}`],
            [4, 5],
        ],
        () => ['processor',
            [
                `${1 * multi}x gfs:${tier}_processing_unit`,
                `${8 * small_multi}x ${smd_type}_capacitor`,
                `${4 * small_multi}x ${smd_type}_transistor`,
                `${4 * small_multi}x ${chip_type}`,
                `${4 * multi}x gtceu:${wire1}_single_wire`
            ],
            [`${solder} ${144 * multi / 2}`],
            [4, 7],
        ],
        () => ['processor_assembly',
            [
                `${1 * multi}x gfs:${tier}_processing_unit`,
                `${4 * multi}x gfs:${tier}_processor`,
                `${12 * small_multi}x ${chip_type}`,
                `${8 * small_multi}x ${smd_type}_capacitor`,
                `${6 * small_multi}x ${smd_type}_transistor`,
                `${4 * small_multi}x ${smd_type}_resistor`,
                `${4 * multi}x gtceu:${wire1}_double_wire`,
                `${4 * multi}x gtceu:${wire2}_double_wire`
            ],
            [`${solder} ${576 * multi / 2}`],
            [4, 10],
        ],
        () => ['processor_computer',
            [
                `${1 * multi}x gfs:${tier}_processing_unit`,
                `${2 * multi}x gfs:${tier}_processor_assembly`,
                `${24 * small_multi}x ${chip_type}`,
                `${12 * small_multi}x ${smd_type}_capacitor`,
                `${8 * small_multi}x ${smd_type}_transistor`,
                `${8 * small_multi}x ${smd_type}_diode`,
                `${8 * small_multi}x ${smd_type}_resistor`,
                `${8 * small_multi}x ${uhcp_type}`,
                `${4 * multi}x gtceu:${wire1}_double_wire`,
                `${4 * multi}x gtceu:${wire2}_double_wire`,
                `${8 * multi}x #forge:foils/${rubber}`
            ],
            [`${solder} ${576 * multi / 2}`, `${mat2} ${144 * multi / 2}`],
            [1, 15],
        ],
        () => ['processor_mainframe',
            [
                `${4 * multi}x #forge:frames/${mat1}`,
                `${8 * multi}x gfs:${tier}_processor_computer`,
                `${24 * small_multi}x ${smd_type}_capacitor`,
                `${12 * small_multi}x ${smd_type}_transistor`,
                `${12 * small_multi}x ${smd_type}_diode`,
                `${12 * small_multi}x ${smd_type}_resistor`,
                `${12 * small_multi}x ${smd_type}_inductor`,
                `${32 * small_multi}x ${ram_type}`,
                `${16 * multi}x #forge:foils/${rubber}`,
                `${8 * multi}x gtceu:${wire1}_double_wire`,
                `${8 * multi}x gtceu:${wire2}_double_wire`,
                `${8 * multi}x #forge:plates/${mat2}`
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
        Materials.forEach((MaterialHelper, index) => {

            let tier = voltages[index + 8];
            let tierN = voltages.indexOf(tier);
            let [[mat1, mat2, wire2], wire1] = [volt_to_material[tier], voltage_to_cable[tier]];
            let [solder, rubber] = [volt_to_extra[tier]];
            let [smd_type, multi, ram_type, small_multi, soc_type, chip_type, uhcp_type] = MatTypesHelp[tier];
            // maybe I will just make a function for every type of circuit stuff, so it will just calculate it that time when it's called ....
            // I just hate function calls inside recipe creations
            let [name, inp, flui, [out_multi, dur]] = MaterialHelper();

            if (name == 'circuit_board') {
                // something like : monic_circuit_board
                greg.circuit_assembler(`gfs:${type}_${name}`)
                    .itemInputs(inp)
                    .inputFluids(flui)
                    // something like : uev_circuit_board
                    .itemOutputs(`${out_multi}x gfs:${tier}_${name}`)
                    .duration(dur * 20)
                    .EUt(voltage_to_eu[tier]);
            } else {
                // decided to go with uv for every research (for now atleast)
                let [res_cwu, res_dur, res_eut] = tier_to_research["uv"];
                let last_name = (index > 0) ? Materials[index - 1][0] : "not_available";
                let help = (type == "matter" ? `gtceu:neuro_${name}` : `gfs:${tier}_${last_name}`);
                greg.assembly_line(`gfs:${type}_${name}`)
                    .itemInputs(inp)
                    .inputFluids(flui)
                    .itemOutputs(`${out_multi}x gfs:${tier}_${name}`)
                    .duration(dur * 20)
                    .EUt(voltage_to_eu[voltage_lesser[tier]])
                    .stationResearch(b => b
                        .researchStack(help)
                        .CWUt(res_cwu, res_dur)
                        .EUt(res_eut)
                    );
            }
        });
    });

});
