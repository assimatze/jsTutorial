// call() example
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
var logName = function(para1, para2){
  console.log("Logged: "+ this.getFullName());
  console.log(para1, para2);
};

//call() funktioniert ähnlich wie bind(). bind() liefert jedoch eine function zurück
// und call() kann direct ausgeführt werden. "para1" und "para2" werden
// bei call(object, para1, para2) angegeben.
logName.call(person,"Hi","MyName");

//example bind()
var logNamePerson = logName.bind(person);
logNamePerson(1,2);
