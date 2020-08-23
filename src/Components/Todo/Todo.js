import React, { Component } from "react";
import classes from "./Todo.module.css";
import EditableAction from './EditableAction/EditableAction'
import * as moment from 'moment';
import 'moment/locale/es'

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
        <small>{moment(this.props.todo.dueDate).format('l')} {this.props.todo.dueTime}</small>
      </div>
    );
  }
}

export default Todo;
