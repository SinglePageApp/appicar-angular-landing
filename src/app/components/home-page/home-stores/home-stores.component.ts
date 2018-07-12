import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '../../../services/store.service';
import Store from '../../../models/Store';
import MenuItem from '../../../models/MenuItem';


@Component({
  selector: 'app-home-stores',
  templateUrl: './home-stores.component.html',
  styleUrls: ['./home-stores.component.css']
})
export class HomeStoresComponent implements OnInit {
  /** The current row's number. */
  private currentRowNum: number;
  /** Determines if the more button is disabled. */
  private moreButtonEnabled: boolean;
  /** Determines if the stores are loading. */
  public isLoading: boolean;
  /** An array containing the stores. */
  public stores: Array<any>;
  /** The menu's item that the user has selected. */
  public menuItem: MenuItem;

  /**
   * Constructor.
   *
   * @param storeService The injected StoreService instance.
   */
  constructor(private storeService: StoreService) {
    this.stores = [];
    this.isLoading = true;
    this.currentRowNum = 0;
    this.menuItem = null;
    this.moreButtonEnabled = true;
  }

  ngOnInit() {
    this.storeService.getStores().subscribe(
      response => {
        this.isLoading = response.isLoading;
        this.stores = response.stores;
        this.menuItem = response.menuItem;
        // If a search was performed, disable the show more button.
        if (this.menuItem) {
          this.moreButtonEnabled = false;
        } else {
          // If the stores total number was reached, disable the show more button.
          this.moreButtonEnabled = this.stores.length < this.storeService.getTotalNumber();
        }
      },
      error => {
        console.log('Stores observable error:');
        console.log(error);
      },
      () => {}
    );
    // If a search was performed from inside an Error404Component don't find the stores.}}
    if (!this.storeService.isSearchFrom404()) {
      this.storeService.findStores();
    }
  }

  /**
   * Determines if a row is odd based on the number of the i-th element passed by parameters.
   *
   * @param i Number of the i-th element.
   */
  public isRowOdd(i: number) {
    this.currentRowNum += (i % 3 === 0 ? 1 : 0);
    // console.log('Row ' + this.currentRowNum + ': Element ' + i);

    return this.currentRowNum % 2 !== 0;
  }

  /**
   * On click show more button event.
   */
  public onClickShowMore() {
    this.storeService.findStores();
  }

  /**
   * Determines if the more button is enabled.
   *
   * @returns boolean True if the more button is enabled.
   */
  public isMoreButtonEnabled(): boolean {
    return this.moreButtonEnabled;
  }
}
