//STATEMENT bsp if
/*
if (a == b){
  code
}
*/

/* EXPRESSION bsp Vergeleich
    (a == b)

  EXPRESSION bsp zuweisung
  var a = 0;
*/

// Funktion Statement: diese Funktion gibt nichts zurück! daran erkennt man
//das es sich um ein Statement handelt.
function greet(){
  console.log("Greetings");
}

// Funktion Expression: DA die Funktion zugewissen wird, Sie verhält sich
// also wie ein Object, da das Object an die Variable übergeben
// wird ist das eine Expression
var anonymousGreet = function (){
  console.log("hallo");
}
