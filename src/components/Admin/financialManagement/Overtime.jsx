import React from 'react';

import { useGetOvertimesQuery } from '../../../features/overtime/overtimeApi';

const Overtime = () => {
    // Fetch data using the useGetOvertimeQuery hook
    const { data: overtime, error, isLoading } = useGetOvertimesQuery();

    console.log("overtime", overtime);

    return (
        <div className="financeOvertimeManagementBody">
            <div className="financeOvertimeManagementBodyHeader">
                <span>Department</span>
                <span>Maximum Overtime</span>
                <span>Pay/hour</span>
                <span>Actions</span>
            </div>
            <div className="financeOvertimeManagementBodyContent">
                {/* Render overtime data */}
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    overtime.map((item, index) => (
                        <div key={index}>
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
