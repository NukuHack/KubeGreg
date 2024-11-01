ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


// magnesium_diboride_ingot

    greg
        .chemical_bath('gfs:magnesium_diboride_ingot')
        .itemInputs('#forge:hot_ingots/magnesium_diboride')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('gtceu:magnesium_diboride_ingot')
        .duration(400)
        .EUt(120);

// magnesium_diboride_ingot_2

    greg
        .chemical_bath('gfs:magnesium_diboride_ingot_2')
        .itemInputs('#forge:hot_ingots/magnesium_diboride')
        .inputFluids(Fluid.of('gtceu:distilled_water', 100))
        .itemOutputs('gtceu:magnesium_diboride_ingot')
        .duration(250)
        .EUt(120);

// deepslate

    greg
        .chemical_bath('gfs:deepslate')
        .itemInputs('#forge:dusts/stone')
        .inputFluids(Fluid.of('gtceu:blask_steel', 10))
        .itemOutputs('#forge:dusts/deepslate')
        .duration(40)
        .EUt(120);



});


