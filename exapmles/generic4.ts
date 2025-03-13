/**
 * A generic class that stores a type and a condition.
 * @template T - The type of the main value (string or number).
 * @template U - The type of the condition (boolean).
 */
class SaySomething<T extends string | number, U extends boolean> {
  private data: [T, U];

  /**
   * Constructs an instance of SaySomething.
   * @param type - The main type value.
   * @param condition - The boolean condition.
   */
  constructor(public type: T, public condition: U) {
    this.data = [type, condition];
  }

  /**
   * Retrieves the stored data as a tuple.
   * @returns A tuple containing the type and condition.
   */
  getData(): [T, U] {
    return this.data;
  }

  /**
   * Updates the stored data with new values.
   * @param type - The new type value.
   * @param condition - The new boolean condition.
   */
  setData(type: T, condition: U): void {
    this.data = [type, condition];
  }
}

/**
 * A specialized class extending SaySomething for number and boolean types.
 */
class Status extends SaySomething<number, boolean> {}

// Example usage
const serverStatus = new Status(200, true);
console.log(serverStatus.getData()); // Output: [200, true]
