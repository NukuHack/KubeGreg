/*
* machines.js - Add recipes for our new machines.
*/
ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    event.remove({ output: "gtceu:hp_steam_solid_boiler" });
// hp_steam_solid_boiler

    event.shaped('gtceu:hp_steam_solid_boiler', [
            'AAA',
            'ABA',
            'CDC',
        ], {
            A: '#forge:plates/steel',
            B: 'minecraft:furnace',
            C: '#forge:plates/rubber',
            D: 'gtceu:lp_steam_solid_boiler',
        }
    )

    event.remove({ output: "gtceu:hp_steam_liquid_boiler" });
// hp_steam_solid_boiler

    event.shaped('gtceu:hp_steam_liquid_boiler', [
            'AAA',
            'ABA',
            'CDC',
        ], {
            A: '#forge:plates/steel',
            B: 'minecraft:glass',
            C: '#forge:plates/rubber',
            D: 'gtceu:lp_steam_liquid_boiler',
        }
    )


    event.remove({ output: "gtceu:hp_steam_solar_boiler" });
// hp_steam_solid_boiler

    event.shaped('gtceu:hp_steam_solar_boiler', [
            'AAA',
            'ABA',
            'CDC',
        ], {
            A: '#forge:plates/steel',
            B: '#forge:plates/silver',
            C: '#forge:plates/rubber',
            D: 'gtceu:lp_steam_solar_boiler',
        }
    )

    event.remove({ output: "gtceu:lv_bender" });
// lv_bender

    event.shaped('gtceu:lv_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:lv_electric_piston',
            B: '#forge:double_plates/steel',
            C: '#gtceu:circuits/lv',
            D: 'gtceu:lv_machine_hull',
            E: 'gtceu:lv_electric_motor',
            F: 'gtceu:tin_single_cable',
        }
    )

    event.remove({ output: "gtceu:mv_bender" });
// mv_bender

    event.shaped('gtceu:mv_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:mv_electric_piston',
            B: '#forge:double_plates/aluminium',
            C: '#gtceu:circuits/mv',
            D: 'gtceu:mv_machine_hull',
            E: 'gtceu:mv_electric_motor',
            F: 'gtceu:copper_single_cable',
        }
    )

    event.remove({ output: "gtceu:hv_bender" });
// hv_bender

    event.shaped('gtceu:hv_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:hv_electric_piston',
            B: '#forge:double_plates/stainless_steel',
            C: '#gtceu:circuits/hv',
            D: 'gtceu:hv_machine_hull',
            E: 'gtceu:hv_electric_motor',
            F: 'gtceu:gold_single_cable',
        }
    )

    event.remove({ output: "gtceu:ev_bender" });
// ev_bender

    event.shaped('gtceu:ev_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:ev_electric_piston',
            B: '#forge:double_plates/titanium',
            C: '#gtceu:circuits/ev',
            D: 'gtceu:ev_machine_hull',
            E: 'gtceu:ev_electric_motor',
            F: 'gtceu:aluminium_single_cable',
        }
    )

    event.remove({ output: "gtceu:iv_bender" });
// iv_bender

    event.shaped('gtceu:iv_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:iv_electric_piston',
            B: '#forge:double_plates/tungsten_steel',
            C: '#gtceu:circuits/iv',
            D: 'gtceu:iv_machine_hull',
            E: 'gtceu:iv_electric_motor',
            F: 'gtceu:platinum_single_cable',
        }
    )

    event.remove({ output: "gtceu:luv_bender" });
// luv_bender

    event.shaped('gtceu:luv_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:luv_electric_piston',
            B: '#forge:double_plates/rhodium_plated_palladium',
            C: '#gtceu:circuits/luv',
            D: 'gtceu:luv_machine_hull',
            E: 'gtceu:luv_electric_motor',
            F: 'gtceu:platinum_single_cable',
        }
    )

    event.remove({ output: "gtceu:zpm_bender" });
// zpm_bender

    event.shaped('gtceu:zpm_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:zpm_electric_piston',
            B: '#forge:double_plates/naquadah_alloy',
            C: '#gtceu:circuits/zpm',
            D: 'gtceu:zpm_machine_hull',
            E: 'gtceu:zpm_electric_motor',
            F: 'gtceu:platinum_single_cable',
        }
    )

    event.remove({ output: "gtceu:uv_bender" });
// uv_bender

    event.shaped('gtceu:uv_bender', [
            'ABA',
            'CDC',
            'EFE',
        ], {
            A: 'gtceu:uv_electric_piston',
            B: '#forge:double_plates/darmstadtium',
            C: '#gtceu:circuits/uv',
            D: 'gtceu:uv_machine_hull',
            E: 'gtceu:uv_electric_motor',
            F: 'gtceu:platinum_single_cable',
        }
    )



// Inscribers


// Create machine recipes for a specific voltage
    voltages.forEach((volt, index) => {
        if (!(index>7)&&index>1) {
            event.shaped(
                "gtceu:" + volt + "_inscriber",
                ["AXA", "BYC", "DED"],
                {
                    A: `gtceu:${volt}_electric_piston`,
                    X: `ae2:inscriber`,
                    B: `gtceu:${volt}_robot_arm`,
                    Y: `gtceu:${volt}_machine_hull`,
                    C: `gtceu:${volt}_conveyor_module`,
                    D: `#gtceu:circuits/${volt}`,
                    E: `gtceu:${voltage_to_cable[volt]}_single_cable`
                }
            );
        }
    });

});