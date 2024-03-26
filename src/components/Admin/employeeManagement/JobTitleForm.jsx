import React, { useState, useEffect } from "react";
import { useAddPositionMutation } from "../../../features/positions/positionsApi";
import { useGetEmployeesQuery } from "../../../features/employees/employeesApi";
import { useGetDepartmentsQuery } from "../../../features/department/departmentApi";

import './JobTitleForm.scss'

const JobTitleForm = () => {

  // Job Titles
  const jobTitles = [
    "CEO",
    "COO",
    "CFO",
    "CTO",
    "CMO",
    "CIO",
    "VP of Operations",
    "VP of Sales",
    "VP of Marketing",
    "VP of Finance",
    "VP of HR",
    "Director of Operations",
    "Director of Sales",
    "Director of Marketing",
    "Director of Finance",
    "Director of HR",
    "Senior Manager",
    "Manager",
    "Team Leader",
    "Project Manager",
    "Product Manager",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Data Scientist",
    "Business Analyst",
    "Financial Analyst",
    "Marketing Analyst",
    "HR Manager",
    "Recruitment Manager",
    "Training Manager",
    "Customer Success Manager",
    "Sales Representative",
    "Account Manager",
    "Account Executive",
    "Customer Support Specialist",
    "Operations Coordinator",
    "Administrative Assistant",
    "Executive Assistant",
    "Human Resources Coordinator",
    "Marketing Coordinator",
    "Sales Coordinator",
    "Finance Coordinator",
    "Project Coordinator",
    "Quality Assurance Analyst",
    "Operations Analyst"
];

  const [jobTitleFormData, setJobTitleFormData] = useState({
    Title: "",
    EmployeeID: "",
    Salary: "",
    DepartmentID: "",
  });

  const { Title, EmployeeID, Salary, DepartmentID } = jobTitleFormData;

//   console.log("jobTitleFormData", jobTitleFormData);

  const [addJobTitle, { isLoading: isJobTitleLoading, isError: isJobTitleError }] = useAddPositionMutation();

  const { data: employees, error, isLoading: isEmployeesLoading } = useGetEmployeesQuery();

  const { data: departments } = useGetDepartmentsQuery()

//   console.log("departments", departments);

  const handleJobTitleSubmit = async (e) => {
    e.preventDefault();
    if (!Title.trim() || !EmployeeID.trim() || !Salary.trim() || !DepartmentID.trim()) {
      console.log("This is the job title form data")
      console.log(jobTitleFormData)
      console.error("All fields are required");
      return;
    }
    try {
      const newJobTitle = await addJobTitle(jobTitleFormData).unwrap();
  
    //   console.log("New job title added:", newJobTitle);

      setJobTitleFormData({ Title: "", EmployeeID: "", Salary: "", DepartmentID: "" });
    } catch (error) {
      console.error("Error adding job title:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobTitleFormData({ ...jobTitleFormData, [name]: value });
  };

  return (
    <div className="JobTitleForm">
      <span className="JobTitleFormHeader">Add New Job Position</span>
      <form onSubmit={handleJobTitleSubmit} className="JobTitleFormForms">
        {/* <select defaultValue={Title} onChange={handleChange}>
          <option value="">Select Job Title</option>
            {jobTitles.map((title, index) => (
          <option key={index} value={title}>{title}</option>
            ))}
        </select> */}
        <select name="Title" id="" onChange={handleChange}>
          <option value="">Select position...</option>
          {jobTitles.map((job, i) => (
            <option value={job} key={i}>{job}</option>
            ))}
        </select>
        <select
          name="EmployeeID"
          id="EmployeeID"
          value={EmployeeID}
          onChange={handleChange}
        >
          <option value="">Select employee</option>
          {employees &&
            employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.EmployeeID}
              </option>
            ))}
        </select>
        <input
          type="number"
          name="Salary"
          placeholder="Enter salary amount"
          value={Salary}
          onChange={handleChange}
        />
        <select
          name="DepartmentID"
          id="DepartmentID"
          value={DepartmentID}
          onChange={handleChange}
        >
          <option value="">Select department</option>
          {departments && departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.DepartmentID}
          </option>))}
        </select>
        <button type="submit" disabled={isJobTitleLoading}>
          {isJobTitleLoading ? "Adding..." : "Add Job Position"}
        </button>
        {isJobTitleError && <span>Error adding job title</span>}
      </form>
    </div>
  );
};

export default JobTitleForm;
