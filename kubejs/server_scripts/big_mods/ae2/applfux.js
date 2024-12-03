ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    event.remove({mod: "appflux"});

    event.shapeless("appflux:part_flux_accessor", "appflux:flux_accessor");
    event.shapeless("appflux:flux_accessor", "appflux:part_flux_accessor");

    // need to make the cells and the inscriber stuff, also the storage and energy acceptor and the card

});
