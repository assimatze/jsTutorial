// Falls die Methode Object.create() nicht im Browser existiert können wird
// diese mit einem Polyfill erstellen.
// PollyFill == Ein feature  wird über selbstgeschrieben code hinzugefügt, falls es möclicherweise
// in der Engine Fehlt:
//PollyFill
if(!Object.create2){
  Object.create2 = function(obj){

    // verhindere falsche benutzung der Object.create2 Methode
    if(arguments.length > 1){
      throw new Error("Object.create akzeptiert nur einen Parameter!");
    }
    function F(){}; //erstelle eine Constructor Funktion die nichts macht
    F.prototype = obj; // setzte den Prototypen auf übergebenes obj.
    return new F(); // ertselle ein neues Object das aber leer ist und einfach
                    // einen prototype hat
  }
  console.log("HALLÖCHEN");
}

//erstellein Object
var person = {
  name:"Default",
  nachname:"Default",
  getFullName: function(){
    return this.name + " " + this.nachName;
  }
}

console.log(person);

//nun kann über die crcreate methode des Objects ein Object erstellte
// werden.
var max = Object.create2(person);
// max hat nun in seinem {prototype} die selben Propertys wie person.
console.log(max);
//diese können nun gesetzt waerden.

max.name = "Max";
max.nachName = "Mustermann";
console.log(max);

//die werte die für max gesetzt werden beeinflussen weder die person Object
// oder ein anderes aus person erstelltes Object.

var julia = Object.create(person);
julia.name = "Julia";
julia.nachName = "Musss";
console.log(julia);
console.log(julia.getFullName());
