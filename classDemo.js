var Car = /** @class */ (function () {
    function Car(Brand, Model) {
        this.Brand = Brand;
        this.Model = Model;
    }
    Car.prototype.display = function () {
        console.log("Car Brand: ".concat(this.Brand, ", Car Model: ").concat(this.Model));
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla");
myCar.display();
