import React, { useEffect } from 'react';
import { useGetDeductionsQuery } from '../../../features/deduction/deductionApi';
import './Deduction.scss'

const Deductions = () => {
    const { data: deductions, error, isLoading, refetch } = useGetDeductionsQuery();

    console.log("deductions", deductions);

    useEffect(() => {
        if (error) {
            console.error('Error fetching deductions:', error);
        }
    }, [error]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='financeOvertimeManagement'>
            <div className='financeOvertimeManagementBody'>
                <div className='financeOvertimeManagementBodyHeader'>
                    <span>Name</span>
                    <span>Amount</span>
                    <span></span>
                </div>
                <div className='financeOvertimeManagementBodyContent'>
                    {isLoading ? (
                        <div>Loading data...</div>
                    ) : (
                    deductions.map((deduction, index) => (
                        <div key={index} className='deductionsss'>
                            <span>{deduction.DeductionName}</span>
                            <span>{deduction.Amount}</span>
                            <span></span>
                        </div>
                    ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Deductions;
