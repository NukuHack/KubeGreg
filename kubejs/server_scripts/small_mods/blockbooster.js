// priority: 0

ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    event.remove({mod: 'blockbooster'});
	
        greg.assembler(`gfs:block_booster`)
            .itemInputs('2x #forge:frames/titanium')
            .itemInputs('gtceu:hv_machine_hull')
            .itemInputs('2x minecraft:clock')
            .itemInputs('4x #forge:screws/stainless_steel')
            .itemInputs('4x #forge:plates/titanium')
            .itemInputs('8x #forge:foils/red_alloy')
            .itemInputs('gtceu:emerald_lens')
            .itemInputs('4x #forge:rods/stainless_steel')
            .itemOutputs(`blockbooster:booster_t1`)
            .circuit(23)
            .duration(15*20)
            .EUt(30);
			
        greg.assembler(`gfs:block_booster_t2`)
            .itemInputs(`blockbooster:booster_t1`)
            .itemInputs('2x #forge:frames/tungsten')
            .itemInputs('gtceu:iv_machine_hull')
            .itemInputs('6x minecraft:clock')
            .itemInputs('4x #forge:screws/tungsten')
            .itemInputs('4x #forge:plates/tungsten')
            .itemInputs('8x #forge:foils/red_alloy')
            .itemInputs('gtceu:netherstar_lens')
            .itemInputs('4x #forge:rods/tungsten')
            .itemOutputs(`blockbooster:booster_t2`)
            .circuit(23)
            .duration(30*20)
            .EUt(30);

// fin //

})