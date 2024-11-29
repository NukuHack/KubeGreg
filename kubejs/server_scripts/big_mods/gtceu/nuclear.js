
ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    // Array of fuel rods [rod, depleted rod, time in minutes]
    const rod_use_stuff = [
        ['gfs:thorium_fuel_rod', 'gfs:depleted_thorium_fuel_rod', 20],
        ['gfs:low_enriched_uranium_fuel_rod', 'gfs:depleted_low_enriched_uranium_fuel_rod', 10],
        ['gfs:highly_enriched_uranium_fuel_rod', 'gfs:depleted_highly_enriched_uranium_fuel_rod', 15]
    ];

// Array of coolants [id, hot coolant, coolant, energy rate]
    const cooling_stuff = [
        ['gtceu:distilled_water 4', 'gtceu:nuclear_steam 16', -512, 60 * 20],
        ['gtceu:sodium_potassium 2', 'gtceu:hot_sodium_potassium 8', -2048, 60 * 10],
        ['gtceu:pcb_coolant 1', 'gtceu:hot_pcbcoolant 4', -8192, 60 * 5]
    ];

// Array of shapeless recipes [output item, input items]
    const rod_craft_stuff = [
        ['gfs:thorium_fuel_rod', ['9x gtceu:thorium_dust']],
        ['gfs:low_enriched_uranium_fuel_rod', ['gtceu:uranium_235_dust', '8x gtceu:uranium_dust']],
        ['gfs:highly_enriched_uranium_fuel_rod', ['4x gtceu:uranium_235_dust', '5x gtceu:uranium_dust']]
    ];

// for nuclear reacting recipes
    rod_use_stuff.forEach((rod, depRod, timeInMin)=> {

        cooling_stuff.forEach((config, index) => {
            greg.nuclear_reactor(`${rod}_${index + 1}`)
                .itemInputs(rod)
                .itemOutputs(depRod)
                .perTick(true)
                .inputFluids(config[0])
                .outputFluids(config[1])
                .perTick(false)
                .duration(timeInMin * config[3])
                .EUt(config[2]);
        });
    });

// for nuclear turbine recipes
    cooling_stuff.forEach((hotCoolant, coolant, rate) =>{
        greg.nuclear_turbine(`${coolant}_${index + 1}`)
            .inputFluids(hotCoolant)
            .outputFluids(coolant)
            .duration(1)
            .EUt(-rate);
    });


// Add shapeless crafting recipes
    rod_craft_stuff.forEach(recipe =>
        event.shapeless(recipe[0], recipe[1])
    );



// Array of centrifuge recipes [id, input item, output items, output fluid]
    const centrifugeRecipes = [
        ['th_centrifuging', 'gfs:depleted_thorium_fuel_rod', ['3x gtceu:lead_dust', '2x gtceu:bismuth_dust'], 'gtceu:radon 4000'],
        ['u_centrifuging', 'gfs:depleted_low_enriched_uranium_fuel_rod', ['3x gtceu:plutonium_dust', '2x gtceu:barium_dust'], 'gtceu:krypton 4000'],
        ['u_plus_centrifuging', 'gfs:depleted_highly_enriched_uranium_fuel_rod', ['5x gtceu:plutonium_dust', '1x gtceu:barium_dust'], 'gtceu:krypton 2000']
    ];

// Add centrifuge recipes
    centrifugeRecipes.forEach(([id,inp,out,liq]) => {
        greg.centrifuge(id)
            .itemInputs(inp)
            .itemOutputs(out)
            .outputFluids(liq)
            .duration(1200)
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