import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { addUpdateBook } from "../actions/booksAction";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";

const Modal = (props) => {
  const dispatch = useDispatch();

  const categories = [
    { name: "Comics" },
    { name: "Action and Adventure" },
    { name: "Classics" },
    { name: "Detective and Mystery" },
    { name: "Fantasy" },
    { name: "Historical Fiction" },
  ];

  const book = props.book;
  const [id, setId] = useState(book.id);
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState({ name: book.category });
  const [description, setDescription] = useState(book.description);
  
  const defaultProps = {
    options: categories,
    getOptionLabel: (option) => option.name,
  };

  return (
    <Dialog open={true} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" align="center">
        Add New Book
      </DialogTitle>
      <DialogContent>
        <TextField
          required
          error={props.error ? true : false}
          helperText={props.error}
          autoFocus
          margin="dense"
          id="name"
          label="Book Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="price"
          label="Book Price"
          type="number"
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Autocomplete
          {...defaultProps}
          id="category"
          onChange={(event, value) => setCategory(value)}
          defaultValue={category}
          renderInput={(params) => (
            <TextField {...params} label="Choose Category" margin="normal" />
          )}
        />
        <TextField
          multiline
          margin="dense"
          id="description"
          label="Description"
          type="number"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(
              addUpdateBook({
                id,
                name,
                price,
                category: category.name,
                description,
              })
            );
            {
              name ? props.handleClose(false) : props.handleClose(true);
            }
          }}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
