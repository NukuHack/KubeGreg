
ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    const plants = [
        ['minecraft:wheat_seeds', 'minecraft:wheat'],
        ['minecraft:carrot', 'minecraft:carrot'],
        ['minecraft:potato', 'minecraft:potato'],
        ['minecraft:pumpkin_seeds', 'minecraft:pumpkin'],
        ['minecraft:melon_seeds', 'minecraft:melon'],
        ['minecraft:cocoa_beans', 'minecraft:cocoa_beans'],
        ['minecraft:beetroot_seeds', 'minecraft:beetroot'],
        ['minecraft:bamboo', 'minecraft:bamboo'],
        ['minecraft:sweet_berries', 'minecraft:sweet_berries'],
        ['minecraft:kelp', 'minecraft:kelp'],
        ['minecraft:glow_berries', 'minecraft:glow_berries'],
        ['minecraft:sugar_cane', 'minecraft:sugar_cane'],
        ['minecraft:torchflower_seeds', 'minecraft:torchflower'],
        ['minecraft:pitcher_pod', 'minecraft:pitcher_plant']
    ];

    plants.forEach(([seed,crop])=>{
        greg.simple_farm(`gfs:${crop}_harvest`)
            .notConsumable(seed)
            .itemOutputs(`1x ${crop}`)
            .chancedOutput(seed, 2000, 0)
            .inputFluids('minecraft:water 500')
            .circuit(1)
            .EUt(30)
            .duration(20*10);

        greg.simple_farm(`gfs:${crop}_w_bone_meal`)
            .notConsumable(seed)
            .itemInputs('minecraft:bone_meal')
            .itemOutputs(`2x ${crop}`)
            .chancedOutput(seed, 3000, 0)
            .inputFluids('minecraft:water 1000')
            .circuit(2)
            .EUt(30)
            .duration(20*10);

        greg.simple_farm(`gfs:${crop}_w_compost`)
            .notConsumable(seed)
            .itemInputs('#forge:farm_fertilizer')
            .itemOutputs(`4x ${crop}`)
            .chancedOutput(seed, 4000, 0)
            .inputFluids('minecraft:water 2500')
            .circuit(3)
            .EUt(30)
            .duration(20*10);

        greg.simple_farm(`gfs:${crop}_w_fertilizer`)
            .notConsumable(seed)
            .itemInputs('gtceu:fertilizer')
            .itemOutputs(`8x ${crop}`)
            .chancedOutput(seed, 5000, 0)
            .inputFluids('minecraft:water 5000')
            .circuit(4)
            .EUt(30)
            .duration(20*10);
    });

});