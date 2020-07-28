import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianStartComponent } from './musician-start.component';

describe('MusicianStartComponent', () => {
  let component: MusicianStartComponent;
  let fixture: ComponentFixture<MusicianStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
