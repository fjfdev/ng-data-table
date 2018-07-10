import * as DisplayedColumnsActions from './displayed-columns.actions';

export type Action = DisplayedColumnsActions.All;

const initialState: string[] = [
  'order',
  'name',
  'weight',
];

export function displayedColumnsReducer(state: string[] = initialState, action: Action) {
  switch (action.type) {
    case DisplayedColumnsActions.ADD_DISPLAYED_COLUMN:
      state.push(action.payload);
      return state;
    case DisplayedColumnsActions.REMOVE_DISPLAYED_COLUMN:
      return [...state].slice(state.indexOf(action.payload), 1);
    default:
      return state;
  }
}
