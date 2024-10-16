// yet another huge gregified mod

ServerEvents.recipes( e => {

	const gre = e.recipes.gtceu;
	
    //removing all the recipes in functional storage
    e.remove({ mod: "functionalstorage"});
	
    //registering all the wood types in a variable
    let woodtypes = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'crimson',
        'warped',
        'mangrove',
        'cherry'
    ];

	
    // making recipes for wood drawers
    woodtypes.forEach(item => { //runs this for every item in woodtypes

        //using the woodtypes variable to make all the 1x1 drawers
		gre.assembler(`functionalstorage:${item}_1`) 
			.itemInputs('gtceu:wood_crate')
			.itemInputs(`4x minecraft:${item}_planks`)
			.itemInputs('4x gtceu:iron_screw')
			.itemOutputs(`functionalstorage:${item}_1`)
			.duration(100)
			.EUt(30);
		gre.assembler(`functionalstorage:${item}_2`) 
			.itemInputs('2x gtceu:wood_crate')
			.itemInputs(`6x minecraft:${item}_planks`)
			.itemInputs('6x gtceu:iron_screw')
			.itemOutputs(`2x functionalstorage:${item}_2`)
			.duration(100)
			.EUt(30);
		gre.assembler(`functionalstorage:${item}_4`) 
			.itemInputs('4x gtceu:wood_crate')
			.itemInputs(`8x minecraft:${item}_planks`)
			.itemInputs('8x gtceu:iron_screw')
			.itemOutputs(`4x functionalstorage:${item}_4`)
			.duration(100)
			.EUt(30);
    });

    //recipes for the framed drawers
    gre.assembler(`functionalstorage:framed_1`) 
        .itemInputs('gtceu:steel_crate')
        .itemInputs(`4x gtceu:steel_frame`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:framed_1`)
        .duration(100)
        .EUt(30);
    e.shapeless(`functionalstorage:framed_1`,`functionalstorage:framed_1`);
    gre.assembler(`functionalstorage:framed_2`) 
        .itemInputs('2x gtceu:steel_crate')
        .itemInputs(`6x gtceu:steel_frame`)
        .itemInputs('6x gtceu:iron_screw')
        .itemOutputs(`2x functionalstorage:framed_2`)
        .duration(100)
        .EUt(30);
    e.shapeless(`functionalstorage:framed_2`,`functionalstorage:framed_2`);
    gre.assembler(`functionalstorage:framed_4`) 
        .itemInputs('4x gtceu:steel_crate')
        .itemInputs(`8x gtceu:steel_frame`)
        .itemInputs('8x gtceu:iron_screw')
        .itemOutputs(`4x functionalstorage:framed_4`)
        .duration(100)
        .EUt(30);
    e.shapeless(`functionalstorage:framed_4`,`functionalstorage:framed_4`);
	
	// compacting
    gre.assembler(`functionalstorage:compacting_drawer`) 
        .itemInputs('gtceu:aluminium_crate')
        .itemInputs(`4x minecraft:stone`)
        .itemInputs(`2x minecraft:piston`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:compacting_drawer`)
        .duration(100)
        .EUt(30);
	
    e.shapeless(`functionalstorage:compacting_drawer`, [`functionalstorage:compacting_framed_drawer`]);
    e.shapeless(`functionalstorage:compacting_framed_drawer`, [`functionalstorage:compacting_drawer`]);
	
	// simple compacting
    gre.assembler(`functionalstorage:simple_compacting_drawer`) 
        .itemInputs('gtceu:aluminium_crate')
        .itemInputs(`4x minecraft:stone`)
        .itemInputs(`1x minecraft:piston`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:simple_compacting_drawer`)
        .duration(100)
        .EUt(30);
	
    e.shapeless(`functionalstorage:simple_compacting_drawer`, [`functionalstorage:framed_simple_compacting_drawer`]);
    e.shapeless(`functionalstorage:framed_simple_compacting_drawer`, [`functionalstorage:simple_compacting_drawer`]);
	
	// fluid 1
    gre.assembler(`functionalstorage:fluid_1`) 
        .itemInputs('gtceu:aluminium_drum')
        .itemInputs(`4x minecraft:stone`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:fluid_1`)
        .duration(100)
        .EUt(30);
    e.shapeless(`functionalstorage:fluid_1`,`functionalstorage:fluid_1`);
	// fluid 2
    gre.assembler(`functionalstorage:fluid_2`) 
        .itemInputs('2x gtceu:aluminium_drum')
        .itemInputs(`6x minecraft:stone`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:fluid_2`)
        .duration(100)
        .EUt(30);
    e.shapeless(`functionalstorage:fluid_2`,`functionalstorage:fluid_2`);
	// fluid 4
    gre.assembler(`functionalstorage:fluid_4`) 
        .itemInputs('4x gtceu:aluminium_drum')
        .itemInputs(`8x minecraft:stone`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:fluid_4`)
        .duration(100)
        .EUt(30);
    e.shapeless(`functionalstorage:fluid_4`,`functionalstorage:fluid_4`);
	
	
	
	// controller
    gre.assembler('functionalstorage:storage_controller') 
        .itemInputs('gtceu:lv_super_chest')
        .itemInputs(`16x gtceu:stone_plate`)
        .itemInputs('gtceu:hv_sensor')
        .itemInputs('gtceu:hv_emitter')
        .itemInputs('#gtceu:circuits/hv')
        .itemOutputs('functionalstorage:storage_controller')
        .duration(100)
        .EUt(480);

    e.shapeless('functionalstorage:framed_storage_controller', ['functionalstorage:storage_controller']);
    e.shapeless('functionalstorage:storage_controller', ['functionalstorage:framed_storage_controller']);
	
	// controller extension
    gre.assembler('functionalstorage:controller_extension') 
        .itemInputs('functionalstorage:storage_controller')
        .itemInputs('gtceu:mv_super_chest')
        .itemInputs('gtceu:ev_sensor')
        .itemInputs('gtceu:ev_emitter')
        .itemInputs('#gtceu:circuits/ev')
        .itemOutputs('functionalstorage:controller_extension')
        .duration(100)
        .EUt(480);
	
    e.shapeless('functionalstorage:framed_controller_extension', ['functionalstorage:controller_extension']);
    e.shapeless('functionalstorage:controller_extension', ['functionalstorage:framed_controller_extension']);
	
	
    gre.assembler('functionalstorage:ender_drawer') 
        .itemInputs('2x gtceu:double_tungsten_steel_plate')
        .itemInputs('gtceu:ev_super_chest')
        .itemInputs('6x gtceu:ender_pearl_plate')
        .itemInputs('gtceu:ev_sensor')
        .itemInputs('gtceu:ev_emitter')
        .inputFluids('gtceu:polytetrafluoroethylene 288')
        .itemOutputs('functionalstorage:ender_drawer')
        .duration(100)
        .EUt(1920);
	
    e.shapeless('functionalstorage:ender_drawer','functionalstorage:ender_drawer');
	
    //various upgrades
    gre.assembler('functionalstorage:copper_upgrade') 
        .itemInputs('functionalstorage:iron_downgrade')
        .itemInputs('gtceu:lv_super_chest')
        .itemInputs(`4x #forge:plates/copper`)
        .itemInputs('minecraft:copper_block')
        .itemOutputs('functionalstorage:copper_upgrade')
        .duration(100)
        .EUt(30);
    gre.assembler('functionalstorage:gold_upgrade') 
        .itemInputs('functionalstorage:copper_upgrade')
        .itemInputs('gtceu:mv_super_chest')
        .itemInputs('4x #forge:plates/gold')
        .itemInputs('minecraft:gold_block')
        .itemOutputs('functionalstorage:gold_upgrade')
        .duration(100)
        .EUt(120);
    gre.assembler('functionalstorage:diamond_upgrade') 
        .itemInputs('functionalstorage:gold_upgrade')
        .itemInputs('gtceu:hv_super_chest')
        .itemInputs('4x #forge:plates/diamond')
        .itemInputs('minecraft:diamond_block')
        .itemOutputs('functionalstorage:diamond_upgrade')
        .duration(100)
        .EUt(480);
    gre.assembler('functionalstorage:netherite_upgrade') 
        .itemInputs('functionalstorage:diamond_upgrade')
        .itemInputs('gtceu:ev_super_chest')
        .itemInputs('minecraft:netherite_upgrade_smithing_template')
        .itemInputs('minecraft:netherite_block')
        .itemOutputs('functionalstorage:netherite_upgrade')
        .duration(100)
        .EUt(1920);

    gre.assembler('functionalstorage:max_upgrade') 
        .itemInputs('64x functionalstorage:netherite_upgrade')
        .itemInputs('16x gtceu:uhv_quantum_chest')
        .itemOutputs('functionalstorage:max_storage_upgrade')
        .duration(20*60*2)
        .EUt(450*1000);

    e.shaped(`functionalstorage:armory_cabinet`, [
      'ABA', 
      'BCB', 
      'ADA'  
    ], {
    A: 'gtceu:stone_plate', 
    D: 'minecraft:netherite_ingot',  
    B: 'gtceu:lv_super_chest',
    C: 'gtceu:red_steel_ingot',
    }
    );
	
  e.shaped(`functionalstorage:iron_downgrade`, [
      'AAA', 
      'ABA', 
      'AAA'  
    ], {
    A: 'gtceu:iron_plate', 
    B: 'gtceu:stainless_steel_crate'
    }
    );
    e.shaped(`functionalstorage:redstone_upgrade`, [
      'AAA', 
      'BCB', 
      'AAA'  
    ], {
    A: 'gtceu:red_alloy_plate', 
    B: 'minecraft:comparator',  
    C: 'functionalstorage:iron_downgrade',
    }
    );
	
    gre.assembler('functionalstorage:void_upgrade') 
        .itemInputs('#functionalstorage:drawer')
        .itemInputs('gtceu:item_voiding_cover')
        .itemOutputs('functionalstorage:void_upgrade')
        .duration(100)
        .EUt(120);
	
    e.shaped(`functionalstorage:puller_upgrade`, [
      'ADA', 
      'BCB', 
      'ABA'  
    ], {
    A: 'gtceu:stone_plate', 
    B: 'gtceu:red_alloy_ingot', 
    C: 'functionalstorage:iron_downgrade',
    D: 'minecraft:hopper', 
    }
    );
    e.shaped(`functionalstorage:pusher_upgrade`, [
      'ADA', 
      'BCB', 
      'ABA'  
    ], {
    A: 'gtceu:stone_plate', 
    B: 'gtceu:red_alloy_ingot', 
    C: 'functionalstorage:iron_downgrade',
    D: 'omnihopper:omnihopper', 
    }
    );
    e.shaped(`functionalstorage:collector_upgrade`, [
      'AFA', 
      'CDE', 
      'AAA'  
    ], {
    A: 'gtceu:stone_plate',
    C: 'functionalstorage:puller_upgrade',
    F: 'gtceu:hv_item_magnet',
    D: 'functionalstorage:iron_downgrade',
    E: 'functionalstorage:pusher_upgrade'
    }
    );
    e.shaped('functionalstorage:linking_tool', [
      'ABA', 
      'CDC', 
      'ABA'  
    ], {
    A: 'minecraft:diamond', 
    B: 'gtceu:gold_single_cable',
    C: 'minecraft:paper',
    D: 'gtceu:stone_plate'
    }
    );
    e.shaped('functionalstorage:configuration_tool', [
      'ABA', 
      'CDC', 
      'ABA'  
    ], {
    A: 'minecraft:emerald', 
    B: 'gtceu:gold_single_cable',
    C: 'minecraft:paper',
    D: 'gtceu:stone_plate'
    }
    );
	
    e.shapeless('functionalstorage:linking_tool','functionalstorage:configuration_tool');
    e.shapeless('functionalstorage:configuration_tool','functionalstorage:linking_tool');
	
})
