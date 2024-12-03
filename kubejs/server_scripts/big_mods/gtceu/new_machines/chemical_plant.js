ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    greg.assembly_line('gfs:chemical_plant_controller')
        .itemInputs('gtceu:zpm_machine_hull', '4x gtceu:zpm_electric_motor', 'gtceu:naquadah_alloy_rotor', '2x gtceu:niobium_titanium_large_fluid_pipe', '4x #gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288', 'gtceu:polyether_ether_ketone 1008')
        .itemOutputs('gtceu:chemical_plant')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UV]);

    greg.assembler('gfs:peek_casing')
        .itemInputs('gtceu:robust_machine_casing')
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .itemOutputs('gfs:peek_casing')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV]);

    greg.chemical_plant('gfs:fluoroantimonic_acid')
        .itemInputs('gtceu:antimony_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .outputFluids('gtceu:fluoroantimonic_acid 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LuV]);

    greg.chemical_plant('gfs:polybenzimidazole_with_phenol')
        .inputFluids('gtceu:benzene 2000', 'gtceu:phenol 1000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(24)
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    greg.chemical_plant('gfs:polybenzimidazole_without_phenol')
        .inputFluids('gtceu:benzene 3000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 5000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(25)
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    greg.chemical_plant('gfs:plat_line')
        .itemInputs('6x gtceu:platinum_group_sludge_dust')
        .inputFluids('gtceu:aqua_regia 1500')
        .itemOutputs('gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust')
        .outputFluids('gtceu:nitric_acid 500', 'gtceu:hydrochloric_acid 1000')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    greg.chemical_plant('gfs:sulfuric_acid')
        .itemInputs('gtceu:sulfur_dust')
        .inputFluids('minecraft:water 4000')
        .outputFluids('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:hydrogen 6000')
        .duration(320)
        .EUt(480)
        .circuit(24);

    greg.chemical_plant('gfs:ptfe')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:fluorine 4000')
        .outputFluids('gtceu:tetrafluoroethylene 1000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.LuV]);

    greg.chemical_plant('gfs:epoxy')
        .inputFluids('gtceu:benzene 2000', 'gtceu:propene 2000', 'gtceu:chlorine 2000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:epoxy 1000', 'gtceu:hydrochloric_acid 1000')
        .duration(500)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    greg.chemical_plant('gfs:naquadah_line')
        .itemInputs('2x gtceu:naquadah_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 1000')
        .itemOutputs('gtceu:enriched_naquadah_dust', 'gtceu:naquadria_dust', 'gtceu:trinium_dust', 'gtceu:antimony_dust', 'gtceu:indium_phosphide_dust')
        .outputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    greg.chemical_plant('gfs:uraninite_processing')
        .itemInputs('15x #forge:dusts/uraninite')
        .inputFluids('gtceu:hydrofluoric_acid 20000')
        .inputFluids('gtceu:fluorine 10000')
        .outputFluids('gtceu:uranium_hexafluoride 30000')
        .outputFluids('minecraft:water 10000')
        .duration(80 * 20)
        .EUt(GTValues.VHA[GTValues.MV]);

    greg.chemical_plant('gfs:uranium_processing')
        .inputFluids('gtceu:uranium_hexafluoride 10000')
        .itemOutputs('1x #forge:dusts/uranium_235')
        .outputFluids('gtceu:fluorine 6000')
        .itemOutputs('9x #forge:dusts/uranium')
        .outputFluids(Fluid.of('gtceu:fluorine', 6000 * 9))
        .duration(40 * 20)
        .EUt(GTValues.VHA[GTValues.HV]);

});