ServerEvents.recipes((event) => {
    const remove_items = [
        "buildinggadgets2:gadget_building",
        "buildinggadgets2:gadget_exchanging",
        "buildinggadgets2:gadget_copy_paste",
        "buildinggadgets2:gadget_cut_paste",
        "buildinggadgets2:gadget_destruction",
        "buildinggadgets2:template_manager",
    ];
    remove_items.forEach((remove_recipe) => {
        event.remove({output: remove_recipe});
    });
    // Building Tool
    event.shaped("buildinggadgets2:gadget_building", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/steel",
        L: "#forge:plates/lapis",
        D: "#forge:plates/diamond",
        C: "#gtceu:circuits/lv",
        K: "gtceu:tin_single_cable",
    });
    // Exchanging Tool
    event.shaped("buildinggadgets2:gadget_exchanging", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/steel",
        L: "#forge:plates/gold",
        D: "#forge:plates/diamond",
        C: "#gtceu:circuits/lv",
        K: "gtceu:tin_single_cable",
    });
    // Copy-paste Tool
    event.shaped("buildinggadgets2:gadget_copy_paste", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/steel",
        L: "#forge:plates/redstone",
        D: "#forge:plates/emerald",
        C: "#gtceu:circuits/lv",
        K: "gtceu:tin_single_cable",
    });

    // Template Manager
    event.shaped("buildinggadgets2:template_manager", ["KCK", "CHC", "KCK"], {
        K: "gtceu:tin_single_cable",
        C: "#gtceu:circuits/lv",
        H: "gtceu:lv_machine_hull",
    });

    // Destruction Gadget
    event.shaped("buildinggadgets2:gadget_destruction", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/aluminium",
        L: "#forge:plates/nether_quartz",
        D: "#forge:plates/ender_pearl",
        C: "#gtceu:circuits/mv",
        K: "gtceu:copper_single_cable",
    });

    // Cut 'n' Paste Gadget
    event.shaped("buildinggadgets2:gadget_cut_paste", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/aluminium",
        L: "#forge:plates/lapis",
        D: "gtceu:iron_buzz_saw_blade",
        C: "#gtceu:circuits/mv",
        K: "gtceu:copper_single_cable",
    });
});
