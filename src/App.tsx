
import { BABox, BAFormElement, BAScreenHeader } from 'basuite'
import Login from './components/Auth/Login'
import Header from './others/header'
import TaskNumberList from './others/TaskNumberList'
import TaskList from './components/Tasklist/TaskList'
import AdminDashboard from './components/Dashboard/adminDashboard'
import EmployDashboard from './components/Dashboard/employDashboard'

function App() {

   return <>
   <BABox className='p-10 bg-[#1C1C1C] h-screen'>
     {/* <Login/> */}
      
      
       {/* <AdminDashboard/> */}
       <EmployDashboard/>
       </BABox>
    </>
}

export default App
