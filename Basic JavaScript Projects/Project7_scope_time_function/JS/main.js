function addNumbers() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function addNumbers2() {           //local vs. global variables. addNumbers2 gets an error since
    console.log(x + 100);           // x isn't accesible to that function.
}

addNumbers();
addNumbers2();

function get_Date() {       // greet the user if its before 6 p.m.
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function weatherFunction() {        //take input, if input over 60 return it's warm; if input under 60 return it's cold.
    var hotornot = document.getElementById("Temp").value;
    if (hotornot < 60) {
        Outside = "It's a cold one!"
    }
    else {
        Outside = "Pretty warm out there."
    }
    document.getElementById("Climate").innerHTML = Outside
}

function Time_Function() {      //greet the user depending on the time of day.
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