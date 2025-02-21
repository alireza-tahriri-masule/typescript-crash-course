/**
 * This TypeScript example demonstrates the Singleton design pattern,
 * ensuring only one instance of a class is created and shared across the application.
 *
 * - `Singleton` Class: Restricts instantiation to a single instance.
 * - `private constructor`: Prevents direct instantiation from outside the class.
 * - `static getInstance()`: Returns the existing instance or creates one if it doesn’t exist.
 */

class Singleton {
  /**
   * Holds the single instance of the class.
   * Marked as `private static` to ensure restricted access.
   */
  private static instance: Singleton | null = null;

  /**
   * Private constructor to prevent external instantiation.
   */
  private constructor() {}

  /**
   * Provides access to the single instance of the class.
   * @returns The Singleton instance.
   */
  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

// Testing the Singleton behavior
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // Output: true (Both references point to the same instance)
