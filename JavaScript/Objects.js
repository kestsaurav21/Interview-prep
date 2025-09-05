//Ways to create Objects in JavaScript?

//1. Using Object literals

const car = {
    name: 'GT',
    maker: 'BMW',
    engine: '1998cc'
}

console.log(car.name);


//2. Using Constructor

function Person(name, age){
    this.name = name,
    this.age = age
}

const p1 = new Person("Saurabh", 24)

console.log("Object --> ",p1);

//3. Object.create() method - it creates a new object using an existing object

const newCar = Object.create(car)

newCar.name = 'Audi'
newCar.type = 'EV'
console.log(newCar);
console.log(newCar.engine); //Inherit the property from the 'car' object using prototype chaining


//4. using ES6 classes

class Vehicle{
    constructor(brand, model, type){
        this.brand = brand,
        this.model = model,
        this.type = type
    }
}


const bike = new Vehicle('Royal Enfield', 'Hunter-350x', 'Petrol')

console.log(bike);









