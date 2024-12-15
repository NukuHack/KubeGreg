ServerEvents.recipes((event) => {
    // Wireless Terminal
    event.remove({id: "ae2:network/wireless_terminal"});
    event.shaped("ae2:wireless_terminal", ["wRd", "CTC", "KLK"], {
        w: "#forge:tools/wrenches",
        R: "ae2:wireless_receiver",
        d: "#forge:tools/screwdrivers",
        C: "#gtceu:circuits/hv",
        T: "ae2:terminal",
        K: "ae2:fluix_glass_cable",
        L: "gtceu:lapotron_crystal",
    });
    // Wireless Crafting Terminal
    event.remove({id: "ae2:network/wireless_crafting_terminal"});
    event.remove({id: "ae2:network/upgrade_wireless_crafting_terminal"});
    event.shaped("ae2:wireless_crafting_terminal", ["TC ", "Kd ", "   "], {
        d: "#forge:tools/screwdrivers",
        T: "ae2:wireless_terminal",
        C: "crafting_table",
        K: "ae2:fluix_glass_cable",
    });

    // ME Terminal
    event.remove({id: "ae2:network/parts/terminals"});
    event.shaped("ae2:terminal", ["PB ", "CD "], {
        B: "ae2:calculation_processor",
        C: "ae2:logic_processor",
        P: "ae2:semi_dark_monitor",
        D: "#forge:tools/screwdrivers",
    });

    // ME Crafting Terminal
    event.remove({id: "ae2:network/parts/terminals_crafting"});
    event.shaped("ae2:crafting_terminal", ["PB ", "Cd "], {
        P: "ae2:terminal",
        B: "crafting_table",
        C: "ae2:calculation_processor",
        d: "#forge:tools/screwdrivers",
    });

    // ME Pattern Terminal
    event.remove({id: "ae2:network/parts/terminals_pattern_encoding"});
    event.shaped("ae2:pattern_encoding_terminal", ["PB ", "Cd "], {
        P: "ae2:terminal",
        B: "ae2:blank_pattern",
        C: "ae2:engineering_processor",
        d: "#forge:tools/screwdrivers",
    });

    // ME Pattern Access Terminal
    event.remove({id: "ae2:network/parts/terminals_pattern_access"});
    event.shaped("ae2:pattern_access_terminal", ["PB ", "Cd "], {
        P: "ae2:terminal",
        B: "#forge:plates/polyvinyl_chloride",
        C: "ae2:fluix_glass_cable",
        d: "#forge:tools/screwdrivers",
    });

    //P2P Tunnel
    event.remove({output: 'ae2:me_p2p_tunnel'})
    event.recipes.gtceu.assembler('ae2:p2p_assembly')
        .itemInputs(["4x #forge:plates/tungsten_steel", '4x gtceu:stainless_steel_plate', '4x ae2:charged_certus_quartz_crystal', '2x ae2:semi_dark_monitor', 'ae2:engineering_processor', 'ae2:formation_core', 'ae2:annihilation_core'])
        .itemOutputs('2x ae2:me_p2p_tunnel')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV]);

	// there are 2 eup2p in this modpack and i do not like that
	// TODO check both and remove the worse variant (if there is worse)
	//  if both are the same remove the one what is alone with an entire mod

    event.remove({id: "mae2:network/parts/multi_p2p_tunnel_workaround"});

	//making the basic from the variants
    event.shapeless("ae2:me_p2p_tunnel", ["ae2:me_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["eup2p:eu_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["mae2:eu_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["ae2:redstone_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["ae2:item_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["ae2:fluid_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["ae2:fe_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["ae2:light_p2p_tunnel"]);
    event.shapeless("ae2:me_p2p_tunnel", ["mae2:pattern_p2p_tunnel"]);
	//resetting eup2p
    event.shapeless("eup2p:eu_p2p_tunnel", ["eup2p:eu_p2p_tunnel"]);
	//crafting eup2p to the other mod
    event.shapeless("eup2p:eu_p2p_tunnel", ["mae2:eu_p2p_tunnel"]);
    event.shapeless("mae2:eu_p2p_tunnel", ["eup2p:eu_p2p_tunnel"]);
	// making the simple ones from the multi ones
    event.shapeless("ae2:item_p2p_tunnel", ["mae2:item_multi_p2p_tunnel"]);
    event.shapeless("mae2:pattern_p2p_tunnel", ["mae2:pattern_multi_p2p_tunnel"]);
    event.shapeless("ae2:redstone_p2p_tunnel", ["mae2:redstone_multi_p2p_tunnel"]);
    event.shapeless("ae2:fe_p2p_tunnel", ["mae2:fe_multi_p2p_tunnel"]);
    event.shapeless("ae2:fluid_p2p_tunnel", ["mae2:fluid_multi_p2p_tunnel"]);
    event.shapeless("mae2:eu_p2p_tunnel", ["mae2:eu_multi_p2p_tunnel"]);
	//making the extra ones from the basic variant
    event.shapeless("eup2p:eu_p2p_tunnel", ["ae2:me_p2p_tunnel", "#forge:dusts/wrought_iron"]);
    event.shapeless("mae2:eu_p2p_tunnel", ["ae2:me_p2p_tunnel", "#forge:dusts/wrought_iron"]);
    event.shapeless("ae2:redstone_p2p_tunnel", ["ae2:me_p2p_tunnel", "#forge:dusts/redstone"]);
    event.shapeless("ae2:item_p2p_tunnel", ["ae2:me_p2p_tunnel", "#forge:dusts/wood"]);
    event.shapeless("ae2:fluid_p2p_tunnel", ["ae2:me_p2p_tunnel", "#forge:dusts/iron"]);
    event.shapeless("ae2:fe_p2p_tunnel", ["ae2:me_p2p_tunnel", "#forge:dusts/red_alloy"]);
    event.shapeless("ae2:light_p2p_tunnel", ["ae2:me_p2p_tunnel", "#forge:dusts/glowstone"]);
    event.shapeless("mae2:pattern_p2p_tunnel", ["ae2:me_p2p_tunnel", "ae2:blank_pattern"]);


});
