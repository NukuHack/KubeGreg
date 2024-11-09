

// stuff : 

/*
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

  event
    .create("greenhouse") // the machine itself
	
    .category("test") // yeah the category
	
    .setEUIO("in") // in for machines out for generators
	
    .setMaxIOSize(9, 9, 3, 3) // ItemI, ItemO, FluidI, FluidO
		// slot overlay
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
		// the arrow between the inputs and outputs
    .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
    .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
    .setProgressBar(GuiTextures.PROGRESS_BAR_UNPACKER, FillDirection.LEFT_TO_RIGHT)
    .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_rocket.png"), FillDirection.LEFT_TO_RIGHT)		// <-- custom
		// just some gtceu(m) sounds
    .setSound(GTSoundEntries.COOLING);
    .setSound(GTSoundEntries.ASSEMBLER);
    .setSound(GTSoundEntries.ELECTROLYZER);
    .setSound(GTSoundEntries.COMPRESSOR);
    .setSound(GTSoundEntries.BATH);
    .setSound(GTSoundEntries.BOILER);

});
*/


/*

GTCEuStartupEvents.registry("gtceu:machine", event => {

    var high_pressure = true;
    event.create("steam_sieve", "steam", true)
        .recipeType("steam_sieve", true, true)
        .renderer(() => {
            high_pressure = !high_pressure;
            return WorkableSteamHullRenderer(high_pressure, GTCEu.id("block/machines/sieve"));
        });

    event.create("miniature_ebf", "simple",
	
        GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
		
        .recipeType("electric_blast_furnace", true, true)
		
        .rotationState(RotationState.NON_Y_AXIS)
		
        .tankScalingFunction(tier => tier * 4800)
		
        .workableTieredHullRenderer("gtceu:block/machines/miniature_ebf");
        .workableTieredHullRenderer("gtceu:block/machines/electrolyzer");
        .workableTieredHullRenderer("gtceu:block/machines/assembler");

});

*/

/*
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('andesite',27, 177, -1, null, 'cm', false) // 
})


GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('curium_ingot')
        .ingot()
        .element('curium')
        .color(0x839689).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
})
*/


/*
GTCEuStartupEvents.registry("gtceu:material", event => {

	GTMaterials.Lead.addFlags(GTMaterialFlags.GENERATE_GEAR); // This is for materials already in GTCEU
	GTMaterials.HSLASteel.addFlags(GTMaterialFlags.GENERATE_SPRING);
	GTMaterials.HSLASteel.addFlags(GTMaterialFlags.GENERATE_LONG_ROD);
	GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_FRAME);
	GTMaterials.Cobalt.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);

  event
    .create("cast_iron")
	
    .ingot()
    .fluid()
    .dust()
	
	.components("2x platinum","2x palladium","1x palladium_raw","1x diamond","4x black_steel","4x blue_steel")
	
    .color(0x8f5ccb)
	.blastTemp(3000,'mid',1800,20*40)
	//.element(element)
	
    .iconSet(GTMaterialIconSet.DULL)
    .iconSet(GTMaterialIconSet.METALLIC)
	
    .flags(GTMaterialFlags.GENERATE_PLATE,
		GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.DISABLE_DECOMPOSITION);


});

*/



GTCEuStartupEvents.materialModification(event => {
	const IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty");
	GTMaterials.Polonium.setProperty(PropertyKey.INGOT, new IngotProperty());
	
	const $WireProperties = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties");
	GTMaterials.Lead.properties.removeProperty(PropertyKey.WIRE);
	GTMaterials.Lead.setProperty(PropertyKey.WIRE, new $WireProperties(GTValues.V[GTValues.IV],2,2));
	
});








/*


	const greg = event.recipes.gtceu;

    greg.mixer(id)
    greg.chemical_reactor(id)
    greg.rock_breaker(id)
    greg.forge_hammer(id)
    greg.assembler(id)
    greg.macerator(id)
    greg.bender(id)
    greg.pyrolyse_oven(id)
    greg.assembly_line(id)
    greg.large_chemical_reactor(id)
    greg.fluid_solidifier(id)
    greg.cutter(id)
    greg.chemical_bath(id)
    greg.autoclave(id)
    greg.arc_furnace(id)
    greg.alloy_smelter(id)
    greg.wiremill(id)
	greg.assembly_line(id)




        .itemInputs(list)
        .notConsumable(item)
        .itemOutputs(list)
        .inputFluids(list)
        .outputFluids(list)
        .EUt(eu)
        .circuit(number)
        .duration(duration-tick)

        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.(MV / IV / UHV)])
		
	.chancedOutput(x,y,z) 
	.chancedInput(x,y,z) 
 	// material , base chance , +chance with each voltage
	// Ints range (0,10000] where 10000 is 100% chance



    event.recipes.gtceu.rock_breaker('stone')
        .notConsumable('minecraft:stone')
        .itemOutputs('minecraft:cobblestone')
        .duration(200)
        .EUt(30)
		.addData('fluidA',"minecraft:water")
		.addData('fluidB',"minecraft:lava");
		//or
		//.addDataString('fluidA',"minecraft:water")
		//.addDataString('fluidB',"minecraft:lava");


    event.recipes.gtceu.electric_blast_furnace('netherite')
        .itemInputs('gtceu:debris_dust', 'minecraft:gold_ingot')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('minecraft:netherite_ingot')
        .blastFurnaceTemp(5000)
        .duration(12000)
        .EUt(6500);
		
		


modify recipes :
	event.forEachRecipe({mod:"gtceu"}, recipe => {
        // console.log(JSON.parse(recipe.json))
        let original_recipe = JSON.parse(recipe.json)
        original_recipe["tickInputs"]["eu"][0]["content"] = 32
        recipe.json = JSON.stringify(original_recipe)
      })






*/







