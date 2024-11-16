ServerEvents.recipes(event => {
	
const greg = event.recipes.gtceu;
	
    //Reactor Crafting
    greg.assembly_line('gfs:naquadah_reactor_i')
        .itemInputs('gtceu:computer_monitor_cover', '3x gtceu:fusion_casing', '#gtceu:circuits/zpm', '2x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 32')
        .itemOutputs('gtceu:naquadah_reactor_i')
        .duration(1500)
        .EUt(122880)
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_bolt')).EUt(30720).CWUt(16,64000))

    greg.assembly_line('gfs:naquadah_reactor_ii')
        .itemInputs('gtceu:computer_monitor_cover', '6x gtceu:fusion_casing', '#gtceu:circuits/uv', '4x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 288')
        .itemOutputs('gtceu:naquadah_reactor_ii')
        .duration(1500)
        .EUt(122880)
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_reactor_i')).EUt(122880).CWUt(16*4,64000*4))
		
    greg.assembly_line('gfs:naquadah_reactor_iii')
        .itemInputs('gtceu:computer_monitor_cover', '9x gtceu:fusion_casing', '#gtceu:circuits/uhv', '6x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 4056', 'gtceu:omnium 2048')
        .itemOutputs('gtceu:naquadah_reactor_iii')
        .duration(1500)
        .EUt(122880)
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_reactor_ii')).EUt(122880*4).CWUt(16*4*4,64000*4*4))

    //Reactor usage
    //TODO: Make recipes not overclockable. I looked through the GregTech KJS integration but am too stupid to figure it out -Ciggy
    // @ Ciggy from 3x1t_5tyl3; In startup you just don't add a "GTRecipeModifier" for overclockables. See other multiblocks. As long as ya don't add it it's fine uwu
    greg.naquadah_reactor_i('gfs:process_naquadah_i')
        .itemInputs('gtceu:enriched_naquadah_bolt') 
        .itemOutputs('gtceu:lead_bolt')
        .duration(938)
        .EUt(-393216)

    greg.naquadah_reactor_i('gfs:process_naquadria_i')
        .itemInputs('gtceu:naquadria_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(3750)
        .EUt(-393216)

    greg.naquadah_reactor_ii('gfs:process_naquadah_ii')
        .itemInputs('gtceu:enriched_naquadah_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(938*2)
        .EUt(-393216*4)

    greg.naquadah_reactor_ii('gfs:process_naquadria_ii')
        .itemInputs('gtceu:naquadria_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(3750*2)
        .EUt(-393216*4)
		
    greg.naquadah_reactor_iii('gfs:process_naquadah_iii')
        .itemInputs('gtceu:enriched_naquadah_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(938*2*2)
        .EUt(-393216*4*4)

    greg.naquadah_reactor_iii('gfs:process_naquadria_iii')
        .itemInputs('gtceu:naquadria_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(3750*2*2)
        .EUt(-393216*4*4)
})
