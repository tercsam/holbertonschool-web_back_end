import Currency from './3-currency'; // Import the Currency class

export default class Pricing { // Define the Pricing class
  constructor(amount, currency) { // Constructor function with parameters amount and currency
    if (typeof amount !== 'number') throw TypeError('Amount must be a number'); // Check if amount is a number
    // Initalization of class properties
    this._amount = amount; // Initialize _amount property with the passed amount
    this._currency = currency; // Initialize _currency property with the passed currency
  }

  // Getter for amount
  get amount() {
    return this._amount; // Return the value of _amount
  }

  // Getter for currency
  get currency() {
    return this._currency; // Return the value of _currency
  }

  // Setter for amount
  set amount(newAmount) {
    if (typeof newAmount !== 'number') throw TypeError('amount must be a number'); // Check if newAmount is a number
    this._amount = newAmount; // Set the value of _amount to the newAmount
  }

  // Setter for currency
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw TypeError('currency must be a Currency'); // Check if newCurrency is an instance of Currency
    this._currency = newCurrency; // Set the value of _currency to the newCurrency
  }

  // Method to display full price including currency code and name
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`; // Return a string containing the amount, currency name, and currency code
  }

  // Static method to convert price using a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate; // Return the converted price
  }
}
