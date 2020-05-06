import React from "react";
import useInput from "./hooks/useInput";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const TodoFrom = ({ addTodo }) => {
  const [todo, changeTodo, resetTodo] = useInput("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todo);
          resetTodo();
        }}>
        <TextField
          value={todo}
          onChange={changeTodo}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
};
export default TodoFrom;
