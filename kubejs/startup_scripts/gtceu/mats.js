GTCEuStartupEvents.registry("gtceu:material", event => {

	// just some gregify

    event.create("quartz_glass")
    	.components("4x glass","5x certus_quartz")
	.dust();

    //event.create("sky_steel").ingot();

    event.create("strong_mix")
	.components("2x platinum","2x palladium","1x palladium_raw","1x diamond","4x black_steel","4x blue_steel")
	.color(0x291403)
	.blastTemp(3000,'mid',1800,20*40)
	.iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION)
	.ingot();






	// this is for chemistry

    event.create("sodium_trioxide")
    	.components("1x sodium","3x oxygen")
	.dust();

    event.create("sodium_hydroxide_residue")
    	.components("4x sodium","8x oxygen","8x hydrogen","1x gallium")
	.fluid()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
	.color(0x969688);

    event.create("thionyl_chloride")
    	.components("1x sulfur","1x oxygen","2x chlorine")
	.fluid()
	.color(0x787878);

    event.create("hydrated_iron_iii_chloride")
    	.components("1x iron","3x chlorine","6x water")
	.fluid()
	.color(0x555641);

    event.create("sulfur_dichloride")
    	.components("1x sulfur","2x chlorine")
	.fluid()
	.color(0x909541);
	
    event.create("sulfur_chlorid")
    	.components("1x sulfur","1x chlorine")
	.fluid()
	.color(0x909541);




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
    addFluid(GTMaterials.SodiumBisulfate, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Salt, $FluidStorageKeys.LIQUID);
	// Can be LIQUID, GAS, PLASMA or MOLTEN

});