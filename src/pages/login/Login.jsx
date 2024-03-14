import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Logo from '../../assets/Logo.svg';
import PrivacyPolicy from '../../components/login/PrivacyPolicy';

import { FaUserAlt } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const users = [
        {
            "id": "1",
            "role": "Admin",
            "first_name": "Lewis Kipngetich",
            "last_name": "Kemboi",
            "email": "lewis@luwi.ac.ke",
            "password": "123456"
        },
        {
            "id": "2",
            "role": "employee",
            "first_name": "John",
            "last_name": "Doe",
            "email": "jdoe@luwi.ac.ke",
            "password": "123456"
        },
        {
            "id": "3",
            "role": "employee",
            "first_name": "John",
            "last_name": "Doe",
            "email": "duck@luwi.ac.ke",
            "password": "123456"
        }
    ];

    const handleLogin = () => {

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify({ email,password }));

            if (user.role.toLowerCase() === 'admin') {
                navigate('/adminHome');
            } else if (user.role.toLowerCase() === 'employee') {
                navigate('/employeeHome');
            } else {
                alert('You are not assigned any role, please contact the support center');
            }
        } else {
            alert('Invalid email or password');
        }
    };

    const forgotPassword = () => {
        alert('Please contact the support center to reset your logins!')
    }

    return (
        <div className='loginPage'>
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
