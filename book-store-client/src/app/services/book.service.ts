import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Book} from "../shared/types/Book.interface";
import {AppState} from "../stores/appstore.state";
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {TablePayload} from "../stores/payloads/table.payload";
import {SingleEntityPayload} from "../stores/payloads/singleEntity.payload";

@Injectable()
export class BookService {

  items: Observable<Array<Book>>;

  constructor(private http: HttpClient) {
  }

  loadItems(tablePayload: TablePayload) :Observable<Book[]> {
    return this.http
      .get<Book[]>(`${environment.apiUrl}/books/`, {
        params: new HttpParams()
          .set('filter', tablePayload.filter)
          .set('sortOrder', tablePayload.sortOrder)
          .set('pageNumber', tablePayload.pageNumber.toString())
          .set('pageSize', tablePayload.pageSize.toString())
      });
  }

  deleteBook(payload: SingleEntityPayload) {
    return this.http
      .delete(`${environment.apiUrl}/books/`+payload.entity.id);
  }

}
