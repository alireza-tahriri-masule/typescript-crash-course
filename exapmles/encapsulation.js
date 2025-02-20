"use strict";
/**
 * This TypeScript example demonstrates the concepts of object-oriented programming (OOP),
 * including class inheritance, encapsulation, and access modifiers.
 *
 * - `Vehicle` class: Serves as a base class with protected and public properties.
 * - `MercedesBenz` class: Inherits from `Vehicle` and adds specific behavior.
 * - Encapsulation: Uses access modifiers (`protected`, `public`) to control visibility.
 * - Method Overriding: Demonstrates how a subclass can use and extend parent class methods.
 */
// Defining a base class Vehicle to represent general vehicle properties and behavior
class Vehicle {
    model;
    color;
    /**
     * Constructor initializes the vehicle with a model name and color.
     * @param model - The model of the vehicle (protected, accessible to subclasses).
     * @param color - The color of the vehicle (public, accessible everywhere).
     */
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    /**
     * Getter method to retrieve the model of the vehicle.
     * @returns The model name of the vehicle.
     */
    getModel() {
        return this.model;
    }
}
// Defining a subclass MercedesBenz that extends Vehicle
class MercedesBenz extends Vehicle {
    /**
     * Constructor initializes a MercedesBenz instance with specific model and color.
     * Calls the parent class constructor using `super()` to inherit properties.
     * @param model - The specific Mercedes-Benz model.
     * @param color - The color of the car.
     */
    constructor(model, color) {
        super(model, color);
    }
    /**
     * Method to simulate driving the Mercedes-Benz.
     * Logs a message including the model and color of the car.
     */
    drive() {
        console.log(`Driving a ${this.getModel()} in ${this.color} color.`);
    }
}
// Creating an instance of MercedesBenz with model "S Class" and color "Black"
let benz = new MercedesBenz("S Class", "Black");
// Logging the object to inspect its properties
console.log(benz);
// Calling the drive method to simulate driving the car
benz.drive(); // Output: Driving a S Class in Black color.
