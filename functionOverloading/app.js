
// Da in js einer function unterschiedliche Parameter übergebn werden können
// ist ein normales function Overloading nicht möglich.
// jedoch gibt es alternativen

function greet (firstname, language){
    language = language || "en"; // der default wert für language wird gesetzt auf "en".

    if(language === "en"){
      console.log("Hi in English");
    }

    if(language === "de"){
      console.log("Hi in Deutsch");
    }
}

// Beim Aufruf der greet() methode müssten wir jetzt wissen das wir entweder
// "en" oder "de" eingebeben müssen. das können wir aber nicht immer wissen!
greet("MATZE", "de");

// wir verwenden HILFSFUNKTIONEN welche die eigentlich funktion mit
// den richtigen Parametern aufruft.
function greetHelperEnglish(name){
  greet(name, "en");
}

function greetHelperDeutsch(name){
  greet(name, "de");
}

greetHelperDeutsch("Mike");
greetHelperEnglish("peter");
