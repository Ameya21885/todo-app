import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/material";
import ButtonComp from "./ButtonComp";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import {addTodo} from '../store/slice/todoSlice'

const InputAdd = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };
  return (
    <Box style={{ display: "flex" }}>
      <InputAdd>
        <StyledInputBase
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add..."
          inputProps={{ "aria-label": "search" }}
        />
      </InputAdd>
      <ButtonComp title="Add" icon={<AddIcon/>} onClick={handleAdd}/>
    </Box>
  );
};

export default Searchbar;
