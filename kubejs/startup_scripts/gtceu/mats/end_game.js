
priority: 10


GTCEuStartupEvents.registry("gtceu:material", event => {




// This material is meant to place a ? symbol in a material's chemical formula
event.create('mystery')
    .element(GTElements.get('mystery'));


event.create("cryolobus")
    .ingot().fluid()
    .element(GTElements.get("cryolobus"))
    .color(0x042228).iconSet('metallic')
    .blastTemp(6800, 'higher')
    .flags(plates,rod,gear,dense_plate,frame)
    .cableProperties(524288*4, 12, 0, true);

event.create("cryococcus")
    .ingot().fluid()
    .element(GTElements.get("cryococcus"))
    .color(0x008F92).iconSet('metallic')
    .fluidPipeProperties(20000, 20000, true, true, true, true)
    .flags(no_smelt, plates, rod,gear, frame, ring, dense_plate);


event.create("crystal_matrix")
    .ingot().fluid()
    .element(GTElements.get("crystal_matrix"))
    .color(0x66ffff)
    .iconSet('shiny')
    .fluidPipeProperties(100000, 64000, true, true, true, true)
    .flags(plates,foil,rod,frame,rotor,dense_plate);

event.create("omnium")
    .ingot()
    .element(GTElements.get("omnium"))
    .color(0xffffff)
    .iconSet('omnium')
    .flags(plates,rod,long_rod,gear,small_gear,ring,round,bolt_and_screw,frame)
    .cableProperties(2147483647/64, 128, 0, true)
    .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill());

event.create('infinity')
    .ingot()
    .element(GTElements.get("infinity"))
    .color(0xffffff)
    .iconSet('infinity')
    .cableProperties(33554432*4, 64, 0, true)
    .flags(plates,rod,long_rod,ring,round, gear,small_gear,bolt_and_screw,frame,dense_plate);

event.create('monium')
    .ingot()
    .element(GTElements.get("monium"))
    .color(0xffffff)
    .iconSet('monium')
    .flags(plates,rod,frame,gear,spring)
    .cableProperties(2147483647/16, 1024, 0, true);

event.create('omnic_acid')
    .dust()
    .color(0xff00ff)
    .iconSet('shiny')
    .components('5x carbon', '4x hydrogen', '3x oxygen', '4x omnium')
    .flags(no_decomp);





})





