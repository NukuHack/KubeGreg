ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


// wither skel. skull "dust"

    greg
        .macerator("gfs:skull_fragments")
        .itemInputs("minecraft:wither_skeleton_skull")
        .itemOutputs("9x gfs:wither_fragment")
        .EUt(30)
        .duration(240);

// zombie skull "dust"

    greg
        .macerator("gfs:zombie_flesh_from_head")
        .itemInputs("minecraft:zombie_head")
        .itemOutputs("4x minecraft:rotten_flesh")
        .EUt(30)
        .duration(240);

// zombie skull "dust"

    greg
        .macerator("gfs:bones_from_skull")
        .itemInputs("minecraft:skeleton_skull")
        .itemOutputs("4x minecraft:bone")
        .EUt(30)
        .duration(240);

// compressed wood
    greg
        .macerator("gfs:wood_comp")
        .itemInputs("gfs:wood_comp")
        .itemOutputs("9x #forge:dusts/wood")
        .duration(200)
        .EUt(2);

// treated wood crushing
    greg
        .macerator("gfs:treated_wood")
        .itemInputs("gtceu:treated_wood_planks")
        .itemOutputs("#forge:dusts/treated_wood")
        .duration(200)
        .EUt(2);





});