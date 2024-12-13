ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    const dyes = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black",
    ];
    event.remove({mod: "elevatorid"});
    dyes.forEach((dyes) => {
        greg
            .chemical_bath(`gfs:${dyes}_elevator`)
            .itemInputs("elevatorid:elevator_white")
            .inputFluids(`gtceu:${dyes}_dye 18"`)
            .itemOutputs(`elevatorid:elevator_${dyes}`)
            .duration(5 * 20)
            .EUt(30);
    });
    greg
        .chemical_bath("gfs:elevator_washing")
        .itemInputs("#elevatorid:elevators")
        .inputFluids("gtceu:chlorine 50")
        .itemOutputs("elevatorid:elevator_white")
        .duration(10 * 20)
        .EUt(30);

    greg
        .chemical_bath("gfs:elevator_basic")
        .itemInputs("#forge:frames/stainless_steel", "4x #forge:plates/ender_pearl", "4x #forge:rods/stainless_steel",
            "4x #forge:small_gears/stainless_steel", "2x #forge:gears/stainless_steel", "4x #forge:plates/stainless_steel", "4x #forge:screws/stainless_steel")
        .inputFluids("gtceu:ender_air 100")
        .itemOutputs("elevatorid:elevator_white")
        .duration(30 * 20)
        .EUt(120);
});
