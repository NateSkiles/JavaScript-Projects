function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function oldEnoughToVote() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 17) ? "Too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_vote + " to vote."
}


//create a contructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//create a new object using the instructor. 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//display function results
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drive a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactred in " + Erik.Vehicle_Year;
}

var Nate = new Vehicle("Ford", "Explorer", 2001, "White");
function natesFunction() {
    document.getElementById("New_and_This").innerHTML = "Nate drives a " + 
    Nate.Vehicle_Color + "-colored " + Nate.Vehicle_Make + " " + Nate.Vehicle_Model
    + " manufactred in " + Nate.Vehicle_Year;
}

//write an object constructor function.
function Computer(CPU, GPU, RAM, HD_Space) {
    this.Computer_CPU = CPU;
    this.Computer_GPU = Graphics_Card;
    this.Computer_RAM = RAM;
    this.Computer_HDSpace = Storage;
}
//nested functions have access to the functions they are in. Set starting point to 9, plus one funtion adds to this var in the funtion
function countFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1};
        plus_one();
        return starting_point;   
    }
}