import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./stores/appstore.state";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  title = 'app';
  state$: Observable<AppState>;


  constructor(private store: Store<AppState>) {
    this.state$ = this.store.select(s => s);
  }

  ngOnInit(): void {
    // this.store.dispatch(new ProductsLoadAction());
  }
}
