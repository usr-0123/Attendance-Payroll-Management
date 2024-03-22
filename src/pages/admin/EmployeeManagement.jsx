import React,  {useState, useEffect} from "react";

import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

import Photo from '../../assets/alexander.jpg'

import { useGetEmployeesQuery } from "../../features/employees/EmployeesApi";

import './EmployeeManagement.scss'

const EmployeeManagement = (employees) => {

    const { data: employee = [] } = useGetEmployeesQuery();

    console.log("data", data);

    //Fetching users
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('/src/json/users.json');
            
            const userData = await response.json();
            setUsers(userData);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUsers();
      }, []);

    //   console.log('This is the users fetched',users);
    
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

        // Function to toggle visibility
    const [isEdtVisible, setIsEdtVisible] = useState(false)
    const toggleEditUserForm = () => {
        setIsEdtVisible(!isEdtVisible);
    };

    // Function to toggle buttons visibility
    const [isBtnVisible, setIsBtnVisible] = useState(true)
    const [isBtnsVisible, setIsBtnsVisible] = useState(false)
    const toggleActionBtn = () => {
        setIsBtnVisible(!isBtnVisible) || setIsBtnsVisible(!isBtnsVisible)
    };

    const selectUser = (user) => {
        setSelectedUser(user);
    };

    const deleteUser = () => {
        if (selectedUser) {
          const updatedUsers = users.filter((user) => user !== selectedUser);
          setUsers(updatedUsers);
          setSelectedUser(null); // Clear selected user after deletion
        }
      };

    //   console.log('The details of the selected user:', setSelectedUser);

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
                <ul>
              {users.map((user, index) => (
                <li key={index} className='employeeManagementListBodyContent'>
                  <span onClick={() => selectUser(user)}>{user.First_name}</span>
                  <span>{user.Job_title}</span>
                  <span>{user.Contact_information}</span>
                  <span
                  style={{
                    color:
                      user.Leave_status === "Active" ? "green" : "red",
                  }}
                >
                  <GoDotFill />
                  {user.Leave_status}
                </span>
                  <button onClick={toggleActionBtn}>
                        {isBtnVisible &&
                        <HiDotsHorizontal />}
                    {isBtnsVisible &&
                    <div>                        
                        <RiEdit2Fill onClick={toggleEditUserForm}/>
                        <MdDelete />
                    </div>}
                    </button>
                </li>
              ))}
            </ul>
            </div>
            </div>
            {selectedUser &&
            <div className="selectedEmployee">
                <div className="selectedEmployeeTop">
                    <div className="selectedEmployeeTopHeader">
                        <div className="selectedEmployeeTopHeaderUser">
                            <img src={Photo} alt="Profile" height={100} width={100}/>
                            <div className="selectedEmployeeTopHeaderUserinfo">
                                <span className="selectedEmployeeTopHeaderUserGenderInfo">Gender</span>
                                <span>{selectedUser.Gender}</span>
                            </div>
                        </div>
                        <div className="selectedEmployeeTopHeaderUser1">
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Name</span>
                                <span>{`${selectedUser.First_name} ${selectedUser.Last_name}`}</span>
                            </div>
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Identity Number</span>
                                <span>{selectedUser.Identity_number}</span>
                            </div>
                        </div>
                        <div className="selectedEmployeeTopHeaderUser1">
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Email Address</span>
                                <span>{selectedUser.Email_address}</span>
                            </div>
                            <div className="selectedEmployeeTopHeaderUser1Name">
                                <span className="selectedEmployeeTopHeaderUser1Header">Contact</span>
                                <span>{selectedUser.Contact_information}</span>
                            </div>
                        </div>
                    </div>
                    <div className="selectedEmployeeTopMiddle">
                        <div className="selectedEmployeeTopMiddleS1">
                            <div className="selectedEmployeeTopMiddleS1Container">
                                <span className="selectedEmployeeTopMiddleS1ContainerHeader">Job Position</span>
                                <span>{selectedUser.Job_title}</span>
                            </div>
                            <div className="selectedEmployeeTopMiddleS1Container">
                                <span className="selectedEmployeeTopMiddleS1ContainerHeader">Department</span>
                                <span>{selectedUser.Department}</span>
                            </div>
                        </div>
                        <div className="selectedEmployeeTopMiddleS2">
                            <span className="selectedEmployeeTopMiddleS2ContainerHeader">Work Schedule</span>
                            <span>Remote</span>
                        </div>
                    </div>
                </div>
                <button onClick={deleteUser}>
                    Delete Employee
                <MdDelete />
                </button>
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
        </div>
        </div>
    )
}

export default EmployeeManagement;