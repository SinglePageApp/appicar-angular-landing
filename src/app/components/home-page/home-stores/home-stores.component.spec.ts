import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStoresComponent } from './home-stores.component';

describe('HomeStoresComponent', () => {
  let component: HomeStoresComponent;
  let fixture: ComponentFixture<HomeStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
