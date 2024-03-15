import './FinancialManagement.scss'

const FinancialManagement = () => {
    return (
        <>
        <span className="financePayrollManagementTopper">Payroll Management</span>
        <div className="financePayrollManagement">
            <div className="financePayrollManagementHeader">
                <button>Add Payroll</button>
            </div>
            <div className="financePayrollManagementBody">
                <div className="financePayrollManagementBodyHeader">
                    <span>Job Title</span>
                    <span>Department</span>
                    <span>Gross Salary</span>
                    <span>Actions</span>
                </div>
                <div className="financePayrollManagementBodyContent">
                    <span>General Manager</span>
                    <span>Administration Department</span>
                    <span>200, 000 $</span>
                    <span>Buttons</span>
                </div>
            </div>
        </div>
        <span className='financePayrollManagementTopper'>Overtime Management</span>
        <div className="financeOvertimeManagement">
            <div className="financeOvertimeManagementHeader">
                <button>Add Overtime</button>
            </div>
            <div className="financeOvertimeManagementBody">
                <div className="financeOvertimeManagementBodyHeader">
                    <span>Department</span>
                    <span>Maximum Overtime</span>
                    <span>Pay/hour</span>
                    <span>Actions</span>
                </div>
                <div className="financeOvertimeManagementBodyContent">
                    <span>Administration</span>
                    <span>4</span>
                    <span>100 $</span>
                    <span>Buttons</span>
                </div>
            </div>
        </div>
        <span className='financePayrollManagementTopper'>Advance Cash Management</span>
        <div className="financeOvertimeManagement">
            <div className="financeOvertimeManagementBody">
                <div className="financeOvertimeManagementBodyHeader">
                    <span>Name</span>
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Actions</span>
                </div>
                <div className="financeOvertimeManagementBodyContent">
                    <span>John Doe</span>
                    <span>01-01-2023</span>
                    <span>1000 $</span>
                    <span>Buttons</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default FinancialManagement;