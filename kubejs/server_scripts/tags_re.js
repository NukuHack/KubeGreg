priority: 60

ServerEvents.tags('item', event => {

    function rem_help(arr, x) {
        arr.forEach((y) => {
            event.remove(y, x)
        });
    };


    rem_help(["minecraft:planks", "forge:planks/wood"], "gtceu:treated_wood_planks");

    rem_help(["forge:dyes", "forge:dyes/red", "c:dyes", "c:red_dyes"], "minecraft:redstone");
    rem_help(["forge:dyes", "forge:brown/grey", "c:dyes", "c:brown_dyes"], "gtceu:metal_mixture_dust");

    replacements.forEach((id) => {
        event.remove(id[0], id[1]);
    });
	
	event.remove("forge:silicon", "enderio:silicon");
	
	const replaceEnderioDusts=[
		"coal",
		"iron",
		"gold",
		"copper",
		"tin",
		"ender_pearl",
		"obsidian",
		"cobalt",
		"lapis",
		"quartz",
	];
	
	replaceEnderioDusts.forEach((dust)=>{
		event.remove(`forge:dusts/${dust}`,`enderio:powdered_${dust!="lapis"?dust:dust+"_lazuli"}`);
		event.remove(`forge:dusts`,`enderio:powdered_${dust!="lapis"?dust:dust+"_lazuli"}`);
	});

});

/*
ServerEvents.tags("fluid", (event) => {

});


ServerEvents.tags('block', event => {

});
*/
