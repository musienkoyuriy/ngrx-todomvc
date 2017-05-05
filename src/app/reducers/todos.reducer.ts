import { Action } from '@ngrx/store';
import { TodosActions } from '../actions/todos.actions';
import { Todo } from '../models/Todo';

const initialState = {
  data: [],
  pending: false,
  error: null
};

export function todosReducer(state = initialState, action: Action) {
  let todos: Todo[];

  switch (action.type) {
    case TodosActions.ADD_TODO:
      todos = [...state.data, action.payload];

      return Object.assign({}, state, { data: todos });
    case TodosActions.REMOVE_TODO:
      todos = state.data.filter((todo: Todo) => todo.id !== action.payload);

      return Object.assign({}, state, { data: todos});
    case TodosActions.TOGGLE_TODO:
      todos = state.data.map((todo: Todo) => {
        return todo.id === action.payload.id ? Object.assign({}, todo, {
          done: !todo.done
        }) : todo;
      });

      return Object.assign({}, state, { data: todos });
    case TodosActions.TOGGLE_ALL_TODO:
      todos = state.data.map((todo: Todo) => {
        return Object.assign({}, todo, {
          done: !todo.done
        });
      });

      return Object.assign({}, state, { data: todos });
   default:
     return state;
 }
}
