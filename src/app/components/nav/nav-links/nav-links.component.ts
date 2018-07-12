import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { StoreService } from '../../../services/store.service';


@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {
  // Input property that determines if it's NavLinksComponent included in the header.
  @Input() isHeader: boolean;

  /**
   * Constructor.
   *
   * @param storeService The injected StoreService object.
   */
  constructor(private storeService: StoreService) {}

  /**
   * This event activates when the About page's link is clicked.
   *
   * @param event The Event object.
   */
  public onAboutLinkClick(event: Event) {
    this.storeService.resetSearchFrom404State();
  }
}
