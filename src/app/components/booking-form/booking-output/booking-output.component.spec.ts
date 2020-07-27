import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOutputComponent } from './booking-output.component';

describe('BookingOutputComponent', () => {
  let component: BookingOutputComponent;
  let fixture: ComponentFixture<BookingOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
