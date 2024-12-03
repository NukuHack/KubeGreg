ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    event.shaped(Item.of('gtceu:tree_greenhouse'), [
        'WAW',
        'MHM',
        'SCS'
    ], {
        W: 'gtceu:wrought_iron_plate',
        A: 'gtceu:iron_axe',
        M: 'gtceu:lv_electric_motor',
        H: 'gtceu:lv_machine_hull',
        S: 'gtceu:steel_plate',
        C: '#gtceu:circuits/mv'
    });



    [
        ["oak","minecraft:apple"],
        ["dark_oak","minecraft:apple"],
        ["mangrove",""],
        ["rubber","gtceu:sticky_resin"],
        ["jungle","minecraft:cocoa_beans"],
        ["cherry",""],
        ["acacia",""],
        ["spruce",""],
        ["birch",""]
    ]
        .forEach(([type,extra])=>{
            extra = (extra==""?"gtceu:plant_ball":extra); // should change it to some more natural thing
            greg.tree_greenhouse(`gfs:${type}_grow_co2_2`)
                .notConsumable(`#forge:saplings/${type}`)
                .chancedInput('gtceu:fertilizer', 2500, 0)
                .itemOutputs(`128x #forge:logs/${type}`)
                .itemOutputs(`16x ${extra}`)
                .inputFluids(Fluid.of('minecraft:water',1000),Fluid.of(`gtceu:carbon_dioxide`,1000))
                .outputFluids(Fluid.of(`gtceu:oxygen`,3000))
                .duration(600)
                .circuit(3)
                .EUt(30);

            greg.tree_greenhouse(`gfs:${type}_grow_co2`)
                .notConsumable(`#forge:saplings/${type}`)
                .chancedInput('#forge:farm_fertilizer', 2500, 0)
                .itemOutputs(`64x #forge:logs/${type}`)
                .itemOutputs(`8x ${extra}`)
                .inputFluids(Fluid.of('minecraft:water',1000),Fluid.of(`gtceu:carbon_dioxide`,500))
                .outputFluids(Fluid.of(`gtceu:oxygen`,2000))
                .duration(600)
                .circuit(2)
                .EUt(30);

            greg.tree_greenhouse(`gfs:${type}_grow`)
                .notConsumable(`#forge:saplings/${type}`)
                .chancedInput('minecraft:bone_meal', 2500, 0)
                .itemOutputs(`32x #forge:logs/${type}`)
                .itemOutputs(`4x ${extra}`)
                .inputFluids(Fluid.of('minecraft:water',1000))
                .outputFluids(Fluid.of(`gtceu:oxygen`,1000))
                .duration(600)
                .circuit(1)
                .EUt(30);
        });


});