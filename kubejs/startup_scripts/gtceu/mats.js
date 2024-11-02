GTCEuStartupEvents.registry("gtceu:material", event => {

	event.create("strong_mix")
		.components("2x platinum","2x palladium","1x palladium_raw","1x diamond","4x black_steel","4x blue_steel")
		.color(0x291403)
		.blastTemp(3000,'mid',1800,20*40)
		.iconSet(GTMaterialIconSet.METALLIC)
		.flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION)
		.ingot();



	

	event.create("xbutane")
		.fluid()
		.color(0x333333);

	event.create("xpropana")
		.fluid()
		.color(0x333333);





	event.create("steam_cracked_methane")
		.components("methane","steam")
		.fluid()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x986839);

	event.create("severly_hydrocracked_methane")
		.components("methane","6x hydrogen")
		.fluid()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x937670);

	event.create("double_cracked_methane")
		.components("methane","6x hydrogen","2x carbon_monoxide")
		.fluid()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x704725);



	event.create("sodium_hydroxide_residue")
		.components("4x sodium","8x oxygen","8x hydrogen","1x gallium")
		.fluid()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x969688);




	// fluid from existing stuff

	const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
	const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
	const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');


	let addFluid = (mat, key) => {
		let prop = new $FluidProperty();
		prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
		mat.setProperty(PropertyKey.FLUID, prop);
	}

	addFluid(GTMaterials.SodiumHydroxide, $FluidStorageKeys.LIQUID);
	addFluid(GTMaterials.Salt, $FluidStorageKeys.LIQUID);
	// Can be LIQUID, GAS, PLASMA or MOLTEN

});
