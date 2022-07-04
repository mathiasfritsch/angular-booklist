import { createReducer, on } from "@ngrx/store";

import { retrievedBookList, addNewBook } from "./books.actions";
import { Book } from "../book-list/books.model";
import { BookCollectionComponent } from "../book-collection/book-collection.component";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books),
  on(addNewBook, (state) => {
    var book = <Book>{};
    book.id = "dasdas";
    book.volumeInfo = { title: "dasd", authors: ["sdasd"] };

    var res = [...state, book];
    return res;
  })
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
