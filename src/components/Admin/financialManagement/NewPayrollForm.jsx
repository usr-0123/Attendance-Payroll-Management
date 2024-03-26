import { useAddPayrollMutation } from "../../../features/payroll/payrollApi";

import React, { useState } from 'react';

import './NewPayrollForm.scss'

const NewPayrollForm = () => {
    return (
        <div className="newPayrollForm">
            <p>Add New Payroll</p>
            <form className="newPayrollFormForm">
                <div className="newPayrollFormFormJob">
                    <input type="text" placeholder="Enter job title"/>
                </div>
                <div className="newPayrollFormFormDpt">
                    <input type="text" placeholder="Enter the department"/>
                </div>
                <div className="newPayrollFormFormSalary">
                    <input type="number" placeholder="Gross Salary" />
                </div>
                <div className="newPayrollFormFormBtn">
                <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewPayrollForm;
