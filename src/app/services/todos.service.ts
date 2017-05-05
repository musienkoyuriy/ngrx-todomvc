import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/Todo';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';

@Injectable()
export class TodosService {
  public getTodos(filter): Observable<{}> {
    const todos: Todo[] = [
      { id: 1, title: 'Learn Angular', done: true },
      { id: 2, title: 'Learn FP', done: false },
      { id: 2, title: 'Learn RxJS', done: false },
      { id: 3, title: 'Learn @ngrx', done: false }
    ];

    return Observable.timer(1000).mapTo(this.getVisibleTodos(todos, filter));
  }

  public getVisibleTodos(todos: Todo[], filter: string): Todo[] {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((todo: Todo) => todo.done);
      default:
        return todos.filter((todo: Todo) => !todo.done);
    }
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return Observable.timer(2000).mapTo(todo);
  }
}
