import {Component, OnInit} from '@angular/core';
import {BookService} from "../services/book.service";
import {Observable} from "rxjs/Observable";
import {Book} from "../shared/types/Book.interface";
import {AppState} from "../stores/appstore.state";
import {Action, Store} from "@ngrx/store";
import {BooksLoadAction} from "../stores/actions/booksLoad.action";
import {TablePayload} from "../stores/payloads/table.payload";
import {tap} from "rxjs/operators";
import {BooksDeleteAction} from "../stores/actions/booksDelete.action";
import {SingleEntityPayload} from "../stores/payloads/singleEntity.payload";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers: [  ]
})
export class ListComponent implements OnInit{
  items = this.store.select(s=>s.books.items)
    .pipe(
      tap(result=>console.log(result))
  );

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new BooksLoadAction(new TablePayload()));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    this.store.dispatch(new BooksLoadAction(new TablePayload(filterValue)));
  }

  selectItem(item: Book) {
    console.log("selected " + item);
  }

  deleteItem(item: Book) {
    this.store.dispatch(new BooksDeleteAction(new SingleEntityPayload(item)));
  }


}

