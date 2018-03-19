import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoreService } from '../../../services/store.service';


@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit, AfterViewChecked {
  /** Input property that determines if it's NavLinksComponent included in the header. */
  @Input() isHeader: boolean;
  /** URL's fragment. Represents the hashtag (#) part of the link. */
  private fragment: string;

  /**
   * Constructor.
   *
   * @param route The injected ActivatedRoute object.
   * @param storeService The injected StoreService object.
   */
  constructor(private route: ActivatedRoute, private storeService: StoreService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewChecked() {
    this.navigateToHash();
  }

  /**
   * This event activates when a hashtag (#) link is clicked.
   *
   * @param event The Event object.
   */
  public onNavLinkClick(event: Event) {
    this.navigateToHash();
  }

  /**
   * This event activates when the About page's link is clicked.
   *
   * @param event The Event object.
   */
  public onAboutLinkClick(event: Event) {
    this.storeService.resetSearchFrom404State();
  }

  /**
   * Navigates to the fragment element specified in the URL's hashtag (#).
   */
  private navigateToHash() {
    if (this.fragment) {
      try {
        document.querySelector('#' + this.fragment).scrollIntoView();
      } catch (e) {
        console.log('Error scrolling to #' + this.fragment);
      }
    }
  }
}
