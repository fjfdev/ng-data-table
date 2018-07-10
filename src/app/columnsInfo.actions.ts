import { Action } from '@ngrx/store';
import { Column } from './data-table/column.interface';

export const ADD_COLUMN_INFO = 'ADD_COLUMN_INFO';
export const EDIT_COLUMN_INFO = 'EDIT_COLUMN_INFO';
export const REMOVE_COLUMN_INFO = 'REMOVE_COLUMN_INFO';

export class AddColumnInfo implements Action {
  readonly type = ADD_COLUMN_INFO;

  constructor(public payload: Column) {}
}

export class EditColumnInfo implements Action {
  readonly type = EDIT_COLUMN_INFO;

  constructor(public payload: Column) {}
}

export class RemoveColumnInfo implements Action {
  readonly type = REMOVE_COLUMN_INFO;

  constructor(public payload: string) {}
}

export type All = AddColumnInfo | EditColumnInfo | RemoveColumnInfo;

