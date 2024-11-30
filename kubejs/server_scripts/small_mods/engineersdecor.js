ServerEvents.recipes(event => {


    event.remove({mod: 'engineersdecor', not: {output: 'engineersdecor:metal_bar'}});


    event.shaped("4x engineersdecor:steel_catwalk",
        ["X X", " X ", "X X"], {
            X: "engineersdecor:metal_bar"
        });

    event.shaped("4x engineersdecor:steel_railing",
        ["XXX", "X X", "X X"], {
            X: "engineersdecor:metal_bar"
        });

    event.shaped("6x engineersdecor:metal_rung_steps",
        ["XXX", "XXX", "   "], {
            X: "engineersdecor:metal_bar"
        });

    event.shaped("4x engineersdecor:steel_catwalk_stairs",
        ["X  ", "BX ", " BX"], {
            X: "engineersdecor:steel_catwalk",
            B: "engineersdecor:metal_bar"
        });

});
