
priority: -100


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


	GTMaterials.Lead.addFlags(gear);
	GTMaterials.Silver.addFlags(gear);
	GTMaterials.Naquadah.addFlags(dense_plate);
	GTMaterials.NaquadahEnriched.addFlags(dense_plate);
	GTMaterials.Neutronium.addFlags(foil, gear, long_rod, plates,rod, rotor, small_gear, ring);
	GTMaterials.Zirconium.addFlags(fine_wire);
	GTMaterials.RedSteel.addFlags(rod, frame);
	GTMaterials.SterlingSilver.addFlags(rod, frame);
	GTMaterials.Holmium.addFlags(foil, gear, long_rod, plates,rod, rotor, small_gear, ring);
	GTMaterials.EnrichedHaquadah.addFlags(bolt);


});

GTCEuStartupEvents.materialModification(event => {


	GTMaterials.Holmium.setProperty($PropertyKey.WIRE, new $WireProperty(33554432, 64, 0, true))
	GTMaterials.Holmium.setProperty($PropertyKey.FLUID_PIPE, new $FluidPipeProperty(120000, 128000, true, true, true, true))
	GTMaterials.Holmium.setProperty($PropertyKey.BLAST, new $BlastProperty(12500, 'highest', 1000000, 1000));


	GTMaterials.Glowstone.setComponents("1x redstone", "1x gold");
	GTMaterials.Glowstone.setFormula('AuSi(FeS2)5(CrAl2O3)Hg3', true);

	// will have to make minecraft netherite be gt netherite

	//GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty(2,0));

	/*
        let property = material.getProperty(PropertyKey.FLUID);
        property.getStorage().store($FluidStorageKeys.LIQUID, () -> Fluid.getType("theurgy:sal_ammoniac"), null);
    */

})