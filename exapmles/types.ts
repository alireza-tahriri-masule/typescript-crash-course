/**
 * This TypeScript example demonstrates basic variable declarations, type assignments,
 * and the use of arrays with explicit types. It also showcases a type error that occurs
 * when trying to assign a value that does not match the specified type of the variable.
 *
 * In TypeScript, static typing ensures that variables and arrays conform to specific types,
 * preventing runtime errors and improving code maintainability.
 */

// Declaration of a string variable initialized with a greeting message
const message: string = "Hello, World!"; // String type: Represents a greeting message

// Declaration of a number variable initialized with a value
const num: number = 75; // Number type: Represents a numerical value

// Declaration of a boolean variable initialized with a true value
const condition: boolean = true; // Boolean type: Represents a true/false value

// Declaration of an array of strings representing the alphabet
let alphabet: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// 'alphabet' is an array of strings, containing the English alphabet from 'a' to 'z'

// The following line will cause a TypeScript error because the array is expected to only contain strings,
// and we are trying to assign a number to the array, which violates the type definition.

// Attempting to reassign 'alphabet' with an array containing a string and a number.
// This will result in a TypeScript error because the array is expected to only contain strings.
// Type 'number' is not assignable to type 'string'.
// alphabet = ['a', 2];  // Error: Type 'number' is not assignable to type 'string'

// Corrected version: Only strings should be assigned to the 'alphabet' array.
alphabet = ["a", "b"]; // Now both elements are strings, so this assignment is valid

// Log the value of 'alphabet' to the console to see the updated array
console.log(alphabet); // Output: ['a', 'b']

let fullname: string | undefined = "alireza";
let undefinedVarable: undefined = undefined;
let nullVariable: null = null;

enum Direction {
  TOP = "Top",
  LEFT = "Left",
  RIGHT = "Right",
  DOWN = "Down"
}
console.log(Direction);
