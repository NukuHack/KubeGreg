// yet another huge gregified mod

ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    //removing all the recipes in functional storage
    event.remove({mod: "functionalstorage"});

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
        greg.assembler(`gfs:functionalstorage/${item}_1`)
            .itemInputs('gtceu:wood_crate')
            .itemInputs(`4x minecraft:${item}_planks`)
            .itemInputs('4x gtceu:iron_screw')
            .itemOutputs(`functionalstorage:${item}_1`)
            .circuit(1)
            .duration(100)
            .EUt(30);
        greg.assembler(`gfs:functionalstorage/${item}_2`)
            .itemInputs('2x gtceu:wood_crate')
            .itemInputs(`6x minecraft:${item}_planks`)
            .itemInputs('6x gtceu:iron_screw')
            .itemOutputs(`2x functionalstorage:${item}_2`)
            .circuit(2)
            .duration(100)
            .EUt(30);
        greg.assembler(`gfs:functionalstorage/${item}_4`)
            .itemInputs('4x gtceu:wood_crate')
            .itemInputs(`8x minecraft:${item}_planks`)
            .itemInputs('8x gtceu:iron_screw')
            .itemOutputs(`4x functionalstorage:${item}_4`)
            .circuit(4)
            .duration(100)
            .EUt(30);
    });

    //recipes for the framed drawers
    greg.assembler(`gfs:functionalstorage/framed_1`)
        .itemInputs('gtceu:steel_crate')
        .itemInputs(`4x gtceu:steel_frame`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:framed_1`)
        .circuit(1)
        .duration(100)
        .EUt(30);
    event.shapeless(`functionalstorage:framed_1`, `functionalstorage:framed_1`);

    greg.assembler(`gfs:functionalstorage/framed_2`)
        .itemInputs('2x gtceu:steel_crate')
        .itemInputs(`6x gtceu:steel_frame`)
        .itemInputs('6x gtceu:iron_screw')
        .itemOutputs(`2x functionalstorage:framed_2`)
        .circuit(2)
        .duration(100)
        .EUt(30);
    event.shapeless(`functionalstorage:framed_2`, `functionalstorage:framed_2`);

    greg.assembler(`gfs:functionalstorage/framed_4`)
        .itemInputs('4x gtceu:steel_crate')
        .itemInputs(`8x gtceu:steel_frame`)
        .itemInputs('8x gtceu:iron_screw')
        .itemOutputs(`4x functionalstorage:framed_4`)
        .circuit(4)
        .duration(100)
        .EUt(30);
    event.shapeless(`functionalstorage:framed_4`, `functionalstorage:framed_4`);

    // compacting
    greg.assembler(`gfs:functionalstorage/compacting_drawer`)
        .itemInputs('gtceu:aluminium_crate')
        .itemInputs(`4x minecraft:stone`)
        .itemInputs(`2x minecraft:piston`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:compacting_drawer`)
        .circuit(1)
        .duration(100)
        .EUt(30);

    event.shapeless(`functionalstorage:compacting_drawer`, [`functionalstorage:compacting_framed_drawer`]);
    event.shapeless(`functionalstorage:compacting_framed_drawer`, [`functionalstorage:compacting_drawer`]);

    // simple compacting
    greg.assembler(`gfs:functionalstorage/simple_compacting_drawer`)
        .itemInputs('gtceu:aluminium_crate')
        .itemInputs(`4x minecraft:stone`)
        .itemInputs(`1x minecraft:piston`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:simple_compacting_drawer`)
        .circuit(2)
        .duration(100)
        .EUt(30);

    event.shapeless(`functionalstorage:simple_compacting_drawer`, [`functionalstorage:framed_simple_compacting_drawer`]);
    event.shapeless(`functionalstorage:framed_simple_compacting_drawer`, [`functionalstorage:simple_compacting_drawer`]);

    // fluid 1
    greg.assembler(`gfs:functionalstorage/fluid_1`)
        .itemInputs('gtceu:aluminium_drum')
        .itemInputs(`4x minecraft:stone`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:fluid_1`)
        .circuit(1)
        .duration(100)
        .EUt(30);
    event.shapeless(`functionalstorage:fluid_1`, `functionalstorage:fluid_1`);
    // fluid 2
    greg.assembler(`gfs:functionalstorage/fluid_2`)
        .itemInputs('2x gtceu:aluminium_drum')
        .itemInputs(`6x minecraft:stone`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:fluid_2`)
        .circuit(2)
        .duration(100)
        .EUt(30);
    event.shapeless(`functionalstorage:fluid_2`, `functionalstorage:fluid_2`);
    // fluid 4
    greg.assembler(`gfs:functionalstorage/fluid_4`)
        .itemInputs('4x gtceu:aluminium_drum')
        .itemInputs(`8x minecraft:stone`)
        .itemInputs('4x gtceu:iron_screw')
        .itemOutputs(`functionalstorage:fluid_4`)
        .circuit(4)
        .duration(100)
        .EUt(30);
    event.shapeless(`functionalstorage:fluid_4`, `functionalstorage:fluid_4`);


    // controller
    greg.assembler('gfs:functionalstorage/storage_controller')
        .itemInputs('gtceu:lv_super_chest')
        .itemInputs(`16x gtceu:stone_plate`)
        .itemInputs('gtceu:hv_sensor')
        .itemInputs('gtceu:hv_emitter')
        .itemInputs('#gtceu:circuits/hv')
        .itemOutputs('functionalstorage:storage_controller')
        .duration(100)
        .EUt(480);

    event.shapeless('functionalstorage:framed_storage_controller', ['functionalstorage:storage_controller']);
    event.shapeless('functionalstorage:storage_controller', ['functionalstorage:framed_storage_controller']);

    // controller extension
    greg.assembler('gfs:functionalstorage/controller_extension')
        .itemInputs('functionalstorage:storage_controller')
        .itemInputs('gtceu:mv_super_chest')
        .itemInputs('gtceu:ev_sensor')
        .itemInputs('gtceu:ev_emitter')
        .itemInputs('#gtceu:circuits/ev')
        .itemOutputs('functionalstorage:controller_extension')
        .duration(100)
        .EUt(480);

    event.shapeless('functionalstorage:framed_controller_extension', ['functionalstorage:controller_extension']);
    event.shapeless('functionalstorage:controller_extension', ['functionalstorage:framed_controller_extension']);


    greg.assembler('gfs:functionalstorage/ender_drawer')
        .itemInputs('2x gtceu:double_tungsten_steel_plate')
        .itemInputs('gtceu:ev_super_chest')
        .itemInputs('6x gtceu:ender_pearl_plate')
        .itemInputs('gtceu:ev_sensor')
        .itemInputs('gtceu:ev_emitter')
        .inputFluids('gtceu:polytetrafluoroethylene 288')
        .itemOutputs('functionalstorage:ender_drawer')
        .duration(100)
        .EUt(1920);

    event.shapeless('functionalstorage:ender_drawer', 'functionalstorage:ender_drawer');

    //various upgrades
    greg.assembler('gfs:functionalstorage/copper_upgrade')
        .itemInputs('functionalstorage:iron_downgrade')
        .itemInputs('gtceu:lv_super_chest')
        .itemInputs(`4x #forge:plates/steel`)
        .itemInputs('2x #forge:storage_blocks/steel')
        .itemOutputs('functionalstorage:copper_upgrade')
        .duration(100)
        .EUt(30);
    greg.assembler('gfs:functionalstorage/gold_upgrade')
        .itemInputs('functionalstorage:copper_upgrade')
        .itemInputs('gtceu:mv_super_chest')
        .itemInputs(`4x #forge:plates/aluninium`)
        .itemInputs('2x #forge:storage_blocks/aluninium')
        .itemOutputs('functionalstorage:gold_upgrade')
        .duration(100)
        .EUt(120);
    greg.assembler('gfs:functionalstorage/diamond_upgrade')
        .itemInputs('functionalstorage:gold_upgrade')
        .itemInputs('gtceu:hv_super_chest')
        .itemInputs(`4x #forge:plates/stainless_steel`)
        .itemInputs('2x #forge:storage_blocks/stainless_steel')
        .itemOutputs('functionalstorage:diamond_upgrade')
        .duration(100)
        .EUt(480);
    greg.assembler('gfs:functionalstorage/netherite_upgrade')
        .itemInputs('functionalstorage:diamond_upgrade')
        .itemInputs('gtceu:ev_super_chest')
        .itemInputs('minecraft:netherite_upgrade_smithing_template')
        .itemInputs(`4x #forge:plates/titanium`)
        .itemInputs('2x #forge:storage_blocks/titanium')
        .itemOutputs('functionalstorage:netherite_upgrade')
        .duration(100)
        .EUt(1920);

    greg.assembler('gfs:functionalstorage/max_upgrade')
        .itemInputs('64x functionalstorage:netherite_upgrade')
        .itemInputs('16x gtceu:uhv_quantum_chest')
        .itemOutputs('functionalstorage:max_storage_upgrade')
        .duration(20 * 60 * 2)
        .EUt(450 * 1000);

    event.shaped(`functionalstorage:armory_cabinet`, [
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

    event.shaped(`functionalstorage:iron_downgrade`, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'gtceu:iron_plate',
            B: 'gtceu:stainless_steel_crate'
        }
    );
    event.shaped(`functionalstorage:redstone_upgrade`, [
            'AAA',
            'BCB',
            'AAA'
        ], {
            A: 'gtceu:red_alloy_plate',
            B: 'minecraft:comparator',
            C: 'functionalstorage:iron_downgrade',
        }
    );

    greg.assembler('gfs:functionalstorage/void_upgrade')
        .itemInputs('#functionalstorage:drawer')
        .itemInputs('gtceu:item_voiding_cover')
        .itemOutputs('functionalstorage:void_upgrade')
        .duration(100)
        .EUt(120);

    event.shaped(`functionalstorage:puller_upgrade`, [
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
    event.shaped(`functionalstorage:pusher_upgrade`, [
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
    event.shaped(`functionalstorage:collector_upgrade`, [
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
    event.shaped('functionalstorage:linking_tool', [
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
    event.shaped('functionalstorage:configuration_tool', [
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

    event.shapeless('functionalstorage:linking_tool', 'functionalstorage:configuration_tool');
    event.shapeless('functionalstorage:configuration_tool', 'functionalstorage:linking_tool');

})
