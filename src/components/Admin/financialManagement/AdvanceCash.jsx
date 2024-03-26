import React, { useEffect } from 'react';
import { useGetAdvancesQuery } from '../../../features/advance/advanceApi';
import './Overtime.scss'

const AdvanceCash = () => {
    // Fetch data using the useGetAdvancesQuery hook
    const { data: advances, error, isLoading } = useGetAdvancesQuery();

    console.log("advances", advances);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Check for errors
        if (error) {
            console.error('Error fetching advances:', error);
        }
    }, [error]); // Dependency array ensures useEffect runs only when error changes

    return (
        <div className="financeOvertimeManagement">
            <div className="financeOvertimeManagementBody">
                <div className="financeOvertimeManagementBodyHeader">
                    <span>Name</span>
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Actions</span>
                </div>
                <div className="financeOvertimeManagementBodyContent">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        advances.map((advance, index) => (
                            <div key={index} className='overtimess'>
                                <span>{advance.EmployeeID}</span>
                                <span>{advance.RequestDate}</span>
                                <span>{advance.Amount}</span>
                                <span>Buttons</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default AdvanceCash;
