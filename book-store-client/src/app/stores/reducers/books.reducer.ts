import {BooksState, BooksStateInitial} from "../appstore.state";

export function  booksReducer (state = BooksStateInitial, action:any) :BooksState {
  if(action.handler) {
    return action.handler(state, action);
  } else {
    return state;
  }
}
