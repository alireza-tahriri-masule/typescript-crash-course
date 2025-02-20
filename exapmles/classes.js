"use strict";
class Car {
    model;
    year;
    constructor(model, year = 2025) {
        this.year = year;
        this.model = model;
    }
}
let kia = new Car('picanto');
console.log(kia.model);
