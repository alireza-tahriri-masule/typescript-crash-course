/**
 * Generic function that returns the given data as-is.
 * @template T - The type of the input data.
 * @param data - The data to be returned.
 * @returns The same data provided as input.
 */
function logSomething<T>(data: T): T {
  return data;
}

/**
 * Type definition for a search function that checks if a substring exists within a string.
 */
type Searcher = (title: string, subTitle: string) => boolean;

/**
 * Searches for a substring within a given string and logs the index position.
 * @param title - The main string to search within.
 * @param subTitle - The substring to find.
 */
function searchSomething(title: string, subTitle: string): void {
  const result = title.search(subTitle);
  console.log(`Index of "${subTitle}" in "${title}":`, result);
}

// Example usage
searchSomething("hello world", "hello"); // Output: Index of "hello" in "hello world": 0

console.log(
  logSomething<number>(123).toFixed(2), // Output: 123.00
  logSomething<string>("hello, world!") // Output: hello, world!
);
