import React from "react";
import Paper from "@material-ui/core/Paper";

import todosData from "./../Data";
import Todos from "./Todos";
import AddTodoForm from "./AddTodoForm";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <Paper style={style.Paper}>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Paper style={style.Paper}>
          <AddTodoForm AddTodo={this.addTodo} />
        </Paper>
      </Paper>
    );
  }
}

export default Main;
