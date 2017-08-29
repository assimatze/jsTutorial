//Reflection bedeutet das Objekt kann sich selber ansehen.
// Wie eine Reflection im spiegel. Dabei kann ein Obeject seine
// eigenen Propertys und Methoden verändern.

var person = {
	vorname: "Default",
	nachname: "Default",
	getFullName: function (){
		return this.vorname + " " + this.nachname;
	}
}

var max = {
	vorname: "Max",
	nachname: "Mustermann",
}

var julia = {
	adress: "Bahnhof strasse 111",
	getFormalFullName: function(){
		return this.nachname  + " " + this.vorname;
	}
}
var peter = {
	getVorname: function(){
		return this.vorname;
	}
}

//niemals maachen
max.__proto__ = person;

//hat auch getFullName da __proto__ ebenfalls
//durchlaufen wird!
for(var prob in max){
	console.log(prob);
}

//hasOwnProperty fragt ob prob NUR in max ist nicht in max,__proto__
//gebe die probertys und deren Werte aus
for(var prob in max){
	if(max.hasOwnProperty(prob)){
		console.log(prob + ": "+ max[prob]);

	}
}


_.extend(max, peter,julia);
console.log(max);
