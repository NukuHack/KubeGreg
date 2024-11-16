
// Giga, Omega Parallel Hatches
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create(
        "parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UHV
    )
        .rotationState(RotationState.ALL)
        .tooltips(Component.translatable("tip.gfs.uhv_parallel"))
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_mk9"))

    event.create(
        "parallel_hatch_e",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UEV
    )
        .rotationState(RotationState.ALL)
        .tooltips(Component.translatable("tip.gfs.uev_parallel"))
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_mk10"))

    // uiv opv max
})