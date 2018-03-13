import Price from './Price';
import Translatable from './Translatable';

/**
 * class :: Item
 *
 * Represents a menu's item.
*/
export default abstract class Item {
  protected date: Date; /** The item's creation date. */
  protected name: Translatable; /** The item's title in translatable form. */
  protected paymentMethods: string[]; /** Accepted payment methods, i.e: ['cash', 'credit card'] */
  protected picture: string; /** The item picture's CDN URL. */
  protected price: Price[]; /** The item's price in many currency's values. */

  /**
   * Constructor.
   *
   * @param name The item's title in translatable form.
   * @param category The item's category, i.e: "Pizza", "Snack", "Salad", etc.
   * @param paymentMethods Accepted payment methods, i.e: ['cash', 'credit card'].
   * @param picture The item picture's CDN URL.
   * @param price The item's price in many currency's values.
   */
  public constructor(name?: Translatable, paymentMethods?: string[], picture?: string, price?: Price[]) {
    this.date = new Date();
    this.name = name || new Translatable('');
    this.paymentMethods = paymentMethods || [];
    this.picture = picture || '';
    this.price = price || [];
  }

  /**
   * Gets the menu item's title translated into the given language.
   *
   * @param language The current landing's page language.
   * @returns string The translated item's name.
   */
  public getName(language: string): string {
    return this.name.getText(language);
  }

  public setName(name: Translatable) {
    this.name = name;
  }

  /**
   * Gets the menu item's price in the given currency's value.
   *
   * @param currency The currency code, i.e: 'USD', 'ARS', etc.
   * @returns number The item's price value in the given currency's value.
   */
  public getPrice(currency: string): number {
    return this.price.find(i => i.getCurrency() === currency).getValue();
  }

  /**
   * Sets an entire list of prices.
   *
   * @param price An array containing all the prices to set.
   */
  public setPrice(price: Price[]) {
    this.price = price;
  }

  public setJsonPrice(price: any[]) {
    this.price = new Array<Price>();
    price.forEach(priceJson => {
      this.addPrice(priceJson.currency, priceJson.value);
    });
  }

  /**
   * Adds a new price to the list.
   *
   * @param currency The currency code, i.e: 'USD', 'ARS', etc.
   * @param value The price's value in terms of the current currency.
   */
  public addPrice(currency: string, value: number) {
    this.price.push(new Price(currency, value));
  }

  /**
   * Gets all the accepted payment methods, i.e: ['cash', 'credit card'].
   *
   * @returns string An array containing all the accepted payment methods.
   */
  public getPaymentMethods(): string[] {
    return this.paymentMethods;
  }

  /**
   * Gets The item picture's CDN URL.
   *
   * @returns string The item picture's CDN URL.
   */
  public getPicture(): string {
    return this.picture;
  }

  /**
   * Gets the item's creation date.
   *
   * @returns Date The item's creation date.
   */
  public getDate(): Date {
    return this.date;
  }
}
