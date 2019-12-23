import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';

import { IsTodosLoadedGuard } from './is-todos-loaded.guard';

describe('IsTodosLoadedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        IsTodosLoadedGuard,
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['pipe'])
        }
      ]
    });
  });

  it('should ...', inject([IsTodosLoadedGuard], (guard: IsTodosLoadedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
