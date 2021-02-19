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