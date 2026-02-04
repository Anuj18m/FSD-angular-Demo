
const userName :String = "Anuj";
const userAge :number = 20;
const isMember :boolean = true;

function greetUser(name: String, age: number, isMember: boolean): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
    if (isMember) {
        console.log("You are a member of our platform.");
    } else {
        console.log("You are not a member of our platform.");
    }
}
greetUser(userName, userAge, isMember);