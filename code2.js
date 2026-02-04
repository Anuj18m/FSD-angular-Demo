var uname = "Anuj";
var age = 20;
var isStudent = true;
var numbers = [1, 2, 3];
var person = ["Anuj", 20];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
function displayInfo(name, age, isStudent, favoriteColor) {
    console.log("Name: ".concat(name));
    console.log("Age: ".concat(age));
    console.log("Is Student: ".concat(isStudent));
    console.log("Favorite Color: ".concat(Color[favoriteColor]));
}
displayInfo(uname, age, isStudent, favoriteColor);
