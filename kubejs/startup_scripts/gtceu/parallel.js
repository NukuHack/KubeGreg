
// Giga, Omega Parallel Hatches
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create(
        "uhv_parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UHV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_mk9"))

    event.create(
        "uev_parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UEV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_mk10"))

    // uiv opv max
})