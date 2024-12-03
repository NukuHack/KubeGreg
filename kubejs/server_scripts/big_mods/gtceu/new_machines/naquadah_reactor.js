ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    let [res_cwu, res_dur, res_eut] = tier_to_research["uhv"];

    //Reactor Crafting
    greg.assembly_line('gfs:naquadah_reactor_i')
        .itemInputs('gtceu:computer_monitor_cover', '3x gtceu:fusion_casing', '#gtceu:circuits/zpm', '2x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:styrene_butadiene_rubber 1024')
        .itemOutputs('gtceu:naquadah_reactor_i')
        .duration(50 * 20)
        .EUt(voltage_to_eu["zpm"])
        .stationResearch(b =>
            b.researchStack(Item.of('gtceu:naquadah_bolt'))
                .CWUt(res_cwu, res_dur)
                .EUt(res_eut)
        );

    greg.assembly_line('gfs:naquadah_reactor_ii')
        .itemInputs('gtceu:computer_monitor_cover', '6x gtceu:fusion_casing', '#gtceu:circuits/uv', '4x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:styrene_butadiene_rubber 2048')
        .itemOutputs('gtceu:naquadah_reactor_ii')
        .duration(50 * 20)
        .EUt(voltage_to_eu["uv"])
        .stationResearch(b =>
            b.researchStack(Item.of('gtceu:naquadah_reactor_i'))
                .CWUt(res_cwu, res_dur)
                .EUt(res_eut)
        );

    greg.assembly_line('gfs:naquadah_reactor_iii')
        .itemInputs('gtceu:computer_monitor_cover', '9x gtceu:fusion_casing', '#gtceu:circuits/uhv', '6x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 4056', 'gtceu:styrene_butadiene_rubber 4096')
        .itemOutputs('gtceu:naquadah_reactor_iii')
        .duration(50 * 20)
        .EUt(voltage_to_eu["uhv"])
        .stationResearch(b =>
            b.researchStack(Item.of('gtceu:naquadah_reactor_ii'))
                .CWUt(res_cwu, res_dur)
                .EUt(res_eut)
        );

    //Reactor usage
    greg.naquadah_reactor_i('gfs:process_naquadah_i')
        .itemInputs('gtceu:enriched_naquadah_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(48 * 20)
        .EUt(-voltage_to_eu["uv"]);

    greg.naquadah_reactor_i('gfs:process_naquadria_i')
        .itemInputs('gtceu:naquadria_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(192 * 20)
        .EUt(-voltage_to_eu["uv"]);

    greg.naquadah_reactor_ii('gfs:process_naquadah_ii')
        .itemInputs('gtceu:enriched_naquadah_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(12 * 20)
        .EUt(-voltage_to_eu["uhv"]);

    greg.naquadah_reactor_ii('gfs:process_naquadria_ii')
        .itemInputs('gtceu:naquadria_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(48 * 20)
        .EUt(-voltage_to_eu["uhv"]);

    greg.naquadah_reactor_iii('gfs:process_naquadah_iii')
        .itemInputs('gtceu:enriched_naquadah_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(3 * 20)
        .EUt(-voltage_to_eu["uiv"]);

    greg.naquadah_reactor_iii('gfs:process_naquadria_iii')
        .itemInputs('gtceu:naquadria_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(12 * 20)
        .EUt(-voltage_to_eu["uiv"]);

})
