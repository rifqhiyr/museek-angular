import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOutputComponent } from './comment-output.component';

describe('CommentOutputComponent', () => {
  let component: CommentOutputComponent;
  let fixture: ComponentFixture<CommentOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
