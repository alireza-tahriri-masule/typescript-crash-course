/**
 * This TypeScript example demonstrates advanced type features including type aliases,
 * interfaces, tuples, literal types, type assertions, and intersection types.
 *
 * TypeScript allows developers to define precise data structures, ensuring type safety
 * and improving maintainability in complex applications.
 */

// Type Alias: Creating a custom type for a User
type User1 = {
  id: number;
  name: string;
  email?: string; // Optional field
};

const user1: User1 = {
  id: 1,
  name: "Alireza",
  email: "alirezatahriri4@gmail.com", // Optional
};

console.log(user1);

// Interface: Defining a structure for a person
interface Person {
  name: string;
  age: number;
}

// Extending an interface to include additional properties
interface Employee extends Person {
  jobTitle: string;
}

const emp: Employee = {
  name: "Alireza",
  age: 25,
  jobTitle: "Developer",
};

console.log(emp); // Output: { name: 'Alireza', age: 25, jobTitle: 'Developer' }

// Tuple: Defining a fixed-length array with specific types
let person: [string, number] = ["Alireza", 25];

console.log(person); // Output: ['Alireza', 25]

// Literal Types: Restricting a variable to specific string values
let direction: "up" | "down" | "left" | "right";

direction = "up"; // Valid
// direction = "diagonal"; // Error: Type '"diagonal"' is not assignable to type '"up" | "down" | "left" | "right"'

// Type Assertion: Manually specifying the type of a variable
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16

// Intersection Types: Combining multiple types into one
type Admin = { permissions: string[] };
type User = { username: string };

type SuperUser = Admin & User;

const superUser: SuperUser = {
  permissions: ["read", "write", "delete"],
  username: "admin123",
};

console.log(superUser); // Output: { permissions: ['read', 'write', 'delete'], username: 'admin123' }
