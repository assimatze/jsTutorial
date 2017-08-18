
//Das ist ein Objekt Literal
var objectLiteral = {
    name : "Marie",
    nachname : "Schmitt",
    itSkills : true,
    age : 12
}

//JSON
// {
//   "name" : "Marie",
//   "nachname" : "Schmitt",
//   "itSkills" : true,
//   "age" : 12
// }


//new Coomand
//umwandlung Object->JSON
var jsonString = JSON.stringify(objectLiteral);
console.log(jsonString);

//umwandlung JSON->Object
var jsonTransformToObject = JSON.parse(jsonString);
console.log(jsonTransformToObject);
