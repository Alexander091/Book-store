import { storeLogger } from 'ngrx-store-logger';
import {AppState} from "../appstore.state";
import {ActionReducerMap} from "@ngrx/store";
import {booksReducer} from "./books.reducer";

export function LoggerReducer (reducer): any {
  return storeLogger({collapsed: true})(reducer);
}
export const AppReducers: ActionReducerMap<AppState> = {
  books: booksReducer
};
