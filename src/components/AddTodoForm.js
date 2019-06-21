import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class AddTodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="text">Add new todo</InputLabel>
            <Input onChange={this.handleChange} />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Add todo
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
