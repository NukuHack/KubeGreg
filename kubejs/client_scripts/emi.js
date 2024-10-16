// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const remItems = [
	"webdisplays:screencfg",
	"webdisplays:ownerthief",
	"webdisplays:linker",
	"webdisplays:laserpointer",
	"webdisplays:upgrade_lasermouse",
	"webdisplays:upgrade_redinput",
	"webdisplays:upgrade_redoutput",
	"webdisplays:upgrade_gps",
	"webdisplays:craftcomp_stonekey",
	"webdisplays:craftcomp_upgrade",
	"webdisplays:craftcomp_peripheral",
	"webdisplays:craftcomp_batcell",
	"webdisplays:craftcomp_batpack",
	"webdisplays:craftcomp_laserdiode",
	"webdisplays:craftcomp_backlight",
	"webdisplays:craftcomp_extcard",
	"webdisplays:craftcomp_badextcard",
	"webdisplays:screen",
	"webdisplays:keyboard",
	"webdisplays:redctrl",
	"webdisplays:rctrl",
	"webdisplays:server",
];

RecipeViewerEvents.removeEntriesCompletely('item', event => {
	//event.remove('minecraft:stick');
});

RecipeViewerEvents.removeEntries('item', event => {
	remItems.forEach((item,index)=>{
		event.remove(item);
		//event.remove('minecraft:stick');
	});
});





















RecipeViewerEvents.addEntries('item', event => {
	//event.add('minecraft:iron_sword[custom_data={a:2},enchantment_glint_override=true,damage=40]');
});