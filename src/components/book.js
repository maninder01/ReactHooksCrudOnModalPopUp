import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../actions/booksAction";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Book = (props) => {
  const book = props.book;
  const dispatch = useDispatch();
  return (
    <>
      <TableRow hover key={book.id}>
        <TableCell
          onClick={() => {
            props.handleEdit(book);
          }}
        >
          {book.name}
        </TableCell>
        <TableCell
          onClick={() => {
            props.handleEdit(book);
          }}
        >
          {book.price}
        </TableCell>
        <TableCell
          onClick={() => {
            props.handleEdit(book);
          }}
        >
          {book.category}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="delete"
            size="small"
            color="primary"
            onClick={() => dispatch(deleteBook(book.id))}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Book;
