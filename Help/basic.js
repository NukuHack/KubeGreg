/*
defining recipes :
 	just put an "minecraft:cobble_stone"      ˇˇthe number of items
		but put (Item.of(minecraft:stone, 3)) if you want to be sure
	fluid : somethimes just ("minecraft:water") but
		should use (Fluid.of("minecraft:water", 1000)) -to be safe
	sometimes it accepts a ('3x minecraft:stone') to define multiple 
	rarely it accepts a ('minecraft:stone x3') to do the same

	define item : ('minecraft:stone')
	define tag : ('#forge:dusts/redstone') or (tag: "forge:dusts")
*/
ServerEvents.recipes(event => {

//this will remove every recipe what would make stone
    event.remove({condition});
    event.replaceOutput({condition}, 'old', 'new');

//this makes a recipe to "stone" from 3 cobblestone,3 redstone,and 3 stone
    event.shaped('minecraft:stone', ['AAA', 'BBB', 'CCC'], {
        A: 'minecraft:stone',
        B: '#forge:dusts/redstone',
        C: 'minecraft:cobblestone'
    });

//this makes a recipe to stone from 1 redstone and 4 stone
    event.shapeless('minecraft:stone', ['#forge:dusts/redstone', 'minecraft:stone', '3x minecraft:stone']);

//here is smithing
    event.smithing(
        'minecraft:netherite_ingot',                     // arg 1: output
        'minecraft:netherite_upgrade_smithing_template', // arg 2: the smithing template
        'minecraft:iron_ingot',                          // arg 3: the item to be upgraded
        'minecraft:black_dye'                            // arg 4: the upgrade item
    )

//these are the cooking recipes for vanilla
    event.smelting(item(smelted), item(raw));
    event.smoking(item(smoked), item(raw));
    event.blasting(item(blasted), item(raw));

    event.custom({
        "type": "minecraft:smoking",
        "ingredient": {
            "item": "minecraft:rotten_flesh"
        },
        "result": "minecraft:leather",
        "experience": 0.1,
        "cookingtime": 800
    });

    event.stonecutting('gfs:polished_concrete', 'gfs:concrete')
    .keepIngredient("minecraft:dirt")
    .replaceIngredient('milk_bucket', 'bucket')
    .damageIngredient("#forge:tools/hoes", '1');

//if you want to make recipes for other mods it's easier to just go to the wiki
//and steal some cool ppl's examples and it's harder to define it ...

//a bit javascript
    /*
    "let" is like allow it to be this		<-- variable (it can have a value Only a Single one)
    and "const" is like allow it to be these	<-- constant (it can have a lot value As Many as you want)
    you can acces the array's value like "array[slot]" the slot is what value wil you see
    arrays start from 0 ; "array.lenght" is the lenght of the array
    but these only needed when we define it if you want to set the same variable (or an array slot) to a different value
        you can use just a " = "  variable : apple = 12    array : numbers[2] = 45
    */
    let variable = 'item' + `_1x`;
    //it will be --> 'item_1x'

    const sor = []
    //for (let i = 0, i < 3, i++) I actually never use for, use .forEach() :)
    {
        variable = 'ite' + `m_${i}x_ra` + 'ndom'
        sor[sor.length] = variale
    }
    //sor will be --> ['item_1x_random','item_2x_random','item_3x_random']


    event.forEachRecipe({type: "minecraft:crafting_shaped", output: /slab/}, recipe => {
        let output = recipe.originalRecipeResult
        if (output.count == 6) {
            let ingredients = recipe.originalRecipeIngredients.stream().distinct().toList();
            if (ingredients.length == 1)
                event.shaped(ingredients[0].getFirst(), ["S", "S"], {S: output.id}).id(`kubejs:qol/${output.id.replace(":", "/")}`);
        }
    });
    /*
    Conditions :

        by output item {output: '<item_id>'}
        by input item(s) {input: '<item_id>'}
        by mod {mod: '<mod_id>'}
        by the unique recipe ID {id: '<recipe_id>'}
        by the recype type {type: '<type>'}

        combinations of the above:
        Require ALL conditions to be met: {condition1: 'value', condition2: 'value2'}
        Require ANY of the conditions to be met: [{condition_a: 'true'}, {condition_b: 'true'}]
        Require the condition NOT be met: {not: {condition: 'requirement'}}
    */

// for each item in tag do :
    Ingredient.of('#forge:ingots').getItemIds().forEach(item => {
      // code
    });


//some random stolen stuff from ... idk

    event.forEachRecipe({mod: 'gtceu'}, recipe => {
        getFluids(recipe)
    });

    function getFluids() {
        let mylist = recipe.originalRecipe.getInputContents('fluid').stream()
            .map(cont => cont.content)
            .map(cont => cont.getStacks()[0])
            .map(fluidstack => Fluid.of(fluidstack.fluid, fluidstack.amount))
            .toList()
        console.log(mylist)
        return mylist
    };

});



