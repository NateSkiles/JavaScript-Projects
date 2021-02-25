function Call_loop() {      //while loop that counts up to 10 and prints the results
    var Digit = '';
    var x = 1;
    while(x < 11) {
        Digit += '<br>' + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //for loop that prints each item in the line
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {       //store cat pics in an array
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {  
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"Black"};      //create an object through utilization of the const keyword
    Musical_Instrument.color = "blue";  //change a property's value
    Musical_Instrument.year = "1969";   //add a property 
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.year + " " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price + " and the color was " + Musical_Instrument.color;
}

var z = 10;     //global scope
document.write("<br>" + z);
{
    let z = 15;     //block scope
    document.write("<br>" + z);
}
document.write("<br>" + z);

let car = {     //create an object, car. 
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {       //a method stored within a property as a function
        return "The car is a " + this.year + this.color + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;      //declare variables
for (i = 0; i < 10; i++) {      //loop to 10, counting up each iteration. 
  if (i === 3) { break; }       //break the loop at 3
  text += "The number is " + i + "<br>";
}
document.getElementById("breakLoop").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {  //loop to 10
  if (i === 3) { continue; }    //skip the iteration at i = 3
  text += "The number is " + i + "<br>";
}
document.getElementById("continueLoop").innerHTML = text;