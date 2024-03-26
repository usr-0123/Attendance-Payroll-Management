import React from 'react';

import './Overtime.scss'

import { useGetOvertimesQuery } from '../../../features/overtime/overtimeApi';

const Overtime = () => {
    
    // Fetch data using the useGetOvertimeQuery hook
    const { data: overtime, error, isLoading } = useGetOvertimesQuery();

    return (
        <div className="financeOvertimeManagementBody">
            <div className="financeOvertimeManagementBodyHeader">
                <span>Department</span>
                <span>Date</span>
                <span>Duration</span>
                <span>Actions</span>
            </div>
            <div className="financeOvertimeManagementBodyContent">
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    overtime.map((item, index) => (
                        <div key={index} className='overtimess'>
                            <span>{item.EmployeeID}</span>
                            <span>{item.Overtime_date}</span>
                            <span>{item.Duration}</span>
                            <span>Buttons</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Overtime;
