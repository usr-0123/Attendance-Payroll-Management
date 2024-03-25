import React, {useState} from 'react';
import {Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'
import Photo from '../../assets/alexander.jpg'

import { MdLogout } from "react-icons/md";

// Admin components imports
import ScheduleManagement from '../admin/ScheduleManagement';
import AdminSidebar from '../../components/Admin/home/Sidebar';
import AttendanceReport from '../admin/AttendanceReports';
import FinancialManagement from '../admin/FinancialManagement'

import './Home.scss'

import EmployeeManagement from '../admin/EmployeeManagement';
import AdminProfile from '../../components/Admin/profilePage/AdminProfile'

const AdminHome = () => {
    const [selectedPage, setSelectedPage] = useState('adminHome');
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {

        // clear local storage
        localStorage.removeItem('loggedInUser');

        // navigate to login page
        navigate('/')
    }

    
    // Retrieve user details from local storage
    const loggedInUserJSON = localStorage.getItem('loggedInUser');

    // console.log("loggedInUser", loggedInUserJSON);

    // Function to fetch user details from local storage
    function getLoggedInUser() {
  
        // Check if user details exist in local storage
        if (loggedInUserJSON) {

        // Parse user details from JSON to JavaScript object
        const loggedInUser = JSON.parse(loggedInUserJSON);

        // console.log("loggedInUser", loggedInUser.loggedInUser.employee);
      
        return loggedInUser;
        } else {
        return null;
        }
    }
  
    // Function to get the user details
    const loggedInUser = getLoggedInUser();

    // Function to handle page click
    const handlePageClick = (page) => {
        setSelectedPage(page);
    }

    return (
    <div className='home'>
        <div className="navbar">
            <div className='navbarLeft'>
                <img src={Logo} alt="logo" />
            </div>
            <div>Hello {loggedInUser.loggedInUser.employee.First_name}</div>
            <div className='navbarRight'>
                <img src={Photo} alt="profile" height={80}/>
                <MdLogout style={{fontSize: "30px"}} onClick={handleLogout}/>
            </div>
        </div>
        <div className='bottomBar'>
        <div className="sidebar">
            <AdminSidebar handlePageClick={handlePageClick} selectedPage={selectedPage} />
        </div>
        <div className="mainContainer">
            <Routes>
                <Route path='/adminHome' element = {<ScheduleManagement />}></Route>
                <Route path='/employeeManagement' element = {<EmployeeManagement />}></Route>
                <Route path='/adminProfilePage' element = {<AdminProfile />}></Route>
                <Route path='/attendanceReport' element = {<AttendanceReport />}></Route>
                <Route path='/financialManagement' element = {< FinancialManagement/>}></Route>
            </Routes>
             
        </div>
        </div>
    </div>
    )
}
export default AdminHome;

