import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Todo } from '../models/Todo';

@Injectable()
export class TodosActions {
  public static GET_TODOS = '[Todos] Get Todos';
  public static GET_TODOS_ERROR = '[Todos] Get Todos Error';
  public static ADD_TODO = '[Todo] Add Todo';
  public static TOGGLE_TODO = '[Todo] Toggle Todo';
  public static TOGGLE_ALL_TODO = '[Todos] Toggle all todos';
  public static REMOVE_TODO = '[Todo] Remove todo';

  public getTodos(): Action {
    return {
      type: TodosActions.GET_TODOS
    };
  }

  public getTodosError(error: string): Action {
    return {
      type: TodosActions.GET_TODOS_ERROR,
      payload: error
    };
  }

  public addTodo(todo: Todo): Action {
    return {
      type: TodosActions.ADD_TODO,
      payload: todo
    };
  }

  public toggleTodo(todo: Todo): Action {
    return {
      type: TodosActions.TOGGLE_TODO,
      payload: todo
    };
  }

  public toggleAllTodos(): Action {
    return {
      type: TodosActions.TOGGLE_ALL_TODO
    };
  }

  public removeTodo(id: number) {
    return {
      type: TodosActions.REMOVE_TODO,
      payload: id
    };
  }
}
