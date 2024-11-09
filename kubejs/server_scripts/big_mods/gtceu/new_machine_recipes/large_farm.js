
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
        ['minecraft:pitcher_pod', 'minecraft:pitcher_plant'],
        ['minecraft:cactus', 'minecraft:cactus']
    ];

    plants.forEach(([seed,crop])=>{
        greg.large_farm(`gfs:${crop}_normal`)
            .notConsumable(seed)
            .itemOutputs(`16x ${crop}`)
            .chancedOutput(seed, 5000, 0)
            .inputFluids('minecraft:water 500')
            .circuit(1)
            .EUt(480*4)
            .duration(20*20);

        greg.large_farm(`gfs:${crop}_w_bone_meal`)
            .notConsumable(seed)
            .itemInputs('minecraft:bone_meal')
            .itemOutputs(`32x ${crop}`)
            .chancedOutput(seed, 5000, 0)
            .outputFluids('gtceu:oxygen 500')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 200')
            .circuit(2)
            .EUt(480*4)
            .duration(20*15);

        greg.large_farm(`gfs:${crop}_w_compost`)
            .notConsumable(seed)
            .itemInputs('#forge:farm_fertilizer')
            .itemOutputs(`48x ${crop}`)
            .chancedOutput(seed, 5000, 0)
            .outputFluids('gtceu:oxygen 1000')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 500')
            .circuit(3)
            .EUt(480*4)
            .duration(20*10);

        greg.large_farm(`gfs:${crop}_w_fertilizer`)
            .notConsumable(seed)
            .itemInputs('gtceu:fertilizer')
            .itemOutputs(`64x ${crop}`)
            .chancedOutput(seed, 5000, 0)
            .outputFluids('gtceu:oxygen 2500')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000')
            .circuit(4)
            .EUt(480*4)
            .duration(20*5);
    });

});