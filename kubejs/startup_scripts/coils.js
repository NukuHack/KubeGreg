StartupEvents.registry('block', event => {
	
    event.create('mithril_coil_block', 'gtceu:coil')
        .temperature(12600)
        .level(16)
        .energyDiscount(16) // 
        .tier(8)
        .coilMaterial(() => GTMaterials.get('mithril'))
        .texture('gtceu:block/coils/machine_coil_mithril')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

    event.create('chadium_coil_block', 'gtceu:coil')
        .temperature(14400)
        .level(32)
        .energyDiscount(32) // 
        .tier(9)
        .coilMaterial(() => GTMaterials.get('chadium'))
        .texture('gtceu:block/coils/machine_coil_chadium')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

    event.create('awakened_draconium_coil_block', 'gtceu:coil')
        .temperature(16200)
        .level(32)
        .energyDiscount(32) // 
        .tier(9)
        .coilMaterial(() => GTMaterials.get('awakened_draconium'))
        .texture('gtceu:block/coils/machine_coil_awakened_draconium')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

    event.create('stellar_matter_coil_block', 'gtceu:coil')
        .temperature(18000)
        .level(32)
        .energyDiscount(32) // 
        .tier(9)
        .coilMaterial(() => GTMaterials.get('stellar_matter'))
        .texture('gtceu:block/coils/machine_coil_stellar_matter')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

    event.create('infinity_coil_block', 'gtceu:coil')
        .temperature(19800)
        .level(32)
        .energyDiscount(32) // 
        .tier(9)
        .coilMaterial(() => GTMaterials.get('infinity'))
        .texture('gtceu:block/coils/machine_coil_infinity')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');
	
    event.create('omnic_matrix_coil_block', 'gtceu:coil')
        .temperature(15000)
        .level(24)
        .energyDiscount(16)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('omnium'))
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType('metal');
	
    // Custom Coils
    event.create('zalloy_coil_block', 'gtceu:coil')
        .temperature(13499)
        .level(24)
        .energyDiscount(16)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('zalloy'))
        .textureAll('kubejs:block/coils/machine_coil_zalloy')
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .material('metal');

	
})