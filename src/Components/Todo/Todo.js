import React, { Component } from "react";
import classes from "./Todo.module.css";

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
        <p
          contentEditable={true}
          onBlur={this.props.editTodo}
          suppressContentEditableWarning={true}
        >
          {this.props.todo}
        </p>
      </div>
    );
  }
}

export default Todo;
