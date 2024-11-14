/*
* greg_sky.js - Register Items.
*/

Platform.mods.kubejs.name = "Gfs";

priority: 90

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

    /*
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
    */

    // Ultimate Tools
    event.create('ultimate_core').texture('gfs:item/ultimate/core')
    event.create('ultimate_file').texture('gfs:item/ultimate/file').rarity("epic").maxStackSize(1)
    event.create('ultimate_hammer').texture('gfs:item/ultimate/hammer').rarity("epic").maxStackSize(1)
    event.create('ultimate_screwdriver').texture('gfs:item/ultimate/screwdriver').rarity("epic").maxStackSize(1)
    event.create('ultimate_wrench').texture('gfs:item/ultimate/wrench').rarity("epic").maxStackSize(1)
    event.create('ultimate_wire_cutter').texture('gfs:item/ultimate/wire_cutter').rarity("epic").maxStackSize(1)

    // Infinity Tools
    event.create('infinity_power_unit')
            .textureJson({
                layer0: 'gfs:item/infinity/infinity_power_unit_frame',
                layer1: 'gfs:item/infinity/infinity_power_unit_core'
            })
			.rarity("epic").maxStackSize(1);
			
    event.create('infinity_file')
            .textureJson({
                layer0: 'gfs:item/infinity/infinity_file_handle',
                layer1: 'gfs:item/infinity/infinity_file_head'
            })
			.rarity("epic").maxStackSize(1);
			
    event.create('infinity_hammer')
            .textureJson({
                layer0: 'gfs:item/infinity/infinity_hammer_handle',
                layer1: 'gfs:item/infinity/infinity_hammer_head'
            })
			.rarity("epic").maxStackSize(1);
			
    event.create('infinity_screwdriver')
            .textureJson({
                layer0: 'gfs:item/infinity/infinity_screwdriver_handle',
                layer1: 'gfs:item/infinity/infinity_screwdriver_head'
            })
			.rarity("epic").maxStackSize(1);
			
    event.create('infinity_wrench')
		.texture('gfs:item/infinity/infinity_wrench')
		.rarity("epic").maxStackSize(1);
		
    event.create('infinity_wire_cutter')
            .textureJson({
                layer0: 'gfs:item/infinity/infinity_wire_cutter_handle',
                layer1: 'gfs:item/infinity/infinity_wire_cutter_head'
            })
			.rarity("epic").maxStackSize(1);

    // Post-Tank Wafer items
    event.create('universe_boule').texture('gfs:item/wafer_and_chip/universal_boule').displayName('Universe-doped Monocrystalline Silicon Boule');
    event.create('universe_wafer').texture('gfs:item/wafer_and_chip/universal_wafer').displayName('Universe-doped Wafer');

    event.create('unactivated_multidimensional_cpu_wafer').texture('gfs:item/wafer_and_chip/unactivated_multidimensional_cpu_wafer').displayName('Unactivated Multidimensional CPU Wafer');
    event.create('multidimensional_cpu_wafer').texture('gfs:item/wafer_and_chip/multidimensional_cpu_wafer').displayName('Multidimensional CPU Wafer');
    event.create('multidimensional_cpu_chip').texture('gfs:item/wafer_and_chip/multidimensional_cpu_chip').displayName('Multidimensional CPU Chip');

    event.create('hyperdynamic_ram_wafer').texture('gfs:item/wafer_and_chip/hyperdynamic_ram_wafer').displayName('Hyperdynamic RAM Wafer');
    event.create('hyperdynamic_ram_chip_base').texture('gfs:item/wafer_and_chip/hyperdynamic_ram_chip').displayName('Hyperdynamic RAM Chip Base');
    event.create('hyperdynamic_ram_chip').texture('gfs:item/wafer_and_chip/activated_hyperdynamic_ram_chip').displayName('Hyperdynamic RAM Chip');

    event.create('quantum_soc_wafer').texture('gfs:item/wafer_and_chip/quantum_soc_wafer').displayName('Quantum SoC Wafer');
    event.create('quantum_soc_chip_base').texture('gfs:item/wafer_and_chip/quantum_soc_chip_base').displayName('Quantum SoC Chip Base');
    event.create('quantum_soc_chip').texture('gfs:item/wafer_and_chip/quantum_soc_chip').displayName('Quantum SoC Chip');

    event.create('logic_wafer').texture('gfs:item/wafer_and_chip/logic_wafer').displayName('Logic Wafer');
    event.create('logic_chip').texture('gfs:item/wafer_and_chip/logic_chip').displayName('Logic Chip');
    event.create('engineering_wafer').texture('gfs:item/wafer_and_chip/engineering_wafer').displayName('Engineering Wafer');
    event.create('engineering_chip').texture('gfs:item/wafer_and_chip/engineering_chip').displayName('Engineering Chip');
    event.create('calculation_wafer').texture('gfs:item/wafer_and_chip/calculation_wafer').displayName('Calculation Wafer');
    event.create('calculation_chip').texture('gfs:item/wafer_and_chip/calculation_chip').displayName('Calculation Chip');
    event.create('certus_quartz_boule').texture('gfs:item/wafer_and_chip/certus_quartz_boule').displayName('Certus Quartz Boule');
    event.create('certus_wafer').texture('gfs:item/wafer_and_chip/certus_wafer').displayName('Certus Wafer');

        ["uhv","uev","uiv","uxv","opv"].forEach((x)=>{
            event.create(`${x}_emmitter`)
                .displayName(`${x.toUpperCase()} Emitter`)
                .texture(`gfs:item/emitters/${x}_emitter`);
        });

        // Complex SMDs
        ["transistor","resistor","capacitor","diode","inductor"].forEach((x)=>{
			event.create(`complex_smd_${x}`)
				.displayName(`Complex SMD ${x.slice(0,1).toUpperCase()+x.slice(1)}`)
				.texture(`gfs:item/complex_smd/complex_smd_${x}`);
		});


    // Post-tank circuits, circuit boards, processing units
    const themes = [
        ['matter', ['processor', 'processor_assembly', 'processor_computer'], ['zpm', 'uv', 'uhv'], 'uev' ],
        ['dimensional', ['processor', 'processor_assembly', 'processor_computer'], ['uv', 'uhv', 'uev'], 'uiv' ],
        ['monic', ['processor', 'processor_assembly', 'processor_computer'], ['uhv', 'uev', 'uiv'], 'max' ]
    ];

    themes.forEach(([ theme, circuits, volts, mainframeVolt ]) => {
        // Create unit for each theme
        event.create(`${theme}_processing_unit`)
            .textureJson({ layer0: `gfs:item/circuits/${theme}_processing_unit` });
        event.create(`${theme}_circuit_board`)
            .textureJson({ layer0: `gfs:item/circuits/${theme}_circuit_board` });

        // Create circuits for each type and corresponding voltage
        circuits.forEach((type, index) => {
            event.create(`${theme}_${type}`)
                .textureJson({ layer0: `gfs:item/circuits/${theme}_${type}` })
                .tag(`gtceu:circuits/${volts[index]}`);
        });

        // Create mainframe for each theme with specified voltage
        event.create(`${theme}_processor_mainframe`)
            .textureJson({
                layer0: `gfs:item/circuits/${theme}_processor_mainframe_base`,
                layer1: `gfs:item/circuits/${theme}_processor_mainframe_lights`
            })
            .tag(`gtceu:circuits/${mainframeVolt}`);
    });

    //Universal Circuits
    ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"].forEach((x) => {
        event.create(x + "_universal_circuit")
            .tag("gtceu:circuits/" + x)
            .tag("gtceu:circuits/universal")
            .displayName(x.toUpperCase() + " Universal Circuit")
            .tooltip("§7A Universal Circuit&r")
            .textureJson({ layer0: `gfs:item/circuits/universal/${x}_universal_circuit` })
    })

});

