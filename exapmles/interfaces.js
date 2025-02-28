"use strict";
/**
 * This TypeScript example demonstrates the use of interfaces to define object structure
 * and how functions utilize these interfaces for type safety.
 *
 * - `ItemDetails` interface: Defines an object structure with `dimension` (number) and `description` (string).
 * - `displayItem()`: Logs the dimension and description properties of an object implementing `ItemDetails`.
 * - `showDetails()`: Another function that logs the same properties, demonstrating reusability of interfaces.
 */
/**
 * Logs the properties of an object implementing `ItemDetails`.
 * @param item - An object conforming to `ItemDetails` interface.
 */
function displayItem(item) {
    console.log("Dimension:", item.dimension);
    console.log("Description:", item.description);
}
/**
 * Another function that logs the properties of an object implementing `ItemDetails`.
 * @param details - An object conforming to `ItemDetails` interface.
 */
function showDetails(details) {
    console.log("Dimension:", details.dimension);
    console.log("Description:", details.description);
}
// Creating an object that matches the `ItemDetails` interface
let product = { dimension: 20, description: "Sample product" };
// Calling functions with the created object
displayItem(product);
showDetails(product);
