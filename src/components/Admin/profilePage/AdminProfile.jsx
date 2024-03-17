import React, {useEffect, useState} from 'react';

import Profile from '../../../assets/alexander.jpg'

import './AdminProfile.scss'

import { RiEdit2Fill } from "react-icons/ri";

const ProfilePage = () => {

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
      // Return null if user details not found in local storage
      return null;
    }
  }
  
    // Function to get the user details
    const loggedInUser = getLoggedInUser();


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
                            <span>{loggedInUser.user.First_name}</span>
                        </div>
                        <div className='profileMineBottomDetailsContainer'>
                            <span>{loggedInUser.user.Last_name}</span>
                        </div>
                    </div>
                    <div className='profileMineBottomDetailsContainer'>
                        {/* <span>Job Position</span> */}
                        <span>{loggedInUser.user.Job_title}</span>
                    </div>
                    <div className='profileMineBottomDetailsContainer'>
                        {/* <span>Work Schedule</span> */}
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
                        <span>{loggedInUser.user.First_name}</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Last Name</span>
                        <span>{loggedInUser.user.Last_name}</span>
                    </div>
                </div>
                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Email Address</span>
                        <span>{loggedInUser.user.Email_address}</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Phone</span>
                        <span>{loggedInUser.user.Contact_information}</span>
                    </div>
                </div>

                <div className="profileInfo">
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Gender</span>
                        <span>{loggedInUser.user.Gender}</span>
                    </div>
                    <div className='profileInfoContainer'>
                        <span className='profileInfoHeader'>Date Of Birth</span>
                        <span>{loggedInUser.user.Birth_date}</span>
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
                    <span>{loggedInUser.user.Country}</span>
                    </div>
                    <div className='profileAddressMiddleContainer'>
                    <span className='profileAddressMiddleHeader'>City</span>
                    <span>{loggedInUser.user.City}</span>
                    </div>
                </div>
                <div className="profileAddressBottom">
                    <div className='profileAddressBottomContainer'>
                    <span className='profileAddressBottomHeader'>Street</span>
                    <span>{loggedInUser.user.Physical_address}</span>
                    </div>
                    <div className='profileAddressBottomContainer'>
                    <span className='profileAddressBottomHeader'>Postal Code</span>
                    <span>{loggedInUser.user.Postal_address}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;