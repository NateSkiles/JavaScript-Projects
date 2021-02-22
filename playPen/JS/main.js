function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}