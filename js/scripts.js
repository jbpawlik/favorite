$(document).ready(function() {
  $('form#favoritethings').submit(function(event) {
    event.preventDefault(); 

  const fav1 = $('input#fav1').val();
  const fav2 = $('input#fav2').val();
  const fav3 = $('input#fav3').val();

  const favThings = [fav1, fav2, fav3]
  const favThingsOutput = favThings.join(" and ");
  const newThing = favThings.concat(' with a side of cheeseburgers.');
  const newThingOutput = newThing.join(" and ");
  const adventure = ['fire and '];
  const adventureOutput = adventure.concat(newThing.join(" and "));
  const scared = favThings.concat('with a life jacket on.');
  const scaredOutput = scared.join(" and ");
  const time = favThings.slice();
  time.shift();
  time.shift();
  ourfaves = [' honey-baked ham' , ' jingle bells']
  ourfaves.push(fav1, fav2, fav3);
  const ourfavesOutput = ourfaves.join(" and ");

  $('#thingOutput').text(favThingsOutput);
  $('#newThing').text(newThingOutput);
  $('#adventure').text(adventureOutput)
  $('#scared').text(scaredOutput);
  $('#time').text(time);
  $('ul#ourfaves').text(ourfavesOutput);

  })
});