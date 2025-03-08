/**
 * This TypeScript example demonstrates the use of an interface and a type alias 
 * for defining a function signature, along with an implementation that performs 
 * a substring search.
 *
 * - `SearchInterface` interface: Defines a function type with two string parameters 
 *   and a boolean return type.
 * - `SearchType` type alias: Represents the same function signature as `SearchInterface`.
 * - `search` function: Implements the `SearchType`, checking if `subString` exists 
 *   within `source`.
 */

// Defining an interface for a search function signature
interface SearchInterface {
  (source: string, subString: string): boolean;
}

// Defining a type alias for the same function signature
type SearchType = (source: string, subString: string) => boolean;

/**
 * Implements the `SearchType` function, searching for a substring within a source string.
 * @param source - The string to search within.
 * @param subString - The substring to look for.
 * @returns `true` if `subString` is found in `source`, otherwise `false`.
 */
const search: SearchType = (source: string, subString: string): boolean => {
  return source.includes(subString);
};

// Example usage of the `search` function
let result: boolean = search("Hello, TypeScript!", "Type");
console.log("Substring found:", result); // Output: Substring found: true
