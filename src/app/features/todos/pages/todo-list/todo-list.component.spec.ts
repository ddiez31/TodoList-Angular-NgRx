import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { ReversePipeModule } from 'src/app/pipes/reverse.module';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatListModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTooltipModule,
        MatInputModule,
        ReversePipeModule,
        RouterTestingModule,
        BrowserAnimationsModule
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
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
