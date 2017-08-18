
var arr4 = [
    1,
    false,
    {
        name: "Jakob",
        adresse: "Bahnhofstraße 111"
    },
    function(name){
        var greeting = "Hallo ";
        console.log(greeting + name);
    },
    "Hallo",
    undefined
];


console.log(arr4);

arr4[3](arr4[2].name);

// Variante 1. Schreibweise. Lang und unnötig
var arr = new Array();

//Variante 2. Array Literals "[]";
var arr2 = [1,2,3];

// Arrays können verschiedene Elemente enthalten .
//primitiven
//objecte
//sogar function Expression. KEINE FUNKTION STATEMENTS!

var arr3 = [
  1,
  true,
  {
    name : "peter",
    age : 15
  },
  undefined,
  function(){
      console.log("hallo");
  }
];

console.log(arr);
console.log(arr2);
console.log(arr3);
arr3[4]();
