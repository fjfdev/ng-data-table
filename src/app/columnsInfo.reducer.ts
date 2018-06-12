import { ColumnsInfo } from './data-table/columnsInfo.interface';

import * as ColumnsInfoActions from './columnsInfo.actions';

export type Action = ColumnsInfoActions.All;

const initialState: ColumnsInfo = {
  columns: [],
  columnLastIndex: 0,
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function columnsInfoReducer(state: ColumnsInfo = initialState, action: Action) {
  switch (action.type) {
    case ColumnsInfoActions.ADD_COLUMN:
      state.columnLastIndex++;
      state.columns.push(action.payload);
      return state;
    case ColumnsInfoActions.EDIT_COLUMN:
      state.columnLastIndex = 0;
      return state;
    case ColumnsInfoActions.REMOVE_COLUMN:
      state.columnLastIndex--;
      return state;
    default:
      return state;
  }
}
