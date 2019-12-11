import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const todosData: Todo[] = [
      {id: 1, title: 'Clean Dishes in memoery', completed: false, details: null},
      {id: 2, title: 'Clean Again in memoery', completed: true, details: 'test'},
      {id: 3, title: 'Wash Dishes in memoery', completed: false, details: 'test'},
    ];
    return { todosData };
  }

}
