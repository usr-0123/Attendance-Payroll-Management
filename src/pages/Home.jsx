import {Routes, Route, NavLink } from 'react-router-dom'

import Logo from '../assets/Logo.svg'
import Photo from '../assets/alexander.jpg'

import { MdLogout } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

// Employee components imports
import EmployeeDashboard from '../components/Employee/employeeDashboard/EmployeeDashboard';
import EmployeePayroll from '../components/Employee/employeePayroll/EmployeePayroll';
import EmployeeProfile from '../pages/Profile/EmployeeProfilePage'

// Admin components imports
import ScheduleManagement from './admin/ScheduleManagement';
import AdminDashboard from './admin/EmployeeManagement';

import './Home.scss'

const Home = () => {

    return (
    <div className='home'>
        <div className="navbar">
            <div className='navbarLeft'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='navbarRight'>
                <img src={Photo} alt="profile" height={80}/>
                <MdLogout style={{fontSize: "30px"}}/>
            </div>
        </div>
        <div className='bottomBar'>
        <div className="sidebar">
            Sidebar
        </div>
        <div className="mainContainer">
            <Routes>
                <Route path='/employeeDashboard' element = {< EmployeeDashboard/>}></Route>
                <Route path='/employeePayroll' element = {< EmployeePayroll/>}></Route>
                <Route path='/employeeProfile' element = {<EmployeeProfile />}></Route>
                <Route path='/scheduleManagement' element = {<ScheduleManagement />}></Route>
                <Route path='/adminDashboard' element = {<AdminDashboard />}></Route>
            </Routes>
             
        </div>
        </div>
    </div>
    )
}
export default Home;