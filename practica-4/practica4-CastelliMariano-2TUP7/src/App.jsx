import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddTasks from './components/addTasks/AddTasks'
import { useState } from 'react';
import Tasks from './components/tasks/Tasks';



const TASKS = [
  {
    id: 1,
    task: "Hacer la tarea de React",
    completed: false,
  },
  {
    id: 2,
    task: "Limpiar",
    completed: false,
  }];

function App() {

  const [tasks, setTasks] = useState(TASKS);

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };

    setTasks([...tasks, taskData]);
  }

  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const changeStateHandler = (id) => {
    const updatedTasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
}

  return (
    <>
    <Tasks tasks={tasks} onDelete={deleteTaskHandler} onChangeState={changeStateHandler} />
    <br></br>
    <AddTasks onTaskDataSaved={saveTaskDataHandler} />

    </>
  )
}

export default App

