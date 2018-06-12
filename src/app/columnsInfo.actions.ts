import { Action } from '@ngrx/store';
import { Column } from './data-table/column.interface';

export const ADD_COLUMN = 'ADD_COLUMN';
export const EDIT_COLUMN = 'EDIT_COLUMN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';

export class AddColumn implements Action {
  readonly type = ADD_COLUMN;

  constructor(public payload: Column) {}
}

export class EditColumn implements Action {
  readonly type = EDIT_COLUMN;

  constructor(public payload: Column) {}
}

export class RemoveColumn implements Action {
  readonly type = REMOVE_COLUMN;

  constructor(public payload: string) {}
}

export type All = AddColumn | EditColumn | RemoveColumn;

