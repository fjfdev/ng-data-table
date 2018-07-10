import { Action } from '@ngrx/store';

export const ADD_DISPLAYED_COLUMN = 'ADD_DISPLAYED_COLUMN';
export const REMOVE_DISPLAYED_COLUMN = 'REMOVE_DISPLAYED_COLUMN';

export class AddDisplayedColumn implements Action {
  readonly type = ADD_DISPLAYED_COLUMN;

  constructor(public payload: string) {}
}

export class RemoveDisplayedColumn implements Action {
  readonly type = REMOVE_DISPLAYED_COLUMN;

  constructor(public payload: string) {}
}

export type All = AddDisplayedColumn | RemoveDisplayedColumn;

