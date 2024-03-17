import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.scss';

import Logo from '../../assets/Logo.svg';
import PrivacyPolicy from '../../components/login/PrivacyPolicy';

import { FaUserAlt } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        // Fetch user details from JSON file
        const fetchUsers = async () => {
            try {
                const response = await fetch('/src/json/users.json');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleLogin = () => {

        const user = users.find(user => user.Email_address === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify({user}));
            setIsLoggedIn(true);

            if (user.Role.toLowerCase() === 'admin') {
                navigate('/adminHome');
                alert('You are logged in as an admin');
            } else if (user.Role.toLowerCase() === 'employee') {
                navigate('/employeeHome');
                alert('You are logged in as an employee');
            } else {
                alert('You are not assigned any role, please contact the support center', 'error');
            }
        } else {
            alert('Invalid email or password', 'error');
        }
    };

    const forgotPassword = () => {
        alert('Please contact the support center to reset your logins!', 'info');
    }

    const notify = (message, type = 'success') => {
        toast[type](message);
    };

    return (
        <div className='loginPage'>
            <ToastContainer />
            <div className='loginPageHeader'>
                <img src={Logo} alt="logo" />
            </div>
            <div className="loginBody">
                <div className="introduction">
                    <h1>Pioneering Technology <br /> and infrastructure solutions <br /> in Africa</h1>
                    <h2>We lead the way in engineering excellence, specializing in innovative <br />
                    solutions for Telecommunications, ICT, and Power sectors. Partner with <br />
                    us to elevate your business through precise and forward-thinking <br />
                    innovation.</h2>
                </div>
                <div className='loginForm'>
                    <h1>LOGIN</h1>
                    <FaUserAlt style={{fontSize:"100px"}}/>
                    <input type="email" placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                    <span onClick={forgotPassword}>Forgot password</span>
                </div>
                <div className='resourcesConent'>
                    {/* <PrivacyPolicy /> */}
                </div>
            </div>
        </div>
    );
}

export default Login;
