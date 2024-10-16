
ServerEvents.recipes(event => {


    const seed = ['minecraft:wheat_seeds', 'minecraft:carrot', 'minecraft:potato', 'minecraft:pumpkin_seeds', 'minecraft:melon_seeds', 'minecraft:cocoa_beans', 'minecraft:beetroot_seeds', 'minecraft:bamboo', 'minecraft:sweet_berries', 'minecraft:kelp', 'minecraft:glow_berries',
//'farmersdelight:rice', 'farmersdelight:cabbage_seeds', 'farmersdelight:tomato_seeds', 'thermal:amaranth_seeds', 'thermal:barley_seeds', 'thermal:corn_seeds', 'thermal:flax_seeds', 'thermal:onion_seeds', 'thermal:radish_seeds', 'thermal:rice_seeds', 'thermal:sadiroot_seeds', 'thermal:spinach_seeds', 'thermal:bell_pepper_seeds', 'thermal:eggplant_seeds', 'thermal:green_bean_seeds', 'thermal:peanut_seeds', 'thermal:strawberry', 'thermal:tomato_seeds', 'thermal:coffee_seeds', 'thermal:hops_seeds', 'thermal:tea_seeds',
'minecraft:sugar_cane',"minecraft:torchflower_seeds","minecraft:pitcher_pod"];
    const crop = ['minecraft:wheat', 'minecraft:carrot', 'minecraft:potato', 'minecraft:pumpkin', 'minecraft:melon', 'minecraft:cocoa_beans', 'minecraft:beetroot', 'minecraft:bamboo', 'minecraft:sweet_berries', 'minecraft:kelp', 'minecraft:glow_berries',
//'farmersdelight:rice', 'farmersdelight:cabbage', 'farmersdelight:tomato', 'thermal:amaranth', 'thermal:barley', 'thermal:corn', 'thermal:flax', 'thermal:onion', 'thermal:radish', 'thermal:rice', 'thermal:sadiroot', 'thermal:spinach', 'thermal:bell_pepper', 'thermal:eggplant', 'thermal:green_bean', 'thermal:peanut', 'thermal:strawberry', 'thermal:tomato_seeds', 'thermal:coffee', 'thermal:hops', 'thermal:tea',
'minecraft:sugar_cane',"minecraft:torchflower","minecraft:pitcher_plant"];


    for (let i = 0; i < seed.length; i++) {
        event.recipes.gtceu.large_farm(`${crop[i]}_harvest`)
            .notConsumable(seed[i])
            .itemOutputs(`16x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .inputFluids('minecraft:water 500')
            .circuit(0)
            .duration(200);

        event.recipes.gtceu.large_farm(`${crop[i]}_harvest_with_bone_meal`)
            .notConsumable(seed[i])
            .itemInputs('minecraft:bone_meal')
            .itemOutputs(`32x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .outputFluids('gtceu:oxygen 500')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 200')
            .circuit(1)
            .duration(140);

        event.recipes.gtceu.large_farm(`${crop[i]}_harvest_with_compost`)
            .notConsumable(seed[i])
            .itemInputs('#forge:farm_fertilizer')
            .itemOutputs(`48x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .outputFluids('gtceu:oxygen 1000')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 500')
            .circuit(2)
            .duration(100);

        event.recipes.gtceu.large_farm(`${crop[i]}_harvest_with_fertilizer`)
            .notConsumable(seed[i])
            .itemInputs('gtceu:fertilizer')
            .itemOutputs(`64x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .outputFluids('gtceu:oxygen 2500')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000')
            .circuit(3)
            .duration(40);
    }
});