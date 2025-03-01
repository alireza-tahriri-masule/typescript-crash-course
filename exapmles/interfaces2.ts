/**
 * This TypeScript example demonstrates the use of an interface with dynamic properties
 * and how functions interact with objects that implement the interface.
 *
 * - `VehicleDetails` interface: Represents a vehicle with `year` (number), `model` (string),
 *   and any other dynamic properties.
 * - `displayVehicleInfo()`: Logs the year and model of the vehicle, and can handle additional properties.
 */

// Defining an interface for vehicle details with dynamic properties
interface VehicleDetails {
  year: number;
  model: string;
  [additionalInfo: string]: string | number; // Allows any additional properties with string or number values
}

/**
 * Logs the year and model of a vehicle, and can log additional properties if available.
 * @param vehicle - An object implementing the `VehicleDetails` interface.
 */
function displayVehicleInfo(vehicle: VehicleDetails): void {
  console.log("Year:", vehicle.year);
  console.log("Model:", vehicle.model);

  // Log any additional properties dynamically
  for (const key in vehicle) {
    if (vehicle.hasOwnProperty(key) && key !== "year" && key !== "model") {
      console.log(`${key}:`, vehicle[key]);
    }
  }
}

// Creating an object that matches the `VehicleDetails` interface
let vehicleObj: VehicleDetails = { year: 2021, model: "Economics", color: "Red", mileage: 15000 };

// Calling the function with the created object
displayVehicleInfo(vehicleObj);
