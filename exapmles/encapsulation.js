"use strict";
class Vehicle {
    model;
    color;
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    getModel() {
        return this.model;
    }
}
class MercedesBenz extends Vehicle {
    constructor(model, color) {
        super(model, color);
    }
    drive() {
        console.log(this.getModel());
    }
}
let benz = new MercedesBenz('s class', 'black');
console.log(benz);
