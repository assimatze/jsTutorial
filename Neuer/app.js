
//functiöon statement
function greet(){
  console.log("Greetings");
}

function new(){
  return this;
}

//immediatly invoked function expression (IIFE)
var iife= function(name){
  return "hallo " + name;
}("Klaus");

greet();
greetFunc();
console.log(iife);



//ist möglich, da "3" eine expression ist:
3;

//ebenfalls möglich da ebenfalls expression
"das ist ein String!!";

//NICHT MÖGLICH
// da JS erkennt das es sich hierbei um ein
//Funktion statement handelt und funktion statements haben
// immer einene namen.
// function(){
//   console.log("function expression");
// }

//damit eine function expression ausgeführt werden kann
//muss sie in klamern gesetzt werden.

(function(name){
  console.log("function expression "+ name);
}("iife"));
