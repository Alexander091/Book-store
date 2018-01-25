import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {ListComponent} from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatCheckboxModule, MatFormFieldModule} from "@angular/material";
import {MatTableModule} from '@angular/material/table'
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects/effects";
import {BooksLoadActionEffect} from "./stores/actions/booksLoad.action";
import {BookService} from "./services/book.service";
import {AppReducers, LoggerReducer} from "./stores/reducers/app.reducer";
import {BooksDeleteActionEffect} from "./stores/actions/booksDelete.action";
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
    StoreModule.forRoot(AppReducers,
      {
        metaReducers:[LoggerReducer]
      }),
    EffectsModule.forRoot([
      BooksLoadActionEffect,
      BooksDeleteActionEffect
    ]),
  ],
  providers: [BookService],
  bootstrap: [AppComponent, []]
})
export class AppModule { }
