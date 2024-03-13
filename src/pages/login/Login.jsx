// Import react
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

// Import images
import ProfileImg from '../../assets/alexander.jpg'

// Stylesheet
import './Login.scss'

//import assets
import Logo from '../../assets/Logo.svg'

// import components
import PrivacyPolicy from '../../components/PrivacyPolicy'

const Login = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/employeeDashboard')
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
                    <img src={ProfileImg} alt="profile picture" height='100px' />
                    <input type="email" placeholder='Enter your email address' />
                    <input type="password" placeholder='Enter your password'/>
                    <button onClick={handleNavigate}>Login</button>
                    <span>Forgot password</span>
                </div>
                <div className='resourcesConent'>
                    < PrivacyPolicy/>
                </div>
            </div>
        </div>
    )
}

export default Login;