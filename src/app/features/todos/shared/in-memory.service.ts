import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../models/todo';
const uuidv4 = require('uuid/v4');

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const todosData: Todo[] = [
      {id: uuidv4(), title: 'Omni pro gemens parceretur gemens.', completed: false, details: null},
      {id: uuidv4(), title: 'Ut Caesar ipse ad consiliis.', completed: true, details: 'Nec rem vel contingit reperiri et cum grassatores loci cedunt.'},
      {id: uuidv4(), title: 'Quod flexo huius fulminis quod.', completed: false, details: null},
      {id: uuidv4(), title: 'Regio et monti monti urbibus.', completed: true, details: 'Urbs libertatis latasque fundamenta velut et Caesaribus patrimonii Caesaribus et.'},
      {id: uuidv4(), title: 'Ab fixis placet et nec.', completed: false, details: 'Arbitrantur non levandi in levandi arbitrantur opere putant sed qui.'}
    ];
    return { todosData };
  }

}
