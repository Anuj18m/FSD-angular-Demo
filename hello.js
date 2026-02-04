var userName = "Anuj";
var userAge = 20;
var isMember = true;
function greetUser(name, age, isMember) {
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    if (isMember) {
        console.log("You are a member of our platform.");
    }
    else {
        console.log("You are not a member of our platform.");
    }
}
greetUser(userName, userAge, isMember);
