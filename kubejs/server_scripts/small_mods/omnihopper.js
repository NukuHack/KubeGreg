ServerEvents.recipes(event => {

    event.remove({output: 'omnihopper:fluid_hopper'})
    event.remove({output: 'omnihopper:fluid_omnihopper'})
    event.shapeless('omnihopper:fluid_hopper', ["omnihopper:fluid_omnihopper"])
    event.shapeless('omnihopper:fluid_omnihopper', ["omnihopper:fluid_hopper"])

    event.shaped('omnihopper:fluid_hopper', [
            'ABA',
            'CDC',
            'EFG',
        ], {
            A: '#forge:plates/brass',
            B: 'gtceu:gold_normal_fluid_pipe',
            C: '#forge:plates/cupronickel',
            D: 'omnihopper:wooden_hopper',
            E: '#forge:tools/wrenches',
            F: 'gtceu:bronze_normal_fluid_pipe',
            G: '#forge:tools/mallets'
        }
    );
    event.remove({output: 'minecraft:hopper'})
    event.remove({output: 'omnihopper:omnihopper'})
    event.shapeless('minecraft:hopper', ["omnihopper:omnihopper"])
    event.shapeless('omnihopper:omnihopper', ["minecraft:hopper"])

    event.shaped('minecraft:hopper', [
            'ABA',
            'CDC',
            'EFG',
        ], {
            A: '#forge:plates/tin',
            B: 'gtceu:tin_normal_item_pipe',
            C: '#forge:plates/steel',
            D: 'omnihopper:wooden_hopper',
            E: '#forge:tools/wrenches',
            F: 'gtceu:nickel_normal_item_pipe',
            G: '#forge:tools/mallets'
        }
    );
    event.remove({output: 'omnihopper:wooden_hopper'})
    event.remove({output: 'omnihopper:wooden_omnihopper'})
    event.shapeless('omnihopper:wooden_hopper', ["omnihopper:wooden_omnihopper"])
    event.shapeless('omnihopper:wooden_omnihopper', ["omnihopper:wooden_hopper"])

    event.shaped('omnihopper:wooden_hopper', [
            'ABA',
            'CDC',
            'EFG',
        ], {
            A: '#forge:plates/wood',
            B: 'gtceu:wood_normal_fluid_pipe',
            C: '#forge:plates/treated_wood',
            D: 'minecraft:chest',
            E: '#forge:tools/wrenches',
            F: 'gtceu:treated_wood_normal_fluid_pipe',
            G: '#forge:tools/mallets'
        }
    );


    const greg = event.recipes.gtceu;

    greg
        .assembler('gfs:hopper_wooden')
        .itemInputs('2x #forge:plates/wood')
        .itemInputs('2x #forge:plates/treated_wood')
        .itemInputs('minecraft:chest')
        .itemOutputs('omnihopper:wooden_hopper')
        .duration(200)
        .EUt(30)
        .circuit(23);

    greg
        .assembler('gfs:hopper')
        .itemInputs('2x #forge:plates/tin')
        .itemInputs('2x #forge:plates/steel')
        .itemInputs('omnihopper:wooden_hopper')
        .itemOutputs('minecraft:hopper')
        .duration(200)
        .EUt(30)
        .circuit(23);

    greg
        .assembler('gfs:hopper_fluid')
        .itemInputs('2x #forge:plates/brass')
        .itemInputs('2x #forge:plates/cupronickel')
        .itemInputs('omnihopper:wooden_hopper')
        .itemOutputs('omnihopper:fluid_hopper')
        .duration(200)
        .EUt(30)
        .circuit(23);


});