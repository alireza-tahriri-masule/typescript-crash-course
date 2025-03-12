/**
 * Generic function that returns the given value.
 * @template T - The type of the input value.
 * @param value - The value to be returned.
 * @returns The same value provided as input.
 */
function logData<T>(value: T): T {
  return value;
}

/**
 * Interface defining a generic logging function.
 * @template T - The type of the input value.
 */
interface LogInterface<T> {
  (value: T): T;
}

// Example implementation of LogInterface for numbers
let myLogFunc: LogInterface<number> = (value: number): number => {
  return value;
};

// Example usage
console.log(logData<string>("Hello, TypeScript!")); // Output: Hello, TypeScript!
console.log(myLogFunc(42)); // Output: 42
