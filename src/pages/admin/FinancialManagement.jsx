const FinancialManagement = () => {
    return (
        <>
        <span>Payroll Management</span>
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
        </>
    )
}

export default FinancialManagement;