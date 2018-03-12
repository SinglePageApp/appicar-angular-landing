import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreConcernsComponent } from './store-concerns.component';

describe('StoreConcernsComponent', () => {
  let component: StoreConcernsComponent;
  let fixture: ComponentFixture<StoreConcernsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreConcernsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreConcernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
