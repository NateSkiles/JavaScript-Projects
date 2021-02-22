document.write(typeof 4);
document.write(typeof "number");
document.write(typeof 4.465);

function myFunction() {
    document.getElementById("Test").innerHTML = 0/0
}

function myFunction2() {
    document.getElementById("Test2").innerHTML = isNaN('007');
}

function myFunction3() {
    document.getElementById("Test3").innerHTML = isNaN("This is a string");
}

document.write(2E310);
document.write(-2E310);

function myInfinity() {
    var x = 2E310
    document.getElementById("myInfinity").innerHTML = x;
    document.getElementById("negInfinity").innerHTML = -x;
}

document.write(8 > 2);
document.write(11 < 8);

console.log(2 + 2);

document.write(" 10" + 5);

console.log((10+2) < (5-2));

console.log(10 == 10);
console.log(11 == 19);

x = 10  //true
y = 10
document.write(x === y);

x = 82; //false
y = "82"
document.write(x === y);

x = 'string'
y = 21
document.write(x === y);

x = 21
y = 12
document.write(x === y);

document.write(5 > 2 && 6 < 10);        // AND-OR OPERATORS
document.write(5 > 2 && 6 < 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);

function notFunction() {
    document.getElementById("not").innerHTML = !(20 > 10);
}
function notNotFunction() {
    document.getElementById("notNot").innerHTML = !(5 > 10);
}
