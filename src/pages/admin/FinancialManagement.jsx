import React, {useState} from 'react';

import './FinancialManagement.scss'

import Deductions from '../../components/Admin/financialManagement/Deductions';
import AdvanceCash from '../../components/Admin/financialManagement/AdvanceCash';
import Overtime from '../../components/Admin/financialManagement/Overtime';
import Payroll from '../../components/Admin/financialManagement/Payroll';
import NewPayrollForm from '../../components/Admin/financialManagement/NewPayrollForm';
import DeductionForm from '../../components/Admin/financialManagement/DeductionForm';

import { useGetAdvancesQuery } from '../../features/advance/advanceApi';

const FinancialManagement = () => {

    // State to track whether the NewPayrollForm should be displayed or not
    const [showNewPayrollForm, setShowNewPayrollForm] = useState(false);

    // Function to toggle the display of NewPayrollForm
    const toggleNewPayrollForm = () => {
        setShowNewPayrollForm(!showNewPayrollForm);
    };

    // State to track whether the NewPayrollForm should be displayed or not
    const [showNewDeductionForm, setShowNewDeductionForm] = useState(false);

    // Function to toggle the display of NewPayrollForm
    const toggleNewDeductionForm = () => {
        setShowNewDeductionForm(!showNewDeductionForm);
    };

    return (
        <>
        <span className="financePayrollManagementTopper">Payroll Management</span>
        <div className="financeOvertimeManagement">
            <div className='financeOvertimeManagementHeader'>
                <button onClick={toggleNewPayrollForm}>
                    {showNewPayrollForm ? 'Hide Payroll Form' : 'Add Payroll'}
                </button>
            </div>
        
        <div>
            <Payroll />
            {showNewPayrollForm && <NewPayrollForm />}
        </div>
        </div>
        <span className='financePayrollManagementTopper'>Overtime Management</span>
        <div className="financeOvertimeManagement">
            {/* <div className="financeOvertimeManagementHeader">
                <button>Add Overtime</button>
            </div> */}
            <div>
                <Overtime />
            </div>
        </div>
        <span className='financePayrollManagementTopper'>Advance Cash Management</span>
        <div>
            <AdvanceCash />
        </div>
        <span className='financePayrollManagementTopper'>Deductions</span>
        <div className='financeOvertimeManagement'>
        <div className='financeOvertimeManagementHeader'>
                <button onClick={toggleNewDeductionForm}>
                    {showNewDeductionForm ? 'Hide Deduction Form' : 'Add Deduction'}
                </button>
        </div>
        <div className='financeOvertimeManagementBody'>
            <Deductions />
            {showNewDeductionForm && <DeductionForm />}
        </div>
        </div>
        </>
    )
}

export default FinancialManagement;