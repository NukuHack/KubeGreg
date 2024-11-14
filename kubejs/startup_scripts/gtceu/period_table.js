
priority: 50

GTCEuStartupEvents.registry("gtceu:material", event => {

// Periodic table materials
// Ingots
    periodicTableElement('zirconium', 'ingot');
    periodicTableElement('tellurium', 'ingot');
    periodicTableElement('polonium', 'ingot');
    periodicTableElement('astatine', 'ingot');
    periodicTableElement('hafnium', 'ingot');
    periodicTableElement('seaborgium', 'ingot');
    periodicTableElement('flerovium', 'ingot');
    periodicTableElement('rhenium', 'ingot');

// Dusts
    periodicTableElement('selenium', 'dust');
    periodicTableElement('strontium', 'dust');
    periodicTableElement('thallium', 'dust');

// Liquids


// Gasses
// periodicTableElement('iodine', 'gas');
    periodicTableElement('oganesson', 'gas');

// PLasmas

// Material modification
    GTMaterials.Lead.addFlags(gear);
    GTMaterials.Silver.addFlags(gear);
    GTMaterials.Naquadah.addFlags(dense_plate);
    GTMaterials.NaquadahEnriched.addFlags(dense_plate);
    GTMaterials.Neutronium.addFlags(foil);
    GTMaterials.Zirconium.addFlags(fine_wire);
    GTMaterials.RedSteel.addFlags(rod, frame);
    GTMaterials.SterlingSilver.addFlags(rod, frame);

// Blast Properties of periodic table metals
    blastProperty('zirconium', 8000, 'higher', VA('zpm'), 800);
    blastProperty('tellurium', 10000, 'higher', VA('zpm'), 700);
    blastProperty('polonium', 10000, 'higher', VA('zpm'), 600);
    blastProperty('astatine', 10000, 'higher', VA('zpm'), 800);
    blastProperty('hafnium', 10000, 'higher', VA('zpm'), 900);
    blastProperty('rhenium', 10000, 'higher', VA('zpm'), 900);
    blastProperty('seaborgium', 10000, 'higher', VA('zpm'), 1000);
    blastProperty('flerovium', 10000, 'higher', VA('luv'), 900);
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

});