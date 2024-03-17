import React, {useState, useEffect} from 'react';

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
        const [scheduleName, setScheduleName] = useState('');
        const [schedules, setSchedules] = useState([]);
        const [editIndex, setEditIndex] = useState(null);
        const [editSchedule, setEditSchedule] = useState({
                name: '',
                checkIn: '',
                checkOut: '',
                duration: ''
            });

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

        // Function to save schedule to local storage
        const saveSchedule = () => {
            const schedule = {
                name: document.getElementById('scheduleName').value,
                checkIn: checkInTime,
                checkOut: checkOutTime,
                duration: timeDifference
            };
    
            // Retrieve existing schedules from local storage
            const existingSchedules = JSON.parse(localStorage.getItem('schedules')) || [];

            // Add the new schedule to the existing schedules
            existingSchedules.push(schedule);
            
            // Save the updated schedules back to local storage
            localStorage.setItem('schedules', JSON.stringify(existingSchedules));
    
            // Optionally, you can clear the form fields or perform any other actions after saving
            // Clear the form fields
            setCheckInTime('');
            setCheckOutTime('');
            setTimeDifference('');
            const storedSchedules = JSON.parse(localStorage.getItem('schedules')) || [];
            setSchedules(storedSchedules);
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

    // Fetch schedules from local storage when the component mounts
    useEffect(() => {
        const storedSchedules = JSON.parse(localStorage.getItem('schedules')) || [];
        setSchedules(storedSchedules);
    }, []);

    // Function to save schedules to local storage
    const saveSchedulesToLocalStorage = (updatedSchedules) => {
        localStorage.setItem('schedules', JSON.stringify(updatedSchedules));
        setSchedules(updatedSchedules);
    };

    // Function to delete a schedule
    const deleteSchedule = (index) => {
        const updatedSchedules = [...schedules];
        updatedSchedules.splice(index, 1);
        saveSchedulesToLocalStorage(updatedSchedules);
    };

    const saveEditedSchedule  = () => {
        
        const schedule = {
            name: editSchedule.name,
            checkIn: editSchedule.checkIn,
            checkOut: editSchedule.checkOut,
            duration: editSchedule.duration
        };

        if (editIndex !== null) {
            const updatedSchedules = [...schedules];
            updatedSchedules[editIndex] = schedule;
            saveSchedulesToLocalStorage(updatedSchedules);
            setEditIndex(null);
        } else {
            const existingSchedules = JSON.parse(localStorage.getItem('schedules')) || [];
            existingSchedules.push(schedule);
            localStorage.setItem('schedules', JSON.stringify(existingSchedules));
        }

        setEditSchedule({
            name: '',
            checkIn: '',
            checkOut: '',
            duration: ''
        });

        setIsEdtVisible(false);
    };

    // console.log(schedules);

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
                {schedules.map((schedules, index) => (
                    <div key={index} className="scheduleManagementBodyContentList">
                    <span>{schedules.name}</span>
                    <span>{schedules.checkIn}</span>
                    <span>{schedules.checkOut}</span>
                    <span>{schedules.duration}</span>
                        <span onClick={toggleActionButtons}>
                            {isBtnsVisible && <BsThreeDotsVertical />}
                            {isBtnVisible && 
                                <div className='scheduleActionBtns'>
                                    <RiEdit2Fill onClick={toggleEditScheduleForm}/>
                                    <MdDelete onClick={() => deleteSchedule(index)}/>
                                </div>
                            }
                        </span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {isVisible &&
        <div className="addSchedule">
            <span>New Schedule</span>
            <input
                id='scheduleName'
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
            className='addScheduleDuration' onClick={saveSchedule}>
                Submit
            </button>
        </div>}
        {isEdtVisible &&
    <div className="addSchedule">
        <span>Edit Schedule</span>
        <input
            className='addScheduleName' 
            type="text" 
            placeholder='Schedule Name'
            value={editSchedule.name}
            onChange={(e) => setEditSchedule({ ...editSchedule, name: e.target.value })}
        />
        <input
            className='addScheduleIn'
            type="time" 
            value={editSchedule.checkIn}
            onChange={(e) => setEditSchedule({ ...editSchedule, checkIn: e.target.value })}
            onBlur={calculateTimeDifference}
            placeholder='check-in time'
        />
        <input 
            className='addScheduleOut'
            type="time" 
            value={editSchedule.checkOut}
            onChange={(e) => setEditSchedule({ ...editSchedule, checkOut: e.target.value })}
            onBlur={calculateTimeDifference}
            placeholder='check-out time'
        />
        <input 
            className='addScheduleDuration'
            type="text" 
            value={editSchedule.duration}
            readOnly
        />
        <button
            className='addScheduleDuration'
            onClick={saveEditedSchedule}>
            Submit
        </button>
    </div>
}

        </>
    )
}

export default ScheduleManagement;