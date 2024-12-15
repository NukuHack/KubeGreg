ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;


    // lol assembler assembler

    ["lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv"].forEach((volt,index) => {
            greg.assembler(`gfs:${volt}_assembler`)
                .itemInputs(`2x gtceu:${volt}_robot_arm`)
                .itemInputs(`2x gtceu:${volt}_conveyor_module`)
                .itemInputs(`gtceu:${volt}_machine_hull`)
                .itemInputs(`2x #gtceu:circuits/${volt}`)
                .itemInputs(`2x gtceu:${volt_to_cable[volt]}_single_${index<9?"cable":"wire"}`)
                .itemOutputs(`gtceu:${volt}_assembler`)
                .duration(400)
                .EUt(voltage_to_eu[volt] / 4);
	});


});
