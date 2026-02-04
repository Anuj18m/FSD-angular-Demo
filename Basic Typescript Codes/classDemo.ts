class Car{
    Brand: string;
    Model: string;
    constructor(Brand: string, Model: string){
        this.Brand = Brand;
        this.Model = Model;
    }

    display(){
        console.log(`Car Brand: ${this.Brand}, Car Model: ${this.Model}`);
    }
}

let myCar = new Car("Toyota", "Corolla");
myCar.display();


