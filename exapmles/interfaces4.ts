/**
 * This TypeScript example demonstrates implementing an interface in a class.
 *
 * - `Person` interface: Defines the structure for a person with `name`, `email`, `age`, 
 *   and an `about()` method.
 * - `User` class: Implements the `Person` interface and provides a constructor 
 *   to initialize properties.
 * - `about()` method: Returns a formatted string containing user details.
 */

// Defining an interface for a person
interface Person3 {
  name: string;
  email: string;
  age: number;
  about(): string;
}

// Implementing the `Person` interface in a class
class User3 implements Person3 {
  constructor(public name: string, public email: string, public age: number) {}

  public about(): string {
    return `Hello, my name is ${this.name}, and this is my email: ${this.email}.`;
  }
}

// Creating an instance of the `User` class
const user: User3 = new User3("Bob", "bob2002@gmail.com", 22);

// Logging the user details
console.log(user.about());
