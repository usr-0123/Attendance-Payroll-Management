import './EmployeeDashboard.scss'


import LeaveRequestForm from './LeaveForm';

import React, {useState, useEffect} from 'react';

import { FaCalendarDay } from "react-icons/fa";

const EmployeeDashboard = () => {

    //Request leave modal form
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [leaveRequests, setLeaveRequests] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Display today's date
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

    // Record checkin and checkout times
    const [firstClickTime, setFirstClickTime] = useState(null);
    const [secondClickTime, setsecondClickTime] = useState(null);
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [duration, setDuration] = useState(0);

    const recordButtonClick = () => {
        const currentTime = new Date();

        if (!isCheckedIn) {
            setFirstClickTime(currentTime);
            console.log("First click record at:", currentTime);
            setIsCheckedIn(true);

        } else {
            setsecondClickTime(currentTime);
            console.log("Second click recorded at:", currentTime);
            setIsCheckedIn(false);            
        }
    }

    
    // Calculate timeDifference
    useEffect(() => {
        if (secondClickTime !== null) {
            const duration = secondClickTime.getTime() - firstClickTime.getTime();
            setDuration(duration);
            console.log("Time between checkin and check out is :", duration);
        }
    }, [secondClickTime, firstClickTime]);

    // I need date from duration

    const formatDuration = (duration) => {
        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);
        return `${hours} : ${minutes} : ${seconds}`;
    };
    
    // Calculate the remaining overtime
    const calculateOvertimeRemaining = (secondClickTime) => {
        const defaultOvertimeDuration = 4 * 60 * 60;
        const overtimeRemaining = secondClickTime.getTime() - defaultOvertimeDuration;
        return overtimeRemaining;
    };

    // Fetch leave requests from local storage
    useEffect(() => {
        const savedLeaveRequests = localStorage.getItem('leaveRequests');
        if (savedLeaveRequests) {
            setLeaveRequests(JSON.parse(savedLeaveRequests));
        }
    }, []);

    // Calculate total leave days
    const totalLeaveDays = leaveRequests.reduce((total, request) => {
        return total + request.numberOfDays;
    }, 0);

    // Check if total leave days is 21
    const isLeaveLimitReached = totalLeaveDays >= 21;

    // console.log(remainingLeaveDays);


    return (
        <div className="employeeDashboard">
            <div className="employeeDashboardTop">
                <div className="log">
                    <span style={{fontWeight:"1000", fontSize:"30px"}}>{formattedDate}</span>
                    <button onClick={ recordButtonClick } style={{backgroundColor: isCheckedIn ? '#ED4F9D' : '#2563EB'}}>
                        {isCheckedIn ? 'Check Out' : 'Check In'}
                    </button>
                    <div className='timeStats'>
                        <div style={{ color: '#2563EB' }}>{firstClickTime && <p>{firstClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</div>
                        <div style={{color:"#009733"}}>{formatDuration(duration)}</div>
                        <div style={{color:"#ED4F9D"}}>{secondClickTime && <p>{secondClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</div>
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
                                    <span>{firstClickTime && <p>{firstClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{secondClickTime && <p>{secondClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{formatDuration(duration)}</span>
                                    <span>{calculateOvertimeRemaining}4:00</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>{firstClickTime && <p>{firstClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{secondClickTime && <p>{secondClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{formatDuration(duration)}</span>
                                    <span>{calculateOvertimeRemaining}4:00</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>{firstClickTime && <p>{firstClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{secondClickTime && <p>{secondClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{formatDuration(duration)}</span>
                                    <span>{calculateOvertimeRemaining}4:00</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>{firstClickTime && <p>{firstClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{secondClickTime && <p>{secondClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{formatDuration(duration)}</span>
                                    <span>{calculateOvertimeRemaining}4:00</span>
                                </div>
                            </li>
                            <li className='employeeAttendanceReportPage'>
                                <div className='employeeAttendanceReportDay'>Today's date</div>
                                <div className='employeeAttendanceReportTimeStats'>
                                    <span>{firstClickTime && <p>{firstClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{secondClickTime && <p>{secondClickTime.toLocaleString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>}</span>
                                    <span>{formatDuration(duration)}</span>
                                    <span>{calculateOvertimeRemaining}4:00</span>
                                </div>
                            </li>
                        </ul>
                        <div className='totals'> Total </div>
                    </div>
                </div>
            </div>
            <div className="employeeDashboardBottom">
                <div className='employeeLeaveStats'>
                <span className='employeeLeaveStatsHeader'>Available Leave Requests</span>
                {isLeaveLimitReached ? 'Leave limit reached' : `${21 - totalLeaveDays} Days left`}
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