window.alert("Hello, world!");

document.write('Hello World!');

var A = ' This is a string';
document.write(A);

var x = ' This is an alert string ';
window.alert(x);

document.write(" Hello \"world\" ");

document.write("If I were to concatenate " + "a string" + " I\'d say it would look like this. ")

var y = "Concatenated " + "String "
document.write(y);

var a = 'my first variable ', b = 'my second variable ', c = 'my third variable '
document.write(b);

var a = a.fontcolor("blue "), b = b.fontcolor("red "), c = c.fontcolor("green ")
document.write(a + b +c);

document.write(3 + 3);

function my_first_function() {      //Defining a function and naming it
    var str = ' This text is green!';       //Defining a variable and giving it a string value
    var result = str.fontcolor("green");    //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;   //Putting the value of result into HTML element with "Green_Text" id
}