import "./App.css";
import Searchbar from "./component/Searchbar";
import List from "./component/List";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <h2>Todo List App</h2>
      <Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Searchbar />
        <List />
      </Box>
    </Box>
  );
};

export default App;
