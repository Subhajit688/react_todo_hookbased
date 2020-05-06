import React from "react";
import useInput from "./hooks/useInput";
import TextField from "@material-ui/core/TextField";

const EditTodoForm = ({ editTodo, id, task, toggle }) => {
  const [value, chengeValue, reset] = useInput(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField
        margin='normal'
        value={value}
        onChange={chengeValue}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
