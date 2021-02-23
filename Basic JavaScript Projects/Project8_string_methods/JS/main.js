function full_sentence() {      //concatenate the strings together
    var part_1 = 'I have ';
    var part_2 = 'made this ';
    var part_3 = 'into a complete ';
    var part_4 = 'sentence.';
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {       //slice a sentence to return only the name Johnny
    var Sentence = 'All work and no play makes Johnny a dull boy.';
    var Section = Sentence.slice(27,33);
    document.getElementById('Slice').innerHTML = Section;
}

function upperCase() {
    var Sentence = 'let\'s raise the roof!';
    var result = Sentence.toUpperCase();
    document.getElementById('upperCase').innerHTML = result;
}

function searchString() {       //returns the position in the string where the search item starts.
    var Sentence = 'The quick brown fox.';
    var result = Sentence.search(/brown/i); //case-insensitive search, case sensitive uses ("")
    document.getElementById('searched').innerHTML = result;
}

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); //converts number to string
    console.log(typeof x);
}

function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(6); //sets precision to 6
}

function toFixed_Method() {
    var x = 6.678910;
    document.getElementById("Fixed").innerHTML = x.toFixed(2); //returns to the second decimal place
}

function valueOf_Method() {
    var str = "Hello World!";
    document.getElementById("value").innerHTML = str.valueOf();
}