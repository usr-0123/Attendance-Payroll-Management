import React,  {useState} from "react";

import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

import Photo from '../../assets/alexander.jpg'

import './EmployeeManagement.scss'

const EmployeeManagement = () => {
    
    // Function to toggle selected employee visibility
    const [isSelVisible, setIsSelVisible] = useState(false)
    const toggleSelectedUser = () => {
        setIsSelVisible(!isSelVisible);
    };

    // Function to toggle visibility
    const [isVisible, setIsVisible] = useState(false)
    const toggleNewUserForm = () => {
        setIsVisible(!isVisible);
    };

    // Function to toggle buttons visibility
    const [isBtnVisible, setIsBtnVisible] = useState(true)
    const [isBtnsVisible, setIsBtnsVisible] = useState(false)
    const toggleActionBtn = () => {
        setIsBtnVisible(!isBtnVisible) || setIsBtnsVisible(!isBtnsVisible)
    };

    return (
        <div className="employeeManagement">
            <div className="employeeManagementList">
            <div className="employeeManagementListTop">
                <span>Employees</span>
                <button onClick={toggleNewUserForm}>New Employee</button>
            </div>
            <div className="employeeManagementListBody">
                <div className="employeeManagementListBodyHeader">
                    <span>Name</span>
                    <span>Job Title</span>
                    <span>Contact</span>
                    <span>Status</span>
                    <span>Actions</span>
                </div>
                <div className="employeeManagementListBodyContent">
                    <span onClick={toggleSelectedUser}>Amelia Jones</span>
                    <span>Event Planner</span>
                    <span>amelia@luwi.ac.ke</span>
                    <span><GoDotFill /> Active</span>
                    <button onClick={toggleActionBtn}>
                        {isBtnVisible &&
                        <HiDotsHorizontal />}
                    {isBtnsVisible &&
                    <div>                        
                        <RiEdit2Fill />
                        <MdDelete />
                    </div>}
                    </button>
                </div>
            </div>
            </div>
            {isSelVisible &&
            <div className="selectedEmployee">
                <div className="selectedEmployeeTop">
                    <div className="selectedEmployeeTopHeader">
                        <div className="selectedEmployeeTopHeaderUser">
                            <img src={Photo} alt="Profile" height={100} width={100}/>
                            <div className="selectedEmployeeTopHeaderUserinfo">
                                <span className="selectedEmployeeTopHeaderUserGenderInfo">Gender</span>
                                <span>Male</span>
                            </div>
                        </div>
                        <div className="selectedEmployeeTopHeaderUser1">
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Name</span>
                                <span>Lewis Kipngetich Kemboi</span>
                            </div>
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Identity Number</span>
                                <span>19193030</span>
                            </div>
                        </div>
                        <div className="selectedEmployeeTopHeaderUser1">
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Email Address</span>
                                <span>lewis@luwi.ac.ke</span>
                            </div>
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Contact</span>
                                <span>+254722112112</span>
                            </div>
                        </div>
                    </div>
                    <div className="selectedEmployeeTopMiddle">
                        <div className="selectedEmployeeTopMiddleS1">
                            <div className="selectedEmployeeTopMiddleS1Container">
                                <span className="selectedEmployeeTopMiddleS1ContainerHeader">Job Position</span>
                                <span>Chief Executive Officer</span>
                            </div>
                            <div className="selectedEmployeeTopMiddleS1Container">
                                <span className="selectedEmployeeTopMiddleS1ContainerHeader">Department</span>
                                <span>Administration</span>
                            </div>
                        </div>
                        <div className="selectedEmployeeTopMiddleS2">
                            <span className="selectedEmployeeTopMiddleS2ContainerHeader">Work Schedule</span>
                            <span>Remote</span>
                        </div>
                    </div>
                </div>
            </div>}


            <div className="newEmployee">
            {isVisible && 
            <div className="newEmployeeForm">
                <span className="newEmployeeFormTitle">New Employee</span>
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
            </div>
            {/* // Edit form */}
            <div className="newEmployee">
            {isVisible && 
            <div className="newEmployeeForm">
                <span className="newEmployeeFormTitle">New Employee</span>
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
        </div>
        </div>
    )
}

export default EmployeeManagement;