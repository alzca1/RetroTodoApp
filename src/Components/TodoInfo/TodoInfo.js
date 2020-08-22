import React from "react";
import EditableAction from "../Todo/EditableAction/EditableAction";

import classes from "./TodoInfo.module.css";

const todoInfo = (props) => {
  return (
    <div className={classes.TodoInfo}>
      <h3>Todo Info</h3>
      <EditableAction
        text={
          props.todos[props.todoIndex]
            ? props.todos[props.todoIndex].action
            : null
        }
        blur={props.editAction}
      />
      <div className={classes.TodoInfoDue}>
        <input className={classes.TodoInfoDueItem} type="date" onBlur={props.editDate} defaultValue={new Date().toISOString().slice(0,10)} />
        <input className={classes.TodoInfoDueItem} type="time"  />
      </div>
      <div className={classes.TodoInfoPriority }>
        <button className={classes.TodoInfoButton}>Low</button>
        <button className={classes.TodoInfoButton}>Medium</button>
        <button className={classes.TodoInfoButton}>High</button>
      </div>
      <div className={classes.TodoInfoNotes}>
        <textarea rows="3" placeholder="Your notes..."></textarea>
      </div>
      <button onClick={props.show}>Save</button>
    </div>
  );
};

export default todoInfo;
