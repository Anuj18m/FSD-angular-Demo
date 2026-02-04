// Normal function
function add(a, b) {
    return a + b;
}
// Anonymous function
var multiply = function (a, b) {
    return a * b;
};
// Arrow function 
var subtract = function (a, b) {
    return a - b;
};
var num1 = 5;
var num2 = 3;
console.log("Number 1 :", num1);
console.log("Number 2 :", num2);
console.log("Addition :", add(num1, num2));
console.log("Multiplication :", multiply(num1, num2));
console.log("Subtraction :", subtract(num1, num2));
