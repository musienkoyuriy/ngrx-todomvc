import { Action } from '@ngrx/store';
import { FiltersActions } from '../actions/filters.actions';

export function filtersReducer (state = 'SHOW_ALL', action: Action) {
  switch (action.type) {
    case FiltersActions.SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};
