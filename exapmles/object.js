"use strict";
/**
 * This TypeScript example demonstrates the use of objects, including basic object types,
 * inline object definitions, type aliases, and function properties within objects.
 *
 * TypeScript enforces strong typing for objects, ensuring that properties and methods
 * adhere to their defined types, improving code maintainability and reducing runtime errors.
 */
// Example 1: Basic object type
let obj = {
    name: "Alireza",
    age: 22,
    job: "Developer",
};
console.log(obj); // Output: { name: 'Alireza', age: 22, job: 'Developer' }
// Example 2: Inline object type with explicit property definitions
let obj2 = {
    name: "Alireza",
    age: 22,
    job: "Programmer",
};
console.log(obj2); // Output: { name: 'Alireza', age: 22, job: 'Programmer' }
// Creating an object with a function property that returns an object
let obj3 = {
    name: "Alireza",
    findJob: (country, salary, insurance) => {
        return {
            country: country,
            salary: salary,
            insurance: insurance,
        };
    },
};
console.log(obj3.findJob("US", 50000, true));
// Output: { country: 'US', salary: 50000, insurance: true }
