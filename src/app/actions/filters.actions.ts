import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class FiltersActions {
  public static SET_FILTER = '[Filter] Set filter';
  public setFilter(filter: string): Action {
    return {
      type: FiltersActions.SET_FILTER,
      payload: filter
    };
  }
}
