import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBoxComponent } from './store-box.component';

describe('StoreBoxComponent', () => {
  let component: StoreBoxComponent;
  let fixture: ComponentFixture<StoreBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
