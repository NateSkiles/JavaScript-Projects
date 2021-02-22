function subtraction_Funtion() {
    var subtraction = 5 - 2;
    document.getElementById("subMath").innerHTML = "5 - 2 = " + subtraction;
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function multiplyFunction() {
    var multiply = 5 * 5;
    document.getElementById("Multiply").innerHTML = "5 x 5 = " + multiply;
}

function divisionFunction() {
    var divide = 36 / 6;
    document.getElementById("Divide").innerHTML = "36 / 6 = " + divide;
}

function multiple_Operations() {
    var simpleMath = (5 + 2) * 10 / 2;
    document.getElementById("multi").innerHTML = "The quantity five plus two, times ten, divided by two equals: " + simpleMath;
}

function modulus_Operator() {
    var remainder = 25 % 7;
    document.getElementById("Remainder").innerHTML = "The remainder of 25 divided by 7 is: " + remainder;
}

function Negation_Operator() {
    var x = 10;
    document.getElementById("Neg").innerHTML = (-x);
}

var z = 5.25; 
z--;
document.write(z);

var y = 5;
y++;
document.write(y);

window.alert(Math.random() *100);

function pi() {
    document.getElementById("pi").innerHTML = Math.PI;
}

function wholeRoundRand() {
    var b = Math.random() *100;
    var b = Math.round(b)
    document.getElementById("WholeRound").innerHTML = b;
}

function RoundUp() {
    var c = Math.ceil(Math.random() *100);
    document.getElementById("RoundUp").innerHTML = c;
}

function RoundDown() {
    var c = Math.floor(Math.random() *100);
    document.getElementById("RoundDown").innerHTML = c;
}

