var normalClass = function() {
	this.prop = true;
}

var normalObj = new normalClass();

var CleverClass = function() {
	if (!(this instanceof CleverClass)) return new CleverClass();
  this.prop = true;
}

var cleverObjA = new CleverClass();
var cleverObjB = CleverClass();

console.log(normalObj);
console.log(cleverObjA);
console.log(cleverObjB);
