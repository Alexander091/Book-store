import {Book} from "../shared/types/Book.interface";

export interface BooksState {
  items: Book[];
  loading:boolean;
  error:any
}

export interface AppState {
  books: BooksState

}

export const BooksStateInitial : BooksState = {
  items: [],
  loading:false,
  error: null
};

export const AppStateInitial: AppState = {
  books: BooksStateInitial
};


