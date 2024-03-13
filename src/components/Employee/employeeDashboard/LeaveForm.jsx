import React, { useState } from 'react';

import './LeaveForm.scss'

import { IoClose } from "react-icons/io5";

function LeaveRequestForm({ onClose }) {
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, let's just log the values
    console.log('Begin Date:', beginDate);
    console.log('End Date:', endDate);
    console.log('Reason:', reason);
    // You can add further logic here, like sending the data to a server or updating state
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

          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default LeaveRequestForm;