import * as DataTableActions from './data-table.actions';
import { DataTable } from './data-table.interface';

export type Action = DataTableActions.All;

const initialState: DataTable = {
  columns: [],
  rows: []
};

const newState = (newColumns, newRows) => {
  return Object.assign({}, {columns: newColumns, rows: newRows});
};

export function dataTableReducer(state: DataTable = initialState, action: Action) {
  switch (action.type) {
    case DataTableActions.ADD_COLUMN:
      const newColumn = state.columns.indexOf(action.payload) > -1 ? `new_${action.payload}` : action.payload;
      state.columns.push(newColumn);
      console.log(newColumn)
      return newState(
        [...state.columns],
        state.rows.map( (row) => { row[newColumn] = ''; return row; })
      );

    case DataTableActions.EDIT_COLUMN:
      const mutatedColumns = [...state.columns].map((column) => {
        if (column === action.payload.oldColumnName) {
          return action.payload.newColumnName;
        }
        return column;
      });

      const mutatedRows = [...state.rows].map( (row) => {
        const copyRow = {};
        Object.keys(row).forEach( (columnName) => {
          if (columnName === action.payload.oldColumnName) {
            copyRow[action.payload.newColumnName] = row[columnName];
          }
          else {
            copyRow[columnName] = row[columnName];
          }
        });
        return copyRow;
      });
      return newState(mutatedColumns, mutatedRows);

    case DataTableActions.ADD_ROW:
      state.rows.push(action.payload);
      Object.keys(action.payload).forEach( (columnName) => {
        if (state.columns.indexOf(columnName) === -1) {
          state.columns.push(columnName);
        }
      });
      return {...state};
    default:
      return state;
  }
}
