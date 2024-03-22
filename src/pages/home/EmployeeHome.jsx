import {Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import React from 'react';

import Logo from '../../assets/Logo.svg'
import Photo from '../../assets/alexander.jpg'

import { MdLogout } from "react-icons/md";

// Employee components imports
import EmployeeDashboard from '../../components/Employee/employeeDashboard/EmployeeDashboard';
import EmployeePayroll from '../../components/Employee/employeePayroll/EmployeePayroll';
import EmployeeProfile from '../Profile/ProfilePage'
import EmployeeSidebar from '../../components/Employee/home/EmployeeSidebar';

import './Home.scss'
import { useState } from 'react';

const Home = () => {
    const [selectedPage, setSelectedPage] = useState('employeeHome');
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        // clear local storage
        localStorage.removeItem('loggedInUser');

        // navigate to login page
        navigate('/')
    }

    // Function to fetch user details from local storage
    function getLoggedInUser() {
    // Retrieve user details from local storage
    const loggedInUserJSON = localStorage.getItem('loggedInUser');
  
    // Check if user details exist in local storage
    if (loggedInUserJSON) {

      // Parse user details from JSON to JavaScript object
      const loggedInUser = JSON.parse(loggedInUserJSON);
      return loggedInUser; // Return user details
    } else {
      return null; // Return null if user details not found in local storage
    }
  }

  console.log("response", response);

  
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
            <div>Hello {loggedInUser.user.First_name}</div>
            <div className='navbarRight'>
                <img src={Photo} alt="profile" height={80}/>
                <MdLogout style={{fontSize: "30px"}} onClick={handleLogout}/>
            </div>
        </div>
        <div className='bottomBar'>
        <div className="sidebar">
            < EmployeeSidebar handlePageClick={handlePageClick} selectedPage={selectedPage}  />
        </div>
        <div className="mainContainer">
            <Routes>
                <Route path='/' element = {< EmployeeDashboard/>}></Route>
                <Route path='/employeePayroll' element = {< EmployeePayroll/>}></Route>
                <Route path='/employeeProfile' element = {<EmployeeProfile />}></Route>
            </Routes>
             
        </div>
        </div>
    </div>
    )
}
export default Home;