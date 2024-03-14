import React, {useState} from 'react';

import './ScheduleManagement.scss'

import { IoIosAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const ScheduleManagement = () => {

    // Functions to for the schedule input form
        const [checkInTime, setCheckInTime] = useState('');
        const [checkOutTime, setCheckOutTime] = useState('');
        const [timeDifference, setTimeDifference] = useState('');

        const handleCheckInTimeChange = (event) => {
            setCheckInTime(event.target.value);
          };
        
        const handleCheckOutTimeChange = (event) => {
            setCheckOutTime(event.target.value);
          };

        const calculateTimeDifference = () => {
            if (checkInTime && checkOutTime) {
              const checkIn = new Date(`1970-01-01T${checkInTime}`);
              const checkOut = new Date(`1970-01-01T${checkOutTime}`);
              const differenceInMilliseconds = Math.abs(checkOut - checkIn);
              const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
              const minutes = Math.floor(
                (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
              );
              setTimeDifference(`${hours} hours and ${minutes} minutes`);
            } else {
              setTimeDifference('');
            }
          };

    // Functions to hide and display schedule forms
    const [isVisible, setIsVisible] = useState(false)
    const toggleNewScheduleForm = () => {
        setIsVisible(!isVisible);
    }

    // Action Button in the list
    const [isBtnVisible, setIsBtnVisible] = useState(false)
    const [isBtnsVisible, setIsBtnsVisible] = useState(true)
    const toggleActionButtons = () => {
        setIsBtnVisible(!isBtnVisible) || setIsBtnsVisible(!isBtnsVisible);
    }

    // Functions to edit a schedule
    const [isEdtVisible, setIsEdtVisible] = useState(false)
    const toggleEditScheduleForm = () => {
        setIsEdtVisible(!isEdtVisible);
    }

    // Function to delete a schedule
    const deleteSchedule = () => {
        alert ('Are you sure you want to delete?')
    }

    return(
        <>
        <div className="scheduleManagement">
            <div className="scheduleManagementTop">
                <span>Schedule Management</span>
                <button onClick={toggleNewScheduleForm}><IoIosAdd />Add Schedule</button>
            </div>
            <div className="scheduleManagementBody">
                <div className="scheduleManagementBodyHeader">
                    <span>Name</span>
                    <span>Check-In</span>
                    <span>Check-Out</span>
                    <span>Duration</span>
                    <span>Action</span>
                </div>
                <div className="scheduleManagementBodyContent">
                    <div className="scheduleManagementBodyContentList">
                        <span>Early Bird</span>
                        <span>Check-In</span>
                        <span>Check-Out</span>
                        <span>Duration</span>
                        <span onClick={toggleActionButtons}>
                            {isBtnsVisible && <BsThreeDotsVertical />}
                            {isBtnVisible && 
                                <div className='scheduleActionBtns'>
                                    <RiEdit2Fill onClick={toggleEditScheduleForm}/>
                                    <MdDelete onClick={deleteSchedule}/>
                                </div>
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {isVisible &&
        <div className="addSchedule">
            <span>New Schedule</span>
            <input
                className='addScheduleName' 
                type="text" 
                placeholder='Schedule Name'/>
            <input
                className='addScheduleIn'
                type="time" 
                value={checkInTime}
                onChange={handleCheckInTimeChange}
                onBlur={calculateTimeDifference}
                placeholder='check-in time'
            />
            <input 
                className='addScheduleOut'
                type="time" 
                value={checkOutTime}
                onChange={handleCheckOutTimeChange}
                onBlur={calculateTimeDifference}
                placeholder='check-out time'
                />
            <input 
                className='addScheduleDuration'
                type="text" 
                value={timeDifference}
                readOnly
                />

            <button
            className='addScheduleDuration'>
                Submit
            </button>
        </div>}
        {isEdtVisible &&
        <div className="addSchedule">
            <span>Edit Schedule</span>
            <input
                className='addScheduleName' 
                type="text" 
                placeholder='Schedule Name'/>
            <input
                className='addScheduleIn'
                type="time" 
                value={checkInTime}
                onChange={handleCheckInTimeChange}
                onBlur={calculateTimeDifference}
                placeholder='check-in time'
            />
            <input 
                className='addScheduleOut'
                type="time" 
                value={checkOutTime}
                onChange={handleCheckOutTimeChange}
                onBlur={calculateTimeDifference}
                placeholder='check-out time'
            />
            <input 
                className='addScheduleDuration'
                type="text" 
                value={timeDifference}
                readOnly
            />
            <button
                className='addScheduleDuration'>
                    Submit
            </button>
        </div>
        }
        </>
    )
}

export default ScheduleManagement;