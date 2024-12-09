
priority: 0


GTCEuStartupEvents.registry("gtceu:material", event => {

	// fluid from existing stuff


	let addFluid = (mat, key) => {
		let prop = new $FluidProperty();
		prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
		mat.setProperty(PropertyKey.FLUID, prop);
	}

	// Can be LIQUID, GAS, PLASMA or MOLTEN
	addFluid(GTMaterials.SodiumHydroxide, $FluidStorageKeys.LIQUID);
	addFluid(GTMaterials.Salt, $FluidStorageKeys.LIQUID);
	addFluid(GTMaterials.Holmium, $FluidStorageKeys.LIQUID);


	GTMaterials.Lead.addFlags(gear);
	GTMaterials.Silver.addFlags(gear);
	GTMaterials.Naquadah.addFlags(dense_plate);
	GTMaterials.NaquadahEnriched.addFlags(dense_plate,bolt_and_screw);
	GTMaterials.NaquadahAlloy.addFlags(fine_wire,plates);
	GTMaterials.Neutronium.addFlags(foil, gear, long_rod, plates,rod, rotor, small_gear, ring,frame,dense_plate);
	GTMaterials.Zirconium.addFlags(fine_wire);
	GTMaterials.RedSteel.addFlags(rod, frame, long_rod, fine_wire);
	GTMaterials.SterlingSilver.addFlags(rod, frame);
	GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(rod, plates,foil);
	GTMaterials.Holmium.addFlags(foil, gear, long_rod, frame, plates,rod, rotor, small_gear, ring,round,bolt_and_screw, fine_wire);



});

GTCEuStartupEvents.materialModification(event => {

	// volt, amp, loss , (is superconductor), crit temp 	 by defa = (8, 1, 1, false);
	GTMaterials.Holmium.setProperty($PropertyKey.WIRE, new $WireProperty(8388608, 8, 0, true));
	// temp, speed, gas, acid, cryo, plasma, channel			by defa = (no,no,false,false,false,false,9)
	GTMaterials.Holmium.setProperty($PropertyKey.FLUID_PIPE, new $FluidPipeProperty(120000, 128000, true, true, true, true, 9));
	// temp , tier , time , eut , vacuum t, vacuum eut		by defa = (no,no,-1,-1,-1,-1)
	GTMaterials.Holmium.setProperty($PropertyKey.BLAST, new $BlastProperty(12500, 'highest', 200*60*20, 480*4, -1, -1));
	// priority, trans				by defa = (1, 0.25f)
	//GTMaterials.XYZ.setProperty($PropertyKey.ITEM_PIPE, new $ItemPipeProperties(1, 64*2));
	// an item can not be fluid and item pipe in the same time ... sadly


	GTMaterials.Glowstone.setComponents("1x redstone", "1x gold");
	GTMaterials.Glowstone.setFormula('AuSi(FeS2)5(CrAl2O3)Hg3', true);

	// will have to make minecraft netherite be gt netherite and other stuff like the crap to be debris

	//GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty(2,0));

	/*
        let property = material.getProperty(PropertyKey.FLUID);
        property.getStorage().store($FluidStorageKeys.LIQUID, () -> Fluid.getType("theurgy:sal_ammoniac"), null);
    */

})