/* eslint-disable no-unused-vars */
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './index.css';
import TodoItem from './TodoItem';

function App() {


  const [tasks, setTasks] = useState([
    {
      taskname: "Buy groceries for next week",
      Status: 'complete'
    },
    {
      taskname: "Finish Project 2",
      Status: 'in progress'
    },
    {
      taskname: "Convert portfolio to react",
      Status: 'in progress'
    }
  ]);

  const addTask = (newTask) => {
    setTasks((prevTask) => [
      ...prevTask,
      newTask
    ])
  }

  const deletTask = (newTask) => {
    
  }
  // const [complete, setComplete] = useState(true);

  return (
    <>

      <TodoList tasks={tasks} setTasks={setTasks} addTask={addTask}/>

    </>
  )
}

export default App
