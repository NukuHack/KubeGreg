/*
    stuff
*/

ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu;


  greg
      .rock_generator("gfs:sculk")
      .itemInputs('24x minecraft:deepslate')
      .inputFluids(Fluid.of('gtceu:lead', 2880))
      .itemOutputs('minecraft:sculk')
      .duration(1200)
      .EUt(7);

  /*


   greg.rock_breaker("gfs:netherrack")

   greg.rock_breaker("gfs:end_stone")

  */


});