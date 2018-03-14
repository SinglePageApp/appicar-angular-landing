import Item from './Item';
import Food from './Food';
import Translatable from './Translatable';
import Price from './Price';
import Drink from './Drink';
import MenuItem from './MenuItem';

/**
 * class :: Menu
 *
 * Represents the Store's menu.
*/
export default class Menu {

  private items: Item[];

  public constructor() {
    this.items = new Array<Item>();
  }

  /**
   * Gets all the items and promotions in the menu.
   *
   *  @returns Item[] The items and promotions in the menu.
  */
  public getItems(): Item[] {
    return this.items;
  }

  /**
   * Adds items to the store's menu.
   *
   * @param item The item you want to add to the menu.
   */
  public add(item: Item) {
    this.items.push(item);
  }

  /**
   * Sets all the items and promotions in the menu from a JSON object.
   *
   * @param reviews A JSON object containing the items and promotions in the menu.
   */
  public setJsonItems(items: any) {
    // Clear property before start pushing items into it.
    this.items = [];
    // Loop over all individual items in JSON format.
    for (const key in items) {
      if (key === 'food' && items.food) {
        let food: Food;
        items.food.forEach(foodJson => {
          food = Object.assign(new Food(), foodJson);
          food.setName(Object.assign(new Translatable(''), foodJson.name));
          food.setJsonPrice(foodJson.price);
          this.add(food);
        });
      } else if (key === 'drink' && items.drink) {
        let drink: Drink;
        items.drink.forEach(drinkJson => {
          drink = Object.assign(new Drink(), drinkJson);
          drink.setName(Object.assign(new Translatable(''), drinkJson.name));
          drink.setJsonPrice(drinkJson.price);
          this.add(drink);
        });
      }
    }
  }

  public addItems(items: Item[]) {
    Array.prototype.push.apply(this.items, items);
  }
}
