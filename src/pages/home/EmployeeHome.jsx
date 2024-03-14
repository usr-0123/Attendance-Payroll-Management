import {Routes, Route, useNavigate } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'
import Photo from '../../assets/alexander.jpg'

import { MdLogout } from "react-icons/md";

// Employee components imports
import EmployeeDashboard from '../../components/Employee/employeeDashboard/EmployeeDashboard';
import EmployeePayroll from '../../components/Employee/employeePayroll/EmployeePayroll';
import EmployeeProfile from '../Profile/ProfilePage'
import EmployeeSidebar from '../../components/Employee/home/EmployeeSidebar';

import './Home.scss'

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // clear local storage
        localStorage.removeItem('loggedInUser');

        // navigate to login page
        navigate('/')
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
            < EmployeeSidebar/>
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