import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import {useState} from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
const App=()=> {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Study React",
        day:"Feb 5th at 2:30pm",
        reminder:true
    },
    {
        id:2,
        text:"Study Redux",
        day:"Feb 6th at 2:30pm",
        reminder:true
    },
    {
        id:3,
        text:"Study SQL",
        day:"Feb 7th at 2:30pm",
        reminder:true
    }
])
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>(task.id !== id)
    ))
  }

  // toggle reminder
  const toggleReminder = (id)=>{
    setTasks(
      tasks.map((task)=> 
      task.id===id ?
       {...task, reminder:!task.reminder}
       :task ))
  }

  const addTask = (task)=>{
    
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  
  return (
    <div className="container">
      <Header onAdd = {()=>setShowAddTask(!showAddTask)}
      showAdd ={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask}
      
      /> }
      
      {tasks.length > 0 ? 
        <Tasks tasks={tasks}  onToggle={toggleReminder} 
        onDelete={deleteTask} />:"No task to show"
      }
    </div>
  );
}

export default App;
