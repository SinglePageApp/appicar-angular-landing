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
   * Gets the menu item's title translated into the given language.
   *
   * @param language The current landing's page language.
   * @returns string The translated item's name.
   */
  public abstract getName(language: string): string;

  /**
   * Gets the menu item's price in the given currency's value.
   * @param currency The currency code, i.e: 'USD', 'ARS', etc.
   * @returns number The item's price value in the given currency's value.
   */
  public abstract getPrice(currency: string): number;
}
