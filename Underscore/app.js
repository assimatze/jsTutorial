var normalClass = function() {
	this.prop = true;
	console.log(this);
}

var normalObj = new normalClass();

var CleverClass = function() {
	console.log(this);
	if (!(this instanceof CleverClass)) return new CleverClass();
  this.prop = true;
}

//var cleverObjA = new CleverClass();
//var cleverObjB = normalClass();

// console.log(normalObj);
// console.log(cleverObjA);
// console.log(cleverObjB);
