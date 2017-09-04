var people =[
	{
		vorname: "Mac",
		nachname: "Mustermann",
		adresse: [
			"Hauptstraße",
			"Nebenstraße"
		]
	},
	{
		vorname: "Jules",
		nachname: "Muster",
		adresse: [
			"langstraße",
			"Nebenstraße"
		],
		greet: function(){
			return this.vorname + " " + this.nachname;
		}
	}
];

console.log(people[0]);
