import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Todos = ({ todos, deleteTodo }) => {
  let todosList = todos.length ? (
    todos.map(todo => {
      return (
        <ListItem button key={todo.id} onClick={() => deleteTodo(todo.id)}>
          <ListItemText primary={todo.text} />
        </ListItem>
      );
    })
  ) : (
    <p>test</p>
  );

  return <List>{todosList}</List>;
};

export default Todos;
