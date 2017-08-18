
// erstellen wir zunächst eine funktion die uns funktionen erstellt.
function buildFunctions(){
  var array = []; //die Function erhält ein leeres Array.

  //for loop
  // erstellen mehrere Functions.und speichern im array.
  for(var i = 0; i < 3 ; i++){
    array[i] = function(){
      console.log(i);
    };
  }

  //das erstellte Array wird nun returned
  return array;
}

//rückgabe des gespeicherten arrays.
var fs = buildFunctions();
console.log(fs);

//Die drei functionen werden ausgeführt wenn die buildfunction bereits
// druchgelaufen ist. zu diesem zeitpunkt ist i = 3 da sie 3 mal erhöht wurde.
fs[0]();
fs[1]();
fs[2]();

function builderFunction2(){
  var array =[];

  for(var i = 0; i < 3; i++){
    //erzeuge neuen execution context durch aufruf eines IIFE
    array[i] = (function(number){
      return function(){
        console.log(number);
      };
    }(i));

  }

  return array;
}

var fs2= builderFunction2();
console.log(fs2);

fs2[0]();
fs2[1]();
fs2[2]();
