ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    [
        // nitrogen maybe ? and make it non reusable ?
        ['gtceu:pcb_coolant', 'gtceu:hot_pcbcoolant', 8192, 25],
        ['gtceu:sodium_potassium', 'gtceu:hot_sodium_potassium', 2048, 20],
        ['gtceu:distilled_water', 'gtceu:nuclear_pure_steam', 512, 10],
        ['minecraft:water', 'gtceu:nuclear_steam', 256, 5],
    ].forEach(([liq, hot, eut, dur], index) => {
        let helpNum = (index + 1) * 2;
        // for nuclear turbine recipes
        greg.nuclear_turbine(`gfs:${hot.slice(hot.lastIndexOf(":") + 1)}`)
            .inputFluids(`${hot} ${helpNum * 2}`)
            .outputFluids(`${liq} ${helpNum}`)
            .duration(dur * 10)
            .EUt(-eut);


        [
            ['gfs:thorium_fuel', 'gfs:depleted_thorium_fuel', 20],
            ['gfs:highly_enriched_uranium_fuel', 'gfs:depleted_highly_enriched_uranium_fuel', 15],
            ['gfs:low_enriched_uranium_fuel', 'gfs:depleted_low_enriched_uranium_fuel', 10],
            ['gfs:high_radioactive_fuel', 'gfs:depleted_high_radioactive_fuel', 5],
            ['gfs:low_radioactive_fuel', 'gfs:depleted_low_radioactive_fuel', 3],
        ]
            // for nuclear reacting recipes
            .forEach(([fuel, dep, time]) => {
                greg.nuclear_reactor(`${fuel}/${hot.slice(hot.lastIndexOf(":") + 1)}`)
                    .itemInputs(fuel)
                    .itemOutputs(dep)
                    .perTick(true)
                    .inputFluids(`${liq} ${helpNum}`)
                    .outputFluids(`${hot} ${helpNum * 2}`)
                    .perTick(false)
                    .EUt(-eut)
                    .duration(time * dur * 20);
            });

    });


    // Add shapeless crafting recipes
    [
        ['thorium_fuel', ['9x #forge:dust/thorium']],
        ['low_enriched_uranium_fuel', ['#forge:dusts/uranium_235', '8x #forge:dusts/uraniumt']],
        ['highly_enriched_uranium_fuel', ['4x #forge:dusts/uranium_235', '5x #forge:dusts/uranium']],
        ['high_radioactive_fuel', ['6x #forge:dusts/uranium']],
        ['low_radioactive_fuel', ['3x #forge:dusts/uranium']],
    ]
        .forEach(([name, mats]) =>
            greg.assembler(`gfs:${name}`)
                .itemInputs(mats)
                .itemOutputs(`gfs:${name}`)
                .duration(10 * 20)
                .EUt(420)
        );


    // doing stuff with the depleted variants
    [
        ['thorium_fuel', ['3x gtceu:lead_dust', '2x gtceu:bismuth_dust'], 'gtceu:radon 4000'],
        ['low_enriched_uranium_fuel', ['3x gtceu:plutonium_dust', '2x gtceu:barium_dust'], 'gtceu:krypton 4000'],
        ['highly_enriched_uranium_fuel', ['5x gtceu:plutonium_dust', '1x gtceu:barium_dust'], 'gtceu:krypton 2000'],
        ['low_radioactive_fuel', ['3x gtceu:lead_dust'], 'gtceu:krypton 80'],
        ['high_radioactive_fuel', ['6x gtceu:lead_dust'], 'gtceu:krypton 200'],
    ]
        .forEach(([name, out, liq]) => {
            greg.centrifuge(`gfs:${name}`)
                .itemInputs(`gfs:depleted_${name}`)
                .itemOutputs(out)
                .outputFluids(liq)
                .duration(60 * 20)
                .EUt(420);
        });


    // recipe for the controllers

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