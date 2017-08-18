//Durch unseren eigenen execution Context ist unser framework sicher abgetrennt
// vom global execution context. dadurch können identifier den selben namen
// im glabal execution und in normalen execution context haben.

//IIFE
(function(name){
  var greeting = "Hallo";
  console.log(greeting + " " + name);
}("iife"));

console.log(greeting);

// will man im framework das global object manipuliren so kann man daas
//gezielt tun in dem man es dem IIFE übergibt
//IIFE
(function(global, name){
  var greeting = "Hallo";
  global.greeting = greeting;
  console.log(greeting + " " + name);
}(window, "iife"));

console.log(greeting);
