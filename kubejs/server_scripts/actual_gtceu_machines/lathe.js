ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;



// stick from plank
    greg.lathe('gfs:stick_f_plank')
        .itemInputs("#forge:plates/wood")
        .itemOutputs('#forge:rods/wood')
        .duration(20)
        .EUt(8);



});


