import Item from './Item';

/**
 * class :: Menu
 *
 * Represents the Store's menu.
*/
export default class Menu {

  private items: Item[];

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
}
