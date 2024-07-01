import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleComplete,
} from "../store/slice/todoSlice";
import EditModal from "./EditModal";

const List = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleOpen = (todo) => {
    setSelectedTodo(todo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTodo(null);
  };

  return (
    <>
     {todos.map(todo => (
        <Card
          key={todo.id}
          sx={{ minWidth: 275 }}
          style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="complete" onClick={() => dispatch(toggleComplete(todo.id))}>
                <DoneIcon />
              </IconButton>
              <IconButton
                aria-label="edit"
                onClick={() => handleOpen(todo)}
              >
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      ))}
      {selectedTodo && (
        <EditModal open={open} handleClose={handleClose} todo={selectedTodo} />
      )}
    </>
  );
};

export default List;