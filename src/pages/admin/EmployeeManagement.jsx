import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import "./EmployeeManagement.scss";
import { useAddEmployeeMutation, useGetEmployeesQuery, useFetchAllEmployeeDetailsQuery } from "../../features/employees/employeesApi";
import { useAddDepartmentMutation } from "../../features/department/departmentApi";
import DepartmentForm from "../../components/Admin/employeeManagement/DepartmentForm";
import JobTitleForm from "../../components/Admin/employeeManagement/JobTitleForm";
import GeneratePDF from "../../components/Admin/employeeManagement/GeneratePDF";

const EmployeeManagement = () => {

  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    Email_address: "",
    Address: "",
    Contact_information: "",
    Gender: "",
    Admin_role:"",
    Date_of_Birth: "",
    Department: "",
    Job_Position: "",
    Work_Schedule: "",
    Deductions: "",
  });

  const { First_name, Last_name, Email_address, Address, Contact_information, Gender, Admin_role, Date_of_Birth, Department, Job_Position, Work_Schedule, Deductions } = formData;

  const [addEmployee, { isLoading, isError }] = useAddEmployeeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const employeeData = {
        ...formData,
        Password: "@Usr0123!",
      };

      const response = await addEmployee(employeeData).unwrap();

      console.log("New employee added successfully:", response);
      
      setFormData({
        First_name: "",
        Last_name: "",
        Email_address: "",
        Address: "",
        Contact_information: "",
        Gender: "",
        Admin_role: "",
        Date_of_Birth: "",
        Department: "",
        Job_Position: "",
        Work_Schedule: "",
        Deductions: "",
      });

    } catch (error) {
      console.error("Error adding new employee:", error);
    }
  };

  const { data: employees, error, isLoading: isEmployeesLoading } = useFetchAllEmployeeDetailsQuery();

  useEffect(() => {
    console.log("Employees data:", employees);
  }, [employees]);

  const [isSelVisible, setIsSelVisible] = useState(false);
  const toggleSelectedUser = () => {
    setIsSelVisible(!isSelVisible);
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleNewUserForm = () => {
    setIsVisible(!isVisible);
  };

  const [isEdtVisible, setIsEdtVisible] = useState(false);
  const toggleEditUserForm = () => {
    setIsEdtVisible(!isEdtVisible);
  };

  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const [isBtnsVisible, setIsBtnsVisible] = useState(false);
  const toggleActionBtn = () => {
    setIsBtnVisible(!isBtnVisible) || setIsBtnsVisible(!isBtnsVisible);
  };


  if (isEmployeesLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching employees: {error.message}</div>;
  }

  return (
    <div className="employeeManagement">
      <div className="employeeManagementList">
        <div className="employeeManagementListTop">
          <span>Employees</span>
          <button onClick={toggleNewUserForm}>New Employee</button>
        </div>
        <div>
          <GeneratePDF />
        </div>
        <div className="employeeManagementListBody">
          <div className="employeeManagementListBodyHeader">
            <span>First Name</span>
            <span>Last Name</span>
            <span>Job Title</span>
            <span>Contact</span>
            <span>Actions</span>
          </div>
          <ul>
            {employees.map((employee, index) => (
              <li key={index} className="employeeManagementListBodyContent">
                <span>{employee.First_name}</span>
                <span>{employee.Last_name}</span>
                <span>{employee.Title}</span>
                <span>{employee.Contact_information}</span>
                {/* <span */}
                {/* //   style={{ */}
                    {/* // color: */}
                    {/* //   employee.Leave_status === "Active" ? "green" : "red", */}
                {/* //   }} */}
                {/* // > */}
                  {/* <GoDotFill /> */}
                  {/* {employee.Leave_status} */}
                {/* </span> */}
                <button onClick={toggleActionBtn}>
                  {isBtnVisible && <HiDotsHorizontal />}
                  {isBtnsVisible && (
                    <div>
                      <RiEdit2Fill onClick={toggleEditUserForm} />
                      <MdDelete />
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="newEmployee">
        {isVisible && 
          <div className="newEmployeeForm">
            <span className="newEmployeeFormTitle">New Employee</span>
            <form onSubmit={handleSubmit}>
              <div className="basicInfo">
                <div className="basicInfoNames">
                  <input type="text" placeholder="First Name" value={First_name} onChange={(e) => setFormData({ ...formData, First_name: e.target.value })} />
                  <input type="text" placeholder="Last Name" value={Last_name} onChange={(e) => setFormData({ ...formData, Last_name: e.target.value })} />
                </div>
                <div className="basicInfoAddress">
                  <input type="text" placeholder="Email Address" value={Email_address} onChange={(e) => setFormData({ ...formData, Email_address: e.target.value })} />
                  <input type="text" placeholder="Address" value={Address} onChange={(e) => setFormData({ ...formData, Address: e.target.value })} />
                </div>
                <div className="basicInfobInfo">
                  <input type="text" placeholder="Contact Information" className="contactInfo" value={Contact_information} onChange={(e) => setFormData({ ...formData, 		Contact_information: e.target.value })} />
                  <div className="basicInfobInfoMini">
                  <select name="admin_role" id="admin_role" value={Admin_role} onChange={(e) => setFormData({ ...formData, Admin_role: e.target.value })}>
                    <option value="">Select...</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                    <select name="Gender" id="gender" value={Gender} onChange={(e) => setFormData({ ...formData, Gender: e.target.value })}>
                      <option value="">Select...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <input type="date" placeholder="Date Of Birth" value={Date_of_Birth} onChange={(e) => setFormData({ ...formData, Date_of_Birth: e.target.value })} />
                  </div>
                </div>
                <div className="basicInfoJob">
                  <select name="Department" id="Department" value={Department} onChange={(e) => setFormData({ ...formData, Department: e.target.value })}>
                    <option value="">Department...</option>
                    <option value="Administration">Administration</option>
                    <option value="HR">Human resource</option>
                    <option value="Operations">Operations</option>
                    <option value="Service">Service</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                  <select name="Job Position" id="jobPosition" value={Job_Position} onChange={(e) => setFormData({ ...formData, Job_Position: e.target.value })}>
                    <option value="">Job Title...</option>
                    <option value="Event Planner">Event Planner</option>
                    <option value="Customer Service Representative">Customer Service Representative</option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Human Resource Manager">Human Resource Manager</option>
                  </select>
                </div>
                <div className="basicInfoWork">
                  <select name="Work Schedule" id="workSchedule" value={Work_Schedule} onChange={(e) => setFormData({ ...formData, Work_Schedule: e.target.value })}>
                    <option value="">Work Schedule...</option>
                    <option value="earlyBird">Early Bird</option>
                    <option value="Day">Day Shift</option>
                    <option value="Swing">Swing Shift</option>
                    <option value="Remote">Remote/Online</option>
                  </select>
                  <select name="Deductions" id="deductions" value={Deductions} onChange={(e) => setFormData({ ...formData, Deductions: e.target.value })}>
                    <option value="">Deductions...</option>
                    <option value="paye">P.A.Y.E</option>
                    <option value="nssf">NSSF</option>
                    <option value="nhif">NHIF</option>
                    <option value="housingLevy">Housing Levy</option>
                  </select>
                </div>
              </div>
              <div className="submitButton">
                <button type="submit">{isLoading ? 'Submitting...' : 'Submit'}</button>
                {isError && <span>Error: Failed to add employee</span>}
              </div>
            </form>
          </div>
        }
      </div>
      {isEdtVisible && 
        <div className="newEmployeeForm">
                <span className="newEmployeeFormTitle">Edit Employee</span>
                <div className="basicInfo">
                    <div className="basicInfoNames">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className="basicInfoAddress">
                        <input type="text" placeholder="Email Address"/>
                        <input type="text" placeholder="Address"/>
                    </div>
                    <div className="basicInfobInfo">
                        <input type="text" placeholder="Contact Information" className="contactInfo"/>
                        <div className="basicInfobInfoMini">
                            <select name="Gender" id="gender">
                                <option value="">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <input type="date" placeholder="Date Of Birth"/>
                        </div>
                    </div>
                    <div className="basicInfoJob">
                        <select name="Department" id="Department">
                            <option value="">Department...</option>
                            <option value="Administration">Administration</option>
                            <option value="HR">Human resource</option>
                            <option value="Operations">Operations</option>
                            <option value="Service">Service</option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        <select name="Job Position" id="jobPosition">
                            <option value="">Job Title...</option>
                            <option value="">Event Planner</option>
                            <option value="">Customer Service Representative</option>
                            <option value="">Marketing Manager</option>
                            <option value="">Human Resource Manager</option>
                        </select>
                    </div>
                    <div className="basicInfoWork">
                        <select name="Work Schedule" id="workSchedule">
                            <option value="">Work Schedule...</option>
                            <option value="earlyBird">Early Bird</option>
                            <option value="Day">Day Shift</option>
                            <option value="Swing">Swing Shift</option>
                            <option value="Remote">Remote/Online</option>
                        </select>
                        <select name="Deductions" id="deductions">
                            <option value="">Deductions...</option>
                            <option value="paye">P.A.Y.E</option>
                            <option value="nssf">NSSF</option>
                            <option value="nhif">NHIF</option>
                            <option value="housingLevy">Housing Levy</option>
                        </select>
                    </div>
                </div>
                <div className="submitButton">
                    <button>Submit</button>
                </div>
            </div>
      }
      <div><JobTitleForm /></div>
      <div><DepartmentForm /></div>
    </div>
  );
};

export default EmployeeManagement;
