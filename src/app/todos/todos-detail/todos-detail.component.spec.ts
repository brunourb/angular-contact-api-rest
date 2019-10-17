import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetailComponent } from './todos-detail.component';

describe('TodosDetailComponent', () => {
  let component: TodosDetailComponent;
  let fixture: ComponentFixture<TodosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
