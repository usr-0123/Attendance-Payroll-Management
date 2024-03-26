import React, { useEffect, useState } from 'react';
import { useCountEmployeesQuery } from '../../../features/employees/employeesApi';
import { useCountLeaveEntriesQuery } from '../../../features/leave/leaveApi';

const AttendanceStatistics = () => {
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [totalLeaves, setTotalLeaves] = useState(0);
    const [difference, setDifference] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Query hook to count the number of employees
    const { data: employeesCountData } = useCountEmployeesQuery();

    console.log(employeesCountData);

    const { data: leaveCountData } = useCountLeaveEntriesQuery();

    console.log(leaveCountData);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const employeesResponse = await employeesCountData;
                const leaveResponse = await leaveCountData;
                
                const employeeCount = employeesResponse.data?.employeeCount || 0;
                const leaveCount = leaveResponse.data?.leaveCount || 0;
                const difference = employeeCount - leaveCount;
                
                setTotalEmployees(employeeCount);
                setTotalLeaves(leaveCount);
                setDifference(difference);
                setIsLoading(false);
            } catch (error) {
                setError(error.message || 'An error occurred');
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, [employeesCountData, leaveCountData]);

    console.log(difference);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <span className='AttendanceReportTopMonthlyHeader'>
                Total employees
            </span>
            <div className='AttendanceReportTopMonthlyTotal'>
                <span>
                    {totalEmployees}
                </span>
            </div>
            <div className='AttendanceReportTopMonthlyAttendance'>
                <span className='AttendanceReportTopMonthlyAttendanceHeader'>Monthly Employee Attendance</span>
                <span>{difference}</span>
            </div>
            <div className='AttendanceReportTopMonthlyLeave'>
                <span className='AttendanceReportTopMonthlyLeaveHeader'>Employees on leave</span>
                <span>{totalLeaves}</span>
            </div>
        </div>
    );
};

export default AttendanceStatistics;
