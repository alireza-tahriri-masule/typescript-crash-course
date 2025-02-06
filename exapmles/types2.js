"use strict";
/**
 * This TypeScript example demonstrates advanced type features including type aliases,
 * interfaces, tuples, literal types, type assertions, and intersection types.
 *
 * TypeScript allows developers to define precise data structures, ensuring type safety
 * and improving maintainability in complex applications.
 */
const user1 = {
    id: 1,
    name: "Alireza",
    email: "alirezatahriri4@gmail.com", // Optional
};
console.log(user1);
const emp = {
    name: "Alireza",
    age: 25,
    jobTitle: "Developer",
};
console.log(emp); // Output: { name: 'Alireza', age: 25, jobTitle: 'Developer' }
// Tuple: Defining a fixed-length array with specific types
let person = ["Alireza", 25];
console.log(person); // Output: ['Alireza', 25]
// Literal Types: Restricting a variable to specific string values
let direction;
direction = "up"; // Valid
// direction = "diagonal"; // Error: Type '"diagonal"' is not assignable to type '"up" | "down" | "left" | "right"'
// Type Assertion: Manually specifying the type of a variable
let someValue = "This is a string";
let strLength = someValue.length;
console.log(strLength); // Output: 16
const superUser = {
    permissions: ["read", "write", "delete"],
    username: "admin123",
};
console.log(superUser); // Output: { permissions: ['read', 'write', 'delete'], username: 'admin123' }
