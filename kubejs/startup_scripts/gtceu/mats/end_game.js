priority: 10


GTCEuStartupEvents.registry("gtceu:material", event => {


// This material is meant to place a ? symbol in a material's chemical formula
    event.create('mystery')
        .element(GTElements.get('mystery'));


    event.create("cryolobus")
        .ingot()
        .fluid()
        .element(GTElements.get("cryolobus"))
        .color(0x042228)
        .iconSet('metallic')
        .blastTemp(6800, 'higher')
        .fluidPipeProperties(20000, 20000, true, true, true, true)
        .flags(no_smelt, plates, rod, gear, dense_plate, frame);

    event.create("cryococcus")
        .ingot()
        .fluid()
        .element(GTElements.get("cryococcus"))
        .color(0x008F92)
        .iconSet('metallic')
        .cableProperties(8388608/4, 8, 0, true)
        .flags(no_smelt, plates, rod, gear, frame, ring, dense_plate);


    event.create("crystal_matrix")
        .ingot()
        .fluid()
        .element(GTElements.get("crystal_matrix"))
        .color(0x66ffff)
        .iconSet('shiny')
        .fluidPipeProperties(100000, 64000, true, true, true, true)
        .cableProperties(2147483647 / 16, 4, 0, true)
        .flags(plates, foil, rod, frame, rotor, dense_plate);

    event.create("omnium")
        .ingot()
        .element(GTElements.get("omnium"))
        .color(0xffffff)
        .iconSet('omnium')
        .flags(plates, rod, long_rod, gear, small_gear, ring, round, bolt_and_screw, frame)
        .cableProperties(2147483647 / 16, 10, 0, true)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill());

    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .cableProperties(2147483647, 24, 0, true)
        .flags(plates, rod, long_rod, ring, round, gear, small_gear, bolt_and_screw, frame, dense_plate);

    event.create('monium')
        .ingot()
        .element(GTElements.get("monium"))
        .color(0xffffff)
        .iconSet('monium')
        .flags(plates, rod, frame, gear, spring)
        .cableProperties(2147483647 / 4, 16, 0, true);

    event.create('omnic_acid')
        .dust()
        .color(0xff00ff)
        .iconSet('shiny')
        .components('5x carbon', '4x hydrogen', '3x oxygen', '4x omnium')
        .flags(no_decomp);





    // magic stuff

    event.create('mana')
        // ★
        .element(GTElements.get("mana"))
        .fluid()
        .gem()
        .color(0x20DAFF);

    //Arcane Element for Ember
    event.create('ember')
        // 🔥
        .element(GTElements.get("ember"))
        .color(0xFF5200)
        .secondaryColor(0xFFAA5C)
        .iconSet(LAPIS)
        .gem()
        .flags(lens);

    event.create('wissen')
        // ⚙
        .element(GTElements.get("wissen"))
        .color(0x577FB8)
        .secondaryColor(0xCDEDFE)
        .iconSet(NETHERSTAR)
        .gem()
        .flags(fine_wire,lens);

    //Stardust
    event.create('stardust')
        // ☆
        .element(GTElements.get("stardust"))
        .color(0x42599D)
        .secondaryColor(0xCCF2FF)
        .iconSet(NETHERSTAR)
        .dust();

    // Stellar
    event.create('stellar')
        // ✵
        .components('stardust','wissen','ember','mana')
        .element(GTElements.get("stellar"))
        .color(0xFFFFFF)
        .secondaryColor(0x111111)
        .iconSet(NETHERSTAR)
        .ingot()
        .flags(no_smelt, no_decomp, plates, rod,gear, frame, ring, dense_plate);

//TODO : draconium and awakened draconium
// 	opv wire (2147483647/4), max wire (2147483647)



    // my take on it
/*
    event.create('graphenium')
    event.create('quanton')
    event.create('photonite')
    event.create('antimatter')
*/

});





