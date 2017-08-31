
// die ForIn oder For each sollte bei Arrays nicht verwendet werden da die forin
// auf den Prototype des arrays zugreift!!!!
var arr = ["max", "Julia", "Peter"];

// funktioniert solange wir KEINE Prototypeänderung haben
for(prop in arr){
  console.log(prop + ": " + arr[prop]);
}
console.log("------------------------------");

Array.prototype.zusatz = "Hallöchen, bin auf dme proto";

// gibt auch die variable zusatz aus. Die Erweiterung des Array.prototype kann
// zb durch eine lib pasieren
for(prop in arr){
  console.log(prop + ": " + arr[prop]);
}

console.log("------------------------------");
//die normale for schleife funktioniert auch mit array.prototype
for(var i = 0; i < arr.length; i++){
  console.log(i + ": " + arr[i]);
}
