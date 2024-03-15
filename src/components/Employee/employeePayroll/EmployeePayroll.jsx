import React,{useState, useEffect} from 'react';

import './EmployeePayroll.scss'

const EmployeePayroll = () => {
    const [isAdvanceFormVisible, setIsAdvanceFormVisible] = useState(false);
    const [amount, setAmount] = useState('');
    const [approvalStatus, setApprovalStatus] = useState('Pending');
    const [approvalDate, setApprovalDate] = useState('Pending');

    const Advance = [
        {RequestDate: '10-03-2024', Amount: '1000', status: 'Approved', ApprovedDate: '13-03-2024'},
        // {RequestDate: '05-03-2024', Amount: '2000', status: 'Not approved', ApprovedDate: '07-03-2024'},
    ]

    const deductions = [
        {Name:'P.A.Y.E', Amount:'1000'},
        // {Name:'Nhif', Amount:'1000'},
    ]

    // Function to hide and display request advance form
    const toggleAdvanceFormVisibility = () => {
        setIsAdvanceFormVisible(!isAdvanceFormVisible);
    };

    //New advance
    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
          const { amount, approvalStatus, approvalDate } = JSON.parse(savedFormData);
          setAmount(amount);
          setApprovalStatus(approvalStatus);
          setApprovalDate(approvalDate);
        }
      }, []);

      const handleAmountChange = (event) => {
        setAmount(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const currentDate = new Date();
        // Logic to set approval status and date
        setApprovalStatus('Pending');
        setApprovalDate(currentDate.toISOString());
        // Save form data to local storage
        const formData = { amount, approvalStatus, approvalDate: currentDate.toISOString() };
        localStorage.setItem('formData', JSON.stringify(formData));
      };

      console.log('The requested advance ammount is',amount,'equested date:',approvalDate, 'and the approval status:', approvalStatus);

    return (
        <div className="employeePayroll">
            <div className="employeePayrollIncome">
                <div className='employeePayrollGrossIncome'>
                    <span className='employeePayrollGrossIncomeHeader'>Gross Income</span>
                    <span>220, 000 $</span>
                </div>
                <div className='employeePayrollOvertimeIncome'>
                    <span className='employeePayrollGrossIncomeHeader'>Overtime</span>
                    <span>400 $</span>
                </div>
            </div>
            <div className="employeePayrollAdvance">
                <div className="employeePayrollAdvanceTop">
                    <span className='employeePayrollAdvanceTopHeader'>Advanced Cash</span>
                    <button onClick={toggleAdvanceFormVisibility}>Request Advance</button>
                </div>
                <div className="employeePayrollAdvanceNavbar">
                    <span>Requested Date</span>
                    <span>Amount</span>
                    <span>Aproval Status</span>
                    <span>Aproved Date</span>
                    <span>Action</span>
                </div>
                <div className="employeePayrollAdvanceList">
                    {Advance.map((item, index) => (
                        <li key={index}>
                            <span>{item.RequestDate}</span>
                            <span>{item.Amount}$</span>
                            <span>{item.status}</span>
                            <span>{item.ApprovedDate}</span>
                            <span>Action</span>
                        </li>
                    ))}
                    
                </div>
                {isAdvanceFormVisible && 
                <div className="advanceForm">
                    <form onSubmit={handleSubmit}>
                    <label className='advanceFormAmount'>
                        <input type="number" value={amount} onChange={handleAmountChange} placeholder='Enter amount'/>
                    </label>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            }
            </div>
            <div className="employeePayrollDeductions">
                <span className='employeePayrollDeductionsHeader'>Deductions</span>
                <div className="employeePayrollDeductionsNavbar">
                    <span>Name</span>
                    <span>Amount</span>
                </div>
                <div className='employeePayrollDeductionsList'>
                    {deductions.map((item, index) => (
                        <li key={index}>
                            <span>{item.Name}</span>
                            <span>{item.Amount}</span>
                        </li>
                    ))}
                    
                </div>
            </div>
            <div className="employeePayrollEarning">
                <span className='employeePayrollEarningHeader'>Net Earning</span>
                <span>100, 000 $</span>
            </div>
        </div>
    )
}

export default EmployeePayroll;