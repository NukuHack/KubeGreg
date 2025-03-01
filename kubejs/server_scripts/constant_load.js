priority: 100


// just remove useless things / things what will have their recipe replaced
//event.remove({ output: item })


const items = [

    "minecraft:barrel",

    // ae2 stuff

    // press stuff + processor stuff
    "ae2:silicon_press",
    "ae2:logic_processor_press",
    "ae2:calculation_processor_press",
    "ae2:engineering_processor_press",
    "ae2:printed_logic_processor",
    "ae2:printed_calculation_processor",
    "ae2:printed_engineering_processor",
    "ae2:printed_silicon",
    "ae2:logic_processor",
    "ae2:calculation_processor",
    "ae2:engineering_processor",
    // -||- from other mods
    "megacells:accumulation_processor_press",
    "megacells:printed_accumulation_processor",
    "megacells:accumulation_processor",

    // main materials
    "ae2:certus_quartz_dust",
    "ae2:ender_dust",
    "ae2:fluix_dust",
    "ae2:fluix_pearl",
    "ae2:silicon",
    "ae2:sky_dust",
    // main materials from other mods
    "megacells:sky_steel_ingot",
    "megacells:sky_steel_block",

    // better materials
    "ae2:quartz_glass",
    "ae2:quartz_glass",
    "ae2:cable_anchor",
    "ae2:quartz_glass",
    "ae2:charged_certus_quartz_crystal",
    "ae2:quartz_fixture",
    "ae2:quartz_vibrant_glass",
    "ae2:quartz_fiber",
    "ae2:fluix_glass_cable",
    "ae2:fluix_covered_cable",

    //main stuff
    "ae2:inscriber",
    "ae2:charger",
    "ae2:vibration_chamber",
    "ae2:energy_acceptor",
    "ae2:controller",
    "ae2:storage_bus",
    "ae2:chest",
    "ae2:cell_workbench",
    "ae2:drive",
    "ae2:molecular_assembler",
    "ae2:import_bus",
    "ae2:export_bus",
    "ae2:crafting_unit",
    "ae2:pattern_provider",
    "ae2:interface",
    "ae2:formation_plane",
    "ae2:annihilation_plane",
    "ae2:energy_level_emitter",
    "ae2:quantum_ring",
    "ae2:quantum_link",
    "ae2:wireless_receiver",
    "ae2:wireless_access_point",
    "ae2:condenser",
    "ae2:io_port",
    "ae2:dense_energy_cell",
    "ae2:crafting_unit",
    "ae2:crafting_accelerator",
    "ae2:crafting_monitor",
    // main stuff from other mods
    "megacells:mega_energy_cell",
    "megacells:mega_crafting_monitor",
    "megacells:mega_crafting_accelerator",
    "megacells:mega_pattern_provider",
    "megacells:mega_interface",

    `mae2:4x_crafting_accelerator`,
    `mae2:16x_crafting_accelerator`,
    `mae2:64x_crafting_accelerator`,
    `mae2:256x_crafting_accelerator`,

    "expatternprovider:ex_interface",
    "expatternprovider:interface_upgrade",
    "expatternprovider:ex_pattern_provider",
    "expatternprovider:pattern_provider_upgrade",
    "expatternprovider:wireless_connect",
    "expatternprovider:ingredient_buffer",
    "expatternprovider:ex_drive",
    "expatternprovider:drive_upgrade",
    "expatternprovider:ex_molecular_assembler",
    "expatternprovider:pattern_modifier",

    // tools
    "ae2:nether_quartz_hoe",
    "ae2:nether_quartz_pickaxe",
    "ae2:nether_quartz_shovel",
    "ae2:nether_quartz_cutting_knife",
    "ae2:nether_quartz_axe",
    "ae2:nether_quartz_sword",
    "ae2:nether_quartz_wrench",
    // better tools
    "ae2:charged_staff",
    "ae2:crystal_resonance_generator",
    "ae2:view_cell",
    "ae2:network_tool",
    "ae2:tiny_tnt",

    //items
    "ae2:wireless_booster",

    // cards
    "ae2:void_card",
    "ae2:redstone_card",
    "ae2:memory_card",
    "ae2:advanced_card",
    "ae2:fuzzy_card",
    "ae2:inverter_card",
    "ae2:basic_card",
    "ae2:energy_card",
    "ae2:speed_card",
    "ae2:crafting_card",
    "ae2:capacity_card",
    // cards from other mods
    "ae2wtlib:magnet_card",

    // cell stuff
    "ae2:spatial_cell_component_2",
    "ae2:spatial_cell_component_16",
    "ae2:spatial_cell_component_128",

    "ae2:item_cell_housing",
    "ae2:fluid_cell_housing",

    "megacells:mega_item_cell_housing",
    "megacells:mega_fluid_cell_housing",

    "ae2:cell_component_1k",
    "ae2:cell_component_4k",
    "ae2:cell_component_16k",
    "ae2:cell_component_64k",
    "ae2:cell_component_256k",

    "megacells:cell_component_1m",
    "megacells:cell_component_4m",
    "megacells:cell_component_16m",
    "megacells:cell_component_64m",
    "megacells:cell_component_256m",

    "megacells:bulk_cell_component",
    "megacells:bulk_item_cell",

    "expatternprovider:infinity_cell",

];


// just remove useless ids / ids that are too easy or just duplicates
// only use this if it's necessary and there are a lot different reciples for a single item
// use item remover if it's not that important to keep the rest of the recipes for this item
//event.remove({ id: ide })

const ids = [

    "minecraft:charcoal",
    "minecraft:bone_meal",
    "minecraft:bread",
    "minecraft:blaze_powder",
    "minecraft:ender_eye",

    "gtceu:shapeless/blaze_rod_to_powder",
    "gtceu:shapeless/rubber_wood_planks",

    "ae2:transform/certus_quartz_crystal",
    "ae2:transform/certus_quartz_crystal",
    "ae2:transform/fluix_crystal",
    "ae2:transform/fluix_crystals",
    "ae2:transform/entangled_singularity",
    "ae2:transform/entangled_singularity_from_pearl",

    "ae2:network/cables/covered_fluix",
    "ae2:network/cables/dense_smart_fluix_clean",
    "ae2:network/cables/dense_covered_fluix_clean",
    "ae2:network/cables/smart_fluix",
    "ae2:network/cables/dense_smart_fluix",
    "ae2:network/cables/dense_smart_from_smart",
    "ae2:network/cables/dense_covered_fluix",

    'gtceu:primitive_blast_furnace/steel_from_coal_gem',
    'gtceu:primitive_blast_furnace/steel_from_coal_dust',
    'gtceu:primitive_blast_furnace/steel_from_charcoal_gem',
    'gtceu:primitive_blast_furnace/steel_from_charcoal_dust',
//	'gtceu:primitive_blast_furnace/steel_from_coke_gem',
//	'gtceu:primitive_blast_furnace/steel_from_coke_dust',
    'gtceu:primitive_blast_furnace/steel_from_coal_gem_wrought',
    'gtceu:primitive_blast_furnace/steel_from_coal_dust_wrought',
    'gtceu:primitive_blast_furnace/steel_from_charcoal_gem_wrought',
    'gtceu:primitive_blast_furnace/steel_from_charcoal_dust_wrought',
//	'gtceu:primitive_blast_furnace/steel_from_coke_gem_wrought',
//	'gtceu:primitive_blast_furnace/steel_from_coke_dust_wrought',

    'gtceu:primitive_blast_furnace/steel_from_coal_block',
    'gtceu:primitive_blast_furnace/steel_from_charcoal_block',
//	'gtceu:primitive_blast_furnace/steel_from_coke_block',
    'gtceu:primitive_blast_furnace/steel_from_coal_block_wrought',
    'gtceu:primitive_blast_furnace/steel_from_charcoal_block_wrought',
//	'gtceu:primitive_blast_furnace/steel_from_coke_block_wrought',

    "ae2:network/cells/spatial_storage_cell_2_cubed",
    "ae2:network/cells/spatial_storage_cell_16_cubed",
    "ae2:network/cells/spatial_storage_cell_128_cubed",

];

// autoclave recipes

const autoClay = [

    ['netherrack', 'minecraft:netherrack'],
    ['endstone', 'minecraft:end_stone'],
    ['granite', 'minecraft:granite'],
    ['andesite', 'minecraft:andesite'],
    ['diorite', 'minecraft:diorite'],
    ['deepslate', 'minecraft:deepslate'],
    ['basalt', 'minecraft:basalt'],
    ['stone', 'minecraft:stone'],
    ['ender_pearl', 'minecraft:ender_pearl'],

];


// remove item from tag
//event.replaceInput({ input: id[1] }, id[1], id[0]);
//event.replaceOutput({ output: id[1] }, id[1], id[0]);
// tag : event.remove(id[0], id[1]);

const replacements = [
    ["forge:silicon", "ae2:silicon"],

    ["forge:dusts/ender_pearl", "ae2:ender_dust"],
    ['forge:gems/certus_quartz', "ae2:certus_quartz_crystal"],
    ['forge:dusts/certus_quartz', "ae2:certus_quartz_dust"],
    ['forge:gems/certus_quartz', 'ae2:charged_certus_quartz_crystal'],

];


// this dust to gem

const materials = [
//gems
    "malachite",
    "yellow_garnet",
    "apatite",
    "diamond",
    "amethyst",
    "spessartine",
    "almandine",
    "pyrope",
    "red_garnet",
    "emerald",
    "lapis",
//"lazurite",
    "sodalite",
    "uvarovite",
    "grossular",
    "andradite",
//"cinnabar",
    "green_sapphire",
    "sapphire",
//"certus_quartz",
//"redstone",
    "ruby",
    "topaz",
    "realgar",
    "sugar",
    "fluix",

];


console.log("Finished the loading of the Constants")
