import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/slice/todoSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const EditModal = ({ open, handleClose, todo }) => {
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        newText,
      })
    );
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Update the text for your todo item.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Todo"
          type="text"
          fullWidth
          variant="standard"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
