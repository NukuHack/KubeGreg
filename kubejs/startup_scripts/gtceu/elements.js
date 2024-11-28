
priority: 60

GTCEuStartupEvents.registry('gtceu:element', event => {
/*
    Elements are the base of gt materials. Registering an element WILL NOT add any items.
    To make a new element(NOTE: you can add only elements that are NOT present on the periodic table),
    write an 'event.create()` call in the bellow registering function.
    Inside the parantheses the following parameters are introduced:
        1. Element Name -> use '' or "" to write the material name.
        2. Proton Count(use -1 if it is not an element that will get a material).
        3. Neutron Count(use -1 if it is not an element that will get a material).
        4. Half Life Seconds(decay stuff. Use -1).
        5. Material to decay to(more decay stuff. Use null).
        6. Atomic Symbol(what will be displayed as in chemical formulas) -> use '' or "" to write the atomic symbol.
        7. Is isotope(even more decay stuff. Use false)
*/

    // For the material that will have ? as it's atomic symbol in chemical formulas
    event.create('mystery', -1, -1, -1, null, '?', false);

    // Netherite Line
    event.create('debris', -1, -1, -1, null, '?', false);
    event.create('pure_netherite', 124, 345, -1, null, 'Nr', false);
    event.create('activated_netherite', 124, 345, -1, null, '*Nr*', false);

    // endgame stuff
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('infinity', 168, 316, -1, null, '∞', false);
    event.create('monium', 69, 420, -1, null, 'Mu', false);
    event.create('crystal_matrix', 6, 6, -1, null, 'C*', false);
    event.create('cryolobus', 149, 234, -1, null, 'Cy', false);
    event.create('cryococcus', 149, 264, -1, null, 'Cy*', false);

    // other extra
    event.create('draconium', 35, 185, -1, null, 'דְרָקוֹן', false);
    event.create('awakened_draconium', 36, 186, -1, null, 'לִויָתָן', false);
    event.create('void', 39, 189, -1, null, 'χάος', false);

    event.create('mana',            -1, -1, -1, null, '★', false);
    event.create('stardust',            -1, -1, -1, null, 'Sd', false);
    event.create('creativity',      -1, -1, -1, null, 'Create', false);
    event.create('ember',           -1, -1, -1, null, '🔥', false);
    event.create('wissen',          -1, -1, -1, null, '⚙', false);

});
