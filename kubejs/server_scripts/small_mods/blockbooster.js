// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {



    event.remove({output: 'blockbooster:booster_mana'});
    event.replaceInput({output: "blockbooster:booster_t2"}, "minecraft:clock", "blockbooster:booster_t1");


// fin //

})