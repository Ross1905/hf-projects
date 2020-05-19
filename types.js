var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9() {return "abcdef"};
var test10 = null;
var test11 = 0/0;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
console.log(typeof test11);



var a = 10/0;
console.log(a);

if (99 == "99") {
  console.log("A number equals a string!");
} else {
}
  console.log("No way a number equals a string");

  var test = 11;
  if (test == "11") {
    console.log("You have number " + test);
  }

  function lieDetectorTest() {
    var lies = 0;
    var stolenDiamond = { };
    if (stolenDiamond) {
      console.log("You stole the diamond");
      lies++;
    }
    var car = {
      keysInPocket: null
    };
    if (car.keysInPocket) {
      console.log("Uh oh, guess you stole the car!");
      lies++;
    }
    if (car.emptyGasTank) {
      console.log("You drove the car after you stole it!");
      lies++;
    }
    var foundYouAtTheCrimeScene = [ ];
    if (foundYouAtTheCrimeScene) {
      console.log("A sure sign of guilt");
      lies++;
    }
    if (foundYouAtTheCrimeScene[0]) {
      console.log("Caught with a stolen item!");
      lies++;
    }
    var yourName = " ";
    if (yourName) {
      console.log("Guess you lied about your name");
      lies++;
    }
    return lies;
}
var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
console.log("Guilty as charged");
}

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
    alert(presentableText);
}

var phrase = "the cat in the hat";
var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);

var phrase2 = "two cats sit in the garden"
var index2 = phrase2.indexOf("the", 10);
console.log("You got your word at index " + index2);

var input = "biba.pacak@hotmail.com";
for(var i = 0; i < input.length; i++) {
  if(input.charAt(i) === "@") {
    console.log("there's an @ sign at index " + i);
  }
}

var data = "name|phone|adress";
var validation = data.substring(5, 10);
console.log("Substring is " + validation);

var newd = "name|phone|adress";
var vals = data.split("|");
console.log("Split array is ", vals);

function Duck(sound) {
  this.sound = sound;
  this.quack = function () {console.log(this.sound);}
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);
