
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
    //periodicTableElement('helium_3', 'gas');

// PLasmas


// Blast Properties of periodic table metals
    blastProperty('zirconium', 8000, 'higher', VA('zpm'), 800);
    blastProperty('tellurium', 10000, 'higher', VA('zpm'), 700);
    blastProperty('polonium', 10000, 'higher', VA('zpm'), 600);
    blastProperty('astatine', 10000, 'higher', VA('zpm'), 800);
    blastProperty('hafnium', 10000, 'higher', VA('zpm'), 900);
    blastProperty('rhenium', 10000, 'higher', VA('zpm'), 900);
    blastProperty('seaborgium', 10000, 'higher', VA('zpm'), 1000);
    blastProperty('flerovium', 10000, 'higher', VA('luv'), 900);

});