/*
    stuff
*/

ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;
/*
    // Wood Casing 
    greg.assembler('gfs:wood_casing')
        .itemInputs('4x gtceu:brass_screw', '2x gtceu:treated_wood_plate', 'gtceu:treated_wood_frame')
        .itemOutputs('2x gfs:wood_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);
*/
    greg.assembler('gfs:huge_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor',"6x #forge:plates/polyethylene","6x #forge:plates/polytetrafluoroethylene")
        .itemOutputs('gtceu:huge_chemical_reactor')
        .circuit(23)
        .duration(20*80)
        .EUt(480);

	greg
	.macerator('gfs:huge_chemical_reactor')
	.itemInputs('gtceu:huge_chemical_reactor')
	.itemOutputs('gtceu:large_chemical_reactor',"6x #forge:plates/polyethylene","6x #forge:plates/polytetrafluoroethylene")
	.EUt(30)
	.duration(600);
	
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
	});

// Create machine recipes for a specific voltage
  voltages.forEach((volt, index) => {
    if (index!=0){
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
	.macerator("gfs:"+volt +"miniature_pyrolyse_oven")
	.itemInputs("gtceu:" + volt + "_miniature_pyrolyse_oven")
	.itemOutputs(
                `2x gfs:compressed_${coilS[index-1]}_coil`,
                `gfs:compressed_ulv_casing`,
                `gfs:compressed_lv_hatch`,
                `gtceu:pyrolyse_oven`)
	.EUt(30)
	.duration(600);
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
    };
  });


    event.shaped(Item.of('gtceu:large_farm'), [
        'SPS',
        'PBP',
        'SPS'
    ], {
        S: 'gtceu:treated_wood_rod',
        P: 'gtceu:treated_wood_planks',
        B: '#gtceu:circuits/lv'
    });

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
	event.replaceInput({output: 'gtceu:pyrolyse_oven' },"gtceu:mv_machine_hull","gfs:compressed_coke_oven");

event.shapeless(Item.of("gfs:coke_oven_side"), ["4x gtceu:coke_oven_bricks","gtceu:coke_oven_hatch","4x gtceu:coke_oven_bricks"]);
event.shapeless(Item.of("gfs:coke_oven_controller"), ["4x gtceu:coke_oven_bricks","gtceu:coke_oven","3x gtceu:coke_oven_bricks"]);
event.shapeless(Item.of("gfs:compressed_coke_oven"), ["gfs:coke_oven_side","gfs:coke_oven_controller","gfs:coke_oven_side"]);

event.shapeless(Item.of("gfs:primitive_blast_furnace_layer"), ["8x gtceu:firebricks"]);
event.shapeless(Item.of("gfs:primitive_blast_furnace_controller"), ["4x gtceu:firebricks","gtceu:primitive_blast_furnace","4x gtceu:firebricks"]);
event.shapeless(Item.of("gfs:compressed_primitive_blast_furnace"), ["2x gfs:primitive_blast_furnace_layer","gfs:primitive_blast_furnace_controller","gfs:primitive_blast_furnace_layer"]);



// there was a plan for "all assebler" or something like that, what would be crafter with one tier above stuff inside the assembly line and make it insainly expensive
// 	functionality for it would be to make a really stupid stuff in a sinlge step like making the entire platline with titanium and chemistry in one step or idk
// 	but that would take out the "automation" part of gregtech which i like the most ... so i guess it will never be actually implemented ... but i put this stuff here just in case ... you know
// lathe extruder mixer
// wiremill circuit_assembler blender
// solidifier assembler extractor


});
