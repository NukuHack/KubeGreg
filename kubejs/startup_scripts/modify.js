ItemEvents.modification(event => {
    event.modify('gtceu:wrought_iron_ingot', item => {
        item.maxStackSize = 64
        item.fireResistant = true
        item.rarity = "UNCOMMON"
    })
    event.modify('minecraft:iron_ingot', item => {
        item.maxStackSize = 64
        item.fireResistant = true
        item.rarity = "UNCOMMON"
    })
    event.modify('gtceu:charcoal_dust', item => {
        item.maxStackSize = 64
        item.fireResistant = true
        item.rarity = "UNCOMMON"
    })
    /*
    // Make Infinity and Ultimate tools work as unbreakable crafting tools
    const toolTypes = [
        'file',
        'hammer',
        'screwdriver',
        'wrench',
        'wire_cutter'
    ]
    toolTypes.forEach(type => {
        event.modify('gfs:infinity_' + type, item => { item.craftingRemainder = Item.of('gfs:infinity_' + type).item })
        event.modify('gfs:ultimate_' + type, item => { item.craftingRemainder = Item.of('gfs:ultimate_' + type).item })
    })
	*/
})