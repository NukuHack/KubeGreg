ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    // for nuclear reacting recipes
    [
        ['gfs:thorium_fuel', 'gfs:depleted_thorium_fuel', 20],
        ['gfs:highly_enriched_uranium_fuel', 'gfs:depleted_highly_enriched_uranium_fuel', 15],
        ['gfs:low_enriched_uranium_fuel', 'gfs:depleted_low_enriched_uranium_fuel', 10],
        ['gfs:high_radioactive_fuel', 'gfs:depleted_high_radioactive_fuel', 5],
        ['gfs:low_radioactive_fuel', 'gfs:depleted_low_radioactive_fuel', 3],
    ].forEach(([fuel, dep, time]) => {

        cooling_stuff.forEach(([liq, hot, eut, dur], index) => {
            greg.nuclear_reactor(`gfs:${fuel}`)
                .itemInputs(fuel)
                .itemOutputs(dep)
                .perTick(true)
                .inputFluids(liq + (index * 2 + 1).toString())
                .outputFluids(hot + ((index + 1) * 4).toString())
                .perTick(false)
                .EUt(-(eut))
                .duration(time * dur * 20);
        });
    });

    // Array of coolants [id, hot coolant, coolant, energy rate]
    const cooling_stuff = [
        // nitrogen maybe ? and make it non reusable ?
        ['gtceu:pcb_coolant', 'gtceu:hot_pcbcoolant', 8192, 25],
        ['gtceu:sodium_potassium', 'gtceu:hot_sodium_potassium', 2048, 20],
        ['gtceu:distilled_water', 'gtceu:nuclear_pure_steam', 512, 10],
        ['minecraft:water', 'gtceu:nuclear_steam', 256, 5],
    ];

    // Add shapeless crafting recipes
    [
        ['gfs:thorium_fuel', ['9x #forge:dust/thorium']],
        ['gfs:low_enriched_uranium_fuel', ['#forge:dust/uranium_235', '8x #forge:dust/uraniumt']],
        ['gfs:highly_enriched_uranium_fuel', ['4x #forge:dust/uranium_235', '5x #forge:dust/uranium']],
        ['gfs:high_radioactive_fuel', ['6x #forge:dust/uranium']],
        ['gfs:low_radioactive_fuel', ['3x #forge:dust/uranium']],
    ].forEach(recipe =>
        event.shapeless(recipe[0], recipe[1])
    );

    // for nuclear turbine recipes
    cooling_stuff.forEach((liq, hot, eut, dur) => {
        greg.nuclear_turbine(`gfs:${hot}`)
            .inputFluids(hot + ((index + 1) * 4).toString())
            .outputFluids(liq + (index * 2 + 1).toString())
            .duration(dur * 20)
            .EUt(eut);
    });


    // doing stuff with the depleted variants
    [
        ['th_centrifuge', 'gfs:depleted_thorium_fuel', ['3x gtceu:lead_dust', '2x gtceu:bismuth_dust'], 'gtceu:radon 4000'],
        ['u_low_centrifuge', 'gfs:depleted_low_enriched_uranium_fuel', ['3x gtceu:plutonium_dust', '2x gtceu:barium_dust'], 'gtceu:krypton 4000'],
        ['u_high_centrifuge', 'gfs:depleted_highly_enriched_uranium_fuel', ['5x gtceu:plutonium_dust', '1x gtceu:barium_dust'], 'gtceu:krypton 2000'],
        ['r_low_centrifuge', 'gfs:low_radioactive_fuel', ['3x gtceu:lead_dust'], 'gtceu:krypton 80'],
        ['r_high_centrifuge', 'gfs:high_radioactive_fuel', ['6x gtceu:lead_dust'], 'gtceu:krypton 200'],
    ].forEach(([id, inp, out, liq]) => {
        greg.centrifuge(id)
            .itemInputs(inp)
            .itemOutputs(out)
            .outputFluids(liq)
            .duration(60 * 20)
            .EUt(420);
    });


    event.shaped(Item.of('gtceu:nuclear_reactor'), [
        'EGR',
        'CFC',
        'DGD'
    ], {
        E: 'gtceu:hv_emitter',
        G: 'gtceu:black_bronze_gear',
        R: 'gtceu:hv_sensor',
        C: '#gtceu:circuits/ev',
        F: 'gtceu:stainless_steel_frame',
        D: 'gtceu:double_steel_plate'
    });

    event.shaped(Item.of('gtceu:nuclear_turbine'), [
        'CGC',
        'GHG',
        'PGP'
    ], {
        C: '#gtceu:circuits/ev',
        G: 'gtceu:black_bronze_gear',
        H: 'gtceu:hv_machine_hull',
        P: 'gtceu:aluminium_large_fluid_pipe'
    });

});