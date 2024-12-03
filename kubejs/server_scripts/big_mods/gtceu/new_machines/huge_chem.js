
ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    greg.assembler('gfs:huge_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor', "6x #forge:plates/polyethylene", "6x #forge:plates/polytetrafluoroethylene")
        .itemOutputs('gtceu:huge_chemical_reactor')
        .circuit(23)
        .duration(80*20)
        .EUt(480);

});