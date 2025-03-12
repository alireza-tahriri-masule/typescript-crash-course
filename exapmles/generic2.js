"use strict";
/**
 * Generic function that returns the given value.
 * @template T - The type of the input value.
 * @param value - The value to be returned.
 * @returns The same value provided as input.
 */
function logData(value) {
    return value;
}
// Example implementation of LogInterface for numbers
let myLogFunc = (value) => {
    return value;
};
// Example usage
console.log(logData("Hello, TypeScript!")); // Output: Hello, TypeScript!
console.log(myLogFunc(42)); // Output: 42
