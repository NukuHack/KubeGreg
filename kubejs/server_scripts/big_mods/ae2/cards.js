ServerEvents.recipes((event) => {
    /*
      // Biometric Card
      event.remove({id: "ae2:tools/network_biometric_card"})
      event.shaped("ae2:biometric_card", [
        'EC ',
        'WP ',
        '   '
      ] , {
        E: "ae2:engineering_processor",
        C: "#gtceu:circuits/mv",
        W: "#forge:fine_wires/gold",
        P: "#forge:plates/iron"
      })
    */
    // Memory Card
    event.remove({id: "ae2:tools/network_memory_card"});
    event.shaped("ae2:memory_card", ["EC ", "WP ", "   "], {
        E: "ae2:calculation_processor",
        C: "#gtceu:circuits/mv",
        W: "#forge:fine_wires/gold",
        P: "#forge:plates/iron",
    });
    // Advanced Card
    event.remove({id: "ae2:materials/advancedcard"});
    event.shaped("2x ae2:advanced_card", ["WP ", "ACP", "SP "], {
        W: "#forge:fine_wires/red_alloy",
        P: "#forge:plates/stainless_steel",
        A: "ae2:basic_card",
        C: "#gtceu:circuits/hv",
        S: "#forge:fine_wires/silver",
    });
    // Fuzzy Card
    event.remove({id: "ae2:materials/cardfuzzy"});
    event.shapeless("ae2:fuzzy_card", [
        "ae2:advanced_card",
        "#gtceu:circuits/mv",
    ]);
    // Inverter Card
    event.remove({id: "ae2:materials/cardinverter"});
    event.shapeless("ae2:inverter_card", [
        "ae2:advanced_card",
        "#forge:fine_wires/red_alloy",
    ]);
    // Acceleration Card
    event.remove({id: "ae2:materials/cardspeed"});
    event.shapeless("ae2:speed_card", [
        "ae2:advanced_card",
        "#gtceu:circuits/mv",
    ]);
    // Energy Card
    event.remove({id: "ae2:materials/cardenergy"});
    event.shapeless("ae2:energy_card", [
        "ae2:advanced_card",
        "#gtceu:batteries/mv",
    ]);

    // Basic Card
    event.remove({id: "ae2:materials/basiccard"});
    event.shaped("2x ae2:basic_card", ["WP ", "ACP", "SP "], {
        W: "#forge:fine_wires/red_alloy",
        P: "#forge:plates/aluminium",
        A: "ae2:engineering_processor",
        C: "#gtceu:circuits/mv",
        S: "#forge:fine_wires/gold",
    });
    // Capacity Card
    event.remove({id: "ae2:materials/cardcapacity"});
    event.shapeless("ae2:capacity_card", [
        "ae2:basic_card",
        "#gtceu:circuits/mv",
    ]);
    // Crafting Card
    event.remove({id: "ae2:materials/cardcrafting"});
    event.shapeless("ae2:crafting_card", [
        "ae2:basic_card",
        "#gtceu:circuits/hv",
    ]);
    // Redstone Card
    event.remove({id: "ae2:materials/cardredstone"});
    event.shapeless("ae2:redstone_card", [
        "ae2:basic_card",
        "#forge:plates/red_alloy",
    ]);

    // Overflow Card
    event.remove({id: "ae2:materials/card_void"});
    event.shapeless('ae2:void_card', [
        'ae2:basic_card', 'trashcans:item_trash_can'
    ])


    // Magnet Card
    event.remove({output: "ae2wtlib:magnet_card"});
    event.shapeless("ae2wtlib:magnet_card", [
        "ae2:advanced_card",
        "#gtceu:circuits/hv",
        "gtceu:hv_item_magnet",
        "ae2:annihilation_plane",
    ]);
});
