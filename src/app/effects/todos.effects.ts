import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { TodosService } from '../services/todos.service';
import { TodosActions } from '../actions/todos.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosEffects {
  @Effect()
  public getTodos$ = this.actions$
    .ofType(TodosActions.GET_TODOS)
    .withLatestFrom(this.store.select('visibilityFilter'), (action, filter) => filter)
    .switchMap(filter =>
      this.todosService.getTodos(filter)
        .map(() => this.todosActions.getTodos())
        .catch(() => Observable.of({ type: TodosActions.GET_TODOS_ERROR })));

  @Effect()
  public addTodo$ = this.actions$
    .ofType(TodosActions.ADD_TODO)
    .switchMap(action =>
      this.todosService.addTodo(action.payload).map(todo => this.todosActions.addTodo(todo))
    );

  constructor(private actions$: Actions,
              private todosActions: TodosActions,
              private todosService: TodosService,
              private store: Store<{}>) { }
}
