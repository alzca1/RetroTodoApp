import React, { Component } from "react";
import classes from "./Todo.module.css";
import EditableAction from './EditableAction/EditableAction'

class Todo extends Component {
  state = {
    mouseOver: false,
  };

  onMouseOverHandler = () => {
    this.setState({ mouseOver: true });
  };

  onMouseLeaveHandler = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    let buttons = null;
    if (this.state.mouseOver) {
      buttons = (
        <div className={classes.Buttons}>
          <button
            className={`${classes.Button} ${classes.deleteButton}`}
            onClick={this.props.clickedDelete}
          >
            X
          </button>
          <button
            className={`${classes.Button} ${classes.doneButton}`}
            onClick={this.props.clickedDone}
          >
            √
          </button>
          <button className={`${classes.Button} ${classes.infoButton}`} onClick={this.props.clickedInfo}>?</button>
        </div>
      );
    }
    if (this.props.done) {
    }
    return (
      <div
        className={`${classes.Todo} ${
          this.props.done ? classes.TodoDone : classes.Todo
        }`}
        onMouseEnter={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        {buttons}
        <EditableAction blur={this.props.editTodo} text={this.props.todo.action} />
        <small>{this.props.todo.dueDate.toLocaleDateString} {this.props.todo.dueHour}</small>
      </div>
    );
  }
}

export default Todo;
