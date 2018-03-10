import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from '../../services/store.service';
import MenuItem from '../../models/MenuItem';
import Food from '../../models/Food';
import Drink from '../../models/Drink';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
/**
 * class :: SearchboxComponent
 *
 * Component for doing the search.
 */
export class SearchboxComponent {
  public menuItem: MenuItem;
  public menuItemCategory: string;

  /**
   * Constructor.
   *
   * @param storeService StoreService dependency injection.
   */
  constructor(private router: Router, private storeService: StoreService) {
    this.menuItem = new Food();
    this.menuItemCategory = '';
  }

  /**
   * Changes the menu item's type to Food or Drink.
   *
   * @param menuItemType Possible values are "eat" or "drink".
   */
  public changeMenuItemType(menuItemType: string) {
    if (menuItemType === 'eat') {
      this.menuItem = new Food();
    } else {
      this.menuItem = new Drink();
    }
  }

  /**
   * Search stores by the menu item's category they have.
   */
  public search() {
    const isSearchFrom404 = this.router.url === '/404';
    this.menuItem.setCategory(this.menuItemCategory);
    // If the input isn't empty perform the search
    if (this.menuItemCategory) {
      this.storeService.findStoresByMenuItem(this.menuItem, isSearchFrom404);
    }
    // Redirect to HomePageComponent from Error404Component.
    if (isSearchFrom404) {
      this.router.navigateByUrl('/#stores');
    }
  }

  /**
   * Resets the search's input and brings all the stores that appeared in the initial load.
   */
  public reset() {
    this.menuItemCategory = '';
    this.menuItem.setCategory('');
    this.storeService.findStores();
  }
}
