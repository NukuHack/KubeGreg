ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;


	event.remove({ output: "ae2:formation_core" });
	event.remove({ output: "ae2:annihilation_core" });
	
	// ME Cores
	greg.assembler("gfs:formation_core")
		.itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
			"#forge:gems/certus_quartz", "ae2:logic_processor")
		.inputFluids(Fluid.of("gtceu:red_alloy",288))
		.itemOutputs("ae2:formation_core")
		.EUt(480)
		.duration(20*20);
	greg.assembler("gfs:annihilation_core")
		.itemInputs("#gtceu:circuits/ulv","2x #forge:dusts/fluix",
			"#forge:gems/quartz", "ae2:logic_processor")
		.inputFluids(Fluid.of("gtceu:red_alloy",288))
		.itemOutputs("ae2:annihilation_core")
		.EUt(480)
		.duration(20*20);

	greg.circuit_assembler("gfs:formation_better")
		.itemInputs("#gtceu:circuits/lv","4x #forge:dusts/fluix",
			"2x #forge:gems/certus_quartz", "ae2:logic_processor")
		.inputFluids(Fluid.of("gtceu:red_alloy",288*2))
		.itemOutputs("2x ae2:formation_core")
		.EUt(480)
		.duration(10*20);
	greg.circuit_assembler("gfs:annihilation_better")
		.itemInputs("#gtceu:circuits/lv","4x #forge:dusts/fluix",
			"2x #forge:gems/quartz", "ae2:logic_processor")
		.inputFluids(Fluid.of("gtceu:red_alloy",288*2))
		.itemOutputs("2x ae2:annihilation_core")
		.EUt(480)
		.duration(10*20);



	/*
        realistic ae2:
            Breaker Core Components:
            Quantum Field Generator:
            Creates plasma field that can contain dense energy.
            Creation: This can be made by using superconducting materials to create strong magnetic fields through the Meissner effect. By applying alternating currents in coils, we can generate a plasma field capable of containing dense energy.

            Plasma Field Containment:
            Generates magnetic fields to contain the energy for formation.
                                                                    Creation: Employ magnetic confinement techniques like those used in tokamaks or stellarators, using superconducting magnets to generate toroidal magnetic fields that can stabilize and contain plasma at high temperatures.

            Atomic Destabilizer:
            Uses energy to break atomic bonds, decomposing matter into particles.
            Creation: Develop a system that utilizes high-powered lasers or focused particle beams to provide energy that can break atomic bonds. This could involve using a femtosecond laser to precisely target and heat atomic bonds to induce breakdown without damaging surrounding material.

            Energy Extraction Circuit:
            Converts extracted particles into a storable electrical form.
            Creation: Utilize a combination of particle detectors (like scintillation counters) and high-speed analog-to-digital converters to convert the extracted particles' kinetic energy into electrical energy. This could also involve thermoelectric generators that convert heat from the decay process into electricity.

        Energy Packet Manager:
            Organizes and regulates energy packets for efficient storage.
            Creation: Design a smart energy management system with microcontrollers that can monitor and organize energy packets. Incorporate capacitor banks that can rapidly charge and discharge to store energy effectively and balance load requirements.

            Photon Compressor:
            Compresses energy into a denser form for compact energy storage.
            Creation: Implement an optical resonator using fiber optics or mirrors to reflect and focus light. Utilize nonlinear optical materials that can compress light pulses (such as KTP crystals) to produce high-intensity pulses suitable for energy compression.


            Maker Core Components:

            Quantum Field Generator:
            (same as in Breaker Core)

        Plasma Field Containment:
            (same as in Breaker Core)

        Quantum Decompressor:
            Expands compressed energy to its original form for particle creation.
            Creation: This can be designed as a superconducting quantum interference device (SQUID) that can manipulate quantum states to expand energy back into its original form, using resonant frequency techniques to control energy states.

            Energy Stabilizer:
            Ensures energy packets are stable during formation.
            Creation: Implement a control circuit with feedback loops that monitor energy stability. This could include real-time monitoring sensors to adjust energy delivery rates dynamically, ensuring stable energy output during particle formation.

            Molecular Alignment Grid:
            Aligns atoms and molecules in precise configurations.
            Creation: Use electron beam lithography to create a finely structured grid at the nanoscale. Incorporate optical tweezers to manipulate individual molecules into precise configurations during assembly.

            Quantum Coherence Field:
            Locks molecular bonds, ensuring they mirror the original structure.
            Creation: Develop a field using lasers or coherent light sources that maintain phase coherence, perhaps utilizing Bose-Einstein condensates to create a controlled environment that ensures molecular bonds remain aligned.

            Atomic Stabilizer:
            Uses energy to make atomic bonds, composing particles into matter.
            Creation: Use a controlled laser-induced plasma field to provide energy that stabilizes atomic bonds as they are formed. This could involve carefully timed pulsing of energy to encourage bonding while minimizing energy loss.
    */



});
