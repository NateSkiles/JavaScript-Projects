function newFunction() {
    var str = 'This text is green!'
    var result = str.fontcolor("green");
    document.getElementById("green_text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book";
    document.getElementById("Concatenate").innerHTML = sentence;
}

var x = multiply(7, 5);

function multiply(a, b) {
    return a * b;
}

document.write(x)

function addition_Funtion() {
    var addition = "2 + 2 = " + addition;
    document.getElementById("Math").innerHTML = "2 + 2" = addition;
    return addition;
}