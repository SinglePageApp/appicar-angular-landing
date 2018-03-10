import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StoreService } from '../../../services/store.service';
import Store from '../../../models/Store';
import MenuItem from '../../../models/MenuItem';


@Component({
  selector: 'app-home-stores',
  templateUrl: './home-stores.component.html',
  styleUrls: ['./home-stores.component.css']
})
export class HomeStoresComponent implements OnInit {

  private currentRowNum: number;

  public isLoading: boolean;
  public stores: any;
  public menuItem: MenuItem;

  constructor(private storeService: StoreService) {
    this.isLoading = true;
    this.currentRowNum = 0;
    this.menuItem = null;
  }

  ngOnInit() {
    this.storeService.findStores();
    this.storeService.getStores().subscribe(
      response => {
        this.isLoading = response.isLoading;
        this.stores = response.stores;
        this.menuItem = response.menuItem;
      },
      error => {
        console.log('Stores observable error:');
        console.log(error);
      },
      () => {}
    );
  }

  isRowOdd(i: number) {
    this.currentRowNum += (i % 3 === 0 ? 1 : 0);
    // console.log('Row ' + this.currentRowNum + ': Element ' + i);

    return this.currentRowNum % 2 !== 0;
  }
}
