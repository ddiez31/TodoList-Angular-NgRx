import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '@Store';
import { map } from 'rxjs/operators';
import { selectTodosLoaded$ } from '@Selectors/todo-list.selector';
import { TodoListModule } from '@Actions/todo-list.action';

@Injectable({
  providedIn: 'root'
})
export class IsTodosLoadedGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store
      .pipe(
        select(selectTodosLoaded$),
        map(isLoaded => {
          if (!isLoaded) {
            this.store.dispatch(new TodoListModule.LoadInitTodos());
          }
          return true;
        })
      );
  }
}


