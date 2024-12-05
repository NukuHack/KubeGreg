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

    function CircuitMaterials(tier, tierN, [mat1, mat2, wire1, wire2], [multi, multi_small, multi_soc],
                              [smd_type, ram_type, soc_type, pic_type], [solder, plastic, rubber], name) {
        //console.log("CircuitMaterials Function called !");
        //console.log([tier, tierN]);

        let ReturnOutput = [];

        if (name == circuitHelp[0][0]) {
            ReturnOutput = [
                [
                    `${Math.round(4 * multi)}x #forge:plates/${mat1}`,
                    `${Math.round(16 * multi)}x #forge:foils/${wire1}`,
                    `${Math.round(16 * multi)}x #forge:foils/${mat2}`,
                    `${Math.round(2 * multi_small)}x ${tierN == 9 ? `gtceu:neuro` : `gfs:${voltages[tierN - 1]}`}_processing_unit`,
                    `${Math.round(1 * multi_small)}x #gtceu:circuits/${voltages[tierN - 3]}`,
                    `${Math.round(4 * multi)}x #forge:dusts/${mat2}`,
                ],
                [`gtceu:${mat2} ${Math.round(144 * multi / 2)}`],
            ];
        } else if (name == circuitHelp[1][0]) {
            ReturnOutput = [
                [
                    `${Math.round(1 * multi_small)}x gfs:${tier}_circuit_board`,
                    `${Math.round(2 * multi)}x #forge:plates/${mat2}`,
                    `${Math.round(16 * multi)}x #forge:foils/${rubber}`,
                    `${Math.round(2 * multi)}x gtceu:${wire2}_double_wire`,
                ],
                [`gtceu:${solder} ${Math.round(576 * multi / 2)}`],
            ];
        } else if (name == circuitHelp[2][0]) {
            ReturnOutput = [
                [
                    `${Math.round(1 * multi_small)}x gfs:${tier}_processing_unit`,
                    `${Math.round(4 * multi_soc)}x ${smd_type}_capacitor`,
                    `${Math.round(2 * multi_soc)}x ${smd_type}_transistor`,
                    `${Math.round(2 * multi_soc)}x ${soc_type}`,
                    `${Math.round(2 * multi)}x gtceu:${wire1}_single_wire`,
                ],
                [`gtceu:${solder} ${Math.round(144 * multi / 2)}`],
            ];
        } else if (name == circuitHelp[3][0]) {
            ReturnOutput = [
                [
                    `${Math.round(1 * multi_small)}x gfs:${tier}_processing_unit`,
                    `${Math.round(2 * multi_small)}x gfs:${tier}_processor`,
                    `${Math.round(24 * multi_soc)}x ${ram_type}`,
                    `${Math.round(4 * multi_soc)}x ${smd_type}_capacitor`,
                    `${Math.round(3 * multi_soc)}x ${smd_type}_transistor`,
                    `${Math.round(3 * multi_soc)}x ${smd_type}_inductor`,
                    `${Math.round(2 * multi_soc)}x ${smd_type}_resistor`,
                    `${Math.round(2 * multi)}x #forge:fine_wires/${wire1}`,
                    `${Math.round(2 * multi)}x gtceu:${wire2}_double_wire`,
                ],
                [`gtceu:${solder} ${Math.round(576 * multi / 2)}`],
            ];
        } else if (name == circuitHelp[4][0]) {
            ReturnOutput = [
                [
                    `${Math.round(1 * multi_small)}x gfs:${tier}_processing_unit`,
                    `${Math.round(1 * multi_small)}x gfs:${tier}_processor_assembly`,
                    `${Math.round(12 * multi_soc)}x ${ram_type}`,
                    `${Math.round(6 * multi_soc)}x ${smd_type}_capacitor`,
                    `${Math.round(4 * multi_soc)}x ${smd_type}_transistor`,
                    `${Math.round(4 * multi_soc)}x ${smd_type}_diode`,
                    `${Math.round(4 * multi_soc)}x ${smd_type}_resistor`,
                    `${Math.round(4 * multi_soc)}x ${pic_type}`,
                    `${Math.round(12 * multi)}x #forge:fine_wires/${wire1}`,
                    `${Math.round(4 * multi)}x gtceu:${wire2}_double_wire`,
                    `${Math.round(4 * multi)}x #forge:plates/${mat1}`,
                    `${Math.round(16 * multi)}x #forge:foils/${plastic}`,
                ],
                [`gtceu:${solder} ${Math.round(576 * multi / 2)}`, `gtceu:${mat2} ${Math.round(144 * multi / 2)}`],
            ];
        } else if (name == circuitHelp[5][0]) {
            ReturnOutput = [
                [
                    `${Math.round(2 * multi)}x #forge:frames/${mat1}`,
                    `${Math.round(2 * multi)}x #forge:double_plates/${mat1}`,
                    `${Math.round(4 * multi_small)}x gfs:${tier}_processor_computer`,
                    `${Math.round(4 * multi)}x #forge:plates/${mat2}`,
                    `${Math.round(12 * multi_soc)}x ${smd_type}_capacitor`,
                    `${Math.round(6 * multi_soc)}x ${smd_type}_transistor`,
                    `${Math.round(6 * multi_soc)}x ${smd_type}_diode`,
                    `${Math.round(6 * multi_soc)}x ${smd_type}_resistor`,
                    `${Math.round(6 * multi_soc)}x ${smd_type}_inductor`,
                    `${Math.round(16 * multi_soc)}x ${ram_type}`,
                    `${Math.round(4 * multi)}x gtceu:${wire1}_single_wire`,
                    `${Math.round(6 * multi)}x gtceu:${wire2}_double_wire`,
                    `${Math.round(64 * multi)}x #forge:foils/${plastic}`,
                ],
                [`gtceu:${solder} ${Math.round(1152 * multi / 2)}`, `gtceu:${mat2} ${Math.round(288 * multi / 2)}`],
            ];
        }

        //console.log(ReturnOutput);
        return ReturnOutput;
    }


    // Define crafting themes and tiers
    [
        'matter',
        'dimensional',
        'monic',
        'cosmic',
        "4d",
    ].forEach((type, index_stuff) => {
        circuitHelp.forEach(([name,[out_multi, dur],], index) => {
            let tier = voltages[index_stuff + 9];
            //console.log(`${index} ID ${tier} is the tier made from ${index_stuff + 9}`);
            let lesser = voltages[index_stuff + 8];
            //console.log(`${index} ID ${lesser} is the lesser`);
            let tierNumber = index_stuff + 9;
            //console.log(`${index} ID ${tierNumber} is the tierNumber`);
            let [mat1, mat2, wire2] = volt_to_material[tier];
            //console.log(`${index} ID [${mat1}, ${mat2}, ${wire2}] is the mats`);
            let wire1 = volt_to_cable[tier];
            //console.log(`${index} ID [${wire1}] is the wire1`);
            let [solder, poly, rubber, lube, assembling, extra] = volt_to_extra[tier];
            //console.log(`${index} ID ${liq_help} is the liq_help`);
            let [[multi, multi_small, multi_soc], type_s] = volt_to_small[tier];
            //console.log(`${index} ID ${multi_s} ${type_s} is the multi,type stuff`);

            //console.log(`${index} ID ${name} is the name AKA crafted item type`);
            let nameLesser = index == 0 ? "noo" : circuitHelp[index - 1][0];
            //console.log(`${index} ID ${nameLesser} is the nameLesser aka name before this`);

            // maybe I will just make a function for every type of circuit stuff, so it will just calculate it that time when it's called ....
            // I just hate function calls inside recipe creations
            let [solids, liquids] = CircuitMaterials(
                //((tier, tierN, [mat1, mat2, wire1, wire2], [multi,multi_small,multi_soc],
                //[smd_type, ram_type, soc_type, pic_type], [solder, plastic, rubber], name)
                tier, tierNumber,
                [mat1, mat2, wire1, wire2],
                [multi, multi_small, multi_soc], type_s,
                [solder, poly, rubber], name
            );
            //console.log(`${index} ID ${out_multi} try for a out_multi`);
            //console.log(`${index} ID ${dur} try for a duration`);
            //console.log(`${index} ID ${inp} try for a Input`);
            //console.log(`${index} ID ${flui} try for a Input(fluid)`);

            if (name == 'circuit_board')
                // something like : monic_circuit_board
                greg.circuit_assembler(`gfs:${type}_${name}`)
                    .itemInputs(solids)
                    .inputFluids(liquids)
                    // something like : uev_circuit_board
                    .itemOutputs(`${out_multi}x gfs:${tier}_${name}`)
                    .duration(dur * 20)
                    .EUt(voltage_to_eu[lesser]);
            else {
                // decided to go with uv for every research (for now atleast)
                let [res_cwu, res_dur, res_eut] = volt_to_research["uv"];
                //console.log(`${res_cwu},${res_dur},${res_eut} is the stuff for research res_cwu,res_dur,res_eut - Assembly`);
                let resHelp = (name == "processing_unit") ?
                    ((type == "matter") ?
                        `gtceu:wetware_processor_mainframe` :
                        `gfs:${lesser}_processor_mainframe`) :
                    (`gfs:${tier}_${nameLesser}`);
                //console.log(`${resHelp} is what I try to research for "gfs:${tier}_${name}" hope it works ... the helping variable is tier: "${tier}" and last made item: "${nameLesser}" - Assembly`);
                greg.assembly_line(`gfs:${type}_${name}`)
                    .itemInputs(solids)
                    .inputFluids(liquids)
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
