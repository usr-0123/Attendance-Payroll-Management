import './EmployeeDashboard.scss'


import LeaveRequestForm from './LeaveForm';

import React, {useState, useEffect} from 'react';

import { FaCalendarDay } from "react-icons/fa";

const EmployeeDashboard = () => {

    //Request leave modal form
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    //Change check in button onClick
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [checkInTime, setCheckInTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    // button color and text change
    const handleBtnChange = () => {
        setIsCheckedIn(!isCheckedIn);
        if (!isCheckedIn) {
            setCheckInTime(new Date());
        }
    }

    // record time in , time out, duration
    useEffect(() => {
        let interval;
        if (isCheckedIn) {
            interval = setInterval(() => {
                setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isCheckedIn]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    };

    // Display today's date
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

    return (
        <div className="employeeDashboard">
            <div className="employeeDashboardTop">
                <div className="log">
                    <span style={{fontWeight:"1000", fontSize:"30px"}}>{formattedDate}</span>
                    <button onClick={handleBtnChange} style={{backgroundColor: isCheckedIn ? '#ED4F9D' : '#2563EB'}}>
                        {isCheckedIn ? 'Check Out' : 'Check In'}
                    </button>
                    <div className='timeStats'>
                        <div style={{ color: '#2563EB' }}>{isCheckedIn && checkInTime && checkInTime.toLocaleString()}</div>
                        <div style={{color:"#009733"}}>{formatTime(elapsedTime)}</div>
                        <div style={{color:"#ED4F9D"}}>{!isCheckedIn && checkInTime && checkInTime.toLocaleString()}</div>
                    </div>
                </div>
                <div className='attendanceLog'>
                    <div className='attendanceLogDate' style={{fontWeight:"1000", fontSize:"30px"}}>{formattedDate} <FaCalendarDay /></div>
                    <div className='employeeAttendance'>
                        <div className='employeeAttendanceNavbar'>Weekly Attendance</div>
                        
                        <ul className='employeeAttendanceReport'>
                        <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Day</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>CheckIn</span>
                                    <span>CheckOut</span>
                                    <span>Hours</span>
                                    <span>Overtime</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>{isCheckedIn && checkInTime && checkInTime.toLocaleString()}</span>
                                    <span>CheckOut Time</span>
                                    <span>{formatTime(elapsedTime)}</span>
                                    <span>Overtime</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>CheckIn Time</span>
                                    <span>CheckOut Time</span>
                                    <span>{formatTime(elapsedTime)}</span>
                                    <span>Overtime</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>CheckIn Time</span>
                                    <span>CheckOut Time</span>
                                    <span>{formatTime(elapsedTime)}</span>
                                    <span>Overtime</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>CheckIn Time</span>
                                    <span>CheckOut Time</span>
                                    <span>{formatTime(elapsedTime)}</span>
                                    <span>Overtime</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>CheckIn Time</span>
                                    <span>CheckOut Time</span>
                                    <span>{formatTime(elapsedTime)}</span>
                                    <span>Overtime</span>
                                </div>
                            </li>
                        </ul>
                        <div className='totals'> Total </div>
                    </div>
                </div>
            </div>
            <div className="employeeDashboardBottom">
                <div className='employeeLeaveStats'>
                <span>Available Leave Requests</span>
                21 Days
                </div>
                <div>
                    {isModalOpen && <LeaveRequestForm onClose={closeModal} />}
                </div>
                <div className='employeeDashboardBottomModal'>
                    <button onClick={openModal}>Request Leave</button>
                    
                </div>
            </div>
        </div>
    )
}

export default EmployeeDashboard;