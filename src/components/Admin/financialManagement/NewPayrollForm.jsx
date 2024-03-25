import { useAddPayrollMutation } from "../../../features/payroll/payrollApi";

import React, { useState } from 'react';

const NewPayrollForm = () => {
    return (
        <div className="newPayrollForm">
            <p>Add New Payroll</p>
            <form>
                <div>
                    <label>Job Title:</label>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <label> Department:</label>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <label>Gross Salary:</label>
                    <input
                        type="number" 
                    />
                </div>
                <button>Submit
                </button>
            </form>
        </div>
    );
};

export default NewPayrollForm;
