import React, { useState, useEffect } from "react";
import { useAddDepartmentMutation } from "../../../features/department/departmentApi";
import './DepartmentForm.scss'

const DepartmentForm = () => {
  const [deptFormData, setDeptFormData] = useState({
    DepartmentName: "",
    MaximumOvertime: "",
  });

  const { DepartmentName, MaximumOvertime } = deptFormData;
  const [addDepartment, { isLoading: isDeptLoading, isError: isDeptError }] = useAddDepartmentMutation();

  const handleDeptSubmit = async (e) => {
    e.preventDefault();
    if (!DepartmentName.trim()) {
      console.error("DepartmentName cannot be empty");
      return;
    }
    try {
      const newDepartment = await addDepartment(deptFormData).unwrap();
  
    //   console.log("New department added:", newDepartment);
      setDeptFormData({ DepartmentName: "", MaximumOvertime: "" });
    } catch (error) {
      console.error("Error adding department:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeptFormData({ ...deptFormData, [name]: value });
  };

  return (
    <div className="departmentForm">
      <span className="departmentFormHeader">Add a new Department</span>
      <form onSubmit={handleDeptSubmit} className="departmentForms">
        <input
          type="text"
          name="DepartmentName"
          placeholder="Department name"
          value={DepartmentName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="MaximumOvertime"
          placeholder="Maximum Overtime"
          value={MaximumOvertime}
          onChange={handleChange}
        />
        <button type="submit" disabled={isDeptLoading}>
          {isDeptLoading ? "Adding..." : "Add Department"}
        </button>
        {isDeptError && <span>Error adding department</span>}
      </form>
    </div>
  );
};

export default DepartmentForm;
