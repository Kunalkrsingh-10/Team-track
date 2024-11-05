import React from 'react'
import Header from '../others/Header.jsx'
import TaskListnumber from '../others/TaskListnumber.jsx'
import Tasklist from '../TaskList/Tasklist.jsx'
const EmployeeDashboard = () => {
  return (
    <div>
        <Header/>
        <TaskListnumber/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard