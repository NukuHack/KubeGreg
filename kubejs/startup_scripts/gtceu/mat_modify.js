GTCEuStartupEvents.registry("gtceu:material", event => {

	// fluid from existing stuff


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
	//GTMaterials.RhodiumPlatedPalladium.setComponents("3x palladium", "1x rhodium", "2x lumium");
	//GTMaterials.RhodiumPlatedPalladium.setFormula('Pd3Rh(SnFe)4(CuAg4)2', true);
	//GTMaterials.Holmium.setProperty($PropertyKey.WIRE, new $WireProperty(33554432, 64, 0, true))
	//GTMaterials.Holmium.setProperty($PropertyKey.FLUID_PIPE, new $FluidPipeProperty(120000, 128000, true, true, true, true))
	//GTMaterials.Holmium.setProperty($PropertyKey.BLAST, new $BlastProperty(12500, 'highest', 1000000, 1000));

	//GTMaterials.Glowstone.setComponents("1x tricalcium_phosphate", "1x gold");
	//GTMaterials.Glowstone.setFormula('AuCa3(PO4)2', true);


	/*
        let property = material.getProperty(PropertyKey.FLUID);
        property.getStorage().store(FluidStorageKeys.LIQUID, () -> Fluid.getType("theurgy:sal_ammoniac"), null);
    */

})