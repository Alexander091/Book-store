import {CommonAction} from "./common.action";
import {BooksState} from "../appstore.state";
import {SingleEntityPayload} from "../payloads/singleEntity.payload";
import {setStateProperties} from "../../shared/helpers/general.helpers";
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {BookService} from "../../services/book.service";
import {catchError, map, switchMap} from "rxjs/operators";
import {ErrorHappenAction} from "./errorHappen.action";
import {of} from "rxjs/observable/of";
import {BooksDeletedAction} from "./booksDeleted.action";

export class BooksDeleteAction extends CommonAction {
  public static readonly actionName  = 'BOOK_DELETE';

  constructor(public payload: SingleEntityPayload) {
    super(BooksDeleteAction.actionName, (state: BooksState, action: BooksDeleteAction) => {
      return setStateProperties(state, {loading: true});
    });
  }

}

@Injectable()
export class BooksDeleteActionEffect {

  constructor(private actions$: Actions, private bookService: BookService) {
  }

  @Effect()
  result = this.actions$
    .ofType(BooksDeleteAction.actionName)
    .pipe(
      switchMap((action : BooksDeleteAction) => this.bookService.deleteBook(action.payload)
        .pipe(map(r => action.payload))
      ),
      map(r=> new BooksDeletedAction(r.entity)),
      catchError((err)=>
        {
          return of(new ErrorHappenAction(err));
        })
    )
}
