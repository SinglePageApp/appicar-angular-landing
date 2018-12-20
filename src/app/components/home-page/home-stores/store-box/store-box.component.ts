import { Component, Input } from '@angular/core';
import Store from '../../../../models/Store';

@Component({
  selector: 'app-store-box',
  templateUrl: './store-box.component.html',
  styleUrls: ['./store-box.component.css']
})
export class StoreBoxComponent {
  /** Input property of type Store. */
  @Input() store: any;
/** This input property determines if the row where the store belongs is odd. */
  @Input() rowOdd: boolean;

  constructor() {}
}
