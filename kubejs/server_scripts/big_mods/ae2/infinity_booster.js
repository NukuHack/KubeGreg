ServerEvents.recipes((event) => {

    const greg = event.recipes.gtceu;

    event.remove({mod: "aeinfinitybooster"});

    // inf card
    greg.assembler("gfs:aeinfinitybooster_inf")
        .itemInputs("ae2:controller","64x ae2:wireless_booster", "32x #forge:dusts/sky_stone",
            "16x ae2:quartz_vibrant_glass", "6x #forge:plates/pure_netherite", "gtceu:iv_emitter", "gtceu:iv_field_generator")
        .itemOutputs("aeinfinitybooster:infinity_card")
        .EUt(30*20)
        .duration(1920*4);
		
    // dimension card
    greg.assembly_line('gfs:aeinfinitybooster_dim')
        .itemInputs("ae2:controller","16x aeinfinitybooster:infinity_card", "64x #forge:dusts/sky_stone",
            "64x ae2:quartz_vibrant_glass", "6x #forge:plates/naquadria", "gtceu:uhv_emitter", "gtceu:uhv_field_generator")
        .itemOutputs("aeinfinitybooster:dimension_card")
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 8192),
        )
        .stationResearch(b => 
			b.researchStack(Item.of('aeinfinitybooster:infinity_card'))
			.dataStack(Item.of("gtceu:data_orb"))
			.EUt(GTValues.VA[GTValues.UV])
			.duration(200*20)
		)
        .duration(60*20)
        .EUt(GTValues.VA[GTValues.UHV]);

});
