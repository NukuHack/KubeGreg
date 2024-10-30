ServerEvents.recipes(event => {

	const greg = event.recipes.gtceu;

	// random useful stuff

// sulfuric acid from sulfur
event.remove({id:"gtceu:large_chemical_reactor/sulfuric_acid_from_sulfur"});
greg
.large_chemical_reactor('gfs:sulfuric_acid')
.itemInputs('#forge:dusts/sulfur')
.inputFluids(Fluid.of('minecraft:water', 4000))
.outputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 4000))
.duration(16*20)
.circuit(24)
.EUt(480);

// methane from co2

greg
.large_chemical_reactor('gfs:methane_f_co2')
.inputFluids(Fluid.of('gtceu:hydrogen', 4000)) // 4 H
.inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000)) // C 2O
.outputFluids(Fluid.of('gtceu:methane', 1000)) // CH4
.outputFluids(Fluid.of('gtceu:oxygen', 2000)) // 2O
.duration(30*20)
.circuit(24)
.EUt(30);

// co from methane

greg
.large_chemical_reactor('gfs:co_f_methane')
.inputFluids(Fluid.of('gtceu:methane', 1000)) // CH4
.inputFluids(Fluid.of('minecraft:water', 1000)) // H2 O
.outputFluids(Fluid.of('gtceu:hydrogen', 6000)) // 6 H
.outputFluids(Fluid.of('gtceu:carbon_monoxide', 1000)) // C O
.duration(10*20)
.circuit(2)
.EUt(480);



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



	// Galium + Sodium stuffs



// sodium hydroxide from dust
event.remove({id:"gtceu:extractor/extract_sodium_hydroxide_dust"});
greg
.extractor('gfs:sodium_hydroxide_f_dust')
.itemInputs('#forge:dusts/sodium_hydroxide')
.outputFluids(Fluid.of('gtceu:sodium_hydroxide', 500))
.duration(10*20)
.EUt(120);

// sodium hydroxide from sodium

greg
.large_chemical_reactor('gfs:sodium_hydroxide')
.itemInputs('#forge:dusts/sodium')
.inputFluids(Fluid.of('minecraft:water', 1000))
.outputFluids(Fluid.of('gtceu:sodium_hydroxide', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
.duration(20*20)
.EUt(120);

// sodium hydroxide from sodium chloride

greg
.large_chemical_reactor('gfs:sodium_hydroxide_f_chloride')
.inputFluids(Fluid.of('gtceu:salt', 1000))					// NaCl
.inputFluids(Fluid.of('minecraft:water', 1000))				// H2O
.outputFluids(Fluid.of('gtceu:sodium_hydroxide', 1000))		// NaHO
.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))	// HCl
.duration(20*20)
.EUt(120);

// sodium hydroxide from sodium chloride

greg
.chemical_reactor('gfs:sodium_hydroxide_f_chloride')
.inputFluids(Fluid.of('gtceu:salt', 1000))					// NaCl
.inputFluids(Fluid.of('minecraft:water', 1000))				// H2O
.outputFluids(Fluid.of('gtceu:sodium_hydroxide', 1000))		// NaHO
.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))	// HCl
.duration(20*20)
.EUt(200);

// process sodium_hydroxide_residue

greg
.electrolyzer('gfs:sodium_hydroxide_residue')
.inputFluids(Fluid.of('gtceu:sodium_hydroxide_residue', 1000))
.itemOutputs('#forge:dusts/sodium_hydroxide')
.outputFluids(Fluid.of('gtceu:oxygen', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
.itemOutputs('#forge:small_dusts/gallium')
.circuit(1)
.duration(10*20)
.EUt(30);

// process sodium_hydroxide_residue 2

greg
.electrolyzer('gfs:sodium_hydroxide_residue_big')
.inputFluids(Fluid.of('gtceu:sodium_hydroxide_residue', 4000))
.itemOutputs('4x #forge:dusts/sodium_hydroxide')
.outputFluids(Fluid.of('gtceu:oxygen', 4000))
.outputFluids(Fluid.of('gtceu:hydrogen', 4000))
.itemOutputs('#forge:dusts/gallium')
.circuit(2)
.duration(20*20)
.EUt(30);
/*
// sodium hydrogen sulfite from sulfuric acid liquid

greg
.large_chemical_reactor('gfs:sodium_bisulfate_liquid')
.inputFluids(Fluid.of('gtceu:sodium_hydroxide', 1000))	// Na O H
.inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))	// 2H S 4O
.outputFluids(Fluid.of('gtceu:sodium_bisulfate', 1000))	// Na H S O4
.outputFluids(Fluid.of('minecraft:water', 1000))
.duration(20*20)
.EUt(120);

// sodium hydrogen sulfite from sulfuric acid

greg
.large_chemical_reactor('gfs:sodium_bisulfate')
.itemInputs(Item.of('gtceu:sodium_hydroxide_dust'))	// Na O H
.inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))	// 2H S 4O
.outputFluids(Fluid.of('gtceu:sodium_bisulfate', 1000))	// Na H S O4
.outputFluids(Fluid.of('minecraft:water', 1000))
.duration(30*20)
.EUt(120);

// sodium hydrogen sulfite from sodium chlorid

greg
.large_chemical_reactor('gfs:sodium_bisulfate_f_sodium_chlorid')
.inputFluids(Fluid.of('gtceu:salt', 1000))	// Na Cl
.inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))	// 2H S 4O
.outputFluids(Fluid.of('gtceu:sodium_bisulfate', 1000))	// Na H S O4
.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
.duration(20*20)
.EUt(120);
*/
// sodium_chlorid = salt

greg
.large_chemical_reactor('gfs:sodium_chlorid')
.itemInputs('#forge:dusts/sodium')
.inputFluids(Fluid.of('gtceu:chlorine', 1000))
.outputFluids(Fluid.of('gtceu:salt', 1000))
.duration(15*20)
.EUt(120);

// sodium_chlorid

greg
.chemical_reactor('gfs:sodium_chlorid')
.itemInputs('#forge:dusts/sodium')
.inputFluids(Fluid.of('gtceu:chlorine', 1000))
.outputFluids(Fluid.of('gtceu:salt', 1000))
.duration(15*20)
.EUt(120);
/*
// sodium_bisulfate separating
greg
.electrolyzer('gfs:sodium_bisulfate')
.inputFluids(Fluid.of('gtceu:sodium_bisulfate', 1000))
.outputFluids(Fluid.of('gtceu:sodium_persulfate', 500))
.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
.duration(10*20)
.EUt(60);

// sodium_bisulfate from dust
event.remove({id:"gtceu:extractor/extract_sodium_bisulfate_dust"});
greg
.extractor('gfs:sodium_bisulfate_f_dust')
.itemInputs('7x #forge:dusts/sodium_bisulfate')
.outputFluids(Fluid.of('gtceu:sodium_bisulfate', 1000))
.duration(10*20)
.EUt(120);
*/




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	// Iron III Chloride




// iron ii chloride

greg
.chemical_reactor('gfs:iron_ii_chloride')
.itemInputs('#forge:dusts/iron')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
.outputFluids(Fluid.of('gtceu:iron_ii_chloride', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 2000))
.circuit(2)
.duration(15*20)
.EUt(120);

// iron ii chloride

greg
.large_chemical_reactor('gfs:iron_ii_chloride')
.itemInputs('#forge:dusts/iron')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
.outputFluids(Fluid.of('gtceu:iron_ii_chloride', 1000))
.outputFluids(Fluid.of('gtceu:hydrogen', 2000))
.circuit(2)
.duration(15*20)
.EUt(120);

// iron ii chloride f iii

greg
.large_chemical_reactor('gfs:3iron_ii_chloride_f_2iii')
.itemInputs('#forge:dusts/iron')
.inputFluids(Fluid.of('gtceu:iron_iii_chloride', 2000))
.outputFluids(Fluid.of('gtceu:iron_ii_chloride', 3000))
.duration(40*20)
.EUt(120);
/*
// iron ii chloride f iii excess SCl2

greg
.large_chemical_reactor('gfs:2iron_ii_chloride_f_2iii_e')
.itemInputs('#forge:dusts/sulfur')
.inputFluids(Fluid.of('gtceu:iron_iii_chloride', 2000))
.outputFluids(Fluid.of('gtceu:iron_ii_chloride', 2000))
.outputFluids(Fluid.of('gtceu:sulfur_dichloride', 1000))
.duration(40*20)
.EUt(120);

// hydrated iron iii chloride f iron ii chloride

greg
.large_chemical_reactor('gfs:hy_iron_iii_chloride_f_ii')
.inputFluids(Fluid.of('gtceu:iron_ii_chloride', 1000))
.inputFluids(Fluid.of('gtceu:chlorine', 1000))
.inputFluids(Fluid.of('minecraft:water', 6000))
.outputFluids(Fluid.of('gtceu:hydrated_iron_iii_chloride', 1000))
.duration(10*20)
.EUt(120);

// hydrated iron iii chloride f elements

greg
.large_chemical_reactor('gfs:hy_iron_iii_chloride_f_element')
.itemInputs('#forge:dusts/hematite')								// Fe2O3
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 6000))				// HCl
.inputFluids(Fluid.of('minecraft:water', 9000))						// H2O
.outputFluids(Fluid.of('gtceu:hydrated_iron_iii_chloride', 2000))	// 2 FeCl3·6H2O
.duration(20*20)
.EUt(120);

// iron iii chloride f hydrated by thionyl_chloride

greg
.large_chemical_reactor('gfs:iron_iii_chloride_f_hy_by_thionly')
.inputFluids(Fluid.of('gtceu:hydrated_iron_iii_chloride', 1000))//FeCl3·6H2O
.inputFluids(Fluid.of('gtceu:thionyl_chloride', 6000))			//6 SOCl2
.outputFluids(Fluid.of('gtceu:iron_iii_chloride', 1000))		//FeCl3
.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 6000))			//6 SO2
.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 12000))		//12 HCl
.duration(20*20)
.EUt(120);

// iron iii chloride f hydrated by carbon

greg
.large_chemical_reactor('gfs:iron_iii_chloride_f_hy_by_carbon')
.inputFluids(Fluid.of('gtceu:hydrated_iron_iii_chloride', 1000))//FeCl3·6H2O
.itemInputs('6x #forge:dusts/carbon')							//6 C
.inputFluids(Fluid.of('gtceu:chlorine', 12000))					//12 Cl
.outputFluids(Fluid.of('gtceu:iron_iii_chloride', 1000))		//FeCl3
.outputFluids(Fluid.of('gtceu:carbon_monoxide', 6000))			//6 CO
.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 12000))		//12 HCl
.duration(40*20)
.EUt(480);

// thionyl_chloride f sulfur_dichloride

greg
.large_chemical_reactor('gfs:thionyl_chloride_f_sulfur_dichloride')
.inputFluids(Fluid.of('gtceu:sulfur_trioxide', 1000))	//SO3
.inputFluids(Fluid.of('gtceu:sulfur_dichloride', 1000))	//SCl2
.outputFluids(Fluid.of('gtceu:thionyl_chloride', 1000))	//SOCl2
.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))	//SO2
.duration(20*20)
.EUt(120);

// thionyl_chloride f sulfur_dichloride

greg
.chemical_reactor('gfs:thionyl_chloride_f_sulfur_dichloride')
.inputFluids(Fluid.of('gtceu:sulfur_trioxide', 1000))	//SO3
.inputFluids(Fluid.of('gtceu:sulfur_dichloride', 1000))	//SCl2
.outputFluids(Fluid.of('gtceu:thionyl_chloride', 1000))	//SOCl2
.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))	//SO2
.duration(20*20)
.EUt(120);

// 2 thionyl_chloride f sulfur_dichloride

greg
.large_chemical_reactor('gfs:2thionyl_chloride_f_sulfur_dichloride')
.inputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))	//SO2
.inputFluids(Fluid.of('gtceu:chlorine', 2000))			//2 Cl
.inputFluids(Fluid.of('gtceu:sulfur_dichloride', 1000))	//SCl2
.outputFluids(Fluid.of('gtceu:thionyl_chloride', 2000))	//2 SOCl2
.duration(25*20)
.EUt(120);

// 2 thionyl_chloride f sulfur_dichloride

greg
.chemical_reactor('gfs:2thionyl_chloride_f_sulfur_dichloride')
.inputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))	//SO2
.inputFluids(Fluid.of('gtceu:chlorine', 2000))			//2 Cl
.inputFluids(Fluid.of('gtceu:sulfur_dichloride', 1000))	//SCl2
.outputFluids(Fluid.of('gtceu:thionyl_chloride', 2000))	//2 SOCl2
.duration(25*20)
.EUt(120);

// 3thionyl_chloride f 2sulfur_dichloride

greg
.large_chemical_reactor('gfs:3thionyl_chloride_f_2sulfur_dichloride')
.inputFluids(Fluid.of('gtceu:sulfur_trioxide', 1000))	//SO3
.inputFluids(Fluid.of('gtceu:chlorine', 2000))			//2 Cl
.inputFluids(Fluid.of('gtceu:sulfur_dichloride', 2000))	//2 SCl2
.outputFluids(Fluid.of('gtceu:thionyl_chloride', 3000))	//3 SOCl2
.duration(30*20)
.EUt(120);

// thionyl_chloride break

greg
.large_chemical_reactor('gfs:thionyl_chloride_break')
.inputFluids(Fluid.of('gtceu:thionyl_chloride', 1000))	//SOCl2
.inputFluids(Fluid.of('minecraft:water', 1000))			//H2O
.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))//2 HCl
.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))	//SO2
.duration(20*20)
.EUt(120);

// sulfur_dichloride

greg
.large_chemical_reactor('gfs:sulfur_dichloride_f_element')
.itemInputs('4x #forge:dusts/sulfur')
.inputFluids(Fluid.of('gtceu:chlorine', 8000))
.outputFluids(Fluid.of('gtceu:sulfur_dichloride', 4000))
.duration(90*20)
.EUt(120);

// sulfur_dichloride f salt

greg
.large_chemical_reactor('gfs:sulfur_dichloride_f_sulfur_chlorid')
.inputFluids(Fluid.of('gtceu:sulfur_chlorid', 1000))
.inputFluids(Fluid.of('gtceu:chlorine', 1000))
.outputFluids(Fluid.of('gtceu:sulfur_dichloride', 1000))
.duration(10*20)
.EUt(120);

// sulfur_chlorid 

greg
.chemical_reactor('gfs:sulfur_chlorid')
.itemInputs('4x #forge:dusts/sulfur')
.inputFluids(Fluid.of('gtceu:chlorine', 1000))
.outputFluids(Fluid.of('gtceu:sulfur_chlorid', 1000))
.duration(10*20)
.EUt(120);

// sulfur_chlorid 

greg
.large_chemical_reactor('gfs:sulfur_chlorid')
.itemInputs('4x #forge:dusts/sulfur')
.inputFluids(Fluid.of('gtceu:chlorine', 1000))
.outputFluids(Fluid.of('gtceu:sulfur_chlorid', 1000))
.duration(10*20)
.EUt(120);
*/





//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



	// rest of the random useful stuff


// netherite scrap

greg
.forge_hammer('gfs:nether_scrap')
.itemInputs('4x gtceu:double_strong_mix_plate')
.itemOutputs('minecraft:netherite_scrap')
.duration(10*20)
.EUt(500);

// strong from all mixing

greg.mixer('gfs:strong_mix')
  .itemInputs('2x #forge:dusts/platinum','2x #forge:dusts/palladium',
	'#forge:dusts/palladium_raw',"#forge:dusts/diamond")
  .inputFluids(Fluid.of('gtceu:black_steel', 576))
  .inputFluids(Fluid.of('gtceu:blue_steel', 576))
  .itemOutputs('4x #forge:dusts/strong_mix')
  .duration(20*20)
  .EUt(200);



});
