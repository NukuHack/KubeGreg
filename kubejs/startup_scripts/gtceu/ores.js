
priority: 0

GTCEuStartupEvents.registry("gtceu:material", event => {

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
/*
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
*/
});