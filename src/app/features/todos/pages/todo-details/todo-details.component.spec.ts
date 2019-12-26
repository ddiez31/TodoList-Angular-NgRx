import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCheckboxModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { Store } from '@ngrx/store';

import { TodoDetailsComponent } from './todo-details.component';

describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailsComponent],
      imports: [
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatButtonModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['pipe'])
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
