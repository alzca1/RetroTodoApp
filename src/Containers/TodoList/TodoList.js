import React, { Component } from "react";
import Todo from "../../Components/Todo/Todo";
import Aux from "../../hoc/Aux";
import Modal from "../../UI/Modal/Modal";
import TodoInfo from "../../Components/TodoInfo/TodoInfo";
import classes from "./TodoList.module.css";
import moment from 'moment'


class TodoList extends Component {
  state = {
    todos: [
      {
        action: "Cleaning the dishes",
        color: "red",
        done: false,
        dueDate: "2020-08-27",
        dueTime: "13:30",
        priority: "low",
        notes: "lorem ipsum" 
      },
      {
        action: "Do the Shopping",
        color: "yellow",
        done: false,
        dueDate: "2020-08-27",
        dueTime: "13:30",
        priority: "low",
        notes: "lorem ipsum" 
      },
      {
        action: "Taking the dog out for a walk",
        color: "green",
        done: false,
        dueDate: "2020-08-27",
        dueTime: "13:30",
        priority: "low",
        notes: "lorem ipsum" 
      },
      {
        action: "Hang up the clothes",
        color: "red",
        done: false,
        dueDate: "2020-08-27",
        dueTime: "13:30",
        priority: "low",
        notes: "lorem ipsum" 
      },
    ],
    showInfo: false,
    showInfoIndex: 0,
  };

  addTodoHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const action = event.target.field.value;
    const date = moment().format('YYYY-MM-DD')
    const time = moment().format('hh:mm');
    console.log(date)
    if (action) {
      const newTodo = {
        action: event.target.field.value,
        done: false,
        dueDate: date,
        dueTime:time, 
        priority: "low",
        notes: ""
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
    console.log(this.state.todos);
  };

  editDateHandler = (event, index) => {
    const newDate = event.currentTarget.value
    const todos = this.state.todos.slice(); 
    todos[index].dueDate = newDate;
    this.setState({todos: todos})
    console.log(this.state.todos)
  }

  editTimeHandler = (event, index) => {
    const newTime = event.currentTarget.value
    const todos = this.state.todos.slice(); 
    todos[index].dueTime = newTime;
    this.setState({todos: todos})
    console.log(this.state.todos)
  }

  editNotesHandler = (event, index) => {
    const newNote = event.currentTarget.value
    const todos = this.state.todos.slice(); 
    todos[index].notes = newNote;
    this.setState({todos: todos})
    console.log(this.state.todos)
  }

  editPriorityHandler = (event, index) => {
    const newPriority = event.currentTarget.value; 
    const todos = this.state.todos.slice(); 
    todos[index].priority = newPriority; 
    this.setState({todos:todos}); 
    console.log(this.state.todos);
  }

  toggleTodoInfoHandler = (index) => {
    if (!index) {
      this.setState({ showInfoIndex: 0 });
    } else {
      this.setState({ showInfoIndex: index });
    }
    const currentStatus = this.state.showInfo;
    this.setState({ showInfo: !currentStatus });
  };

  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (
        <Todo
          todo={todo}
          key={index}
          clickedDelete={() => this.removeTodoHandler(index)}
          clickedDone={() => this.doneTodoToggleHandler(index)}
          done={this.state.todos[index].done}
          editTodo={(event) => this.editTodoHandler(event, index)}
          
          clickedInfo={() => this.toggleTodoInfoHandler(index)}
        />
      );
    });

    return (
      <Aux>
        <Modal show={this.state.showInfo}>
          <TodoInfo
            todos={this.state.todos}
            todoIndex={this.state.showInfoIndex}
            show={() => this.toggleTodoInfoHandler(this.state.showInfoIndex)}
            editAction={(event)=> this.editTodoHandler(event, this.state.showInfoIndex)}
            editDate={(event)=> this.editDateHandler(event,this.state.showInfoIndex)}
            editTime={(event) => this.editTimeHandler(event, this.state.showInfoIndex)}
            editNote={(event) => this.editNotesHandler(event, this.state.showInfoIndex)}
            editPriority={(event)=> this.editPriorityHandler(event, this.state.showInfoIndex)}
          />
        </Modal>
        <div className={classes.TodoList}>{todos}</div>
        <div>
          <form onSubmit={this.addTodoHandler}>
            <input type="text" placeholder="Enter the action" name="field" />
          </form>
        </div>
      </Aux>
    );
  }
}

export default TodoList;
