
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

console.log("---------------------------------------");

var Answer = function(val){
	this.val = val;
};

Answer.prototype.get = function(){
	return this.val;
};

var answer = new Answer(42);
console.log(answer.get());

var FirmAnswer = function(val){
	Answer.call(this, val);
}

FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;
FirmAnswer.prototype.get = function fn2(){
	return Answer.prototype.get.call(this) +"!!";
}

var luckyAnswer = new FirmAnswer(3.12);
console.log(luckyAnswer.get());
