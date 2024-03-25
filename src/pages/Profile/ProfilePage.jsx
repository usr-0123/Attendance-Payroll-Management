import React, {useEffect, useState} from 'react';

import Profile from '../../assets/alexander.jpg'

import './EmployeeProfilePage.scss'

import { RiEdit2Fill } from "react-icons/ri";

const ProfilePage = () => {
    // Retrieve user details from local storage
    const loggedInUserJSON = localStorage.getItem('loggedInUser');

    // console.log("loggedInUserJSON", loggedInUserJSON);

// Function to fetch user details from local storage
function getLoggedInUser() {
    
    // Check if user details exist in local storage
    if (loggedInUserJSON) {

      // Parse user details from JSON to JavaScript object
      const loggedInUser = JSON.parse(loggedInUserJSON);
      return loggedInUser; // Return user details
    } else {
      // Return null if user details not found in local storage
      return null;
    }
  }
  
    // Function to get the user details
    const loggedInUser = getLoggedInUser();

    console.log("Employee profile", loggedInUser.loggedInUser.employee);


    return (
        <div className="profile">
            <div className="profileMine">
                <div className="profileMineNavbar">My Profile</div>
                <div className="profileMineBottom">
                    <div className="profileMineBottomImg">
                        <img src={Profile} alt="profile" height={100}/>
                        <button><RiEdit2Fill /></button>
                    </div>
                    <div className="profileMineBottomDetails">
                    <div className='profileMineBottomDetailsNames'>
                        <div className='profileMineBottomDetailsContainer'>
                            <span>{loggedInUser.loggedInUser.employee.First_name}</span>
                        </div>
                        <div className='profileMineBottomDetailsContainer'>
                            <span>{loggedInUser.loggedInUser.employee.Last_name}</span>
                        </div>
                    </div>
                    <div className='profileMineBottomDetailsContainer'>
                        <span>Job Position</span>
                        <span>{loggedInUser.loggedInUser.employee.Job_title}</span>
                    </div>
                    <div className='profileMineBottomDetailsContainer'>
                        <span>Work Schedule</span>
                        <span>Remote</span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="profileInfo">
                <div className="profileInfoTop">
                    <span>Personal Information</span>
                    <button><RiEdit2Fill />Edit</button>
                </div>
                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>First Name</span>
                        <span>{loggedInUser.loggedInUser.employee.First_name}</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Last Name</span>
                        <span>{loggedInUser.loggedInUser.employee.Last_name}</span>
                    </div>
                </div>
                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Email Address</span>
                        <span>{loggedInUser.loggedInUser.employee.Email_address}</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Phone</span>
                        <span>{loggedInUser.loggedInUser.employee.Contact_information}</span>
                    </div>
                </div>

                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Gender</span>
                        <span>{loggedInUser.loggedInUser.employee.Gender}</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Date Of Birth</span>
                        <span>{loggedInUser.loggedInUser.employee.Date_of_Birth}</span>
                    </div>
                </div>
            </div>
            <div className="profileAddress">
                <div className="profileAddressHeader">
                    <span>Address</span>
                    <button><RiEdit2Fill />Edit</button>
                </div>
                <div className="profileAddressMiddle">
                    <div className='profileAddressMiddleContainer'>
                    <span className='profileAddressMiddleHeader'>Country</span>
                    <span>{loggedInUser.loggedInUser.employee.Country}</span>
                    </div>
                    <div className='profileAddressMiddleContainer'>
                    <span className='profileAddressMiddleHeader'>City</span>
                    <span>{loggedInUser.loggedInUser.employee.City}</span>
                    </div>
                </div>
                <div className="profileAddressBottom">
                    <div className='profileAddressBottomContainer'>
                    <span className='profileAddressBottomHeader'>Street</span>
                    <span>{loggedInUser.loggedInUser.employee.Street}</span>
                    </div>
                    <div className='profileAddressBottomContainer'>
                    <span className='profileAddressBottomHeader'>Postal Code</span>
                    <span>{loggedInUser.loggedInUser.employee.Postal_code}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;