// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {


// rain_shield

    event.remove({mod: 'rainshield'})
    event.shaped('rainshield:rain_shield', [
            ' C ',
            ' A ',
            'BAB',
        ], {
            A: '#forge:rods/long/electrum',
            B: '#forge:plates/red_alloy',
            C: 'gtceu:lv_sensor',
        }
    )


// fin //

})