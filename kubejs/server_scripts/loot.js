LootJS.modifiers((event) => {

    event
	.addBlockLootModifier("#forge:leaves")
	.matchMainHand("#forge:tools/crooks")
	.removeLoot(Ingredient.all)
	.addWeightedLoot(
	   [1, 2],
	   [	Item.of("minecraft:string").withChance(40),
		Item.of("minecraft:oak_leaves").withChance(30),
		Item.of("minecraft:stick").withChance(20),
		Item.of("minecraft:oak_sapling").withChance(10),
		Item.of("minecraft:apple").withChance(5),
		Item.of("gfs:wood_bark").withChance(5)]);


    event
	.addBlockLootModifier("minecraft:budding_amethyst")
	.removeLoot(Ingredient.all)
	.addLoot("minecraft:budding_amethyst");

    event
	.addBlockLootModifier("minecraft:spawner")
	.removeLoot(Ingredient.all)
	.addLoot("minecraft:spawner");

    event
	.addBlockLootModifier("ae2:flawless_budding_quartz")
	.removeLoot(Ingredient.all)
	.addLoot("ae2:flawless_budding_quartz");






    event
	.addBlockLootModifier("engineersdecor:steel_railing")
	.removeLoot(Ingredient.all)
	.addLoot("engineersdecor:steel_railing");

    event
	.addBlockLootModifier("engineersdecor:steel_catwalk")
	.removeLoot(Ingredient.all)
	.addLoot("engineersdecor:steel_catwalk");

    event
	.addBlockLootModifier("engineersdecor:metal_rung_steps")
	.removeLoot(Ingredient.all)
	.addLoot("engineersdecor:metal_rung_steps");

    event
	.addBlockLootModifier("engineersdecor:steel_catwalk_stairs")
	.removeLoot(Ingredient.all)
	.addLoot("engineersdecor:steel_catwalk_stairs");






    event
	.addBlockLootModifier("minecraft:cobblestone")
	.matchMainHand("#forge:tools/all_hammers")
	.removeLoot(Ingredient.all)
	.addLoot("minecraft:gravel");
    event
	.addBlockLootModifier("minecraft:cobblestone")
	.matchMainHand("#forge:tools/all_hammers")
	.matchOffHand("#forge:tools/all_hammers")
	.removeLoot(Ingredient.all)
	.addLoot("minecraft:sand")


    event
	.addBlockLootModifier("minecraft:gravel")
	.matchMainHand("#forge:tools/all_hammers")
	.matchOffHand("#forge:tools/all_hammers")
	.removeLoot(Ingredient.all)
	.addLoot("gfs:dust");
    event
	.addBlockLootModifier("minecraft:gravel")
	.matchMainHand("#forge:tools/all_hammers")
	.removeLoot(Ingredient.all)
	.addLoot("minecraft:sand");


    event
	.addBlockLootModifier("minecraft:sand")
	.matchMainHand("#forge:tools/all_hammers")
	.removeLoot(Ingredient.all)
	.addLoot("gfs:dust");




});