
import React, { useState } from "react";
import './../styles/App.css';
import { Todo } from "./Todo";

const App = () => {
  const [tasks,setTasks] = useState([]);
  const [input,setInput] = useState('');

  const addTask = ()=>{
    if (input.trim() !== "") {
      setTasks([...tasks,input])
      setInput("");
    }
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div className="app-container">
       <h1>To-Do List</h1>
        <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Todo</button>
      </div>
      <Todo tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App
