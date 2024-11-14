
priority: 80


// Omnium, Infinity, and Monium have animations and thus custom material icon sets.
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('omnium').parent(SHINY);
    event.create('infinity').parent(SHINY);
    event.create('monium').parent(SHINY);
    event.create('perfect').parent(SHINY);
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('perfect')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.getByName('perfect'))
        .generationCondition(ItemGenerationCondition.hasGemProperty)
})

GTCEuStartupEvents.registry('gtceu:material_icon_type', event => {
    event.create('perfect')
})


