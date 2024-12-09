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
    event.create("gfs:wither_fragment");


    // Ultimate Tools
    event.create('gfs:ultimate_core').texture('gfs:item/ultimate/core')
    event.create('gfs:ultimate_file').texture('gfs:item/ultimate/file').rarity("epic").maxStackSize(1)
    event.create('gfs:ultimate_hammer').texture('gfs:item/ultimate/hammer').rarity("epic").maxStackSize(1)
    event.create('gfs:ultimate_screwdriver').texture('gfs:item/ultimate/screwdriver').rarity("epic").maxStackSize(1)
    event.create('gfs:ultimate_wrench').texture('gfs:item/ultimate/wrench').rarity("epic").maxStackSize(1)
    event.create('gfs:ultimate_wire_cutter').texture('gfs:item/ultimate/wire_cutter').rarity("epic").maxStackSize(1)

    // Infinity Tools
    event.create('gfs:infinity_power_unit')
        .textureJson({
            layer0: 'gfs:item/infinity/infinity_power_unit_frame',
            layer1: 'gfs:item/infinity/infinity_power_unit_core'
        })
        .rarity("epic").maxStackSize(1);

    event.create('gfs:infinity_file')
        .textureJson({
            layer0: 'gfs:item/infinity/infinity_file_handle',
            layer1: 'gfs:item/infinity/infinity_file_head'
        })
        .rarity("epic").maxStackSize(1);

    event.create('gfs:infinity_hammer')
        .textureJson({
            layer0: 'gfs:item/infinity/infinity_hammer_handle',
            layer1: 'gfs:item/infinity/infinity_hammer_head'
        })
        .rarity("epic").maxStackSize(1);

    event.create('gfs:infinity_screwdriver')
        .textureJson({
            layer0: 'gfs:item/infinity/infinity_screwdriver_handle',
            layer1: 'gfs:item/infinity/infinity_screwdriver_head'
        })
        .rarity("epic").maxStackSize(1);

    event.create('gfs:infinity_wrench')
        .texture('gfs:item/infinity/infinity_wrench')
        .rarity("epic").maxStackSize(1);

    event.create('gfs:infinity_wire_cutter')
        .textureJson({
            layer0: 'gfs:item/infinity/infinity_wire_cutter_handle',
            layer1: 'gfs:item/infinity/infinity_wire_cutter_head'
        })
        .rarity("epic").maxStackSize(1);

    // Post-Tank Wafer items
    event.create('gfs:universe_boule')
        .tooltip('§7One single-crystallized material')
		.texture('gfs:item/wafer_and_chip/universal_boule')
		.displayName('Universe-doped Monocrystalline Silicon Boule');
    event.create('gfs:universe_wafer')
        .tooltip('§7A slice of a boule')
		.texture('gfs:item/wafer_and_chip/universal_wafer')
		.displayName('Universe-doped Wafer');

    event.create('gfs:unactivated_multidimensional_cpu_wafer')
        .tooltip("§7Unactivated Multidimensional Central Processing Unit")
		.texture('gfs:item/wafer_and_chip/unactivated_multidimensional_cpu_wafer')
		.displayName('Unactivated Multidimensional CPU Wafer');
    event.create('gfs:multidimensional_cpu_wafer')
        .tooltip("§7Raw Multidimensional Central Processing Unit")
		.texture('gfs:item/wafer_and_chip/multidimensional_cpu_wafer')
		.displayName('Multidimensional CPU Wafer');
    event.create('gfs:multidimensional_cpu_chip')
        .tooltip("§7Multidimensional Central Processing Unit")
		.texture('gfs:item/wafer_and_chip/multidimensional_cpu_chip')
		.displayName('Multidimensional CPU Chip');

    event.create('gfs:hyperdynamic_ram_wafer')
        .tooltip("§7Raw Hyperdynamic Random Acces Memory")
		.texture('gfs:item/wafer_and_chip/hyperdynamic_ram_wafer')
		.displayName('Hyperdynamic RAM Wafer');
    event.create('gfs:hyperdynamic_ram_chip_base')
        .tooltip("§7Hyperdynamic Random Acces Memory Base")
		.texture('gfs:item/wafer_and_chip/hyperdynamic_ram_chip')
		.displayName('Hyperdynamic RAM Chip Base');
    event.create('gfs:hyperdynamic_ram_chip')
        .tooltip("§7Hyperdynamic Random Acces Memory")
		.texture('gfs:item/wafer_and_chip/activated_hyperdynamic_ram_chip')
		.displayName('Hyperdynamic RAM Chip');

    event.create('gfs:quantum_soc_wafer')
        .tooltip("§7Raw Quantum System on Chip")
		.texture('gfs:item/wafer_and_chip/quantum_soc_wafer')
		.displayName('Quantum SoC Wafer');
    event.create('gfs:quantum_soc_chip_base')
        .tooltip("§7Quantum System on Chip Base")
		.texture('gfs:item/wafer_and_chip/quantum_soc_chip_base')
		.displayName('Quantum SoC Chip Base');
    event.create('gfs:quantum_soc_chip')
        .tooltip("§7Quantum System on Chip")
		.texture('gfs:item/wafer_and_chip/quantum_soc_chip')
		.displayName('Quantum SoC Chip');

    event.create('gfs:logic_wafer')
		.texture('gfs:item/wafer_and_chip/logic_wafer')
		.displayName('Logic Wafer');
    event.create('gfs:logic_chip')
		.texture('gfs:item/wafer_and_chip/logic_chip')
		.displayName('Logic Chip');
    event.create('gfs:engineering_wafer')
		.texture('gfs:item/wafer_and_chip/engineering_wafer')
		.displayName('Engineering Wafer');
    event.create('gfs:engineering_chip')
		.texture('gfs:item/wafer_and_chip/engineering_chip')
		.displayName('Engineering Chip');
    event.create('gfs:calculation_wafer')
		.texture('gfs:item/wafer_and_chip/calculation_wafer')
		.displayName('Calculation Wafer');
    event.create('gfs:calculation_chip')
		.texture('gfs:item/wafer_and_chip/calculation_chip')
		.displayName('Calculation Chip');
    event.create('gfs:certus_quartz_boule')
		.texture('gfs:item/wafer_and_chip/certus_quartz_boule')
		.displayName('Certus Quartz Boule');
    event.create('gfs:certus_wafer')
        .tooltip("§7Raw Circuit")
		.texture('gfs:item/wafer_and_chip/certus_wafer')
		.displayName('Certus Wafer');


    // Complex SMDs
    ["transistor", "resistor", "capacitor", "diode", "inductor"].forEach((x) => {
        event.create(`gfs:complex_smd_${x}`)
            .displayName(`Complex SMD ${x.slice(0, 1).toUpperCase() + x.slice(1)}`)
            .tooltip("Complex Electronic Component")
            .tag(`gtceu:${x}s`)
            .texture(`gfs:item/complex_smd/complex_smd_${x}`);

        event.create(`gfs:hyperflux_smd_${x}`)
            .displayName(`Hyperflux SMD ${x.slice(0, 1).toUpperCase() + x.slice(1)}`)
            .tooltip("Hyper Electronic Component")
            .tag(`gtceu:${x}s`)
            .texture(`gfs:item/complex_smd/smd_${x}_exotic`);
    });

    const tierTooltip = {
        'matter': "§1Cool looking",
        'dimensional': "§fFom another dimension",
        'monic': "§9Purest material",
        'cosmic': "§aInter Stellar",
        '4d': "§dError_Display_404",
    };
	
            function TypeName (type) {
			console.log("2nd ",type)
                if (type.indexOf("_") == -1)
                    return type.slice(0, 1).toUpperCase() + type.slice(1);
                else {
                    let typeFront = type.slice(0, type.indexOf("_"));
                    type = type.slice(type.indexOf("_") + 1);
                    typeFront = typeFront.slice(0, 1).toUpperCase() + typeFront.slice(1);
                    type = type.slice(0, 1).toUpperCase() + type.slice(1);
                    return (typeFront+" "+type);
                }
            };

    // Post-tank circuits, circuit boards, processing units
    [
        ['matter', ['zpm', 'uv', 'uhv'], 'uev'],
        ['dimensional', ['uv', 'uhv', 'uev'], 'uiv'],
        ['monic', ['uhv', 'uev', 'uiv'], 'uxv'],
        ['cosmic', ['uev', 'uiv', 'uxv'], 'opv'],
        ['4d', ['uiv', 'uxv', 'opv'], 'max']
    ].forEach(([theme, volts, mainframeVolt]) => {
        // Create unit for each theme	(is used to create processing unit)
        let ThemeName = theme.slice(0, 1).toUpperCase() + theme.slice(1);
        event.create(`gfs:${mainframeVolt}_circuit_board`)
            .displayName(`${ThemeName} Circuit Board`)
            .tooltip("§7Just a slice of a strong material")
            .tooltip(`§7${tierTooltip[theme]}`)
            .textureJson({layer0: `gfs:item/circuits/${theme}/${theme}_circuit_board`});

        // also create a processing unti for eatch theme (is used to create processors)
        event.create(`gfs:${mainframeVolt}_processing_unit`)
            .displayName(`${ThemeName} Processing Unit`)
            .tooltip("§7All wired up!")
            .tooltip(`§7${tierTooltip[theme]}`)
            .textureJson({layer0: `gfs:item/circuits/${theme}/${theme}_processing_unit`});

        // Create circuits for each type and corresponding voltage
        ['processor', 'processor_assembly', 'processor_computer'].forEach((type, index) => {
			console.log(type)
            event.create(`gfs:${mainframeVolt}_${type}`)
                .displayName(`${ThemeName} ${TypeName(type)}`)
                .textureJson({layer0: `gfs:item/circuits/${theme}/${theme}_${type}`})
                .tooltip((index == 0 ? `§7Best §6${volts[index].toUpperCase()}-tier§7 Circuit` :
                    `§7Good §6${volts[index].toUpperCase()}-tier§7 Circuit`))
                .tooltip(`§7${tierTooltip[theme]}`)
                .tag(`gtceu:circuits/${volts[index]}`);
        });

        // Create mainframe for each theme with specified voltage
        //this is the best processor of eatch tier and will be needed to make the new ones
        event.create(`gfs:${mainframeVolt}_processor_mainframe`)
            .displayName(`${ThemeName} Processor Mainframe`)
            .textureJson({
                layer0: `gfs:item/circuits/${theme}/${theme}_processor_mainframe_base`,
                layer1: `gfs:item/circuits/${theme}/${theme}_processor_mainframe_lights`
            })
            .tooltip(`§7Barely §6${mainframeVolt.toUpperCase()}-tier§7 Circuit`)
            .tooltip(`§7${tierTooltip[theme]}`)
            .tag(`gtceu:circuits/${mainframeVolt}`);
    });


    //Universal Circuits
    ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"]
        .forEach((x) => {
            event.create(`gfs:${x}_universal_circuit`)
                .tag(`gtceu:circuits/${x}`)
                .tag("gtceu:circuits/universal")
                .displayName(x.toUpperCase() + " Universal Circuit")
                .tooltip("§7A Universal Circuit")
                .textureJson({layer0: `gfs:item/circuits/universal/${x}_universal_circuit`})
        });


    [
        ['thorium_fuel', 'Thorium Fuel', "Starter fuel"],
        ['depleted_thorium_fuel', 'Depleted Thorium Fuel', "Should not be eaten"],

        ['low_uranium_fuel', 'Low Enriched Uranium Fuel', "Slight radiactivity"],
        ['depleted_low_uranium_fuel', 'Depleted Low Enriched Uranium Fuel', "Looks tasty"],

        ['high_uranium_fuel', 'Highly Enriched Uranium Fuel', '20 BILLION CALORIES :trolllaugh:'],
        ['depleted_high_uranium_fuel', 'Depleted Highly Enriched Uranium Fuel', 'No more 20 billion calories :waaaaaaaaah:'],

        ['low_radioactive_fuel', 'Low Enriched Radioactive Fuel', "Feels a bit stingy"],
        ['depleted_low_radioactive_fuel', 'Depleted Low Enriched Radioactive Fuel', "Just a piece of rock"],

        ['high_radioactive_fuel', 'Highly Enriched Radioactive Fuel', "Should not be touched"],
        ['depleted_high_radioactive_fuel', 'Depleted Highly Enriched Radioactive Fuel', "Might be touched ..."],

    ].forEach(([id, displayName, tooltip]) => {
        event.create(`gfs:${id}`)
            .displayName(displayName)
            .texture(`gfs:item/nuclear/${id}`)
            .tooltip(`§7${tooltip}`);
    });


});

