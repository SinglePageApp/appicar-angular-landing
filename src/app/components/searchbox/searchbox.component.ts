import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service';
import MenuItem from '../../models/MenuItem';
import Food from '../../models/Food';
import Drink from '../../models/Drink';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})

export class SearchboxComponent implements OnInit {

  public menuItem: MenuItem;
  public menuItemCategory: string;

  constructor(private storeService: StoreService) {
    this.menuItem = new Food();
    this.menuItemCategory = '';
  }

  ngOnInit() {
  }

  public changeMenuItemType(menuItemType: string) {
    if (menuItemType === 'eat') {
      this.menuItem = new Food();
    } else {
      this.menuItem = new Drink();
    }
  }

  public search() {
    this.menuItem.setCategory(this.menuItemCategory);
    this.storeService.findStoresByMenuItem(this.menuItem);
  }
}
