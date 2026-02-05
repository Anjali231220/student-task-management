import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("Data");
    localStorage.removeItem("authData");
    // localStorage.clear()
    navigate("/login");
  };

  const handleAdd = async(newTask) =>{
    const tasktoAdd={...newTask,completed: false}
    try{
     const response = await fetch("http://localhost:3000/tasks",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(tasktoAdd)
    });
    console.log(tasktoAdd)
    const data = await response.json();
    setTasks([...tasks,data])
  }
  catch(error){
    console.log(error)
  }
}
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <TaskForm addTask={handleAdd}/>
      <h1>MY TASKS</h1>
      <TaskList tasks={tasks} />
      
    </div>
  );
};

export default Dashboard;
