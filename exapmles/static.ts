/**
 * This TypeScript example demonstrates the use of static properties, encapsulation,
 * and readonly modifiers to enforce immutability and controlled access to class data.
 *
 * - `Something` Class: Represents a model with a static property and a readonly year.
 * - `static model`: Shared across all instances and cannot be accessed via `this`.
 * - `readonly year`: Ensures immutability after initialization.
 * - `getModel()`: Static method for retrieving the model name.
 */

class Something {
  /**
   * Static property shared among all instances.
   * Private to prevent direct external modification.
   */
  private static model: string;

  /**
   * Readonly property ensuring immutability after initialization.
   */
  readonly year: number;

  /**
   * Constructor initializes the static model and the instance year.
   * @param model - The model identifier.
   * @param year - The manufacturing year.
   */
  constructor(model: string, year: number) {
    Something.model = model;
    this.year = year;
  }

  /**
   * Retrieves the static model name.
   * @returns The model name as a string.
   */
  static getModel(): string {
    return this.model;
  }
}

// Creating an instance of Something
const something = new Something('X-001', 2025);

// Logging instance properties
console.log(`Year: ${something.year}`); // Output: Year: 2025

// Retrieving static model name
console.log(`Model: ${Something.getModel()}`); // Output: Model: X-001
