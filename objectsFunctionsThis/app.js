// Object Literals, Liste von Key-Value Pairs
var person = {
  name : "klaus",
  getName : function () {
    // die Variable name muss mit "this" zurück gegeben werden!!!
    return this.name;
  },
  getThis : function() {
    //das "this" liefert das actuelle Object zurück - person
    return this
  },
  getWindowInsteadOfThis: function (){
    //erstelle on the fly function innerhalb der function
    var functionGetWindow = function(){
      // dieses "this" liefert window anstatt person zurück da es sich im Kontext einer
      // methode befindet und nicht mehr weiss das die Methode "getWindowInsteadOfThis"
      // im object-person ist
      return this;
    }
    return functionGetWindow();
  }

}

console.log(person);
console.log(person.getName());
console.log(person.getThis());
console.log(person.getWindowInsteadOfThis());

//Alternative um this auch im function Context von anderen Functions
//zurück zu liefern ist das speichern des "this" refferenz

var object = {
  name : "object",
  getThis : function(){
    // speicher das this-object
    var self = this;
    // benutze im neuen function/Execution Context die "self" Variable
    var getThisInner = function(){
        // würde statt "self" an dieser stelle "this" stehen dan würde
        //nicht das object returend sondern das window
        return self;
    }
    return getThisInner();
  }
}

console.log(object);
console.log(object.getThis());
