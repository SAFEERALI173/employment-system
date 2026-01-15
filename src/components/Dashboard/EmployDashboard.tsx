import React from 'react'
import TaskNumberList from '../../others/TaskNumberList'
import TaskList from '../Tasklist/TaskList'
import { BABox } from 'basuite'
import Header from '../../others/header'

const EmployDashboard = () => {
  return (
    <BABox>
        <Header />  
      <TaskNumberList/>
      <TaskList/>
    </BABox>
  )
}

export default EmployDashboard