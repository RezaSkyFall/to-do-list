import { Box, Typography } from "@mui/material";
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return (
      <Typography variant="h6" textAlign="center" mt={4}>
        هیچ کاری اضافه نشده است!
      </Typography>
    );
  }

  return (
    <Box>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};

export default TodoList;
