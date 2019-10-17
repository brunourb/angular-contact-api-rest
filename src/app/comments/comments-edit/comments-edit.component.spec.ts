import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsEditComponent } from './comments-edit.component';

describe('CommentsEditComponent', () => {
  let component: CommentsEditComponent;
  let fixture: ComponentFixture<CommentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
