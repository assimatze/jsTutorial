//Die typen von variablen können von operator "typeof" erkannt werden.
var a = 3;
console.log(typeof a); //number

//DIe Datentypen werden immer kleingeschrieben zuröück gegeben.
// typeof gibt einen string zurück der den datentyp represäntiert.

var b = "string";
console.log(typeof b); //string

var c = true;
console.log(typeof c); //bool

var d;
console.log(typeof d) // undefined

var arr = [];
console.log(typeof arr); //object
// Arrays werden bei typeof ebenfalls als Objekte erkannt.
// besser ist der test über
// Array.isArray
// oder Object.prototype,toString,call(arr)
console.log(Array.isArray(arr)); //true
console.log(Object.prototype.toString.call(arr)); //[object Array]]

var obj = {};
console.log(typeof obj); //object

function Person(name){
  this.name = name;
}
// typeof liefert auch bei constructor Objekten nur den allgemeinen Objekt typeo
// Zurück. will man nun aber genau wissen um welche art von object es sich
// handelt benutzt man instanceof operator.
var person = new Person("Max");
console.log(typeof person); //objekt
console.log(person instanceof Person); //true
// bei instanceof wird die gesamte prototyp chain durchlaufen
// das heist also das person sowohl eine instanceof von Peron ist
// als auch von Object. Den der Prototyp von Person ist Object.
console.log(person instanceof Object)

// der Konstructor von Person wird nun auch als Unterklasse Mann zu verfügung
//gestellt.
var Mann = function(){};
Mann.prototype = Object.create(Person.prototype);
var max = new Mann("max");
console.log(max instanceof Mann); //true
//max ist aber auch eine Person
console.log(max instanceof Person);//true
// und max ist auch ein Object
console.log(max instanceof Object);//true
console.log("---------------------------");

function MyConstructor (){
  this.a = "Hallo";
}
var c = Object.create(MyConstructor);
var b = Object.create(MyConstructor.prototype);
console.log(c);
console.log(b);
