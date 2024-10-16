ServerEvents.recipes(event => {

    function treeGrowing(type) {
        event.recipes.gtceu.tree_greenhouse(`${type}_growing`)
            .notConsumable(`minecraft:${type}_sapling`)
            .chancedInput('minecraft:bone_meal', 2500, 0)
            .itemOutputs(`32x minecraft:${type}_log`)
            .inputFluids('minecraft:water 100')
            .duration(600)
            .circuit(1)
            .EUt(20);

        event.recipes.gtceu.tree_greenhouse(`${type}_co2_growing`)
            .notConsumable(`minecraft:${type}_sapling`)
            .chancedInput('#forge:farm_fertilizer', 2500, 0)
            .itemOutputs(`64x minecraft:${type}_log`)
            .outputFluids('gtceu:oxygen 1000')
            .inputFluids('minecraft:water 500', 'gtceu:carbon_dioxide 500')
            .duration(600)
            .circuit(2)
            .EUt(20);

        event.recipes.gtceu.tree_greenhouse(`${type}_co22_growing`)
            .notConsumable(`minecraft:${type}_sapling`)
            .chancedInput('gtceu:fertilizer', 2500, 0)
            .itemOutputs(`128x minecraft:${type}_log`)
            .outputFluids('gtceu:oxygen 2500')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000')
            .duration(600)
            .circuit(3)
            .EUt(20);

    }

    treeGrowing('oak');
    treeGrowing('birch');
    treeGrowing('spruce');
    treeGrowing('dark_oak');
    treeGrowing('jungle');
    treeGrowing('acacia');
    treeGrowing('cherry');


    event.recipes.gtceu.tree_greenhouse(`rubber_growing`)
        .notConsumable(`gtceu:rubber_sapling`)
        .chancedInput('minecraft:bone_meal', 2500, 0)
        .itemOutputs(`32x gtceu:rubber_log`)
        .itemOutputs(`8x gtceu:sticky_resin`)
        .inputFluids('minecraft:water 100')
        .duration(600)
        .EUt(20);


    event.recipes.gtceu.tree_greenhouse(`rubber_co2_growing`)
        .notConsumable(`gtceu:rubber_sapling`)
        .chancedInput('#forge:farm_fertilizer', 2500, 0)
        .itemOutputs(`64x gtceu:rubber_log`)
        .itemOutputs(`16x gtceu:sticky_resin`)
        .outputFluids('gtceu:oxygen 1000')
        .inputFluids('minecraft:water 500', 'gtceu:carbon_dioxide 500')
        .duration(600)
        .circuit(2)
        .EUt(20);

    event.recipes.gtceu.tree_greenhouse(`rubber_co22_growing`)
        .notConsumable(`gtceu:rubber_sapling`)
        .chancedInput('gtceu:fertilizer', 2500, 0)
        .itemOutputs(`128x gtceu:rubber_log`)
        .itemOutputs(`32x gtceu:sticky_resin`)
        .outputFluids('gtceu:oxygen 2500')
        .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000')
        .duration(600)
        .circuit(3)
        .EUt(20);



    event.recipes.gtceu.tree_greenhouse(`mangrove_growing`)
        .notConsumable(`minecraft:mangrove_propagule`)
        .chancedInput('minecraft:bone_meal', 2500, 0)
        .itemOutputs(`32x minecraft:mangrove_log`)
        .inputFluids('minecraft:water 100')
        .duration(600)
        .EUt(20);


    event.recipes.gtceu.tree_greenhouse(`mangrove_co2_growing`)
        .notConsumable(`minecraft:mangrove_propagule`)
        .chancedInput('#forge:farm_fertilizer', 2500, 0)
        .itemOutputs(`64x minecraft:mangrove_log`)
        .outputFluids('gtceu:oxygen 1000')
        .inputFluids('minecraft:water 100', 'gtceu:carbon_dioxide 500')
        .duration(600)
        .circuit(2)
        .EUt(20);

    event.recipes.gtceu.tree_greenhouse(`mangrove_co22_growing`)
        .notConsumable(`minecraft:mangrove_propagule`)
        .chancedInput('gtceu:fertilizer', 2500, 0)
        .itemOutputs(`128x minecraft:mangrove_log`)
        .outputFluids('gtceu:oxygen 2500')
        .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000')
        .duration(600)
        .circuit(3)
        .EUt(20);



});