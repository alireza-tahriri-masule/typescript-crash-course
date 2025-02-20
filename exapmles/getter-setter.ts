/**
 * This TypeScript example demonstrates the use of getter and setter methods
 * for encapsulating class properties, enforcing validation, and providing controlled access.
 *
 * - `House` class: Represents a house with an address and number of rooms.
 * - Encapsulation: Uses private properties to restrict direct modification.
 * - Getter & Setter: Provides controlled access to private data with validation.
 * - Error Handling: Ensures logical constraints on the number of rooms.
 */

// Defining the House class
class House {
  /**
   * Address of the house (public: accessible from anywhere).
   */
  public address: string;
  
  /**
   * Number of rooms in the house (private: cannot be accessed directly).
   */
  private _rooms: number;

  /**
   * Constructor initializes the house with an address and number of rooms.
   * @param address - The physical address of the house.
   * @param rooms - The initial number of rooms in the house.
   */
  constructor(address: string, rooms: number) {
      this.address = address;
      this._rooms = rooms;
  }

  /**
   * Setter method to update the number of rooms.
   * Ensures the house has at least one room before allowing updates.
   * @param rooms - The new number of rooms.
   * @throws Error if rooms are less than 1.
   */
  set setRooms(rooms: number) {
      if (rooms < 1) {
          throw new Error("A house must have at least one room.");
      }
      this._rooms = rooms;
  }

  /**
   * Getter method to retrieve the current number of rooms.
   * @returns The number of rooms in the house.
   */
  get getRooms(): number {
      return this._rooms;
  }
}

// Creating an instance of House with an initial address and number of rooms
const house = new House("Tehran, Pasteur Street", 4);

// Updating the number of rooms using the setter method
house.setRooms = 5;

// Logging the current number of rooms using the getter method
console.log(house.getRooms); // Output: 5
