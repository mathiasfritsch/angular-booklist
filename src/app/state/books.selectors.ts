import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { BooklistState } from "./books.reducer";
import { AppState } from "./app.state";
// export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
export const selectBooks = (state: BooklistState) => state.books;
export const selectBooksAppState = (state: AppState) => state.booklist.books;

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>("collection");

export const selectAllBooks = createSelector(
  selectBooks,
  (state: any) => state.books
);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
