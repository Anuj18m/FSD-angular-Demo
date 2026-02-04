interface Car {
    Brand: string;
    Model: string;
    Year: number;
}


const car1: Car = {
    Brand: "Toyota",
    Model: "Camry",
    Year: 2020
};

const car2: Car = {
    Brand: "Honda",
    Model: "Civic",
    Year: 2019
};

console.log(car1);
console.log(car2.Brand)