
// getPerson() liefert undefined zurück da automatische semicolons eingefügt werden
function getPersonMitFehler(){
  return // an dieser stelle wird ein semicolon eingefügt aufgrund des zeilen umbruchs
  {
    name: "Matze"
  };
}

console.log(getPersonMitFehler());

// alternative um fehler zu verhindern
function getPersonRichtig(){
  return { // an dieser stelle wird kein semicolon eingefügt
    name: "Matze"
  }
}

// die geschweiften klammern sollten immer in der Zeile geschrieben
// werden wo sie aufgerufen werden,
console.log(getPersonRichtig());
