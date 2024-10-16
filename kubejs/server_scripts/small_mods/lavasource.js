ServerEvents.recipes(event => {

  event.remove({output:"lava_source:stone_lava_source_furnace"});

  event.shaped("lava_source:stone_lava_source_furnace",
	["AAA","ACA","BBB"],{
	A:"minecraft:brick",B:"#forge:stone",C:"minecraft:furnace"
  });

});





