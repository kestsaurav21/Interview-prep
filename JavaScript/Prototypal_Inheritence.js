// What is Prototypal Inheritance

//In JavaScript, Prototypal inheritance is a technique in which an object can inherit the methods and properties from other object through its prototype chain.

// In JavaScript, almost everything is an object. Each object has a prototype (which acts as a blueprint) that defines shared properties and methods.
// This means whenever you create a new object, it can inherit properties and behaviors from another object through the prototype chain.

function Person(name, age){
    this.name = name,
    this.age = age
}



// Add a method to the Person Prototype -- using 'prototype'

Person.prototype.tellAboutPerson = function(){
    console.log(`Hi! My name is ${this.name} and my age is ${this.age}`);
}

// Create two instances of the Person object
const p1 = new Person("Saurabh", 25)
const p2 = new Person("Vaibhav", 24)

// Call the tellAboutPerson method on both instances
p1.tellAboutPerson()
p2.tellAboutPerson()


// Prototype Chain: When you access a property or method on an object, JavaScript first checks if that property or method exists on the object itself. If not, it looks for it in the object's prototype, and this process continues up the prototype chain until it finds the property or method or reaches the end of the chain.
