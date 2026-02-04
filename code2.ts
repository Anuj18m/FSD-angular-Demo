let uname: string = "Anuj";
let age: number = 20;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3];
let person:[string, number] = ["Anuj", 20];
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;

function displayInfo(name: string, age: number, isStudent: boolean, favoriteColor: Color): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Is Student: ${isStudent}`);
    console.log(`Favorite Color: ${Color[favoriteColor]}`);
}
displayInfo(uname, age, isStudent, favoriteColor);