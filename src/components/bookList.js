import React, { useState } from "react";
import { useSelector } from "react-redux";
import Book from "../components/book";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Modal from "../common/modal";

const BookList = () => {
  const state = useSelector((state) => state);
  const error = useSelector(({ booksReducer }) => booksReducer.error);
  const books = state.booksReducer.bookList;

  const initialBook = {
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(initialBook);

  const editBook = (book) => {
    setCurrentBook(book);
    setIsOpen(true);
  };

  const openCloseModal = (open) => {
    setIsOpen(open);
  };

  const renderBooks = books.map((book) => (
    <Book key={book.id} book={book} handleEdit={editBook} />
  ));

  return (
    <>
      <h2 className="text-center">BookList</h2>
      <div className="header">
        <Button
          className="add-book-btn"
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            setCurrentBook(initialBook);
            setIsOpen(true);
          }}
        >
          Create
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              {/* <TableCell>Description</TableCell> */}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderBooks}</TableBody>
        </Table>
      </TableContainer>
      {isOpen && (
        <Modal book={currentBook} error={error} handleClose={openCloseModal} />
      )}
    </>
  );
};

export default BookList;
