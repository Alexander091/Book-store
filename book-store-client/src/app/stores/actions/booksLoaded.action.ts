import {setStateProperties} from "../../shared/helpers/general.helpers";
import {AppState, BooksState} from "../appstore.state";
import {Book} from "../../shared/types/Book.interface";
import {CommonAction} from "./common.action";


export class BooksLoadedAction extends CommonAction{

  public static readonly actionName  = 'BOOKS_LOADED';


  constructor(public books:Book[]) {
    super(BooksLoadedAction.actionName, handler);
  }
}

function handler (state: BooksState, action:BooksLoadedAction) {
  return setStateProperties(state, {
    loading:false,
    items:action.books
  });
}
