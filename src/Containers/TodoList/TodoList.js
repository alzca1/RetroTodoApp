import React, { Component } from "react";
import Todo from "../../Components/Todo/Todo";
import classes from "./TodoList.module.css";

class TodoList extends Component {
  state = {
    todos: [
      {
        action: "Cleaning the dishes",
        color: "red",
        done: false,
      },
      {
        action: "Do the Shopping",
        color: "yellow",
        done: false,
      },
      {
        action: "Taking the dog out for a walk",
        color: "green",
        done: false,
      },
      {
        action: "Hang up the clothes",
        color: "red",
        done: false,
      },
    ],
  };

  addTodoHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const action = event.target.field.value;
    if (action) {
      const newTodo = {
        action: event.target.field.value,
        done: false,
      };
      const todos = this.state.todos;
      todos.push(newTodo);
      this.setState({
        todos: todos,
      });
      form.reset();
    }
  };

  removeTodoHandler = (todoId) => {
    const todos = this.state.todos.slice();
    todos.splice(todoId, 1);
    this.setState({ todos: todos });
  };

  doneTodoToggleHandler = (todoId) => {
    const todos = this.state.todos.slice();
    todos[todoId].done = !todos[todoId].done;
    this.setState({ todos: todos });
  };

  editTodoHandler = (event, index) => {
    const newAction = event.target.textContent;
    const todos = this.state.todos.slice();
    todos[index].action = newAction;
    this.setState({ todos: todos });
  };

  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (
        <Todo
          todo={todo.action}
          key={index}
          clickedDelete={() => this.removeTodoHandler(index)}
          clickedDone={() => this.doneTodoToggleHandler(index)}
          done={this.state.todos[index].done}
          editTodo={(event) => this.editTodoHandler(event, index)}
        />
      );
    });

    return (
      <div className={classes.TodoList}>
        {todos}
        <div>
          <form onSubmit={this.addTodoHandler}>
            <input type="text" placeholder="Enter the action" name="field" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
