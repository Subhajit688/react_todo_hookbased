import React from "react";
import EditTodoForm from "./EditTodoForm";
import useToggler from "./hooks/useToggler";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
const Todo = ({ id, task, completed, removeTodo, checkedTodo, editTodo }) => {
  const [isEdit, setToggle] = useToggler(false);
  return (
    <ListItem>
      {isEdit ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggle={setToggle}
        />
      ) : (
        <>
          <CheckBox checked={completed} onClick={() => checkedTodo(id)} />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={setToggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
