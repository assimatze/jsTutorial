//Apply()
var person = {
  name : "Matze",
  nachname : "Misior",
  getFullName : function(){
    var fullName = this.name + " " + this.nachname;
    return fullName;
  }
};

//logName versucht auf this.getFullName zuzugreifen und kann es aber nicht
// die function muss nun an das object gebunden werden.
var logName = function(para1,para2){
  console.log("Logged: "+ this.getFullName());
  console.log(para1,para2);
};

//apply() arbeitet wie call() nur werden die Parameter im array Form übergeben
logName.apply(person,[1,2]);
