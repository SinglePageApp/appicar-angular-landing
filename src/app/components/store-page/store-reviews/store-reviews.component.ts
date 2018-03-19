import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

import Review from '../../../models/Review';


@Component({
  selector: 'app-store-reviews',
  templateUrl: './store-reviews.component.html',
  styleUrls: ['./store-reviews.component.css']
})
export class StoreReviewsComponent implements OnInit {
  // Component's tag property review (array of reviews).
  @Input() reviews: Review[];
  // Component's tag property with the value of the current language
  @Input() language: string;
  /**
   * Constructor.
   *
   * @param translate The injected TranslateService instance.
   */
  constructor() {}

  ngOnInit() {}

}
