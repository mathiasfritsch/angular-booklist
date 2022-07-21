import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "./books.model";
import { Store } from "@ngrx/store";
import {
  retrievedBookList,
  addBook,
  removeBook,
  addNewBook,
} from "../state/books.actions";

import { selectAllBooks } from "../state/books.selectors";
import { state } from "@angular/animations";
@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
  public allBooks$ = this.store.select(selectAllBooks);

  constructor(private store: Store) {}

  addNewBook() {
    this.store.dispatch(addNewBook());
    console.log("add  new book");
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
