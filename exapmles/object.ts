/**
 * This TypeScript example demonstrates the use of objects, including basic object types,
 * inline object definitions, type aliases, and function properties within objects.
 *
 * TypeScript enforces strong typing for objects, ensuring that properties and methods
 * adhere to their defined types, improving code maintainability and reducing runtime errors.
 */

// Example 1: Basic object type
let obj: object = {
  name: "Alireza",
  age: 22,
  job: "Developer",
};

console.log(obj); // Output: { name: 'Alireza', age: 22, job: 'Developer' }

// Example 2: Inline object type with explicit property definitions
let obj2: {
  name: string;
  age: number;
  job: string;
} = {
  name: "Alireza",
  age: 22,
  job: "Programmer",
};

console.log(obj2); // Output: { name: 'Alireza', age: 22, job: 'Programmer' }

// Example 3: Using a type alias to define an object structure
type MyObj = {
  name: string;
  findJob: (country: string, salary: number, insurance: boolean) => object;
};

// Creating an object with a function property that returns an object
let obj3: MyObj = {
  name: "Alireza",
  findJob: (country: string, salary: number, insurance: boolean) => {
    return {
      country: country,
      salary: salary,
      insurance: insurance,
    };
  },
};

console.log(obj3.findJob("US", 50000, true));
// Output: { country: 'US', salary: 50000, insurance: true }
