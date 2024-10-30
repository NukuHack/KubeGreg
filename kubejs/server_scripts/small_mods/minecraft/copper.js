
ServerEvents.recipes(event => {

// this makes over 120 calls for the "event" (counted by Chatgpt 4) it's exactly 122 
// That's a lot tbh and it took for a while so ... yeah ... a lot

event.replaceInput({output : 'minecraft:weathered_cut_copper_slab'}, 'minecraft:oxidized_cut_copper', "minecraft:weathered_cut_copper");
event.replaceInput({output : 'minecraft:waxed_weathered_cut_copper_slab'}, 'minecraft:waxed_oxidized_cut_copper', "minecraft:waxed_weathered_cut_copper");
const Variants = ["", "_stairs", "_slab"];
const Stages = ["", "exposed_", "weathered_", "oxidized_"];
const wax = ["", "waxed_"];
const flop = ["fluid_omnihopper", "fluid_hopper"];
const blocek = ["copper_block", "exposed_copper", "weathered_copper", "oxidized_copper"];

Stages.forEach((stage) => {
  Variants.forEach((vari) => {
    // Unwax Waxed Variants
    event.shapeless(`minecraft:${wax[0]}${stage}cut_copper${vari}`, [`minecraft:${wax[1]}${stage}cut_copper${vari}`, "#forge:tools/hammers"])
      .damageIngredient("#forge:tools/hammers", 1);
  });
  flop.forEach((flo) => {
    // Unwax Flopper / Omniflopper
    event.shapeless(`omnihopper:${wax[0]}${stage}${flo}`, [`omnihopper:${wax[1]}${stage}${flo}`, "#forge:tools/hammers"])
      .damageIngredient("#forge:tools/hammers", 1);
    // Wax Flopper / Omniflopper
    event.shapeless(`omnihopper:${wax[1]}${stage}${flo}`, [`omnihopper:${wax[0]}${stage}${flo}`, "minecraft:honeycomb"]);
  });
  wax.forEach((waxe) => {
    // Making Omnihopper from Flopper
    event.shapeless(`omnihopper:${waxe}${stage}${flop[0]}`, [`omnihopper:${waxe}${stage}${flop[1]}`]);
    // Making Flopper from Omnihopper
    event.shapeless(`omnihopper:${waxe}${stage}${flop[1]}`, [`omnihopper:${waxe}${stage}${flop[0]}`]);
  });
});

blocek.forEach((bloc) => {
  // Unwax Blocks
  event.shapeless(`minecraft:${wax[0]}${bloc}`, [`minecraft:${wax[1]}${bloc}`, "#forge:tools/hammers"])
    .damageIngredient("#forge:tools/hammers", 1);
});

Stages.slice(0, -1).forEach((stage, j) => {
  let nextStage = Stages[j + 1];
  
  wax.forEach((waxe) => {
    Variants.forEach((vari) => {
      // Oxidizing Variants / Waxed Variants
      event.shapeless(`minecraft:${waxe}${nextStage}cut_copper${vari}`, [`minecraft:${waxe}${stage}cut_copper${vari}`, "minecraft:water_bucket"])
        .replaceIngredient("minecraft:water_bucket", 'minecraft:bowl');

      // Unoxidizing Variants / Waxed Variants
      event.shapeless(`minecraft:${waxe}${stage}cut_copper${vari}`, [`minecraft:${waxe}${nextStage}cut_copper${vari}`, "#forge:tools/hammers"])
        .damageIngredient("#forge:tools/hammers", 1);
    });
    flop.forEach((flo) => {
      // Oxidizing Omniflopper / Flopper + Oxidizing Waxed Omniflopper / Waxed Flopper
      event.shapeless(`omnihopper:${waxe}${nextStage}${flo}`, [`omnihopper:${waxe}${stage}${flo}`, "minecraft:water_bucket"])
        .replaceIngredient("minecraft:water_bucket", 'minecraft:bucket');

      // Unoxidizing Omniflopper / Flopper + Unoxidizing Waxed Omniflopper / Waxed Flopper
      event.shapeless(`omnihopper:${waxe}${stage}${flo}`, [`omnihopper:${waxe}${nextStage}${flo}`, "#forge:tools/hammers"])
        .damageIngredient("#forge:tools/hammers", 1);
    });
    // Oxidizing Blocks / Waxed Blocks
    event.shapeless(`minecraft:${waxe}${blocek[j+1]}`, [`minecraft:${waxe}${blocek[j]}`, "minecraft:water_bucket"])
      .replaceIngredient("minecraft:water_bucket", 'minecraft:bucket');

    // Unoxidizing Blocks / Waxed Blocks
    event.shapeless(`minecraft:${waxe}${blocek[j]}`, [`minecraft:${waxe}${blocek[j+1]}`, "#forge:tools/hammers"])
      .damageIngredient("#forge:tools/hammers", 1);
  });
});



});
