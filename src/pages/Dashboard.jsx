import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import TaskList from '../components/TaskList'

const Dashboard =()=> {
  const navigate =  useNavigate()
  const[tasks,setTasks]=useState([])

  useEffect(()=>{
    fetchdata();
  },[])
   const fetchdata=async()=>{
    try{
    const responce = await fetch("http://localhost:3000/tasks");
    const data=response.json();
    setTasks(data);
   }catch(error) {
    console.log(error)
   }
};
  const handleLogout = () => {
    localStorage.removeItem('Data')
     localStorage.removeItem('authData')
    // localStorage.clear()
     navigate('/login')
  }
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout}/>
      <h1>MY TASKS</h1>
      <TaskList/>
    </div>
  )
}

export default Dashboard
