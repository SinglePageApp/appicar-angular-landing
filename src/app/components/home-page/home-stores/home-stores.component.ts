import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-home-stores',
  templateUrl: './home-stores.component.html',
  styleUrls: ['./home-stores.component.css']
})
export class HomeStoresComponent implements OnInit {

  currentRowNum: number;
  isLoading: boolean;
  stores: any;

  constructor(private storeService: StoreService) {
    this.isLoading = true;
    this.currentRowNum = 0;
  }

  ngOnInit() {
    this.storeService.getStores().subscribe(({ data, loading }) => {
      this.isLoading = false;
      this.stores = data.stores;
    });
  }

  isRowOdd(i: number) {
    this.currentRowNum += (i % 3 === 0 ? 1 : 0);
    // console.log('Row ' + this.currentRowNum + ': Element ' + i);

    return this.currentRowNum % 2 !== 0;
  }
}
