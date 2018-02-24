import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  isLoading: boolean;
  featuredStores: any;

  constructor(private storeService: StoreService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.storeService.getFeaturedStores().subscribe(({ data, loading }) => {
      this.isLoading = false;
      this.featuredStores = data.featuredStores;
    });
  }

}
