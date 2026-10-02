

// if a part of the js relies on another mod, you can add a comment like this to make sure it is loaded first
// *my creation*, perfected by the starT team

// big list
/** @typedef {'minecraft' | 'gtceu' | 'rechiseled' | 'thermal' | 'architects_palette' | 'chipped' | 'create' | 'kubejs' | 'kubejs_create' | 'kubejs_thermal' | 'xycraft_world' | 'chisel_chipped_integration' | 'start_core' | 'framedblocks' | 'ae2' | 'farmersdelight' | 'exnihilosequentia' | 'expatternprovider' | 'vintage' | 'fantasyfurniture' | 'projectred_illumination' | 'projectred_transmission' | 'copycats' | 'xtonesreworked' | 'functionalstorage' | 'megacells' | 'thermal_extra' | 'dustrial_decor' | 'expandedae' | 'rtsbuilding' | 'placeablemaxwell' | 'sgjourney' | 'rechiseledcreate' | 'jetboots' | 'buildinggadgets2' | 'toms_storage' | 'simplylight' | 'modularrouters' | 'projectred_core' | 'projectred_integration' | 'createdieselgenerators' | 'aeinfinitybooster' | 'simplybackpacks' | 'betterp2p' | 'expandedgt' | 'effortlessbuilding' | 'bingus' | 'create_new_age' | 'ftbquests' | 'itemfilters' | 'create_hypertube' | 'colossalchests' | 'merequester' | 'laserio' | 'fluxnetworks' | 'itemcollectors' | 'ae2wtlib' | 'patchouli' | 'trashcans' | 'cb_microblock' | 'systeams' | 'pipez' | 'createlowheated' | 'skyblockbuilder' | 'pccard' | 'guideme' | 'endertanks' | 'komarumod' | 'gravestone' | 'travelanchors' | 'enderchests' | 'ae2netanalyser' | 'woodenbucket' | 'curios'} Mod */
// this is fine too
/** @typedef {string} Mod */

/**
 * @param {Mod | Mod[]} mods The required mod/mods for this function to run
 * @param {() => void} [ifTrue] Function to execute if current mod is loaded'.
 * @param {() => void} [ifFalse] Function to execute if current mod is NOT loaded'.
 * @returns {void}
 */
global.withModsLoaded = (mods, ifTrue, ifFalse) => {
    mods = Array.isArray(mods) ? mods : [mods];

    if (mods.every((m) => Platform.isLoaded(m))) {
        if (typeof ifTrue === 'function') {
            ifTrue();
        } else
            console.error(
                `Succeeded mod loading requirements for mods: [${mods.join(', ')}]; Failed: Parsed function is not a function`
            );
    } else if (typeof ifFalse === 'function') {
        ifFalse();
        console.log(`Failed mod loading requirements for mods: [${mods.join(', ')}]; Loading negative case code`);
    } else console.log(`Failed mod loading requirements for mods: [${mods.join(', ')}]; Skipping code`);
};

// if a mod might be updated you can do that for each of it's items :

Item.exists("minecraft:stone") // true