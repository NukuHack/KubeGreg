// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {


    const greg = event.recipes.gtceu

    event.remove({mod: 'laserio'});


// laser_wrench

    event.shaped('laserio:laser_wrench', [
            'CDC',
            'EBF',
            ' A ',
        ], {
            A: '#forge:rods/tin',
            B: 'laserio:logic_chip',
            C: '#forge:bolts/red_alloy',
            D: '#forge:screws/tin',
            E: '#forge:tools/wrenches',
            F: '#forge:tools/screwdrivers'
        }
    );

// card_holder

    event.shaped('laserio:card_holder', [
            'AAA',
            'CDC',
            'ABA',
        ], {
            A: '#forge:plates/iron',
            B: 'laserio:logic_chip',
            C: '#forge:plates/red_alloy',
            D: '#forge:chests/wooden',
        }
    );

// card_cloner

    event.shaped('laserio:card_cloner', [
            'AAA',
            'CDC',
            'ABA',
        ], {
            A: '#forge:plates/iron',
            B: 'laserio:logic_chip',
            C: '#forge:plates/paper',
            D: '#forge:chests/wooden',
        }
    );

// laser_node

    greg
        .assembler('gfs:laser_node')
        .itemInputs('12x #forge:rods/long/stainless_steel')
        .itemInputs('6x gtceu:tempered_glass')
        .itemInputs('4x #forge:lenses/glass')
        .itemInputs('laserio:laser_connector')
        .itemOutputs('laserio:laser_node')
        .duration(100)
        .EUt(30);

// laser_connector
    greg
        .assembler('gfs:laser_connector')
        .itemInputs('2x #forge:lenses/glass')
        .itemInputs('#forge:rods/red_alloy', 'laserio:logic_chip', '3x #forge:plates/tin', '2x #forge:foils/red_alloy')
        .itemOutputs('laserio:laser_connector')
        .duration(100)
        .EUt(30);

// laser_connector_advanced
    greg
        .assembler('gfs:laser_connector_advanced')
        .itemInputs('3x #forge:rods/red_alloy', 'laserio:laser_connector',
            '3x #forge:plates/electrum', '2x #forge:plates/ender_eye', '2x #forge:plates/diamond')
        .itemOutputs('laserio:laser_connector_advanced')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 144))
        .duration(100)
        .EUt(30);

// overclocker_card

    event.shaped('laserio:overclocker_card', [
            'AAA',
            'BCB',
            'AAA',
        ], {
            A: '#forge:storage_blocks/gold',
            B: 'laserio:logic_chip',
            C: 'laserio:logic_chip'
        }
    );

// overclocker_node

    event.shaped('laserio:overclocker_node', [
            'AAA',
            'BCB',
            'AAA',
        ], {
            A: '#forge:storage_blocks/diamond',
            B: 'laserio:logic_chip',
            C: 'laserio:logic_chip'
        }
    );


// filter_count
// filter_tag
// filter_mod
// filter_nbt


    event.shapeless('laserio:filter_nbt', 'laserio:filter_basic');
    event.shapeless('laserio:filter_mod', 'laserio:filter_basic');
    event.shapeless('laserio:filter_tag', 'laserio:filter_basic');
    event.shapeless('laserio:filter_count', 'laserio:filter_basic');

    event.shapeless('laserio:filter_basic', 'laserio:filter_nbt');
    event.shapeless('laserio:filter_basic', 'laserio:filter_tag');
    event.shapeless('laserio:filter_basic', 'laserio:filter_mod');
    event.shapeless('laserio:filter_basic', 'laserio:filter_count');


// card_item

    greg.assembler('gfs:card_item')
        .itemInputs('3x #forge:storage_blocks/steel')
        .itemInputs('3x #forge:plates/cobalt')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:mv_robot_arm')
        .itemInputs('gtceu:mv_conveyor_module')
        .itemInputs('6x minecraft:hopper')
        .inputFluids(Fluid.of('gtceu:rubber', 288))
        .itemOutputs('laserio:card_item')
        .duration(10 * 20)
        .EUt(120);

// card_item_2

    greg.assembler('gfs:card_item_2')
        .itemInputs('3x #forge:storage_blocks/steel')
        .itemInputs('3x #forge:plates/cobalt')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:mv_robot_arm')
        .itemInputs('gtceu:mv_conveyor_module')
        .itemInputs('6x minecraft:hopper')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 144))
        .itemOutputs('laserio:card_item')
        .duration(5 * 20)
        .EUt(120);

// card_fluid

    greg.assembler('gfs:card_fluid')
        .itemInputs('3x #forge:storage_blocks/lapis')
        .itemInputs('3x #forge:plates/cobalt')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:mv_electric_pump')
        .itemInputs('gtceu:mv_fluid_regulator')
        .itemInputs('6x omnihopper:fluid_hopper')
        .inputFluids(Fluid.of('gtceu:rubber', 288))
        .itemOutputs('laserio:card_fluid')
        .duration(10 * 20)
        .EUt(120);

// card_fluid_2

    greg.assembler('gfs:card_fluid_2')
        .itemInputs('3x #forge:storage_blocks/lapis')
        .itemInputs('3x #forge:plates/cobalt')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:mv_electric_pump')
        .itemInputs('gtceu:mv_fluid_regulator')
        .itemInputs('6x omnihopper:fluid_hopper')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 144))
        .itemOutputs('laserio:card_fluid')
        .duration(5 * 20)
        .EUt(120);

// card_energy

    greg.assembler('gfs:card_energy')
        .itemInputs('3x #forge:storage_blocks/copper')
        .itemInputs('3x #forge:plates/red_alloy')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:mv_electric_motor')
        .itemInputs('gtceu:hv_lithium_battery')
        .inputFluids(Fluid.of('gtceu:rubber', 288))
        .itemOutputs('laserio:card_energy')
        .duration(10 * 20)
        .EUt(120);

// card_energy_2

    greg.assembler('gfs:card_energy_2')
        .itemInputs('3x #forge:storage_blocks/copper')
        .itemInputs('2x #forge:plates/red_alloy')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:mv_electric_motor')
        .itemInputs('gtceu:hv_lithium_battery')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 144))
        .itemOutputs('laserio:card_energy')
        .duration(5 * 20)
        .EUt(120);

// card_redstone

    greg.assembler('gfs:card_redstone')
        .itemInputs('3x #forge:storage_blocks/redstone')
        .itemInputs('3x #forge:plates/red_alloy')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:lv_sensor')
        .itemInputs('gtceu:lv_emitter')
        .inputFluids(Fluid.of('gtceu:rubber', 288))
        .itemOutputs('laserio:card_redstone')
        .duration(10 * 20)
        .EUt(120);

// card_redstone_2

    greg.assembler('gfs:card_redstone_2')
        .itemInputs('3x #forge:storage_blocks/redstone')
        .itemInputs('3x #forge:plates/red_alloy')
        .itemInputs('3x #forge:storage_blocks/quartz')
        .itemInputs('3x #forge:storage_blocks/gold')
        .itemInputs('2x laserio:logic_chip')
        .itemInputs('gtceu:lv_sensor')
        .itemInputs('gtceu:lv_emitter')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 144))
        .itemOutputs('laserio:card_redstone')
        .duration(5 * 20)
        .EUt(120);

// filter_basic

    greg.assembler('gfs:filter_basic')
        .itemInputs('4x #forge:rods/iron')
        .itemInputs('2x #forge:glass_panes/colorless')
        .itemInputs('laserio:logic_chip')
        .itemInputs('gtceu:fluid_tag_filter')
        .itemInputs('gtceu:fluid_filter')
        .itemInputs('gtceu:item_tag_filter')
        .itemInputs('gtceu:item_filter')
        .inputFluids(Fluid.of('gtceu:rubber', 288))
        .itemOutputs('2x laserio:filter_basic')
        .duration(10 * 20)
        .EUt(120);

// filter_basic_2

    greg.assembler('gfs:filter_basic_2')
        .itemInputs('4x #forge:rods/iron')
        .itemInputs('2x #forge:glass_panes/colorless')
        .itemInputs('laserio:logic_chip')
        .itemInputs('gtceu:fluid_tag_filter')
        .itemInputs('gtceu:fluid_filter')
        .itemInputs('gtceu:item_tag_filter')
        .itemInputs('gtceu:item_filter')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 144))
        .itemOutputs('2x laserio:filter_basic')
        .duration(5 * 20)
        .EUt(120);

// logic_chip

    greg.assembler('gfs:logic_chip_ulv')
        .itemInputs('1x #gtceu:circuits/ulv')
        .itemInputs('4x #forge:dusts/clay')
        .itemInputs('2x #forge:plates/nether_quartz')
        .itemInputs('4x #forge:foils/red_alloy')
        .itemInputs('2x #forge:screws/gold')
        .inputFluids(Fluid.of('gtceu:rubber', 288))
        .itemOutputs('laserio:logic_chip_raw')
        .duration(10 * 20)
        .EUt(100);

// logic_chip_2

    greg.assembler('gfs:logic_chip_ulv_2')
        .itemInputs('1x #gtceu:circuits/ulv')
        .itemInputs('4x #forge:dusts/clay')
        .itemInputs('2x #forge:plates/nether_quartz')
        .itemInputs('4x #forge:foils/red_alloy')
        .itemInputs('2x #forge:screws/gold')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 144))
        .itemOutputs('laserio:logic_chip_raw')
        .duration(5 * 20)
        .EUt(100);

    greg.assembler('gfs:logic_chip_lv')
        .itemInputs('1x #gtceu:circuits/lv')
        .itemInputs('8x #forge:dusts/clay')
        .itemInputs('4x #forge:plates/nether_quartz')
        .itemInputs('8x #forge:foils/red_alloy')
        .itemInputs('4x #forge:screws/gold')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 288))
        .itemOutputs('2x laserio:logic_chip_raw')
        .duration(10 * 20)
        .EUt(100);


    greg
        .alloy_smelter('gfs:logic_chip')
        .itemInputs('laserio:logic_chip_raw')
        .itemOutputs('laserio:logic_chip')
        .duration(5 * 20)
        .EUt(30);

// fin //

})