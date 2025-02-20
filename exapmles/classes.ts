/**
 * This TypeScript example demonstrates basic class declarations, encapsulation principles,
 * and the use of access modifiers (public, private, protected) to control the visibility of class members.
 *
 * - `Car` class: Represents a simple car with a model and manufacturing year.
 * - Default parameter: If no year is provided, defaults to 2025.
 * - Public method `getCarInfo()`: Returns formatted car details.
 */

// Defining a simple class with properties and methods
class Car {
  /**
   * Constructor initializes a car instance with a model and year.
   * @param model - The model of the car (can be a string or a number).
   * @param year - The manufacturing year (defaults to 2025 if not provided).
   */
  constructor(public model: string | number, public year: number = 2025) {}

  /**
   * Retrieves car information as a formatted string.
   * @returns A string containing the model and year of the car.
   */
  public getCarInfo(): string {
      return `Model: ${this.model}, Year: ${this.year}`;
  }
}

// Creating an instance of Car with a model "Picanto"
let kia = new Car("Picanto");

// Logging car information to the console
console.log(kia.getCarInfo()); // Output: Model: Picanto, Year: 2025