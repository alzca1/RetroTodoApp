import React from "react";
import "./App.css";
import TodoList from "./Containers/TodoList/TodoList";
import Modal from "./UI/Modal/Modal";
import TodoInfo from "./Components/TodoInfo/TodoInfo";

function App() {
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TodoList />
    </div>
  );
}

export default App;
