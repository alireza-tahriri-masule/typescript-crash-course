/**
 * This TypeScript example demonstrates an abstract class with encapsulation principles,
 * access modifiers (protected, public), and method overriding in a subclass.
 *
 * - `Provider` (Abstract Class): Manages a list of providers.
 * - `ServiceProvider` (Concrete Class): Implements execution logic for a selected provider.
 * - Encapsulation: `providers` array is protected, accessible via getter.
 * - Error Handling: Prevents invalid operations like empty provider names or out-of-bounds execution.
 */

// Abstract class defining a provider structure
abstract class Provider {
  /**
   * Protected array to store provider names.
   */
  protected providers: string[] = [];

  /**
   * Retrieves a copy of the providers list to prevent direct modification.
   * @returns An array of provider names.
   */
  public get providersList(): string[] {
    return [...this.providers]; // Returning a copy for encapsulation
  }

  /**
   * Adds a new provider to the list after validation.
   * @param providerName - The name of the provider to add.
   * @throws Error if the provider name is empty.
   */
  public addProvider(providerName: string): void {
    if (!providerName.trim()) {
      throw new Error('Provider name cannot be empty.');
    }
    this.providers.push(providerName);
  }

  /**
   * Abstract method to be implemented by subclasses for executing a provider.
   * @param providerIndex - The index of the provider to execute.
   */
  abstract execute(providerIndex: number): void;
}

// Concrete class extending Provider
class ServiceProvider extends Provider {
  /**
   * Executes the provider at the given index after validation.
   * @param providerIndex - The index of the provider to execute.
   */
  public execute(providerIndex: number): void {
    if (providerIndex < 0 || providerIndex >= this.providers.length) {
      console.error('Invalid provider index.');
      return;
    }
    console.log(`Executing provider: ${this.providers[providerIndex]}`);
  }
}

// Creating an instance of ServiceProvider
const serviceProvider = new ServiceProvider();

/**
 * Predefined list of common service providers.
 * Marked as `readonly` to prevent accidental modification.
 */
const providersList: readonly string[] = [
  'CloudflareDNS', 
  'GoogleSMTP', 
  'AWSLambda', 
  'AzureStorage', 
  'DigitalOceanDroplet'
];

/**
 * Adding providers dynamically from the list.
 */
providersList.forEach(provider => serviceProvider.addProvider(provider));

// Logging providers list
console.log('Providers:', serviceProvider.providersList);

// Executing a provider at index 0 (ServerProvider)
serviceProvider.execute(0); // Output: Executing provider: ServerProvider
