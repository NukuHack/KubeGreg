// mc ... is not a mod ...

ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

greg
  .assembler('gfs:loot_fabricator')
  .itemInputs('gtceu:hv_assembler')
  .itemInputs('#forge:ingots/netherite')
  .itemOutputs('hostilenetworks:loot_fabricator')
  .duration(800)
  .EUt(300);

	event.shaped("minecraft:coast_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:cobblestone",
	"I": "minecraft:sand"
    });
	
	event.shaped("minecraft:dune_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:sandstone",
	"I": "minecraft:cactus"
    });
	
	event.shaped("minecraft:eye_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:end_stone",
	"I": "minecraft:ender_eye"
    });

	event.shaped("minecraft:host_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:terracotta",
	"I": "#minecraft:saplings"
    });
	
	event.shaped("minecraft:raiser_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:terracotta",
	"I": "minecraft:dirt"
    });
	
	event.shaped("minecraft:rib_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:netherrack",
	"I": "minecraft:bone"
    });
	
	event.shaped("minecraft:sentry_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:cobblestone",
	"I": "minecraft:iron_ingot"
    });
	
	event.shaped("minecraft:shaper_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:terracotta",
	"I": "minecraft:coarse_dirt"
    });

	event.shaped("minecraft:silence_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:cobbled_deepslate",
	"I": "minecraft:minecraft:sculk"
    });
	
	event.shaped("minecraft:snout_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:blackstone",
	"I": "minecraft:porkchop"
    });
	event.shaped("minecraft:spire_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:purpur_block",
	"I": "minecraft:end_rod"
    });
	
	event.shaped("minecraft:tide_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:prismarine",
	"I": "minecraft:prismarine_crystals"
    });
	
	event.shaped("minecraft:vex_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:cobblestone",
	"I": "minecraft:gold_ingot"
    });
	
	event.shaped("minecraft:ward_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:cobbled_deepslate",
	"I": "minecraft:amethyst_shard"
    });
	
	event.shaped("minecraft:wild_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:mossy_cobblestone",
	"I": "minecraft:vine"
    });
	
	event.shaped("minecraft:wayfinder_armor_trim_smithing_template",
		["DID",
		"DBD",
		"DDD"],
	{"D": "minecraft:diamond",
	"B": "minecraft:terracotta",
	"I": "minecraft:compass"
    });
	
});