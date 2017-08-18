// erste Variante ein Object zu erstellen. Ziemlich Lang
var person = new Object();
console.log(person);

// Zugriff auf property name des Objects person
person["name"] = ""; //"[]" computet member acces operator
console.log(person);

// andere Art des Zugriff der Property name des person Objects
person.name = "Mike"; //der "." ist der access operator
console.log(person);

// Object Literals, Liste von Key-Value Pairs
person = {
  //Variable
  name : "klaus",
  // Methode
  getName : function () {
    // die Variable name muss mit "this" zurück gegeben werden!!!
    return this.name;
  },
  //Object innerhalb des person objects
  address : {
    street: "Fifth stree 5",
    country: "Germany"
  }
}

console.log(person);
console.log(person.getName());
