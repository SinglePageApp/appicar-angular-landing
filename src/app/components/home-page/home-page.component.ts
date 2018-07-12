import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  // The subscriber to the routes's fragment.
  subscriber: Subscription;

  /**
   * Constructor.
   *
   * @param route The injected ActivatedRoute object.
   */
  constructor(private route: ActivatedRoute) { }

  /**
   * Initialize the component after Angular first displays the data-bound properties and sets the
   * component's input properties. Called once, after the first ngOnChanges(). Subscribes to the
   * URL fragment's value.
   */
  ngOnInit() {
    this.subscriber = this.route.fragment.subscribe(fragment => {
      this.navigateToHash(fragment);
    });
  }

  /**
   * Called just before Angular destroys the directive/component. Unsubscribes the
   * subscriber.
   */
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  /**
   * Navigates to the fragment element specified in the URL's hashtag (#).
   *
   * @param fragment URL's fragment. Represents the hashtag (#) part of the link.
   */
  private navigateToHash(fragment: string) {
    if (fragment) {
      try {
        document.querySelector('#' + fragment).scrollIntoView();
      } catch (e) {
        console.log('Error scrolling to #' + fragment);
      }
    }
  }
}
