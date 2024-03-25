import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticateEmployeeMutation } from '../../features/employees/employeesApi';
import { FaUserAlt } from "react-icons/fa";
import Logo from '../../assets/Logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading, isError }] = useAuthenticateEmployeeMutation();

    const handleLogin = async () => {
        try {
            const { data } = await login({ Email_address: email, Password: password });

            console.log("data", data);

            if (data) {
                localStorage.setItem('loggedInUser', JSON.stringify(data));

                if (data.loggedInUser.Admin_role === 'admin') {
                    navigate('/adminHome');
                    toast.success('Welcome, admin!');
                } else if (data.loggedInUser.Admin_role === 'employee') {
                    navigate('/employeeHome');
                    toast.success('Welcome, employee!');
                }
            }
        } catch (error) {
            toast.error('Login failed. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className='loginPage'>
            <div className='loginPageHeader'>
                <img src={Logo} alt="logo" />
            </div>
            <div className="loginBody">
                <div className="introduction">
                    <h1>Pioneering Technology and infrastructure solutions in Africa</h1>
                    <h2>We lead the way in engineering excellence, specializing in innovative solutions for Telecommunications, ICT, and Power sectors. Partner with us to elevate your business through precise and forward-thinking innovation.</h2>
                </div>
                <div className='loginForm'>
                    <h1>LOGIN</h1>
                    <FaUserAlt style={{fontSize:"100px"}}/>
                    <input 
                        type="email" 
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin} disabled={isLoading}>Login</button>
                    <span>Forgot password</span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
