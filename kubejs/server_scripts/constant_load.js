priority: 100


// just remove useless things / things what will have their recipe replaced
//event.remove({ output: item })

const items = [
	"dmlreloaded:soot_covered_redstone",
	"dmlreloaded:machine_casing",
	"dmlreloaded:soot_covered_plate",

	"minecraft:barrel",

	"sfm:cable",
	"sfm:water_tank",

	"megacells:sky_steel_ingot",
	"megacells:sky_steel_block",
	"megacells:accumulation_processor_press",
	"megacells:printed_accumulation_processor",
	"megacells:accumulation_processor",

	"simple_resource_generators:simple_water_condenser",
	"simple_resource_generators:simple_lava_condenser",

	"ae2:inscriber",
	"ae2:blank_pattern",
	"ae2:logic_processor_press",
	"ae2:calculation_processor_press",
	"ae2:engineering_processor_press",
	"ae2:silicon_press",
	"ae2:printed_logic_processor",
	"ae2:printed_calculation_processor",
	"ae2:printed_engineering_processor",
	"ae2:printed_silicon",
	"ae2:logic_processor",
	"ae2:calculation_processor",
	"ae2:engineering_processor",
	"ae2:certus_quartz_dust",
	"ae2:ender_dust",
	"ae2:fluix_dust",
	"ae2:quartz_glass",
	"ae2:quartz_fiber",
	"ae2:fluix_glass_cable",
	"ae2:fluix_covered_cable",
	"ae2:vibration_chamber",
	"ae2:energy_acceptor",
	"ae2:silicon",
	"ae2:charger",
	"ae2:controller",
	"ae2:chest",
	"ae2:drive",
	"ae2:molecular_assembler",
	"ae2:sky_dust",
	"ae2:import_bus",
	"ae2:export_bus",
	"ae2:crafting_unit",
	"ae2:cell_component_1k",
	"ae2:pattern_provider",
	"ae2:interface",
	"ae2:formation_core",
	"ae2:annihilation_core",
	"ae2:spatial_cell_component_2",
	"ae2:nether_quartz_hoe",
	"ae2:nether_quartz_pickaxe",
	"ae2:nether_quartz_shovel",
	"ae2:nether_quartz_cutting_knife",
	"ae2:nether_quartz_axe",
	"ae2:nether_quartz_sword",
	"ae2:nether_quartz_wrench",
	"ae2:formation_plane",
	"ae2:annihilation_plane",
	"ae2:charged_staff",
	"ae2:quartz_fixture",
	"ae2:crystal_resonance_generator",
	"ae2:energy_level_emitter",
	"ae2:view_cell",

	"ae2:spatial_cell_component_2",
	"ae2:spatial_cell_component_16",
	"ae2:spatial_cell_component_128",
	"ae2:item_cell_housing",
	"ae2:fluid_cell_housing",
	"ae2things:disk_housing",
	"ae2:cell_component_1k",
	"ae2:cell_component_4k",
	"ae2:cell_component_16k",
	"ae2:cell_component_64k",
	"ae2:cell_component_256k",
	"megacells:mega_item_cell_housing",
	"megacells:mega_fluid_cell_housing",
	"megacells:cell_component_1m",
	"megacells:cell_component_4m",
	"megacells:cell_component_16m",
	"megacells:cell_component_64m",
	"megacells:cell_component_256m",
	"megacells:bulk_item_cell",

	"expatternprovider:ex_drive",
	"expatternprovider:drive_upgrade",
	"expatternprovider:ex_interface",
	"expatternprovider:interface_upgrade",
	"expatternprovider:ex_pattern_provider",
	"expatternprovider:pattern_provider_upgrade",
	"expatternprovider:ex_molecular_assembler",
	"expatternprovider:patterns_provider_upgrade",
	"expatternprovider:interface_upgrade",
	"expatternprovider:pattern_modifier",
	"expatternprovider:intercafe_upgrade",
	"expatternprovider:wireless_connect",

	"megacells:mega_energy_cell",
	"megacells:bulk_cell_component",
	"megacells:mega_crafting_monitor",
	"megacells:mega_crafting_accelerator",
	"megacells:mega_pattern_provider",
	"megacells:mega_interface",

	"merequester:requester",
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

// prop. will replace the next part by adding the cell+megacell+disk assembling to the canner
	"megacells:cells/standard/item_storage_cell_1m",
	"megacells:cells/standard/item_storage_cell_4m",
	"megacells:cells/standard/item_storage_cell_16m",
	"megacells:cells/standard/item_storage_cell_64m",
	"megacells:cells/standard/item_storage_cell_256m",
	"megacells:cells/standard/fluid_storage_cell_1m",
	"megacells:cells/standard/fluid_storage_cell_4m",
	"megacells:cells/standard/fluid_storage_cell_16m",
	"megacells:cells/standard/fluid_storage_cell_64m",
	"megacells:cells/standard/fluid_storage_cell_256m",

	"ae2:network/cells/item_storage_cell_1k",
	"ae2:network/cells/item_storage_cell_4k",
	"ae2:network/cells/item_storage_cell_16k",
	"ae2:network/cells/item_storage_cell_64k",
	"ae2:network/cells/item_storage_cell_256k",
	"ae2:network/cells/fluid_storage_cell_1k",
	"ae2:network/cells/fluid_storage_cell_4k",
	"ae2:network/cells/fluid_storage_cell_16k",
	"ae2:network/cells/fluid_storage_cell_64k",
	"ae2:network/cells/fluid_storage_cell_256k",

	"ae2things:cells/disk_drive_1k",
	"ae2things:cells/disk_drive_4k",
	"ae2things:cells/disk_drive_16k",
	"ae2things:cells/disk_drive_64k",
	"ae2things:cells/disk_drive_256k",

	"ae2:network/cells/spatial_storage_cell_2_cubed",
	"ae2:network/cells/spatial_storage_cell_16_cubed",
	"ae2:network/cells/spatial_storage_cell_128_cubed",

];

// autoclave recipes

const autoClay = [

	['netherrack','minecraft:netherrack'],
	['endstone','minecraft:end_stone'],
	['granite','minecraft:granite'],
	['andesite','minecraft:andesite'],
	['diorite','minecraft:diorite'],
	['deepslate','minecraft:deepslate'],
	['basalt','minecraft:basalt'],
	['stone','minecraft:stone'],
	['ender_pearl','minecraft:ender_pearl'],

];














// remove item from tag
//event.replaceInput({ input: id[1] }, id[1], id[0]);
//event.replaceOutput({ output: id[1] }, id[1], id[0]);
// tag : event.remove(id[0], id[1]);

const replacements = [

	["forge:dusts/ender_pearl", "ae2:ender_dust"],
	['forge:gems/certus_quartz',"ae2:certus_quartz_crystal"],
	['forge:dusts/certus_quartz',"ae2:certus_quartz_dust"],
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
