import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
  /** The app's translatable service. */
  public t: TranslateService;

  /**
   * Constructor.
   *
   * @param route The ActivatedRoute dependency injection.
   * @param router The Router dependency injection.
   * @param storeService StoreService dependency injection.
   */
  constructor(
    translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) {
    this.t = translate;
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
    const isSearchFrom404 = this.route.component['name'] === 'Error404Component';
    // If the input isn't empty perform the search
    if (!this.isBlank(this.menuItemCategory)) {
      this.menuItem.setCategory(this.menuItemCategory.trim());
      this.storeService.findStoresByMenuItem(this.menuItem, this.t.currentLang, isSearchFrom404);
    }
    // Redirect to HomePageComponent from Error404Component.
    if (isSearchFrom404) {
      this.router.navigateByUrl('/home#stores');
    }
  }

  /**
   * Resets the search's input and brings all the stores that appeared in the initial load.
   */
  public reset() {
    this.menuItemCategory = '';
    this.menuItem.setCategory('');
    this.storeService.resetSkipCounter();
    this.storeService.findStores();
  }

  /**
   * Checks if the given string is blank, null or undefined.
   *
   * @param str The string to check.
   * @returns true if it's blank, false otherwise.
   */
  private isBlank(str: string): boolean {
    return (!str || /^\s*$/.test(str));
  }
}
