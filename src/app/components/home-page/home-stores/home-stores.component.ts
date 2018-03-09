import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StoreService } from '../../../services/store.service';
import Store from '../../../models/Store';

@Component({
  selector: 'app-home-stores',
  templateUrl: './home-stores.component.html',
  styleUrls: ['./home-stores.component.css']
})
export class HomeStoresComponent implements OnInit {

  private currentRowNum: number;

  public isLoading: boolean;
  public stores: any;

  constructor(private storeService: StoreService) {
    this.isLoading = true;
    this.currentRowNum = 0;
  }

  ngOnInit() {
    this.storeService.findStores();
    this.storeService.getStores().subscribe(
      response => {
        this.isLoading = response.isLoading;
        this.stores = response.stores;
        console.log('STORES');
        console.log(this.stores[0]);
      },
      error => {
        console.log('Observable error:');
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
