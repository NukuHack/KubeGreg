// Listen to player login event
PlayerEvents.loggedIn( event => {

    const player_name = event.player.getName().getString()              //assign player name string to player_name

    console.log("Curios check for " + player_name)                      //log message that prints to \logs\kubejs\server.log

    // Check if player doesn't have "curios_slots_added" stage yet. Players joining the server for the first time will not have this stage
    if (!event.player.stages.has('curios_slots_added')) {

        event.player.stages.add('curios_slots_added')                     // Add the stage so this doesn't trigger again next time the same player joins

        console.log("Adding curios for " + player_name)                   //log message that prints to \logs\kubejs\server.log

        event.server.runCommandSilent("curios add belt " + player_name)   //server runs a command that adds an aditional belt slot to the new player
        event.server.runCommandSilent("curios add ring " + player_name)   //server runs a command that adds an aditional ring slot to the new player
        event.server.runCommandSilent("curios add ring " + player_name)
        event.server.runCommandSilent("curios add ring " + player_name)
        //event.server.runCommandSilent("curios remove head " + player_name)//server runs a command that removes a head slot from the new player

        //List of preset slots at this link https://docs.illusivesoulworks.com/curios/preset-slots
    }
})
