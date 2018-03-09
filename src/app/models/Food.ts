import MenuItem from './MenuItem';
import Translatable from './Translatable';
import Price from './Price';

/**
 * class :: Food
 *
 * Represents a food type menu's item.
*/
export default class Food extends MenuItem {
  /**
   * Constructor.
   *
   * @param name The food's title in translatable form.
   * @param category The food's category, i.e: "Pizza", "Snack", "Salad", etc.
   * @param paymentMethods Accepted payment methods, i.e: ['cash', 'credit card'].
   * @param picture The food picture's CDN URL.
   * @param price The food's price in many currency's values.
   */
  public constructor(
    name?: Translatable,
    category?: string,
    paymentMethods?: string[],
    picture?: string,
    price?: Price[]
  ) {
    super();
    this.date = new Date();
    this.name = name;
    this.category = category;
    this.paymentMethods = paymentMethods;
    this.picture = picture;
    this.price = price;
  }

  public getName(language: string): string {
    return this.name.getText(language);
  }

  public getPrice(currency: string): number {
    return this.price.find(i => i.getCurrency() === currency).getValue();
  }

  public getAction(): string {
    return 'eat';
  }
}
