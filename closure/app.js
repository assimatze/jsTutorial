var closure = function(){
    var privateCount = 0;

    function change(value){
      privateCount = value;
    }

    return {
      get: function(){ return privateCount; },
      set: function(value){ change(value); }
    };

}();
console.log(closure);
console.log(closure.set(12));
console.log(closure.get());


function greet(whatToSay){
  return function(name){
    console.log(whatToSay + " " + name);
  }
}

var sayHi = greet("hi");
sayHi("Matze");
