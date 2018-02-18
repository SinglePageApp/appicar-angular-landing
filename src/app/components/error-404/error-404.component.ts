import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.css']
})
export class Error404Component implements OnInit {
  NUM_FLAMES: number[];

  constructor() {
    this.NUM_FLAMES = new Array(5);
  }

  ngOnInit() {}
}
