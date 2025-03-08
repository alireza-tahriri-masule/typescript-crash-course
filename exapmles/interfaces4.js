"use strict";
/**
 * This TypeScript example demonstrates implementing an interface in a class.
 *
 * - `Person` interface: Defines the structure for a person with `name`, `email`, `age`,
 *   and an `about()` method.
 * - `User` class: Implements the `Person` interface and provides a constructor
 *   to initialize properties.
 * - `about()` method: Returns a formatted string containing user details.
 */
// Implementing the `Person` interface in a class
class User3 {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    about() {
        return `Hello, my name is ${this.name}, and this is my email: ${this.email}.`;
    }
}
// Creating an instance of the `User` class
const user = new User3("Bob", "bob2002@gmail.com", 22);
// Logging the user details
console.log(user.about());
