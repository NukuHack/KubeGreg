ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


// compressed clay
    greg
        .compressor("gfs:compressed_clay")
        .itemInputs("minecraft:clay")
        .itemOutputs("gtceu:compressed_clay")
        .duration(200)
        .EUt(2);

// compressed wood
    greg
        .compressor("gfs:wood_comp")
        .itemInputs("9x #forge:rods/wooden")
        .itemOutputs("gfs:wood_comp")
        .duration(200)
        .EUt(2);

// compressed wood
    greg
        .compressor("gfs:wood_comp_dust")
        .itemInputs("18x #forge:dusts/wood")
        .itemOutputs("gfs:wood_comp")
        .duration(200)
        .EUt(2);

// compress fluix
    event.remove({output:"#forge:storage_blocks/fluix"});
    greg
        .compressor("gfs:fluix_block")
        .itemInputs("4x #forge:gems/fluix")
        .itemOutputs("#forge:storage_blocks/fluix")
        .duration(200)
        .EUt(2);


    


});


