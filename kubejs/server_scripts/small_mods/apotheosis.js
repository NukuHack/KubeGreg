// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    event.remove({id: 'apotheosis:inert_trident'});
    event.shaped('apotheosis:inert_trident',
        [' BB', 'CAB', 'AD '],
        {A: 'gtceu:long_invar_rod', B: 'gtceu:steel_rod', C: '#forge:tools/files', D: '#forge:tools/hammers'});

    event.remove({id: 'apotheosis:spawner/ignore_light'});
    event.remove({id: 'apotheosis:spawner/ignore_light_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "torchmaster:feral_flare_lantern"
        },
        "stat_changes": [{
            "id": "ignore_light",
            "value": true
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "torchmaster:feral_flare_lantern"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "ignore_light",
            "value": false
        }]
    });

    event.remove({id: 'apotheosis:spawner/spawn_count'});
    event.remove({id: 'apotheosis:spawner/spawn_count_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:mv_emitter"
        },
        "stat_changes": [{
            "id": "spawn_count",
            "value": 1,
            "min": -1,
            "max": 16
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:mv_emitter"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "spawn_count",
            "value": -1,
            "min": 1,
            "max": -1
        }]
    });

    event.remove({id: 'apotheosis:spawner/max_nearby'});
    event.remove({id: 'apotheosis:spawner/max_nearby_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:mv_sensor"
        },
        "stat_changes": [{
            "id": "max_nearby_entities",
            "value": 2,
            "min": -1,
            "max": 32
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:mv_sensor"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "max_nearby_entities",
            "value": -2,
            "min": 1,
            "max": -1
        }]
    });

    event.remove({id: 'apotheosis:spawner/baby'});
    event.remove({id: 'apotheosis:spawner/baby_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:nand_chip"
        },
        "stat_changes": [{
            "id": "baby",
            "value": true
        }]
    });
    event.custom({
            "type": "apotheosis:spawner_modifier",
            "conditions": [{
                "type": "apotheosis:module",
                "module": "spawner"
            }],
            "mainhand": {
                "item": "gtceu:nand_chip"
            },
            "offhand": {
                "item": "minecraft:quartz"
            },
            "consumes_offhand": false,
            "stat_changes": [{
                "id": "baby",
                "value": false
            }]
        }
    );

    event.remove({id: 'apotheosis:spawner/redstone_control'});
    event.remove({id: 'apotheosis:spawner/redstone_control_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:activity_detector_cover"
        },
        "stat_changes": [{
            "id": "redstone_control",
            "value": true
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:activity_detector_cover"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "redstone_control",
            "value": false
        }]
    });

    event.remove({id: 'apotheosis:spawner/no_ai'});
    event.remove({id: 'apotheosis:spawner/no_ai_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:mv_robot_arm"
        },
        "stat_changes": [{
            "id": "no_ai",
            "value": true
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:mv_robot_arm"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "no_ai",
            "value": false
        }]
    });

    event.remove({id: 'apotheosis:spawner/min_delay'});
    event.remove({id: 'apotheosis:spawner/min_delay_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "tag": "gtceu:circuits/lv"
        },
        "stat_changes": [{
            "id": "min_delay",
            "value": -10,
            "min": 20,
            "max": -1
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "tag": "gtceu:circuits/lv"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "min_delay",
            "value": 10,
            "min": -1,
            "max": -1
        }]
    });

    event.remove({id: 'apotheosis:spawner/max_delay'});
    event.remove({id: 'apotheosis:spawner/max_delay_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "tag": "gtceu:circuits/mv"
        },
        "stat_changes": [{
            "id": "max_delay",
            "value": -10,
            "min": 20,
            "max": -1
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "tag": "gtceu:circuits/mv"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "max_delay",
            "value": 10,
            "min": -1,
            "max": -1
        }]
    });

    event.remove({id: 'apotheosis:spawner/ignore_conditions'});
    event.remove({id: 'apotheosis:spawner/ignore_conditions_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "tag": "gtceu:circuits/iv"
        },
        "stat_changes": [{
            "id": "ignore_conditions",
            "value": true
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "tag": "gtceu:circuits/iv"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "ignore_conditions",
            "value": false
        }]
    });

    event.remove({id: 'apotheosis:spawner/player_range'});
    event.remove({id: 'apotheosis:spawner/player_range_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:quantum_eye"
        },
        "stat_changes": [{
            "id": "req_player_range",
            "value": 2,
            "min": -1,
            "max": 48
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:quantum_eye"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "req_player_range",
            "value": -2,
            "min": 1,
            "max": -1
        }]
    });

    event.remove({id: 'apotheosis:spawner/ignore_players'});
    event.remove({id: 'apotheosis:spawner/ignore_players_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:quantum_star"
        },
        "stat_changes": [{
            "id": "ignore_players",
            "value": true
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:quantum_star"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "ignore_players",
            "value": false
        }]
    });

    event.remove({id: 'apotheosis:spawner/spawn_range'});
    event.remove({id: 'apotheosis:spawner/spawn_range_inverted'});
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:lv_field_generator"
        },
        "stat_changes": [{
            "id": "spawn_range",
            "value": 1,
            "min": -1,
            "max": 32
        }]
    });
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
        "mainhand": {
            "item": "gtceu:lv_field_generator"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [{
            "id": "spawn_range",
            "value": -1,
            "min": 1,
            "max": -1
        }]
    });


// ancient_material

    event.custom({
        "type": "apotheosis:salvaging",
        "conditions": [{"type": "apotheosis:module", "module": "adventure"}],
        "input": {"item": "gtceu:gravi_star"},
        "outputs": [{
            "min_count": 1,
            "max_count": 1,
            "stack": {"item": "apotheosis:ancient_material"}
        }]
    });

    event.custom({
        "type": "apotheosis:salvaging",
        "conditions": [{"type": "apotheosis:module", "module": "adventure"}],
        "input": {"tag": "forge:ingots"},
        "outputs": [{
            "min_count": 0,
            "max_count": 1,
            "stack": {"item": "apotheosis:common_material"}
        }]
    });

    event.custom({
        "type": "apotheosis:salvaging",
        "conditions": [{"type": "apotheosis:module", "module": "adventure"}],
        "input": {"tag": "forge:gems"},
        "outputs": [{
            "min_count": 0,
            "max_count": 1,
            "stack": {"item": "apotheosis:gem_dust"}
        }]
    });

// draconic_endshelf

    event.shaped('apotheosis:draconic_endshelf', [
            ' A ',
            'BCB',
            'BBB',
        ], {
            A: 'apotheosis:infused_breath',
            B: 'minecraft:ender_pearl',
            C: 'apotheosis:endshelf',
        }
    );


// uncommon_material

    greg.large_chemical_reactor('gfs:uncommon_material')
        .itemInputs('4x gtceu:carbon_fibers')
        .itemInputs('4x #forge:dusts/green_sapphire')
        .inputFluids(Fluid.of('gtceu:beryllium', 144))
        .itemOutputs('2x apotheosis:uncommon_material')
        .duration(200)
        .EUt(500);

// rare_material

    greg.large_chemical_reactor('gfs:rare_material')
        .itemInputs('1x #forge:ingots/blue_steel')
        .itemInputs('1x #forge:exquisite_gems')
        .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 144))
        .itemOutputs('1x apotheosis:rare_material')
        .duration(200)
        .EUt(500);

// epic_material

    greg.large_chemical_reactor('gfs:epic_material')
        .itemInputs('3x #forge:dusts/amethyst')
        .itemInputs('3x #forge:dusts/ender_eye')
        .inputFluids(Fluid.of('gtceu:ruby_slurry', 144))
        .inputFluids(Fluid.of('gtceu:sapphire_slurry', 144))
        .inputFluids(Fluid.of('gtceu:green_sapphire_slurry', 144))
        .itemOutputs('3x apotheosis:epic_material')
        .duration(200)
        .EUt(500);

// mythic_material

    greg.autoclave('gfs:mythic_material')
        .itemInputs('gtceu:iv_field_generator')
        .inputFluids(Fluid.of('gtceu:rhodium_sulfate', 1000))
        .itemOutputs('apotheosis:mythic_material')
        .duration(2000)
        .EUt(2000);


// fin //

});