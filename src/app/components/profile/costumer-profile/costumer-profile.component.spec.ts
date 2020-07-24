import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerProfileComponent } from './costumer-profile.component';

describe('CostumerProfileComponent', () => {
  let component: CostumerProfileComponent;
  let fixture: ComponentFixture<CostumerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
