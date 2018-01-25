
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Book} from "../shared/types/Book.interface";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {BookService} from "./book.service";

export class BooksDatasource implements DataSource<Book> {

  private bookSubject = new BehaviorSubject<Book[]>([]);

  constructor(private bookService: BookService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Book[]> {
    return this.bookSubject.asObservable();
  }

  loadBooks(filter:string, sortDirection:string, pageIndex:number, pageSize:number) {
    // this.bookService.findBooks(filter, sortDirection, pageIndex, pageSize)
    //   .pipe(
    //     catchError(()=> of([]))
    //   )
    //   .subscribe(books => this.bookSubject.next(books));

  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.bookSubject.complete();
  }

}

//--NGRX - переписать на него
