// stolen from ftb skies ... but does not work


ItemEvents.tooltip(event => {
    const descript = [
		//['minecraft:end_portal_frame','Shift-Right click to pick it up'],
		//['minecraft:bedrock','Shift-Right click to pick it up'],
		//['minecraft:spawner','Just use silk touch'],
		//['ae2:flawless_budding_quartz','Just use silk touch'],
		//['minecraft:budding_amethyst','Just use silk touch'],
		['minecraft:obsidian','Misplace ? just use a bucket on it'],
	]

	descript.forEach((desc) => {
		event.addAdvanced([desc[0]],(item,advanced,text) => {
			{
				text.add(1,[
					Text.of(desc[1]).yellow(),
				]);
			};
		});
	});

/*
    event.add(
    [
      "minecraft:dirt",
    ],Text.red("Disabled in this modpack!").bold(true));
*/


});



/*
RecipeViewerEvents.addInformation('item', event => {
	event.add('minecraft:apple', [
		'An apple a day keeps the doctor away.'
	]);
})

RecipeViewerEvents.addInformation('fluid', event => {
	event.add('minecraft:lava', [
		'Lava hot'
	]);
})
*/

