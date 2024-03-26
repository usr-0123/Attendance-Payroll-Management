import React from 'react';
import { useGetPayrollsQuery } from '../../../features/payroll/payrollApi';
import './Payroll.scss'

const Payroll = () => {
    const { data: payrolls, error, isLoading } = useGetPayrollsQuery();

    return (
        <div className="financePayrollManagement">
            <div className="financePayrollManagementBody">
                <div className="financePayrollManagementBodyHeader">
                    <span>Job Title</span>
                    <span>Department</span>
                    <span>Gross Salary</span>
                    <span>Actions</span>
                </div>
                <div className="financePayrollManagementBodyContent">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        payrolls.map((payroll, index) => (
                            <div key={index} className='payrrollss'>
                                <span>{payroll.EmployeeID}</span>
                                <span>{payroll.DeductionID}</span>
                                <span>{payroll.GrossPay} $</span>
                                <span>Buttons</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Payroll;
