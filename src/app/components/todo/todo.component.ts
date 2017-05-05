import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'todo',
  template: `
    <input type="checkbox" [checked]="todo.done" (change)="toggleTodo()"/>
    <span>{{ todo.title }}</span>
    <button (click)="removeTodo()">x</button>
  `
})
export class TodoComponent {
  @Input()
  public todo: Todo;

  @Output()
  public toggle = new EventEmitter();

  @Output()
  public remove = new EventEmitter();

  public toggleTodo(): void {
    this.toggle.emit(this.todo);
  }

  public removeTodo(): void {
    this.remove.emit(this.todo.id);
  }
}
