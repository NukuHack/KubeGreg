/*
* greg_sky.js - Register Items.
*/

Platform.mods.kubejs.name = "Gfs";

priority: 100
	

StartupEvents.registry("item", (event) => {

    event.create("gfs:wooden_crook", 'shears')
        .maxStackSize(1)
        .maxDamage(64);

    event.create("gfs:stone_crook", 'shears')
        .maxStackSize(1)
        .maxDamage(256);

    event.create("gfs:wooden_hammer", 'pickaxe')
        .tier("wood")
        .maxStackSize(1)
        .maxDamage(64)
        .attackDamageBonus(-4);

    event.create("gfs:stone_hammer", 'pickaxe')
        .tier("wood")
        .maxStackSize(1)
        .maxDamage(128)
        .attackDamageBonus(-2);

    event.create("gfs:water_bowl");
    event.create("gfs:mud_brick");

    event.create("gfs:stupid_press");
	
	
    // Infinity
    event.create('infinity_catalyst').rarity("epic")
    event.create('dormant_furious_infinity_catalyst')
    event.create('furious_infinity_catalyst').rarity("epic")
    event.create('inert_serene_infinity_catalyst')
    event.create('serene_infinity_catalyst').rarity("epic")
    event.create('dormant_infinity_compound_ingot')

    // Dense Hydrogen (Solidified Hydrogen is part of Solidified Elements section)
    event.create('dense_hydrogen').rarity('Uncommon')
    event.create('ultra_dense_hydrogen').rarity('Rare')

    // Monium
    event.create('field_stabilised_omnic_pulsar_compound')
    event.create('quasi_stable_neutron_star').displayName('Quasi-Stable Neutron Star')


    // Singularities
    event.create('singularity_containment_unit')
    event.create('contained_singularity')


    // Ultimate Tools
    event.create('ultimate_core').texture('kubejs:item/ultimate/core')
    event.create('ultimate_file').texture('kubejs:item/ultimate/file').rarity("epic").maxStackSize(1)
    event.create('ultimate_hammer').texture('kubejs:item/ultimate/hammer').rarity("epic").maxStackSize(1)
    event.create('ultimate_screwdriver').texture('kubejs:item/ultimate/screwdriver').rarity("epic").maxStackSize(1)
    event.create('ultimate_wrench').texture('kubejs:item/ultimate/wrench').rarity("epic").maxStackSize(1)
    event.create('ultimate_wire_cutter').texture('kubejs:item/ultimate/wire_cutter').rarity("epic").maxStackSize(1)


    // Infinity Tools
    event.create('infinity_power_unit').rarity("epic").maxStackSize(1)
    event.create('infinity_file').rarity("epic").maxStackSize(1)
    event.create('infinity_hammer').rarity("epic").maxStackSize(1)
    event.create('infinity_screwdriver').rarity("epic").maxStackSize(1)
    event.create('infinity_wrench').rarity("epic").maxStackSize(1)
    event.create('infinity_wire_cutter').rarity("epic").maxStackSize(1)



    // Post-Tank Wafer items
    event.create('universe_boule').texture('kubejs:item/universalwafer/universal_boule').displayName('Universe-doped Monocrystalline Silicon Boule')
    event.create('universe_wafer').texture('kubejs:item/universalwafer/universal_wafer').displayName('Universe-doped Wafer')
    event.create('unactivated_multidimensional_cpu_wafer').texture('kubejs:item/multidimensionalcpu/unactivated_multidimensional_cpu_wafer').displayName('Unactivated Multidimensional CPU Wafer')
    event.create('multidimensional_cpu_wafer').texture('kubejs:item/multidimensionalcpu/multidimensional_cpu_wafer').displayName('Multidimensional CPU Wafer')
    event.create('multidimensional_cpu_chip').texture('kubejs:item/multidimensionalcpu/multidimensional_cpu_chip').displayName('Multidimensional CPU Chip')
    event.create('hyperdynamic_ram_wafer').texture('kubejs:item/hyperdynamicram/hyperdynamic_ram_wafer').displayName('Hyperdynamic RAM Wafer')
    event.create('hyperdynamic_ram_chip_base').texture('kubejs:item/hyperdynamicram/hyperdynamic_ram_chip').displayName('Hyperdynamic RAM Chip Base')
    event.create('hyperdynamic_ram_chip').texture('kubejs:item/hyperdynamicram/activated_hyperdynamic_ram_chip').displayName('Hyperdynamic RAM Chip')
    event.create('quantum_soc_wafer').texture('kubejs:item/quantumsoc/quantum_soc_wafer').displayName('Quantum SoC Wafer')
    event.create('quantum_soc_chip_base').texture('kubejs:item/quantumsoc/quantum_soc_chip_base').displayName('Quantum SoC Chip Base')
    event.create('quantum_soc_chip').texture('kubejs:item/quantumsoc/quantum_soc_chip').displayName('Quantum SoC Chip')


     event.create('uhv_emitter')
         .displayName('UHV Emitter')
         .texture('kubejs:item/emitters/uhv_emitter');

     event.create('uev_emitter')
         .displayName('UEV Emitter')
         .texture('kubejs:item/emitters/uev_emitter');

     event.create('uiv_emitter')
         .displayName('UIV Emitter')
         .texture('kubejs:item/emitters/uiv_emitter');

     event.create('uxv_emitter')
         .displayName('UXV Emitter')
         .texture('kubejs:item/emitters/uxv_emitter');

     event.create('opv_emitter')
         .displayName('OpV Emitter')
         .texture('kubejs:item/emitters/opv_emitter');
	
    // Complex SMDs
    const smds = [
        'transistor',
        'resistor',
        'capacitor',
        'diode',
        'inductor'
    ]

    for (const name of smds) {
        event.create(`complex_smd_${name}`)
    }


    // Post-tank circuits, circuit boards, processing units
    function Circuit(theme, type, volt) {
        event.create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_${type}` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function Mainframe(theme, volt) {
        event.create(`${theme}_processor_mainframe`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processor_mainframe_base`, layer1: `kubejs:item/circuits/${theme}_processor_mainframe_lights` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function Unit(theme) {
        event.create(`${theme}_processing_unit`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processing_unit` })
        event.create(`${theme}_circuit_board`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_circuit_board` })
    }

    Unit('matter')
    Circuit('matter', 'processor', "zpm")
    Circuit('matter', 'processor_assembly', "uv")
    Circuit('matter', 'processor_computer', "uhv")
    Mainframe('matter', "uev")

    Unit('dimensional')
    Circuit('dimensional', 'processor', "uv")
    Circuit('dimensional', 'processor_assembly', "uhv")
    Circuit('dimensional', 'processor_computer', "uev")
    Mainframe('dimensional', "uiv")

    Unit('monic')
    Circuit('monic', 'processor', "uhv")
    Circuit('monic', 'processor_assembly', "uev")
    Circuit('monic', 'processor_computer', "uiv")
    Mainframe('monic', "max")

    //Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"]
    tiers.forEach((universal_circuit) => {
        event.create(universal_circuit + "_universal_circuit")
            .tag("gtceu:circuits/" + universal_circuit)
            .tag("gtceu:circuits/universal")
            .displayName(universal_circuit.toUpperCase() + " Universal Circuit")
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })

});

