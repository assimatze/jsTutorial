
function greet(){
  console.log("Greetings");
}

// first Class Functions: functions enthalten primitiven und
// verhalten sich wie Objekte
greet.language = "english";

// gibt den code der function aus
console.log(greet);

// führt code aus und ist undefined da wir kein return haben.
console.log(greet());

// gibt property language aus
console.log(greet.language);
