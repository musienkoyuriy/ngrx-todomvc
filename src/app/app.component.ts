import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import 'rxjs/add/observable/combineLatest';

import { TodosActions } from './actions/todos.actions';
import { FiltersActions } from './actions/filters.actions';
import { Todo } from './models/Todo';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  template: `
    <filters [current]="currentFilter$ | async"
             (changeFilter)="changeFilter($event)">
    </filters>
    <todos [todos]="todosModel$ | async"></todos>
    <add-todo (add)="addTodo($event)"></add-todo>
  `
})
export class AppComponent {
  public todos$: Observable<Todo>;
  public todosModel$: Observable<{}>;
  public currentFilter$: Observable<{}>;

  constructor(private store: Store<{}>,
              private todosActions: TodosActions,
              private filtersActions: FiltersActions,
              private todosService: TodosService) {
    this.store.dispatch(todosActions.getTodos());
    this.todos$ = store.select('todos');
    this.currentFilter$ = store.select('visibilityFilter');
    this.todosModel$ = Observable.combineLatest(this.todos$, this.currentFilter$,
      (todos: Todo[], filter: string) => {
        return {
          filtered: this.todosService.getVisibleTodos(todos, filter)
        };
      });
  }

  public changeFilter(filterState: string): void {
    this.store.dispatch(this.filtersActions.setFilter(filterState));
  }

  public addTodo(todo: Todo): void {
    this.store.dispatch(this.todosActions.addTodo(todo));
  }
}
