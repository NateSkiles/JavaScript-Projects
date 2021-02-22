function myDictionary() { //Creat a dictionary called "myDictonary"
    var Animal = {      //Creates an animal class with attributes in the dictionary.
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound //Deletes the Value deleted in the key Sound.
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //stores Animal.Sounds in "Dictionary."
}