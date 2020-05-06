import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, checkedTodo, editTodo }) => {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((t, i) => (
            <>
              <Todo
                {...t}
                key={t.id}
                removeTodo={removeTodo}
                checkedTodo={checkedTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
};

export default TodoList;
