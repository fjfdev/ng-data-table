import { Action } from '@ngrx/store';

export const ADD_COLUMN = 'ADD_COLUMN';
export const EDIT_COLUMN = 'EDIT_COLUMN';
export const ADD_ROW = 'EDIT_COLUMN_INFO';

interface EditColumInterface {
  oldColumnName: string;
  newColumnName: string;
}

export class AddColumn implements Action {
  readonly type = ADD_COLUMN;

  constructor(public payload: string) {}
}

export class EditColumn implements Action {
  readonly type = EDIT_COLUMN;

  constructor(public payload: EditColumInterface) {}
}

export class AddRow implements Action {
  readonly type = ADD_ROW;

  constructor(public payload) {}
}

export type All = AddColumn | AddRow | EditColumn;
