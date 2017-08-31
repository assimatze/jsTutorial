
// A Consructor is a normal function.
function MyConstructor (){
  this.a = "newVariabel";
  this.log = function(){
      console.log(this);
  }
  console.log(this);
}

// Da der Constructor eine einfache Funktion ist und jede Funktion
// wieder um ein Object ist, kann man über MyConstructor.prototype eine
// Variable erstellen so das mYObject diese Variable bereist nach dem aufruf
// dess Constructos besitzt.
MyConstructor.prototype.b = "Variable B";
// in der Browser Console befindet sich die Variable b unter __proto__



var myObject = new MyConstructor();
// 4 dinge passieren jetzt:
// 1) es wird ein neues Object mit dem Namen MyConstructor erzeugt.

// 2) die property/eigenschaft [[prototype]] des myObject Object
// wird auf den derzeiten wert von MyConstructor.prototype gesetzt
// [[prototype]] ist ein nicht manipulierbarer Property von myObject.

// 3) die Function MyConstructor wird ausgeführt.
// Anstelle des "this" wird nun der name des Object also myObject genutzt.
// aus "this.a" wird "myObject.a".
// 4) das erstellte Objekt wird nun zurück gegeben! zuweisung myObject zeigt
// jetzt auf das erstellte Object.

MyConstructor.prototype.b = " Updated Variable B";

console.log((myObject instanceof MyConstructor));
console.log((myObject));
