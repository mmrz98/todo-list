import Hedaer from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react";
import AddTask from './components/AddTask';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
function App() {
  const apiUrl = 'http://localhost:5000/tasks';
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setVisibility] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  const fetchTasks = async () => {
    const result = await fetch(apiUrl);
    const data = await result.json();
    
    return data;
  }

  const fetchTask = async (id) => {
    const result = await fetch(`${apiUrl}/${id}`);
    const data = await result.json();

    return data;
  }

  
  const toggleForm = () => {
    setVisibility(!showAddForm);
  }

  const addTask = async (task) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
  });

  const data = await response.json();

  setTasks([...tasks, data]);
  }

  const deleteTask = async (id) => {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE'});
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  const switchReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    };

    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await response.json();

    setTasks(tasks.map((task) => {
      return task.id === id ? {
        ...task,
        reminder: !data.reminder
      } : task;
    }));
    
  }

  return (
    <Router>
      <div className="container">
      <Hedaer 
      buttonColor={showAddForm ? 'red' : '#02d66c'}
      buttonLabel={showAddForm ? 'بستن' : 'افزودن'} 
      onToggle={toggleForm} />
      
      <Routes>
      <Route path="/" element={
        <>
          { showAddForm && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onSwitchReminder={switchReminder}/> : 'تسکی برای نمایش وجود ندارد'
      }
        </>
      } />
      <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
