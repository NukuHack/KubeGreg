GTCEuStartupEvents.registry("gtceu:material", event => {

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

GTCEuStartupEvents.materialModification(event => {
    GTMaterials.RhodiumPlatedPalladium.setComponents("3x palladium", "1x rhodium", "2x lumium");
    GTMaterials.RhodiumPlatedPalladium.setFormula('Pd3Rh(SnFe)4(CuAg4)2', true);

    //GTMaterials.Glowstone.setComponents("1x tricalcium_phosphate", "1x gold");
    //GTMaterials.Glowstone.setFormula('AuCa3(PO4)2', true);
	
})