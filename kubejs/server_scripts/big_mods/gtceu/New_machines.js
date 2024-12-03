/*
    stuff
*/

ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;
	
    greg.assembler('gfs:huge_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor',"6x #forge:plates/polyethylene","6x #forge:plates/polytetrafluoroethylene")
        .itemOutputs('gtceu:huge_chemical_reactor')
        .circuit(23)
        .duration(20*80)
        .EUt(480);


    event.shaped("gfs:compressed_lv_hatch",
        ["ABA", "D F", "GJH"],
        {A: "gtceu:lv_energy_input_hatch",
            B: "gtceu:maintenance_hatch",
            //C: "#forge:tools/hammers",
            D: "gtceu:lv_input_hatch",
            F: "gtceu:lv_output_hatch",
            G: "gtceu:lv_input_bus",
            H: "gtceu:lv_muffler_hatch",
            J: "gtceu:lv_output_bus"});


    event.shapeless("gfs:compressed_invar_casing","9x gtceu:heatproof_machine_casing");
    event.shapeless("gfs:compressed_ulv_casing","9x gtceu:ulv_machine_casing");


    coilS.forEach((coilType) => {
        event.shaped(`gfs:compressed_${coilType}_coil`,
            ["AAA", "A A", "AAA"],
            {A: `gtceu:${coilType}_coil_block`});
        event.shapeless(`8x gtceu:${coilType}_coil_block`,`gfs:compressed_${coilType}_coil`);
    });

// Create machine recipes for a specific voltage
    voltages.forEach((volt, index) => {
        if (index!=0&&!(index>7)){
            event.shaped(
                "gtceu:" + volt + "_miniature_ebf",
                ["AXB", "YXD", " E "],
                {
                    A: `#forge:tools/wrenches`,
                    B: `#forge:tools/hammers`,
                    X: `gfs:compressed_${coilS[index-1]}_coil`,
                    Y: `gfs:compressed_invar_casing`,
                    D: `gfs:compressed_lv_hatch`,
                    E: `gtceu:electric_blast_furnace`
                }
            );
            event.shaped(
                "gtceu:" + volt + "_miniature_pyrolyse_oven",
                ["AXB", "YXD", " E "],
                {
                    A: `#forge:tools/wrenches`,
                    B: `#forge:tools/hammers`,
                    X: `gfs:compressed_${coilS[index-1]}_coil`,
                    Y: `gfs:compressed_ulv_casing`,
                    D: `gfs:compressed_lv_hatch`,
                    E: `gtceu:pyrolyse_oven`
                }
            );

            greg
                .macerator("gfs:"+volt +"miniature_ebf")
                .itemInputs("gtceu:" + volt + "_miniature_ebf")
                .itemOutputs(
                    `2x gfs:compressed_${coilS[index-1]}_coil`,
                    `gfs:compressed_invar_casing`,
                    `gfs:compressed_lv_hatch`,
                    `gtceu:electric_blast_furnace`)
                .EUt(30)
                .duration(600);
        }
    });


    event.shaped(Item.of('gtceu:simple_farm'), [
        'SPS',
        'PBP',
        'SPS'
    ], {
        S: 'gtceu:treated_wood_rod',
        P: 'gtceu:treated_wood_planks',
        B: '#gtceu:circuits/lv'
    });

    greg.assembler('gfs:large_cracker')
        .itemInputs('gtceu:cracker',"6x #forge:plates/polyethylene","6x #forge:plates/polytetrafluoroethylene")
        .itemOutputs('gtceu:large_cracker')
        .circuit(23)
        .duration(20*80)
        .EUt(480);


    greg.assembler('gfs:large_farm')
        .itemInputs('gtceu:simple_farm',"6x #forge:plates/polyethylene","6x #forge:plates/polytetrafluoroethylene")
        .itemOutputs('gtceu:large_farm')
        .circuit(23)
        .duration(20*80)
        .EUt(480);


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



    event.replaceInput({output: 'gtceu:electric_blast_furnace' },"gtceu:heatproof_machine_casing","gfs:compressed_primitive_blast_furnace");
    
        greg.assembler('gfs:electric_blast_furnace')
            .itemInputs("gfs:compressed_primitive_blast_furnace","3x minecraft:furnace","3x #gtceu:circuit/lv",`2x gtceu:tin_single_cable`)
            .itemOutputs('gtceu:electric_blast_furnace')
            .circuit(6)
            .duration(60)
            .EUt(120);
    
    event.replaceInput({output: 'gtceu:pyrolyse_oven' },"gtceu:mv_machine_hull","gfs:compressed_coke_oven");
    
        greg.assembler('gfs:pyrolyse_oven')
            .itemInputs("gfs:compressed_coke_oven","3x #gtceu:circuit/mv","2x gtceu:cupronickel_quadruple_wire",
                "2x gtceu:mv_electric_piston","gtceu:mv_electric_pump")
            .itemOutputs('gtceu:pyrolyse_oven')
            .circuit(6)
            .duration(60)
            .EUt(120);

    //event.shapeless(Item.of("gfs:coke_oven_side"), ["4x gtceu:coke_oven_bricks","gtceu:coke_oven_hatch","4x gtceu:coke_oven_bricks"]);
    //event.shapeless(Item.of("gfs:coke_oven_controller"), ["4x gtceu:coke_oven_bricks","gtceu:coke_oven","3x gtceu:coke_oven_bricks"]);
    //event.shapeless(Item.of("gfs:compressed_coke_oven"), ["gfs:coke_oven_side","gfs:coke_oven_controller","gfs:coke_oven_side"]);

    greg.assembler('gfs:compressed_coke_oven')
        .itemInputs("23x gtceu:coke_oven_bricks","2x gtceu:coke_oven_hatch","gtceu:coke_oven")
        .itemOutputs('gfs:compressed_coke_oven')
        .circuit(4)
        .duration(400)
        .EUt(30);

    //event.shapeless(Item.of("gfs:primitive_blast_furnace_layer"), ["8x gtceu:firebricks"]);
    //event.shapeless(Item.of("gfs:primitive_blast_furnace_controller"), ["4x gtceu:firebricks","gtceu:primitive_blast_furnace","4x gtceu:firebricks"]);
    //event.shapeless(Item.of("gfs:compressed_primitive_blast_furnace"), ["2x gfs:primitive_blast_furnace_layer","gfs:primitive_blast_furnace_controller","gfs:primitive_blast_furnace_layer"]);

    greg.assembler('gfs:compressed_primitive_blast_furnace')
        .itemInputs("32x gtceu:firebricks","gtceu:primitive_blast_furnace")
        .itemOutputs('gfs:compressed_primitive_blast_furnace')
        .circuit(4)
        .duration(400)
        .EUt(30);


// there was a plan for "all assebler" or something like that, what would be crafter with one tier above stuff inside the assembly line and make it insainly expensive
// 	functionality for it would be to make a really stupid stuff in a sinlge step like making the entire platline with titanium and chemistry in one step or idk
// 	but that would take out the "automation" part of gregtech which i like the most ... so i guess it will never be actually implemented ... but i put this stuff here just in case ... you know
// lathe extruder mixer
// wiremill circuit_assembler blender
// solidifier assembler extractor


});
