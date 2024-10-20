
BlockEvents.rightClicked(event => {
  const { block, hand, world, item, player } = event;
  if (hand.name() == "MAIN_HAND" && player.isCrouching()) {
    if (block.equals("minecraft:bedrock") || block.equals("minecraft:end_portal_frame")) {
      if (block.equals("minecraft:end_portal_frame") && block.properties.eye == "true") {player.give("minecraft:ender_eye")};
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
      server.scheduleInTicks(1200, (_) => {
	block.set("minecraft:budding_amethyst");
	player.tell("It became a budding amethyst");
      });
});
/*
BlockEvents.rightClicked('minecraft:stone', event => {
  const { block, hand, world, item, player, server } = event;
    if (hand != "MAIN_HAND" || item.id != 'minecraft:lava_bucket') return;
    item.setCount(item.getCount() - 1);
    player.giveInHand("minecraft:bucket");
    player.tell("Now wait ...");
      server.scheduleInTicks(200, (_) => {
    	block.set("minecraft:netherrack");
        player.tell("It became Netherrack");
      });
});
BlockEvents.rightClicked('minecraft:sand', event => {
  const { block, hand, world, item, player, server } = event;
    if (hand != "MAIN_HAND" || item.id != 'minecraft:lava_bucket') return;
    item.setCount(item.getCount() - 1);
    player.giveInHand("minecraft:bucket");
    player.tell("Now wait ...");
      server.scheduleInTicks(200, (_) => {
    	block.set("minecraft:soul_sand");
        player.tell("It became Soul Sand");
      });
});
*/
BlockEvents.rightClicked('cookingforblockheads:sink', event => {
  const { block, hand, world, item, player, server } = event;
  const inv = player.getInventory();
    if (hand != "MAIN_HAND") return;
	if (item.id == 'minecraft:bowl') {
		item.setCount(item.getCount() - 1);
		player.giveInHand("gfs:water_bowl");}
	else if (item.id == 'gfs:dust') {
		item.setCount(item.getCount() - 1);
		player.giveInHand("3x minecraft:clay_ball");}
	else if (item.id == 'minecraft:dirt') {
		item.setCount(item.getCount() - 1);
		player.giveInHand("minecraft:mud");}
	else if (item.id == 'minecraft:clay_ball' && item.getCount()>=4) {
		item.setCount(item.getCount() - 4);
		player.giveInHand("minecraft:clay");}
	else if (item.id == 'gfs:mud_brick' && item.getCount()>=4) {
		item.setCount(item.getCount() - 4);
		player.giveInHand("minecraft:mud_bricks");}
	else if (item.id == 'minecraft:brick' && item.getCount()>=4) {
		item.setCount(item.getCount() - 4);
		player.giveInHand("minecraft:bricks");}
	else if (item.id == 'minecraft:clay') {
		//player.tell(`${inv.getStackInSlot(40).getId()} + 1`)
		//player.tell(`${inv.getStackInSlot(40).toItemString()} + 2`)
		//player.tell('gtceu:brick_wooden_form'+` + 3`)
		if(`${inv.getStackInSlot(40).getId()}`=='gtceu:brick_wooden_form') {
			item.setCount(item.getCount() - 1);
			player.giveInHand("gtceu:compressed_clay");};}
	else if (item.id == 'gtceu:paper_dust') {
		if(`${inv.getStackInSlot(40).getId()}`=='gtceu:wood_mallet' && item.getCount()>=3) {
			item.setCount(item.getCount() - 3);
			player.giveInHand("2x minecraft:paper");};}
	else {return;};
});

// bowl
BlockEvents.rightClicked(event => {
    const { block, hand, world, item, player} = event;
    if (!block.hasTag('forge:leaves') || hand != "MAIN_HAND") return;
//player.tell(block.properties.waterlogged);
    if (block.properties.waterlogged!="true" || item.id != 'minecraft:bowl') return;
    block.set("minecraft:dirt");
    item.setCount(item.getCount() - 1);
    player.giveInHand(Item.of('gfs:water_bowl'));
    player.tell("You got a Bowl of wotah");
});
// water making
BlockEvents.rightClicked(event => {
  const { block, hand, world, item, player, server } = event;
    if (!block.hasTag('forge:leaves') || hand != "MAIN_HAND") return;
    if (item.id == 'gtceu:coal_dust' || item.id == 'minecraft:coal') {
      item.setCount(item.getCount() - 1);
      player.tell("Now wait ...");
      server.scheduleInTicks(60, (_) => {
    	block.set("minecraft:water");
      });
    } else if (item.id == 'gtceu:charcoal_dust' || item.id == 'minecraft:charcoal') {
      let URchance = Math.random();
      item.setCount(item.getCount() - 1);
      if (URchance<=0.4) {
        player.tell("Succes Now wait ...");
        server.scheduleInTicks(120, (_) => {
    	  block.set("minecraft:water");
        });
      } else player.tell("Failed ...");
    } else if (item.id == 'minecraft:flint') {
      let URchance = Math.random();
      item.setCount(item.getCount() - 1);
      if (URchance<=0.2) {
        player.tell("Succes Now wait ...");
        server.scheduleInTicks(200, (_) => {
    	  block.set("minecraft:water");
        });
      } else player.tell("Failed ...");
    } else return;
});
// un solidify obsidian
BlockEvents.rightClicked('minecraft:obsidian', event => {
  const { block, hand, world, item, player } = event;
    if (hand != "MAIN_HAND" && item.id != 'minecraft:bucket') return;
    item.setCount(item.getCount() - 1);
    block.set("minecraft:air");
    player.tell("You did it succesfully");
    player.giveInHand(Item.of('minecraft:lava_bucket'));
});
// log in ... starter items 
PlayerEvents.loggedIn(event => {
  const { derver, player, entity } = event;
  if (!event.player.stages.has('new_join')) {
    player.stages.add('new_join');
    //event.server.runCommandSilent(`give ${event.entity.username} nether_star`);
    //event.server.runCommandSilent(`give ${event.entity.username} emerald`);
    entity.setItemSlot(5, 'minecraft:leather_helmet');
    entity.setItemSlot(4, 'minecraft:leather_chestplate');
    entity.setItemSlot(3, 'minecraft:leather_leggings');
    entity.setItemSlot(2, 'minecraft:leather_boots');
  };
});
