"use strict";
/**
 * Generic function that returns the given data as-is.
 * @template T - The type of the input data.
 * @param data - The data to be returned.
 * @returns The same data provided as input.
 */
function logSomething(data) {
    return data;
}
/**
 * Searches for a substring within a given string and logs the index position.
 * @param title - The main string to search within.
 * @param subTitle - The substring to find.
 */
function searchSomething(title, subTitle) {
    const result = title.search(subTitle);
    console.log(`Index of "${subTitle}" in "${title}":`, result);
}
// Example usage
searchSomething("hello world", "hello"); // Output: Index of "hello" in "hello world": 0
console.log(logSomething(123).toFixed(2), // Output: 123.00
logSomething("hello, world!") // Output: hello, world!
);
