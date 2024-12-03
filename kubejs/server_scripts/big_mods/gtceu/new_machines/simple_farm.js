ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    event.shaped(Item.of('gtceu:simple_farm'), [
        'SPS',
        'PBP',
        'SPS'
    ], {
        S: 'gtceu:treated_wood_rod',
        P: 'gtceu:treated_wood_planks',
        B: '#gtceu:circuits/lv'
    });



    plantSeeds.forEach(([seed, crop]) => {
        if (seed == "")
            seed = crop;

        greg.simple_farm(`gfs:${crop}_harvest`)
            .notConsumable(`minecraft:${seed}`)
            .itemOutputs(`1x minecraft:${crop}`)
            .inputFluids('minecraft:water 500')
            .circuit(1)
            .EUt(30)
            .duration(20 * 10);

        greg.simple_farm(`gfs:${crop}_w_bone_meal`)
            .notConsumable(`minecraft:${seed}`)
            .itemInputs('minecraft:bone_meal')
            .itemOutputs(`2x minecraft:${crop}`)
            .inputFluids('minecraft:water 1000')
            .circuit(2)
            .EUt(30)
            .duration(20 * 10);

        greg.simple_farm(`gfs:${crop}_w_compost`)
            .notConsumable(`minecraft:${seed}`)
            .itemInputs('#forge:farm_fertilizer')
            .itemOutputs(`4x minecraft:${crop}`)
            .inputFluids('minecraft:water 2500')
            .circuit(3)
            .EUt(30)
            .duration(20 * 10);

        greg.simple_farm(`gfs:${crop}_w_fertilizer`)
            .notConsumable(`minecraft:${seed}`)
            .itemInputs('gtceu:fertilizer')
            .itemOutputs(`8x minecraft:${crop}`)
            .inputFluids('minecraft:water 5000')
            .circuit(4)
            .EUt(30)
            .duration(20 * 10);
    });

});