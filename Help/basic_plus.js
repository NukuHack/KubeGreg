
BlockEvents.leftClicked('minecraft:sand', event => {
  event.player.give('minecraft:cobblestone')
  event.block.set('minecraft:air')
})
/* this is the pebble making - it's waay tooo op
BlockEvents.rightClicked(event => {
    const { hand, block, player, item, facing } = event;
    if (hand != 'MAIN_HAND' || !player.isCrouching() || !item.isEmpty()) return;
    if (!block.hasTag('minecraft:dirt')) return;
    block.popItemFromFace(Item.of("gfs:stone_pebble"), facing);
    player.swing();
}); */

BlockEvents.rightClicked(event => {
  const { block, hand, world, item, player } = event;
  if (hand.name() != "MAIN_HAND") return;
  if (item == "#forge:tools/wrenches" && player.isCrouching()) {
    if (block.equals("minecraft:bedrock") || block.equals("minecraft:spawner") || block.equals("ae2:flawless_budding_quartz") || block.equals("minecraft:budding_amethyst") || block.equals("minecraft:end_portal_frame")) {
      if (block.equals("minecraft:end_portal_frame") && block.properties.eye == "true") {player.give("minecraft:ender_eye")}
      block.set("minecraft:air");
      player.give(block.name())
    player.tell("U got "+block.name());
    };
  };
});

BlockEvents.rightClicked('minecraft:diamond_block', event => {
  const { block, hand, world, item, player, server } = event;
    if (hand != "MAIN_HAND" || item.id != 'minecraft:amethyst_block') return;
    item.setCount(item.getCount() - 1);
    player.tell("Now wait ...");
      server.scheduleInTicks(600, (_) => {
    	block.set("minecraft:budding_amethyst");
      });
    player.tell("It became a budding amethyst");
});

BlockEvents.farmlandTrampled(event => {
  if(event.player.feetArmorItem.hasEnchantment('minecraft:feather_falling', 4))
	event.cancel();
});

BlockEvents.placed('minecraft:crafting_table', event => {
  event.player.tell('NO CRAFTING FOR YOU');
  event.block.set('minecraft:oak_log');
})












