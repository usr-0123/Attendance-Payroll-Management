import './EmployeePayroll.scss'

const EmployeePayroll = () => {
    return (
        <div className="employeePayroll">
            <div className="employeePayrollIncome">
                <div className='employeePayrollGrossIncome'>
                    <span>Gross Income</span>
                    <span>220, 000 $</span>
                </div>
                <div className='employeePayrollOvertimeIncome'>
                    <span>400 $</span>
                </div>
            </div>
            <div className="employeePayrollAdvance">
                <div className="employeePayrollAdvanceTop">
                    <span>Advanced Cash</span>
                    <button>Request</button>
                </div>
                <div className="employeePayrollAdvanceNavbar">
                    <span>Requested Date</span>
                    <span>Amount</span>
                    <span>Aproval Status</span>
                    <span>Aproved Date</span>
                    <span>Action</span>
                </div>
                <div className="employeePayrollAdvanceList">
                    <span>Requested Date</span>
                    <span>Amount</span>
                    <span>Aproval Status</span>
                    <span>Aproved Date</span>
                    <span>Action</span>
                </div>
            </div>
            <div className="employeePayrollDeductions">
                <span>Deductions</span>
                <div className="employeePayrollDeductionsNavbar">
                    <span>Name</span>
                    <span>Amount</span>
                </div>
                <div className='employeePayrollDeductionsList'>
                    <span>Deduction Name</span>
                    <span>Amount</span>
                </div>
            </div>
            <div className="employeePayrollEarning">
                <span>Net Earning</span>
                <span>100, 000 $</span>
            </div>
        </div>
    )
}

export default EmployeePayroll;