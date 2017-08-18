
var person = {
  name : "Matze",
  nachname : "Misior",
  getFullName : function(){
    var fullName = this.name + " " + this.nachname;
    return fullName;
  }
};

//logName versucht aug this.getFullName zuzugreifen und kann es aber nicht
// die function muss nun an das object gebunden werden.
var logName = function(){
  console.log("Logged: "+ this.getFullName());
};

//die bind() function der function LogName wird hier benutzt.
// da die function LogName nichts anderes ist als ein spezielles
// Object. Deswegen enthält sie diese Function bind();
var logNamePerson = logName.bind(person);
logNamePerson();
console.log(logNamePerson);

//PS logName() funktioniert trotzdem nicht!!!

//Das ganze functioniert auch mit IIFEs
(function(){
  console.log("Logged: "+ this.getFullName());
}).bind(person)(); // muss aber ausgeführt werden.
