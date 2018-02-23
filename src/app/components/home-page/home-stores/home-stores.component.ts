import { Component, OnInit } from '@angular/core';

import { Store } from '../../../classes/Store';
import { StoreService } from '../../../services/store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-stores',
  templateUrl: './home-stores.component.html',
  styleUrls: ['./home-stores.component.css']
})
export class HomeStoresComponent implements OnInit {

  isLoading: boolean;
  stores: any;

  constructor(
    private storeService: StoreService
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.storeService.getStores().subscribe(({ data, loading }) => {
      this.isLoading = false;
      this.stores = data.data;
    });
  }
}
