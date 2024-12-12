// prop stolen from atm 9 ... 8 .. 7 .. or idk

ServerEvents.recipes(event => {
    let tiers = [
        {gen: 'cobblefordays:tier_1', material: '#minecraft:logs'},
        {gen: 'cobblefordays:tier_2', material: '#forge:cobblestone'},
        {gen: 'cobblefordays:tier_3', material: '#forge:storage_blocks/iron'},
        {gen: 'cobblefordays:tier_4', material: '#forge:storage_blocks/gold'},
        {gen: 'cobblefordays:tier_5', material: '#forge:storage_blocks/diamond'}
    ];
    let lava = Ingredient.of('minecraft:lava_bucket');
    let water = Ingredient.of('minecraft:water_bucket');
    if (Platform.isLoaded('ceramicbucket')) {
        lava = Ingredient.of(['minecraft:lava_bucket', Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}').weakNBT()])
        water = Ingredient.of(['minecraft:water_bucket', Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT()])
    }
    tiers.forEach((tier, index) => {
        event.remove({id: tier.gen})
        event.shaped(tier.gen, ['OOO', 'WIL', 'OOO'], {
            O: tier.material,
            W: water,
            L: lava,
            I: index > 0 ? tiers[index - 1].gen : '#forge:glass'
        }).id(`gfs:${tier.gen.replace(':', '/')}`)
    });
});