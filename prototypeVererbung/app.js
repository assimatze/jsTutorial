
function fn(input){
	return this.val;
}

var parent = {
	get: fn,
	val: 42
};

var child = Object.create(parent);
console.log(parent.get());
child.val = 33;
console.log(child.get());

//modifiziere get;
child.get = function fn2(){
	//this oder child in den call um das this auf das object zu setzen
	return parent.get.call(child) * 2;
}
console.log(child.get());
