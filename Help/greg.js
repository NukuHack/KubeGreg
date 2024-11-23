

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





        Materials are in-game items or fluids. They can be dusts, ingots, gems, fluids and all their derivatives.
        To make a new material(NOTE: to add a material that is present on the periodic table, but
            it doesn't have any in-game items/fluids, look below for how to do it),
        write an `event.create()` call in the bellow registering function.
        Write inside the parantheses the name of the material inside '' or "".
        You can change the properties of the material by adding any combination of the following calls:
            .ingot() -> this will make the material have both an ingot and dust form.
            .dust() -> this will make the material have a dust form. Don't use this together with .dust().
            .gem() -> this will make the material have both a gem form and a dust form. Don't use this together with .dust() or .ingot()
            .fluid() -> this will make the material have a fluid form.
            .gas() -> this will make the material have a gas(fluid) form with gas properties.
            .plasma() -> this will make the material have a plasma(fluid) form with plasma properties.
            .polymer() -> this will make the material have a dust form with polymer properties.
                For .ingot(), .dust() and .gem(), optionally you can put inside the parantheses any of these sets of parameters:
                    1. harvest level (ex. .ingot(2) will make the material have the harvest level of iron tools)
                    2. harvest level, burn time (2x. ingot(2, 2000) will make the material have the harvest level of iron tools and will burn in furnaces as fuel for 2000 ticks or 100 seconds).
            .burnTime(burn time in ticks) -> this will turn the material into a furnace fuel.
            .fluidBurnTime(burn time in ticks) -> how long the fluid of the material will burn.
            .color(color code) -> gives the material a color. The color must be provided in the following form: 0xNNNNNN, where N are digits.
                To choose a color for your material, you can check out https://www.w3schools.com/colors/colors_picker.asp
                After you select a color with the above tool, copy the 6 digits that follow the # under the color preview.
            .secondaryColor(color code) -> gives the material a secondary color. If this is not being called, the secondary value will default to white(0xffffff).
            .iconSet(set) -> gives the material an icon set. View constants to see the posible icon sets.
            .components(component1, component2, ...) -> describes the composition. The components are a list of elements of the following form: 'Kx material_name', where K is a positive integer.
                Depending on the composition, gt will autogenerate an electrolyzer or centrifuge recipe to decompose the material. You can block that by adding the disable decomposition flag.
            .flags(flag1, flag2, ...) -> flags can be used to select certain properties of the material, like generating gears, or disabling decomposition.
            .element(element) -> similar to .components(), but is used when the material represents an element.
            .rotorStats(speed, damage, durability) -> this will create a turbine rotor from this material.
            blastTemp() -> this is meant to be paired together with .ingot(). Will generate a EBF recipe(and an ABS recipe) based on the parameters you give it:
                1. temperature -> dictates what coil tier it will require(check the coil tooltips for their max temperature).
                    If the temperature is below 1000, it will also generate a PBF recipe.
                    If temperature is above 1750, a hot ingot will be generated, this requiring a Vacuum Freezer.
                2. (optional) gas tier -> can be null for none, 'low' for nitrogen, 'mid' for helium, 'high' for argon, 'higher' for neon or 'highest' for krypton.
                3. (optional) EU per tick -> the recipe voltage
                    (USEFUL NOTE: gt has some inbuilt functions to ease choosing the voltages, you can use V('tier') for full amp, VA('tier') for full amp, but adjusted for cable loss, VH('tier) for half an amp or VHA('tier) for half an amp adjusted for cable loss).
                4. (optional) duration in ticks -> how long the recipe should take
            .ore() -> this will create an ore from the material.
                Optionally you can add any of these sets of parameters:
                    1. is emissive -> true for emissive textures
                    2. ore multiplier and byproduct multiplier -> how many crushed ores will be given from one raw ore and how many byproducts dusts will be given throughout the ore processing
                    3. ore multiplier, byproduct multiplier, is emissive
            .washedIn()
            .separatedIn()
            .separatedInto()
            .oreSmeltInto()
            .polarizesInto()
            .arcSmeltInto()
            .maceratesInto()
            .ingotSmeltInto()
            .addOreByproducts()
            .cableProperties() -> The following parameter sets can be given:
                1. Voltage, amperage, loss per block
                2. Voltage, amperage, loss per block, is superconductor -> for a super conductor, set loss as 0 and is super conductor as true
                3. Voltage, amperage, loss per block, is super conductor and critical temperature
            .toolProperties()
            .fluidPipeProperties()
            .itemPipeProperties()
            .addDefaultEnchant()





});

    */










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







