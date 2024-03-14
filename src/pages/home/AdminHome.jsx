import React, {useState} from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom'

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
import ProfilePage from '../Profile/ProfilePage';

const AdminHome = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // clear local storage
        localStorage.removeItem('loggedInUser');

        // navigate to login page
        navigate('/')
    }

    const clicked = () => {
        console.log("I am clicked");
    }

    return (
    <div className='home'>
        <div className="navbar">
            <div className='navbarLeft'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='navbarRight'>
                <img src={Photo} alt="profile" height={80}/>
                <MdLogout style={{fontSize: "30px"}} onClick={handleLogout}/>
            </div>
        </div>
        <div className='bottomBar'>
        <div className="sidebar">
            <AdminSidebar />
        </div>
        <div className="mainContainer">
            <Routes>
                <Route path='/adminHome' element = {<ScheduleManagement />}></Route>
                <Route path='/employeeManagement' element = {<EmployeeManagement />}></Route>
                <Route path='/adminProfilePage' element = {<ProfilePage/>}></Route>
                <Route path='/attendanceReport' element = {<AttendanceReport />}></Route>
                <Route path='/financialManagement' element = {< FinancialManagement/>}></Route>
            </Routes>
             
        </div>
        </div>
    </div>
    )
}
export default AdminHome;

