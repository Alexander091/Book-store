import {setStateProperties} from "../../shared/helpers/general.helpers";
import {AppState, BooksState} from "../appstore.state";
import {Book} from "../../shared/types/Book.interface";
import {CommonAction} from "./common.action";
import {Entity} from "../../shared/types/Entity.interface";


export class BooksDeletedAction extends CommonAction{

  public static readonly actionName  = 'BOOKS_DELETED';


  constructor(public entity:Entity) {
    super(BooksDeletedAction.actionName, handler);
  }
}

function handler (state: BooksState, action:BooksDeletedAction) {
  return setStateProperties(state, {
    loading:false,
    items: state.items.filter(item => {
      return item.id !== action.entity.id;
    })
  });
}
