GTCEuStartupEvents.registry("gtceu:material", event => {

	// might replace this with the stuff from "netherite line"
	event.create("strong_mix")
		.components("2x platinum","2x palladium","1x palladium_raw","1x diamond","4x black_steel","4x blue_steel")
		.color(0x291403)
		.blastTemp(3000,'mid',1800,20*40)
		.iconSet(METALLIC)
		.flags(plates,no_decomp)
		.ingot();





	event.create("xbutane")
		.fluid()
		.color(0x333333);

	event.create("xpropana")
		.fluid()
		.color(0x333333);





	event.create("steam_crack_methane")
		.components("methane","steam")
		.fluid()
		.flags(no_decomp)
		.color(0x986839);

	event.create("hydro_crack_methane")
		.components("methane","6x hydrogen")
		.fluid()
		.flags(no_decomp)
		.color(0x937670);

	event.create("double_crack_methane")
		.components("methane","6x hydrogen","2x carbon_monoxide")
		.fluid()
		.flags(no_decomp)
		.color(0x704725);

	event.create("potato_slurry")
		.fluid()
		.color(0x704725);


	event.create("sodium_hydroxide_residue")
		.components("4x sodium","8x oxygen","8x hydrogen","1x gallium")
		.fluid()
		.flags(no_decomp)
		.color(0x969688);




	/*
        Materials are in-game items or fluids. They can be dusts, ingots, gems, fluids and all their derivatives.
        To make a new material(NOTE: to add a material that is present on the periodic table, but
            it doesn't have any in-game items/fluids, look below for how to do it),
        write an `event.create()` call in the bellow registering function.
        Write inside the parantheses the name of the material inside '' or "".
        You can change the properties of the material by adding any combination of the following calls:
            .ingot() -> this will make the material have both an ingot and dust form.
            .dust() -> this will make the material have a dust form. Don't use this together with .dust().
            .gem() -> this will make the material have both a gem form and a dust form. Don't use thos together with .dust() or .ingot()
            .fluid() -> this will make the material have a fluid form.
            .gas() -> this will make the material have a gas(fluid) form with gas properties.
            .plasma() -> this will make the material have a plasma(fluid) form with plasma properties.
            .polymer() -> this will make the material have a dust form with polymer properties.
                For .ingot(), .dust() and .gem(), optionally you can put inside the parantheses any of these sets of parameters:
                    1. harvest level (ex. .ingot(2) will make the material have the harvest level of iron tools)
                    2. harvest level, burn time (2x. ingot(2, 2000) will make the material have the harvest level of iron tools and will burn in furnaces as fuel for 2000 ticks or 100 seconds).
            .burnTime(burn time in ticks) -> this will turn the material into a furnace fuel.
            .fluidBurnTime(burn time in ticks) -> how long the fluid of the material will burn.
            .color(color code) -> gives the material a color. The colo must be providen in the following form: 0xNNNNNN, where N are digits.
                To chose a color for your material, you can check out https://www.w3schools.com/colors/colors_picker.asp
                After you select a color with the above tool, copy the 6 digits that follow the # under the color preview.
            .secondaryColor(color code) -> gives the material a secondary color. If this is not being called, the secondary value will default to white(0xffffff).
            .iconSet(set) -> gives the material an icon set. View line 9 to see the posible icon sets.
            .components(component1, component2, ...) -> describes the composition. The components are a list of elements of the following form: 'Kx material_name', where K is a positive integer.
                Depending on the composition, gt will autogenerate an electrolyzer or centrifuge recipe to decompose the material. You can block that by adding the disable decomposition flag.
            .flags(flag1, flag2, ...) -> flags can be used to select certain properties of the material, like generating gears, or disabling decomposition.
            .element(element) -> similar to .components(), but is used when the material represents an element.
                See line X for a list of posible flags.
            .rotorStats(speed, damage, durability) -> this will create a turbine rotor from this material.
            blastTemp() -> this is meant to be paired together with .ingot(). Will generate a EBF recipe(and an ABS recipe) based on the parameters you give it:
                1. temperature -> dictates what coil tier it will require(check the coil tooltips for their max temperature).
                    If the temperature is below 1000, it will also generate a PBF recipe.
                    If temperature is above 1750, a hot ingot will be generated, this requiring a Vacuum Freezer.
                2. (optional) gas tier -> can be null for none, 'low' for nitrogen, 'mid' for helium, 'high' for argon, 'higher' for neon or 'highest' for krypton.
                3. (optional) EU per tick -> the recipe voltage
                    (USEFUL NOTE: gt has some inbuilt functions to ease chosing the voltages, you can use V('tier') for full amp, VA('tier') for full amp, but adjusted for cable loss, VH('tier) for half an amp or VHA('tier) for half an amp adjusted for cable loss).
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
            .cableProperties() -> generates wires and cables(if material is not a superconducter). The following parameter sets can be given:
                1. Voltage, amperage, loss per block
                2. Voltage, amperage, loss per block, is superconductor -> for a super conductor, set loss as 0 and is super conductor as true
                3. Voltage, amperage, loss per block, is super conductor and critical temperature
            .toolProperties()
            .fluidPipeProperties()
            .itemPipeProperties()
            .addDefaultEnchant()

    */


	// This material is meant to place a ? symbol in a material's chemical formula
	event.create('mystery')
		.element(GTElements.get('mystery'));


	event.create("cryolobus")
		.ingot().fluid()
		.element(GTElements.get("cryolobus"))
		.color(0x042228).iconSet('metallic')
		.blastTemp(6800, 'higher')
		.flags(plates,rod,gear,dense_plate,frame)
		.cableProperties(524288, 4, 0, true);

	event.create("cryococcus")
		.ingot().fluid()
		.element(GTElements.get("cryococcus"))
		.color(0x008F92).iconSet('metallic')
		.flags(no_smelt, plates, rod,gear, frame, ring, dense_plate)

	event.create("dilithium")
		.dust()
		.ore(2, 1)
		.color(0xd1b5b4)
		.iconSet(CERTUS)
		.components('2x lithium')
		.addOreByproducts('lithium', 'cobalt', 'platinum')

	event.create("fluorite") // Hardmode only
		.dust().ore()
		.color(0xFFFC9E).iconSet('rough')
		.components('calcium', '2x fluorine')
		.addOreByproducts('sphalerite', 'bastnasite', 'topaz')

	event.create("darmstadtite") // Hardmode only
		.dust().ore(2, 1)
		.iconSet('dull')
		.components('2x darmstadtium', '3x sulfur')
		.addOreByproducts('rare_earth', 'rhodium_sulfate', 'darmstadtium')

	event.create("dulysite") // Hardmode only
		.dust().ore(2, 1)
		.iconSet('dull')
		.components('duranium', '3x chlorine')
		.addOreByproducts('sphalerite', 'duranium', 'europium')

	event.create("snowchestite") // Hardmode only
		.dust().ore()
		.color(0x274c9f).iconSet('shiny')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('3x naquadah_oxide', 'pyromorphite')
		.addOreByproducts('chalcopyrite', 'vanadium_magnetite', 'naquadah_hydroxide')

	event.create('dusty_helium')
		.gas()
		.color(0xa040af)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('helium_3', 'rare_earth')

	event.create('dioxygen_difluoride')
		.fluid() // 80
		.colorAverage()
		.components('2x oxygen', '2x fluorine')

	event.create('stone_residue')
		.dust()
		.color(0x4d4d4d).iconSet('rough')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('helium_hydride')
		.gas()
		.color(0xe6d62e)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('helium_3', 'hydrogen')

	event.create('hydrogen_peroxide')
		.liquid()
		.color(0xd2ffff)
		.components('2x hydrogen', '2x oxygen')

	event.create('naquadah_oxide')
		.dust()
		.color(0x17ddd3).iconSet('rough')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('2x naquadah', '3x oxygen')

	event.create('naquadah_hydroxide')
		.dust()
		.color(0x1941a6).iconSet('dull')
		.components('naquadah', '3x hydrogen', '3x oxygen')

	event.create("crystal_matrix")
		.ingot().fluid()
		.element(GTElements.get("crystal_matrix"))
		.color(0x66ffff)
		.iconSet('shiny')
		.fluidPipeProperties(100000, 64000, true, true, true, true)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_DENSE);

	event.create("omnium")
		.ingot()
		.element(GTElements.get("omnium"))
		.color(0xffffff).iconSet('omnium')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
		.cableProperties(2147483647, 64, 0, true)
		.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

	event.create('infinity')
		.ingot()
		.element(GTElements.get("infinity"))
		.color(0xffffff)
		.iconSet('infinity')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE)

	event.create('monium')
		.ingot()
		.element(GTElements.get("monium"))
		.color(0xffffff)
		.iconSet('monium')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)
		.cableProperties(2147483647, 134217727, 0, true)

	event.create('omnic_acid')
		.dust()
		.color(0xff00ff)
		.iconSet('shiny')
		.components('5x carbon', '4x hydrogen', '3x oxygen', '4x omnium')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)








	// Netherite Line
	event.create('debris')
		.dust()
		.element(GTElements.get('debris'))
		.color(0x804000);

	event.create('purified_debris')
		.dust()
		.components('debris')
		.color(0xcc0000);

	event.create('netherite')
		.dust()
		.components('4x debris', '4x gold')
		.color(0x1a0d00)
		.iconSet(DULL)
		.flags(no_decomp);

	event.create('chlorine_trifluoride')
		.fluid()
		.components('1x chlorine', '3x fluorine')
		.color(0xb3ff99);

	event.create('tetrachloroethylene')
		.fluid()
		.components('2x carbon', '4x chlorine')
		.color(0xd966ff);

	// Netherite Derivatives/Alloys
	event.create('pure_netherite')
		.ingot()
		.element(GTElements.get('pure_netherite'))
		.color(0x1a0d00)
		.iconSet(DULL)
		.blastTemp(3300, 'low', VA('ev'), 1200)
		.flags(foil, gear, long_rod, plates,
			rod, rotor, small_gear, ring);

	event.create('activated_netherite')
		.ingot()
		.element(GTElements.get("activated_netherite"))
		.color(0x4C484C)
		.iconSet(DULL)
		.cableProperties(8388608, 16, 0, true)
		.fluidPipeProperties(120000, 96000, true, true, true, true)
		.flags(plates, rod, frame, dense_plate, fine_wire, rotor, spring)

	event.create('naquadic_netherite')
		.gem(0)
		.components('3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen')
		.color(0xffd966)
		.iconSet(DIAMOND);

	event.create('weapon_grade_naquadah')
		.ingot()
		.components('7x naquadria', '2x naquadic_netherite', '5x neutronium', '16x fluorine')
		.color(0xccff33)
		.iconSet(DULL)
		.blastTemp(10500, 'low', VA('uv'), 6000)
		.flags(foil, gear, long_rod, plates,
			rod, rotor, small_gear, ring, frame);

	event.create('screret_runic_laser_source_base')
		.gem(0)
		.components('4x weapon_grade_naquadah', '10x tritanium', '2x trinium')
		.color(0x00ff00)
		.iconSet(OPAL);






	// PEEK plastic Line

	event.create('disodium_salt_of_hydroquinone')
		.dust()
		.components('6x carbon','4x hydrogen','2x oxygen','2x sodium')
		.color(0xeaeaf9)
		.flags(no_decomp);

	event.create('hydroquinone')
		.dust()
		.components('6x carbon','6x hydrogen','2x oxygen')
		.color(0xf9f9ff);

	event.create('carbon_acid')
		.gas()
		.components('2x hydrogen','1x carbon','3x oxygen')
		.color(0x333333);

	event.create('fluorobenzene')
		.fluid()
		.components('6x carbon','5x hydrogen','1x fluorine')
		.color(0xffffff);

	event.create('4_fluorobenzoyl_chloride')
		.fluid()
		.components('7x carbon','4x hydrogen','1x chlorine','1x fluorine','1x oxygen')
		.color(0xfffff0);

	event.create('benzoyl_chloride')
		.fluid()
		.components('7x carbon','5x hydrogen','1x chlorine','1x oxygen')
		.color(0xfffadf);

	event.create('benzotrichloride')
		.fluid()
		.components('7x carbon','5x hydrogen','3x chlorine')
		.color(0xddd8bc);

	event.create('44_difluorobenzophenone') //naming like this: 4_4_di... will make kubejs go error to annoy you :)
		.dust()
		.components('13x carbon','8x hydrogen','1x oxygen','2x fluorine')
		.color(0xeee1c9)
		.flags(no_decomp);

	event.create('polyether_ether_ketone')
		.fluid()
		.polymer()
		.components('19x carbon','12x hydrogen','3x oxygen')
		.color(0xccbba7)
		.flags(no_decomp)
		.flags(foil, plates, ring);

})