import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  onNavLinkClick(event: Event) {
    event.preventDefault();
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {
      console.log('Error scrolling to #' + this.fragment);
    }
  }
}
