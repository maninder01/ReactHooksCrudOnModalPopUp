import * as actions from "./types";
import uuid from "react-uuid";

export const addUpdateBook = (book) => {
  if (!book.name) {
    return {
      type: actions.ADD_ERROR,
    };
  }
  if (book.id) {
    return {
      type: actions.UPDATE_BOOK,
      payload: book,
    };
  }
  book.id = uuid();
  return {
    type: actions.ADD_BOOK,
    payload: book,
  };
};

export const deleteBook = (id) => {
  return {
    type: actions.DELETE_BOOK,
    payload: id,
  };
};