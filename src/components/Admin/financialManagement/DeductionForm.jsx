import React, { useState } from 'react';
import { useAddDeductionMutation } from '../../../features/deduction/deductionApi';

import './DeductionForm.scss'

const DeductionForm = () => {
    const [formData, setFormData] = useState({
        DeductionName: '',
        DeductionDescription: '',
        Amount: 0
    });

    const { DeductionName, DeductionDescription, Amount } = formData;

    const [addDeduction, { isLoading, isError }] = useAddDeductionMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert amount to integer
            const amountInt = parseInt(Amount);

            const deductionData = {
                DeductionName: DeductionName,
                DeductionDescription: DeductionDescription,
                Amount: amountInt
            };

            const response = await addDeduction(deductionData).unwrap();

            console.log('New deduction added successfully:', response);

            // Reset form after submission
            setFormData({
                DeductionName: '',
                DeductionDescription: '',
                Amount: 0
            });

        } catch (error) {
            console.error('Error adding new deduction:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='DeductionForm'>
            <div className='DeductionFormName'>
                <label htmlFor="DeductionName">Deduction Name:</label>
                <input
                    type="text"
                    id="DeductionName"
                    value={DeductionName}
                    onChange={(e) => setFormData({ ...formData, DeductionName: e.target.value })}
                />
            </div>
            <div className='DeductionFormDescription'>
                <label htmlFor="DeductionDescription">Deduction Description:</label>
                <input
                    type="text"
                    id="DeductionDescription"
                    value={DeductionDescription}
                    onChange={(e) => setFormData({ ...formData, DeductionDescription: e.target.value })}
                />
            </div>
            <div className='DeductionFormAmount'>
                <label htmlFor="Amount">Amount:</label>
                <input
                    type="number"
                    id="Amount"
                    value={Amount}
                    onChange={(e) => setFormData({ ...formData, Amount: e.target.value })}
                />
            </div>
            <button type="submit" className='DeductionFormButton'>{isLoading ? 'Submitting...' : 'Submit'}</button>
            {isError && <span>Error: Failed to add deduction</span>}
        </form>
    );
};

export default DeductionForm;
