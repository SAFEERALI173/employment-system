import React from 'react'
import Header from '../../others/header'
import { BABox, BAButton } from 'basuite'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = () => {
  return (
    <BABox className='min-h-screen bg-[#111] text-white p-7'>

      <Header />
      <CreateTask />
      <AllTask/>
     
    </BABox>
  )
}

export default AdminDashboard