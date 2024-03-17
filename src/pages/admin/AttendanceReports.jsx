import React,{useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './AttendanceReport.scss'

const AttendanceReport = () => {

    const data = [
        { name: 'Week 1', attendance: 50 },
        { name: 'Week 2', attendance: 85 },
        { name: 'Week 3', attendance: 90 },
        { name: 'Week 4', attendance: 88 },
    ];

    const departmentData = [
        { name: 'Admin', attendance: 20 },
        { name: 'H.R.', attendance: 85 },
        { name: 'Operations', attendance: 90 },
        { name: 'Services', attendance: 88 },
        { name: 'Sales', attendance: 88 },
        { name: 'Marketing', attendance: 88 },
    ];

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('/src/json/users.json');
            const userData = await response.json();
            setUsers(userData);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUsers();
      }, []);

      console.log(users);

    return (
        <>
        <span className='AttendanceReportHeader'>Attendance Report</span>
        <div className="AttendanceReport">
            <div className='AttendanceReportTop'>
                <div className='AttendanceReportTopEmployee'>
                    <span>Employee Attendance</span>
                    <div>
                    <BarChart width={600} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="attendance" fill="#0083FF" />
                    </BarChart>
                    </div>
                </div>
                <div className='AttendanceReportTopMonthly'>
                    <span className='AttendanceReportTopMonthlyHeader'>
                        Monthly Statistics</span>
                    <div className='AttendanceReportTopMonthlyTotal'>
                        <span className='AttendanceReportTopMonthlyTotalHeader'>
                            Total Employees
                        </span>
                        <span>500</span>
                    </div>
                    <div className='AttendanceReportTopMonthlyAttendance'>
                        <span className='AttendanceReportTopMonthlyAttendanceHeader'>Monthly Employee Attendance</span>
                        <span>480</span>
                    </div>
                    <div className='AttendanceReportTopMonthlyLeave'>
                        <span className='AttendanceReportTopMonthlyLeaveHeader'>Employees on leave</span>
                        <span>20</span>
                    </div>
                </div>
            </div>
            <div className='AttendanceReportMiddle'>
                <span className='AttendanceReportMiddleHeader'>Department Statistics</span>
                <div>
                    <BarChart width={600} height={300} data={departmentData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="attendance" fill="#0083FF" />
                    </BarChart>
                </div>
            </div>
            <div className='AttendanceReportBottom'>
                <span className='AttendanceReportBottomHeader'>Employee Attendance</span>
                <div>
                    <div className='AttendanceReportBottomNav'>
                        <span>First Name</span>
                        <span>Last Name</span>
                        <span>Email</span>
                        <span>Department</span>
                    </div>
                <ul>
                    {users.map((user, index) => (
                    <li key={index} className='AttendanceReportBottomHList'>
                        <span>{user.First_name}</span>
                        <span>{user.Last_name}</span>
                        <span>{user.Email_address}</span>
                        <span>{user.Department}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
        <div className="generateReportDocs">
            Generate a pdf
        </div>
        </>
    )
}

export default AttendanceReport;