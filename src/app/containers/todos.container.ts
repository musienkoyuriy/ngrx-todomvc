import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/Todo';
import { TodosActions } from '../actions/todos.actions';

@Component({
  selector: 'todos',
  template: `
    <div>
      <todo *ngFor="let todo of todos.filtered"
            [todo]="todo"
            (toggle)="onTodoToggle($event)"
            (remove)="onTodoRemove($event)">
      </todo>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainer {
  @Input()
  public todos: Todo[];

  constructor(private store: Store<{}>, private todosActions: TodosActions) { }

  public onTodoToggle(todo: Todo): void {
    this.store.dispatch(this.todosActions.toggleTodo(todo));
  }

  public onTodoRemove(todoId: number): void {
    this.store.dispatch(this.todosActions.removeTodo(todoId));
  }
}
