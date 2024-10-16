ServerEvents.recipes((event) => {

  const greg = event.recipes.gtceu;


    greg.assembler("gtceu:blank_pattern")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polyethylene",
            "4x #forge:fine_wires/red_alloy",
            "ae2:engineering_processor")
        .itemOutputs("ae2:blank_pattern")
        .inputFluids("gtceu:glass 144")
        .duration(200)
        .EUt(120)

    greg.assembler("gtceu:blank_pattern_good")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polyvinyl_chloride",
            "4x #forge:fine_wires/red_alloy",
            "ae2:engineering_processor")
        .itemOutputs("4x ae2:blank_pattern")
        .inputFluids("gtceu:glass 288")
        .duration(200)
        .EUt(120)

    greg.assembler("gtceu:blank_pattern_better")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polytetrafluoroethylene",
            "4x #forge:fine_wires/red_alloy",
            "ae2:engineering_processor")
        .itemOutputs("16x ae2:blank_pattern")
        .inputFluids("gtceu:glass 576")
        .duration(200)
        .EUt(480)

    greg.assembler("gtceu:blank_pattern_best")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polybenzimidazole",
            "4x #forge:fine_wires/red_alloy",
            "ae2:engineering_processor")
        .itemOutputs("64x ae2:blank_pattern")
        .inputFluids("gtceu:glass 1152")
        .duration(200)
        .EUt(480)

});