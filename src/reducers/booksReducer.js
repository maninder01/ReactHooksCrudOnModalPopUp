import * as actions from "../actions/types";

const INITIAL_STATE = {
  bookList: [],
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      state.bookList.push(action.payload);
      state.error = "";
      return state;
    case actions.UPDATE_BOOK:
      return {
        ...state,
        bookList: state.bookList.map((book) => {
          if (book.id === action.payload.id) {
            return action.payload;
          } else {
            return book;
          }
        }),
      };
    case actions.ADD_ERROR:
      return { ...state, error: "Please enter Book Name" };

    case actions.DELETE_BOOK:
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.id !== action.payload),
        error: "",
      };
    default:
      return state;
  }
};
