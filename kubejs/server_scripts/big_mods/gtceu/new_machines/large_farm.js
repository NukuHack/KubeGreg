
ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    greg.assembler('gfs:large_farm')
        .itemInputs('gtceu:simple_farm',"6x #forge:plates/polyethylene","6x #forge:plates/polytetrafluoroethylene")
        .itemOutputs('gtceu:large_farm')
        .circuit(23)
        .duration(20*80)
        .EUt(480);



    const plants = [
        ['wheat_seeds', 'wheat'],
        ['', 'carrot'],
        ['', 'potato'],
        ['pumpkin_seeds', 'pumpkin'],
        ['melon_seeds', 'melon'],
        ['', 'cocoa_beans'],
        ['beetroot_seeds', 'beetroot'],
        ['', 'bamboo'],
        ['', 'sweet_berries'],
        ['', 'kelp'],
        ['', 'glow_berries'],
        ['', 'sugar_cane'],
        ['torchflower_seeds', 'torchflower'],
        ['pitcher_pod', 'pitcher_plant']
    ];

    plants.forEach(([seed,crop])=>{
		if (seed=="")
			seed = crop;
		
        greg.large_farm(`gfs:${crop}_normal`)
            .notConsumable(`minecraft:${seed}`)
            .itemOutputs(`16x minecraft:${crop}`)
            .chancedOutput(seed, 5000, 0)
            .outputFluids('gtceu:oxygen 1000')
            .inputFluids('minecraft:water 1000')
            .circuit(1)
            .EUt(480*4)
            .duration(20*20);

        greg.large_farm(`gfs:${crop}_w_bone_meal`)
            .notConsumable(`minecraft:${seed}`)
            .itemInputs('minecraft:bone_meal')
            .itemOutputs(`32x minecraft:${crop}`)
            .chancedOutput(seed, 5000, 0)
            .outputFluids('gtceu:oxygen 2000')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 500')
            .circuit(2)
            .EUt(480*4)
            .duration(20*15);

        greg.large_farm(`gfs:${crop}_w_compost`)
            .notConsumable(`minecraft:${seed}`)
            .itemInputs('#forge:farm_fertilizer')
            .itemOutputs(`48x minecraft:${crop}`)
            .chancedOutput(seed, 5000, 0)
            .outputFluids('gtceu:oxygen 3000')
            .inputFluids('minecraft:water 2000', 'gtceu:carbon_dioxide 1000')
            .circuit(3)
            .EUt(480*4)
            .duration(20*10);

        greg.large_farm(`gfs:${crop}_w_fertilizer`)
            .notConsumable(`minecraft:${seed}`)
            .itemInputs('gtceu:fertilizer')
            .itemOutputs(`64x minecraft:${crop}`)
            .chancedOutput(seed, 5000, 0)
            .outputFluids('gtceu:oxygen 5000')
            .inputFluids('minecraft:water 4000', 'gtceu:carbon_dioxide 2000')
            .circuit(4)
            .EUt(480*4)
            .duration(20*5);
    });

});