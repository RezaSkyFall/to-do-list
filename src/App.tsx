import { Container, Typography } from "@mui/material";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        لیست کارها
      </Typography>
      <AddTodo />
      <TodoList />
    </Container>
  );
}

export default App;
