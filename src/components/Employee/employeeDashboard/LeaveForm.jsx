import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

import './LeaveForm.scss'

function LeaveRequestForm({ onClose }) {
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [numberOfDays, setNumberOfDays] = useState(0);

  const calculateNumberOfDays = () => {
    if (beginDate && endDate) {
      const diffInMs = new Date(endDate) - new Date(beginDate);
      const days = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
      setNumberOfDays(days);
    } else {
      setNumberOfDays(0);
    }
  };

  useEffect(() => {
    calculateNumberOfDays();
  }, [beginDate, endDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Begin Date:', beginDate);
    console.log('End Date:', endDate);
    console.log('Reason:', reason);
    console.log('Number of Days:', numberOfDays);

    // Save data to local storage
    const formData = { beginDate, endDate, reason, numberOfDays };
    localStorage.setItem('leaveFormData', JSON.stringify(formData));

    onClose();
  };

  return (
    <div className="leaveFormModal">
        <span className="close" onClick={onClose}><IoClose style={{fontSize:"35px"}}/></span>
        <h2>Leave Request Form</h2>
        <form onSubmit={handleSubmit} className='leaveRequestForm'>
          <label htmlFor="beginDate">Begin Date:</label>
          <input
          className='leaveFormInputArea' 
            type="date" 
            id="beginDate" 
            value={beginDate} 
            onChange={(e) => setBeginDate(e.target.value)} 
            required 
          />

          <label htmlFor="endDate">End Date:</label>
          <input
          className='leaveFormInputArea' 
            type="date" 
            id="endDate" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            required 
          />

          <label htmlFor="reason">Reason:</label>
          <textarea
          className='leaveFormInputArea' 
            id="reason" 
            value={reason} 
            onChange={(e) => setReason(e.target.value)} 
            required 
          />

          <label htmlFor="numberOfDays">Number of Days:</label>
          <span>{numberOfDays}</span>

          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default LeaveRequestForm;
