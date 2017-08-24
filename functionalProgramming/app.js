var array1 = [2,3,4];
console.log(array1);

//kopiere werte von arrraay1 in ein zweites array
// array2 und verdoppele die werte,

// lege leeres array an:
var array2 = [];

// nutze for schleife um über das array2 zu iteriern.
for(var i = 0; i < array1.length; i++){
  array2.push(array1[i] * 2);
}

// Ansatz nicht so gut da wir den code nicht in eine funktion auslagern,
// aber das ist machbar,
console.log(array2);

//alternative
// funktionales Progtammieren
//schreibe funktion die ein array und eine funktion übergeben bekommt
function mapForEach(arr , fn){
  //lege neues leeres array an.
  var newArray = [];
  //iteriere mit einer for schleife drübergeben
  for(var i = 0; i < arr.length; i++){
    // Nimm den wert aus arr[i]. führe darauf die function fn aus.
    // trage das return von fn in das newArray.
    newArray.push(fn(arr[i]));
  }

  //gebe daas newArray als resultat zurück
  return newArray;

}

var add = function(para1){
  return para1 + 1;
}

console.log(array2);
var array3 = mapForEach(array2 , add);

//alternaative 3 anonyme function
array3 = mapForEach(array1, function(para1){
  return para1 * 10;
})
console.log(array3);






//versuchen wir mal was anderes wie wäre es mit einem Vergeleich
var array4 = mapForEach(array1, function(item){
  return item < 2;
  //nehmen wir die 2 das nächste mal raus!!!
});
console.log(array4);

function diff(limiter){
  return (function(item){
    return item > limiter;
  });
}

var array5 = mapForEach(array1, diff(1));
console.log(array5);
