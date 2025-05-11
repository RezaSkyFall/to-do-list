import { Box, Checkbox, IconButton, Paper, TextField } from "@mui/material";
import { Delete, DeleteOutline, Edit, EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Todo, useTodoStore } from "../store/todoStore";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    if (editedTitle.trim() === "") return;
    editTodo(todo.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <Paper>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={1}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {isEditing ? (
            <TextField
              value={editedTitle}
              size="small"
              onChange={(e) => setEditedTitle(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleEdit();
              }}
            />
          ) : (
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          )}
        </Box>
        <Box>
          <IconButton onClick={() => setIsEditing(!isEditing)}>
            <EditOutlined />
          </IconButton>
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <DeleteOutline />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default TodoItem;
