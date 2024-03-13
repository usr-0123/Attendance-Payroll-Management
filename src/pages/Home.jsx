import {Routes, Route, NavLink } from 'react-router-dom'

import Logo from '../assets/Logo.svg'
import Photo from '../assets/alexander.jpg'

import { MdLogout } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import EmployeeDashboard from '../components/Employee/employeeDashboard/EmployeeDashboard';
import EmployeePayroll from '../components/Employee/employeePayroll/EmployeePayroll';

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
                <MdLogout style={{fontSize: "50px"}}/>
            </div>
        </div>
        <div className='bottomBar'>
        <div className="sidebar">
            <div>
                <NavLink to = '/EmployeePayroll' key='/EmployeePayroll'><IoMdHome /> Home</NavLink>
                <NavLink to = '/EmployeePayroll' key='/EmployeePayroll' >Payroll</NavLink>
            </div>
            <div><FaRegUserCircle /> Profile</div>
        </div>
        <div className="mainContainer">
                < EmployeeDashboard/>
                < EmployeePayroll/>
        </div>
        </div>
    </div>
    )
}
export default Home;