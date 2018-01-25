import {BooksState} from "../appstore.state";
import {setStateProperties} from "../../shared/helpers/general.helpers";
import {Injectable} from "@angular/core";
import {Actions, Effect} from '@ngrx/effects';
import {map, switchMap} from "rxjs/operators";
import {BookService} from "../../services/book.service";
import {BooksLoadedAction} from "./booksLoaded.action";
import {TablePayload} from "../payloads/table.payload";
import {CommonAction} from "./common.action";



export class BooksLoadAction extends CommonAction {
  public static readonly actionName  = 'BOOKS_LOAD';

  constructor(public payload: TablePayload) {
    super(BooksLoadAction.actionName, (state: BooksState, action: BooksLoadAction) => {
      return setStateProperties(state, {loading: true});
    });
  }
}

@Injectable()
export class BooksLoadActionEffect {
  @Effect()
  loadBooks = this.actions$
    .ofType(BooksLoadAction.actionName)
    .pipe(switchMap(
      (action: BooksLoadAction) => this.bookService.loadItems(action.payload)
      ),
      map(books => {
        return new BooksLoadedAction(books)
      })
    );

  constructor(private actions$: Actions, private bookService: BookService) {
  }

}

