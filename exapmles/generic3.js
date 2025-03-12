"use strict";
/**
 * Generic class representing a dynamic array with basic CRUD operations.
 * @template T - The type of elements stored in the array.
 */
class MyArray {
    data;
    /**
     * Initializes the array with given data.
     * @param data - An array of elements of type T.
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * Adds a new item to the array.
     * @param item - The item to be added.
     */
    addItem(item) {
        this.data.push(item);
    }
    /**
     * Deletes an item at a specific index.
     * @param index - The index of the item to remove.
     */
    deleteItem(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
    }
    /**
     * Retrieves all items in the array.
     * @returns An array of type T.
     */
    getItems() {
        return [...this.data]; // Returning a shallow copy to prevent mutation
    }
    /**
     * Retrieves an item by its index.
     * @param index - The index of the item to retrieve.
     * @returns The item at the given index or undefined if out of bounds.
     */
    getItemByIndex(index) {
        return this.data[index];
    }
}
// Example usage:
const myArray = new MyArray([
    "Hello", // English
    "Salut", // French
    "Hallo", // German
    "Hola", // Spanish
    "Ciao", // Italian
    "Привет", // Russian
    "مرحبا", // Arabic
    "こんにちは", // Japanese
    "你好", // Chinese (Mandarin)
    "안녕하세요", // Korean
    "नमस्ते", // Hindi
    "สวัสดี", // Thai
    "Merhaba", // Turkish
    "سلام", // Persian (Farsi)
    "Γειά σου", // Greek
    "Shalom", // Hebrew
    "Hej", // Swedish
    "Ahoj", // Czech
    "Szia", // Hungarian
    "Kamusta", // Filipino (Tagalog)
    "Jambo", // Swahili
    "Tere", // Estonian
    "Labas", // Lithuanian
    "Pryvit", // Ukrainian
    "Zdravo", // Serbian/Croatian/Bosnian
    "Selamat", // Malay
    "Chào", // Vietnamese
    "Kaixo", // Basque
    "Ola", // Portuguese
]);
myArray.deleteItem(1);
console.log(myArray.getItems());
