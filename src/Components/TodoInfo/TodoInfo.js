import React from "react";
import EditableAction from "../Todo/EditableAction/EditableAction";

import classes from "./TodoInfo.module.css";

const todoInfo = (props) => {

  const todo = {...props.todos[props.todoIndex]};
  console.log(todo)

  return (
    <div className={classes.TodoInfo} id="todoInfo">
      <h3>Todo Info</h3>
      <EditableAction
        text={todo.action}
        blur={props.editAction}
      />
      <div className={classes.TodoInfoDue}>
        <input
          className={classes.TodoInfoDueItem}
          type="date"
          onChange={props.editDate}
          value={todo.dueDate || ''}
        />
        <input
          className={classes.TodoInfoDueItem}
          type="time"
          onChange={props.editTime}
          value={todo.dueTime || ''}
        />
      </div>
      <div className={classes.TodoInfoPriority}>
        <button className={todo.priority === 'low'? classes.ActiveTodoInfoButton: classes.TodoInfoButton} value="low" onClick={props.editPriority}>Low</button>
        <button className={todo.priority === 'medium'? classes.ActiveTodoInfoButton: classes.TodoInfoButton} value="medium"  onClick={props.editPriority}>Medium</button>
        <button className={todo.priority === 'high'? classes.ActiveTodoInfoButton: classes.TodoInfoButton} value="high" onClick={props.editPriority}>High</button>
      </div>
      <div className={classes.TodoInfoNotes}>
        <textarea rows="3" placeholder="Your notes..." onChange={props.editNote} value={todo.notes || ''}></textarea>
      </div>
      <button onClick={props.show}>Save</button>
    </div>

    
  );
};

export default todoInfo;



// import React from "react";
// import EditableAction from "../Todo/EditableAction/EditableAction";

// import classes from "./TodoInfo.module.css";

// const todoInfo = (props) => {

//   const todo = props.todos[props.todoIndex];

//   return (
//     <div className={classes.TodoInfo} id="todoInfo">
//       <h3>Todo Info</h3>
//       <EditableAction
//         text={props.todos[props.todoIndex].action}
//         blur={props.editAction}
//       />
//       <div className={classes.TodoInfoDue}>
//         <input
//           className={classes.TodoInfoDueItem}
//           type="date"
//           onChange={props.editDate}
//           value={ props.todos[props.todoIndex].dueDate}
//         />
//         <input
//           className={classes.TodoInfoDueItem}
//           type="time"
//           onChange={props.editTime}
//           value={props.todos[props.todoIndex].dueTime}
//         />
//       </div>
//       <div className={classes.TodoInfoPriority}>
//         <button className={props.todos[props.todoIndex].priority === 'low'? classes.ActiveTodoInfoButton: classes.TodoInfoButton} value="low" onClick={props.editPriority}>Low</button>
//         <button className={props.todos[props.todoIndex].priority === 'medium'? classes.ActiveTodoInfoButton: classes.TodoInfoButton} value="medium"  onClick={props.editPriority}>Medium</button>
//         <button className={props.todos[props.todoIndex].priority === 'high'? classes.ActiveTodoInfoButton: classes.TodoInfoButton} value="high" onClick={props.editPriority}>High</button>
//       </div>
//       <div className={classes.TodoInfoNotes}>
//         <textarea rows="3" placeholder="Your notes..." onChange={props.editNote} value={props.todos[props.todoIndex].notes}></textarea>
//       </div>
//       <button onClick={props.show}>Save</button>
//     </div>

    
//   );
// };

// export default todoInfo;