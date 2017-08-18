

function greetFactory(language){
  return (function(name, nachname){
    if(language === "en"){
      console.log("Hi, " + name + " " + nachname);
    }
    if(language === "de"){
      console.log("Grüß Gott " + name + " " + nachname);
    }
  });
}

var greetGerman = greetFactory("de");
var greetEnglish = greetFactory("en");

greetGerman("Matze", "Misior");
greetEnglish("Matze", "Misior");
