LootJS.modifiers((event) => {

.addEntityLootModifier("minecraft:creeper")
    .addLootTypeModifier(LootType.ENTITY) // you also can use multiple types
    .addBlockLootModifier("#forge:ores") // keep in mind this is a block tag not an item tag
    .addLoot('minecraft:dirt')

    .randomChance(0.25) // %
    .replaceLoot("item1","item2",stack_size bool)
.triggerExplosion(radius int, destroy bool, fire bool)
.logName("Fun loot") // you can set a custom name
    .weatherCheck({ raining: true, })
    .removeLoot(Ingredient.all) // or "mc:flint"
    .dropExperience(1) // num of xp
    .applyLootingBonus([1, 3])
    .matchEquip(EquipmentSlot.MAINHAND, Item.of("minecraft:netherite_pickaxe").ignoreNBT())
    .matchMainHand(Item.of("minecraft:netherite_pickaxe").ignoreNBT())
    .matchOffHand(Item.of("minecraft:netherite_pickaxe").ignoreNBT())
    .thenAdd("minecraft:gravel")
    .triggerLightningStrike(doDamage bool)

.thenModify(Ingredient.getAll(), (itemStack) => { // you have to return an item!
    return itemStack.withCount(itemStack.getCount() * 2)
})
    .addWeightedLoot(
        [3, 10], // the times it rolls; [3, 10] means min 3 max 10; 5 means min 5 max 5; empty is just 1
        [Item.of("minecraft:gunpowder").withChance(50), Item.of("minecraft:nether_star").withChance(5)]
    )
    .when((c) =>
        c.randomChance(0.5)
    )
    .pool((p) => {
        p.addLoot('minecraft:gravel').randomChance(0.30);	//0-1
        p.addLoot('minecraft:sand').randomChance(0.15);		//0-1
    });


});