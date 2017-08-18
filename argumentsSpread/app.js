// Arguments sind die Parameter die einer Function übergeben werden.

function greet(name, number){
  console.log(name);
  console.log(number);
  //Die Arguments sehen aus wie arrays. SIND ABER KEINE!!!
  // Das erkennt man an den kursiven Klammern[]!!!
  console.log(arguments);

  // Über die arguments lassen sich warnungen und fehler auswerfen
  if(arguments.length === 0){
    console.log("es wurden keine parameter eingegeben");
  }

  //arguments können wie arrays angesprochen werdden
  console.log(arguments[0]);
  console.log("------------");
}

greet("Matze",5);

// In JS ist es möglich Funktionen Ohne Argumente aufzurufen!!
greet();

//es ist ebenfalls möglich einer funktion mehr arguments /parameter zu übergeben
// Diese sind dann ebenfalls in den arguments gelistet
greet("matze", 103, "Klaus", true);

// Arguments werden aber bald schon deprecated sein
// Stattdessen kommen "Spreads".
function doing(para1, para2, ...other){
  //in ...other kommen dann alle arguments die zuviel sind also
  //zb para3 würde dann in ein array mit dem namen other hineingeschoben.
  //...other ist nur ein name. gehen würde auch "...name".
  // code
}
