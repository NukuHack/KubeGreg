priority: 10


GTCEuStartupEvents.registry("gtceu:material", event => {


// stupid shit by myself

    event.create("xbutane")
        .fluid()
        .color(0x333333);

    event.create("xpropana")
        .fluid()
        .color(0x333333);

    event.create("steam_crack_methane")
        .components("methane", "steam")
        .fluid()
        .flags(no_decomp)
        .color(0x986839);

    event.create("hydro_crack_methane")
        .components("methane", "6x hydrogen")
        .fluid()
        .flags(no_decomp)
        .color(0x937670);

    event.create("double_crack_methane")
        .components("methane", "6x hydrogen", "2x carbon_monoxide")
        .fluid()
        .flags(no_decomp)
        .color(0x704725);

    event.create("potato_slurry")
        .fluid()
        .color(0x704725);


    event.create("sodium_hydroxide_residue")
        .components("4x sodium", "8x oxygen", "8x hydrogen", "1x gallium")
        .fluid()
        .flags(no_decomp)
        .color(0x969688);






    // more useful stuff

    event.create('dusty_helium')
        .gas()
        .color(0xa040af)
        .flags(no_decomp)
        .components('helium_3', 'rare_earth');

    event.create('dioxygen_difluoride')
        .fluid() // 80
        .colorAverage()
        .components('2x oxygen', '2x fluorine');

    event.create('stone_residue')
        .dust()
        .color(0x4d4d4d).iconSet('rough')
        .flags(no_decomp);

    event.create('helium_hydride')
        .gas()
        .color(0xe6d62e)
        .flags(no_decomp)
        .components('helium_3', 'hydrogen');

    event.create('hydrogen_peroxide')
        .liquid()
        .color(0xd2ffff)
        .components('2x hydrogen', '2x oxygen');

    event.create('naquadah_oxide')
        .dust()
        .color(0x17ddd3).iconSet('rough')
        .flags(no_decomp)
        .components('2x naquadah', '3x oxygen');

    event.create('naquadah_hydroxide')
        .dust()
        .color(0x1941a6).iconSet('dull')
        .components('naquadah', '3x hydrogen', '3x oxygen');

    event.create("sulfur_dichloride")
        .components("1x sulfur", "1x chlorine")
        .fluid()
        .color(0x969688);


    /*
// Materials from elements
event.create('magnetic_zapolgium')
    .ingot()
    .element(GTElements.get('zapolgium'))
    .color(0xcc00cc)
    .iconSet(magnetic)
    .ingotSmeltInto(GTMaterials.get('zapolgium'))
    .arcSmeltInto(GTMaterials.get('zapolgium'))
    .macerateInto(GTMaterials.get('zapolgium'))
    .flags(rod, long_rod, magnetic);

event.create('zapolgium')
    .ingot()
    .element(GTElements.get('zapolgium'))
    .color(0xcc00cc)
    .iconSet(DULL)
    .polarizesInto(GTMaterials.get('magnetic_zapolgium'))
    .blastTemp(10799, 'highest', VA('uhv'), 1600);

event.create('xeproda')
    .ingot()
    .fluid()
    .element(GTElements.get('xeproda'))
    .color(0x1a0d00)
    .iconSet(DULL)
    .blastTemp(12499, 'highest', VA('uv'), 3750);

event.create('rhexis')
    .ingot()
    .fluid()
    .element(GTElements.get('rhexis'))
    .color(0x330000)
    .iconSet(DULL)
    .blastTemp(12499, 'highest', VA('uv'), 4750);

event.create('chalyblux')
    .ingot()
    .fluid()
    .element(GTElements.get('chalyblux'))
    .color(0xffcccc)
    .iconSet(DULL)
    .blastTemp(12499, 'highest', VA('uv'), 5750);

event.create('mythril')
    .ingot()
    .fluid()
    .element(GTElements.get('mythril'))
    .color(0x006666)
    .blastTemp(10299, 'highest', VA('zpm'), 3000)
    .iconSet(METALLIC);

event.create('adamantine')
    .ingot()
    .fluid()
    .element(GTElements.get('adamantine'))
    .color(0xe60000)
    .blastTemp(10299, 'highest', VA('zpm'), 3000)
    .iconSet(METALLIC);

event.create('estalt')
    .ingot()
    .fluid()
    .element(GTElements.get('estalt'))
    .color(0xff5050)
    .blastTemp(10299, 'highest', VA('zpm'), 3000)
    .iconSet(DULL);

event.create('calamatium')
    .ingot()
    .fluid()
    .element(GTElements.get('calamatium'))
    .color(0x660000)
    .iconSet(DULL)
    .blastTemp(11799, 'highest', VA('uv'), 2750);

event.create('isovol')
    .ingot()
    .fluid()
    .element(GTElements.get('isovol'))
    .color(0x290066)
    .iconSet(DULL)
    .blastTemp(12499, 'highest', VA('uv'), 2750);
*/


    // nuclear stuff


    event.create('hot_pcbcoolant')
        .liquid()
        .color(0xd2ffff);

    event.create('hot_sodium_potassium')
        .liquid()
        .color(0xd2ffff);

    event.create('nuclear_pure_steam')
        .liquid()
        .color(0xd2ffff);

    event.create('nuclear_steam')
        .liquid()
        .color(0xd2ffff);


})