
StartupEvents.registry("block", event => {

    event.create("gfs:void_ore_generation_core")
        .translationKey("block.gfs.void_ore_generation_core")
        .textureAll("gfs:block/void_miner/void_ore_generation_core")
        .hardness(1.0)
        .resistance(1.0)
        .soundType("metal")
        .requiresTool(true)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("forge:mineable/wrench")
        .tagBlock("minecraft:mineable/pickaxe");
    event.create("gfs:void_ore_drill_core")
        .translationKey("block.gfs.void_ore_drill_core")
        .textureAll("gfs:block/void_miner/void_ore_drill_core_side")
        .textureSide(Direction.UP, "gfs:block/void_miner/void_ore_drill_core_bottom")
        .textureSide(Direction.DOWN, "gfs:block/void_miner/void_ore_drill_core_bottom")
        .hardness(1.0)
        .resistance(1.0)
        .soundType("metal")
        .requiresTool(true)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("forge:mineable/wrench")
        .tagBlock("minecraft:mineable/pickaxe");

    event.create('machine_block').soundType('netherite_block').blockEntity(entityInfo => {
        entityInfo.inventory(9, 4) // create inventory to 9x4 / 36 slots / width, height
        entityInfo.rightClickOpensInventory() // Right-clicking on entity opens its inventory

        entityInfo.clientTick(12, 0, entity => { // Tick on client side only. 12, 0 = every 12 ticks with offset 0 (tick % 12 == 0)
            entity.level.addParticle('minecraft:campfire_cosy_smoke', true, entity.x + 0.5, entity.y + 1.05, entity.z + 0.5, 0, 0.3, 0)
        })

        entityInfo.serverTick(20, 0, entity => { // Tick on server side only
            entity.inventory.insertItem('minecraft:apple', false)
        })
    })

    event.create('rose_quartz_budding_block')
        .material('amethyst')
        .soundType('amethyst')
        .hardness(0.5)
        .displayName('Rose Quartz Budding Block')
        .randomTick(tick => global.amethystblock(tick));

    event.create('gfs:latex_machine')
        .soundType('netherite_block')
        .hardness(1.4)
        .requiresTool(true)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("forge:mineable/wrench")
        .tagBlock("minecraft:mineable/pickaxe")
        .blockEntity(entityInfo => {
            entityInfo.inventory(9, 1);
            entityInfo.rightClickOpensInventory();
            entityInfo.serverTick(100, 0, entity => {
                const inv = entity.inventory;
                if (!inv.isEmpty()) {
                    if ((inv.getSlots() - inv.countNonEmpty()) <= 1) {
                        ;
                    } else {
                        let bucketCount = inv.count("industrialforegoing:latex_bucket")
                        inv.insertItem(`${bucketCount}x gtceu:sticky_resin`, false);
                    }
                    ;
                }
                ;
            });
        });

    event.create('gfs:sieving_machine')
        .soundType('netherite_block')
        .hardness(1.4)
        .opaque(true)
        .requiresTool(true)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("forge:mineable/wrench")
        .tagBlock("minecraft:mineable/pickaxe")
        .textureSide(Direction.UP, "gfs:block/sieving_machine_top")
        .blockEntity(entityInfo => {
            entityInfo.inventory(9, 1);
            entityInfo.rightClickOpensInventory();
            entityInfo.serverTick(40, 0, entity => {
                const inv = entity.inventory;
                if (inv.count("minecraft:gravel") != 0) {
                    global.shieveGravel(inv);
                } else if (inv.count("minecraft:dirt") != 0) {
                    global.shieveDirt(inv);
                }
                ;
            });
        });

});

//	ticking

global.amethystblock = tick => {
    const { block, level } = tick;
    const pos = block.getPos();
    const Direction = Java.loadClass('net.minecraft.core.Direction');
  
    const growAmethystBuds = () => {
	Direction.values().forEach(face => {
		const offsetPos = pos.relative(face);
		const adjacentBlockId = level.getBlock(offsetPos).id;
		const chanceOfGrowth = 0.1;
		const randomValue = Math.random();

		const blockTypes = {
			'minecraft:air': 'small_amethyst_bud',
			'minecraft:small_amethyst_bud': 'medium_amethyst_bud',
			'minecraft:medium_amethyst_bud': 'large_amethyst_bud',
			'minecraft:large_amethyst_bud': 'amethyst_cluster'
		};

		const blockType = blockTypes[adjacentBlockId];
		if (blockType && randomValue < chanceOfGrowth) {
			let command =
`setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} minecraft:${blockType}[facing=${face}]`;
			tick.server.runCommandSilent(command);
		};
	});
    };
    growAmethystBuds();




global.shieveGravel = inv => {
 let rc = Math.random();
 if (inv.count("gfs:string_mesh")!=0) {
  if ((inv.getSlots()-inv.countNonEmpty())<=1){
	;
  }else{
   inv.insertItem("minecraft:flint",false);
   if (rc>=0.8) {		// 8-10
	inv.insertItem("minecraft:raw_iron",false);		// ab
	inv.insertItem("gtceu:raw_tin",false);
   } else if (rc>=0.4) {		// 4-8
	inv.insertItem("minecraft:raw_iron",false);		// a
   } else {			//0-4
	inv.insertItem("gtceu:raw_tin",false);			// b
   };
  inv.extractItem("minecraft:gravel",false);
  };
 } else if (inv.count("gfs:tin_alloy_mesh")!=0){
  if ((inv.getSlots()-inv.countNonEmpty())<=1){
	;
  }else{
   inv.insertItem("minecraft:flint",false);
   if (rc>=0.8) {		// 8-10
	inv.insertItem("gtceu:raw_coal",false);			// ab
	inv.insertItem("minecraft:raw_copper",false);
   } else if (rc>=0.4) {		// 4-8
	inv.insertItem("gtceu:raw_coal",false);			// a
   } else {			//0-4
	inv.insertItem("minecraft:raw_copper",false);		// b
   };
  inv.extractItem("minecraft:gravel",false);
  };
 };
};


global.shieveDirt = inv => {
 let rc = Math.random();
 if (inv.count("gfs:string_mesh")!=0) {
  if ((inv.getSlots()-inv.countNonEmpty())<=1){
	;
  }else{
   inv.insertItem("2x gfs:stone_pebble",false);
   if (rc>=0.5) {
	inv.insertItem("minecraft:bamboo",false);
	inv.insertItem("minecraft:bone_meal",false);
   } else {
	inv.insertItem("minecraft:sugar_cane",false);
   };
  inv.extractItem("minecraft:dirt",false);
  };
 } else if (inv.count("gfs:tin_alloy_mesh")!=0) {
  if ((inv.getSlots()-inv.countNonEmpty())<=1){
	;
  }else{
   inv.insertItem("4x gfs:stone_pebble",false);
   if (rc>=0.5) {
	inv.insertItem("minecraft:bamboo",false);
	inv.insertItem("2x minecraft:bone_meal",false);
   } else {
	inv.insertItem("minecraft:sugar_cane",false);
	inv.insertItem("minecraft:carrot",false);
	inv.insertItem("minecraft:potato",false);
   };
  inv.extractItem("minecraft:dirt",false);
  };
 };
};



};








//In startup_scripts

/**
 * 
 * @param {item} item item id
 * @param {block} id_block block id of generator
 * @param {number} rfgen FE generated / tick
 * @param {number} capacity (optional) FE capacity | if undefined -> value = rfgen*20
 */

function generator(item,rfgen,capacity){
    if(typeof capacity == 'undefined'){
        capacity = rfgen*20
    }
StartupEvents.registry("block", (event) => {
  event.create('dynamo').blockEntity((be) => {
      be.inventory(9, 1, item);
      be.rightClickOpensInventory();

        be.serverTick(1,0,bloc=>{
            bloc.persistentData.putBoolean('flag',(!bloc.inventory.isEmpty()))
            if(bloc.persistentData.getBoolean('flag'))
                bloc.persistentData.putInt('num',bloc.inventory.count(item))
        })

      be.attachCapability(
        CapabilityBuilder.ENERGY.customBlockEntity()
          .canExtract(() => true)
          .canReceive(() => false)

          .extractEnergy(helf => {
            if (helf.persistentData.getBoolean('flag')) {
              return rfgen * helf.persistentData.getInt('num');
            } else {
              return 0;
            }
          })

          .getEnergyStored(() => {return capacity; })
          .getMaxEnergyStored(() => capacity)
      );
    });
});
}


generator("minecraft:stone",20)

/*
.property(BlockProperty)
Adds more blockstates to the block, like being waterlogged or facing a certain direction.

.tagBlock(ID)
Adds a tag to the block, e.g 'namespace:tag_name'
.tagItem(ID)
Adds a tag to the block's item, if it has one, e.g 'forge:storage_blocks/iron'
.tagBoth(ID)
Adds both block and item tag if possible, e.g 'minecraft:planks'

.lightLevel(float)
Sets the block's light level (0.0 - 1.0).
.opaque(boolean)
Sets whether the block is opaque. Full, opaque blocks will not let light through.
.fullBlock(boolean)
Sets whether the block renders as a full block. 

.textureAll(ID)
Textures all 6 sides of the block to the same texture.
Defaults to kubejs:block/<block_name>
.texture(Direction, ID)
Texture one side by itself.

.model(ID)
Specify a custom model.
Defaults to 'kubejs:block/<block_name>'.
.setModelJson(json)
Pass in a custom model JSON directly

.noCollision()
Removes the default full-block hitbox, allowing you to fall through the block.
.notSolid()
Tells the renderer that the block isn't solid.
.waterlogged()
Allows the block to be waterloggable.
.noValidSpawns(boolean)
If true, the block is not counted as a valid spawnpoint for entities
*/









StartupEvents.registry("item", (event) => {
  event
    .create("bleed4me:sharpened_rock", "sword")
    .tier("wood")
    .maxDamage(64)
    .attackDamageBonus(1)
    .use((itemstack, level, entity) => true)
    .useAnimation("bow")
    .useDuration((itemstack) => 40)
    .finishUsing((itemstack, level, entity) => {
      if (entity.player) {
        entity.attack(4);
        let { x, y, z } = entity;
        let fleshItem = level.createEntity("minecraft:item");
        fleshItem.x = x;
        fleshItem.y = y;
        fleshItem.z = z;
        if (entity.hasEffect("hunger")) {
          fleshItem.item = Item.of("bleed4me:poisoned_player_flesh");
        } else {
          fleshItem.item = Item.of("bleed4me:player_flesh");
        }
        fleshItem.spawn();
      }
      // I want to return this item with additional durability damage, or break it if it's out of durability
      return itemstack;
    });
});
