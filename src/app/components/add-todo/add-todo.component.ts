import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosActions } from '../../actions/todos.actions';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'add-todo',
  template: `
    <form (submit)="addTodo()">
      <input type="text" [(ngModel)]="title">
      <button>Add Todo</button>
    </form>
  `
})
export class AddTodoComponent {
  public add: EventEmitter<Todo> = new EventEmitter<Todo>();
  public title = '';

  constructor(private store: Store<{}>, private todosActions: TodosActions) {}

  public addTodo(): void {
    const todo: Todo = {
      id: Math.random(),
      title: this.title,
      done: false
    };
    this.add.emit(todo);
  }
}
