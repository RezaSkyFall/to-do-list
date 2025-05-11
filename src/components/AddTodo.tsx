import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <Box display="flex" gap={1} my={2}>
      <TextField
        label="اضافه کردن کار جدید"
        variant="filled"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd} sx={{ minWidth: 140 }}>
        افزودن
      </Button>
    </Box>
  );
};

export default AddTodo;
