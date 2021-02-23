function addNumbers() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function addNumbers2() {
    console.log(x + 100);
}

addNumbers();
addNumbers2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function weatherFunction() {
    var hotornot = document.getElementById("Temp").value;
    if (hotornot < 60) {
        Outside = "It's a cold one!"
    }
    else {
        Outside = "Pretty warm out there."
    }
    document.getElementById("Climate").innerHTML = Outside
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = 'It is morning time!';
    }
    else if (Time >= 12 == Time < 18) {
        Reply = 'It is afternoon.';
    }
    else {
        Reply = 'It is evening time.';
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}