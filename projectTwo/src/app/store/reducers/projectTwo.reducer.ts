import { Data } from '../models/data.model';

export const SUBMIT_DATA = 'SUBMIT_DATA';
export function submitDataReducer(state: Data[] = [], action: any) {
  switch (action.type) {
    case SUBMIT_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
}
