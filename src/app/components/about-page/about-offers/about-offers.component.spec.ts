import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOffersComponent } from './about-offers.component';

describe('AboutOffersComponent', () => {
  let component: AboutOffersComponent;
  let fixture: ComponentFixture<AboutOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
