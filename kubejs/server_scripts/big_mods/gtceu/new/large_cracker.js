ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    greg.assembler('gfs:large_cracker')
        .itemInputs('gtceu:cracker', "6x #forge:plates/polyethylene", "6x #forge:plates/polytetrafluoroethylene")
        .itemOutputs('gtceu:large_cracker')
        .circuit(23)
        .duration(20 * 80)
        .EUt(480);

});
