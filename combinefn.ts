// Normal function
function add(a: number, b: number): number {
    return a + b;
}

// Anonymous function
const multiply = function(a: number, b: number): number {
    return a * b;
};

// Arrow function 
const subtract = (a: number, b: number): number => {
    return a - b;
};



const num1: number = 5;
const num2: number = 3;

console.log("Number 1 :", num1);
console.log("Number 2 :", num2);
console.log("Addition :", add(num1, num2));           
console.log("Multiplication :", multiply(num1, num2));      
console.log("Subtraction :", subtract(num1, num2));      