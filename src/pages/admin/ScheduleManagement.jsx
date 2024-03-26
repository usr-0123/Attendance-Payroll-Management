import React, { useState, useEffect } from 'react';
import './ScheduleManagement.scss';
import { IoIosAdd } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import {
    useGetAllSchedulesQuery,
    useGetScheduleByIdQuery,
    useCreateScheduleMutation,
    useUpdateScheduleMutation,
    useDeleteScheduleMutation,
    useGetAllEmployeesWithSchedulesQuery
} from '../../features/schedule/scheduleApi';
import { useFetchAllEmployeeDetailsQuery } from '../../features/employees/employeesApi';

const ScheduleManagement = () => {

  const scheduleNames = [
    "Morning shift",
    "Noon Shift",
    "Evening shift",
    "Night shift"
  ]

  const { data: allSchedules, isLoading, isError, refetch } = useGetAllEmployeesWithSchedulesQuery();

  const { data: employees, error, isLoading: isEmployeesLoading } = useFetchAllEmployeeDetailsQuery();

  useEffect(() => {
    console.log("Employees data:", employees);
  }, [employees]);

  // console.log("allSchedules", allSchedules);

  // Function to fetch all the entries
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, [refetch]);

  // Creating a new schedule entry
  const [createSchedule] = useCreateScheduleMutation();

  const [newSchedule, setNewSchedule] = useState({
    EmailAddress: '',
    ScheduleName: '',
    CheckIn: '',
    CheckOut: '',
    Days: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSchedule({ ...newSchedule, [name]: value });
  };

  const createNewSchedule = async () => {
    try {
      await createSchedule(newSchedule).unwrap();

      // Refetch schedules after successful creation
      await refetch();

      // Reset form fields
      setNewSchedule({
        EmailAddress: '',
        ScheduleName: '',
        CheckIn: '',
        CheckOut: '',
        Days: '',
      });
    } catch (error) {
      console.error('Error creating schedule:', error);
    }
  };

  // Functions to hide and display schedule forms
  const [isVisible, setIsVisible] = useState(false);
  const toggleNewScheduleForm = () => {
    setIsVisible(!isVisible);
  };

  // Action Button in the list
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isBtnsVisible, setIsBtnsVisible] = useState(true);

  const toggleActionButtons = () => {
    setIsBtnVisible(!isBtnVisible) || setIsBtnsVisible(!isBtnsVisible);
  };

  return (
    <>
      <div className="scheduleManagement">
        <div className="scheduleManagementTop">
          <span>Schedule Management</span>
          <button onClick={toggleNewScheduleForm}>
                <IoIosAdd />
                    Add Schedule
          </button>
        </div>
        <div className="scheduleManagementBody">
          <div className="scheduleManagementBodyHeader">
            <span>Email Address</span>
            <span>Check-In</span>
            <span>Check-Out</span>
            <span>Duration</span>
            <span>Action</span>
          </div>
          <div className="scheduleManagementBodyContent">
            {isLoading ? (
              <p>Loading...</p>
            ) : isError ? (
              <p>Error fetching schedules</p>
            ) : (
              allSchedules.map((schedule, index) => (
                <div key={index} className="scheduleManagementBodyContentList">
                  <span>{schedule.Email_address}</span>
                  <span>{schedule.CheckIn}</span>
                  <span>{schedule.CheckOut}</span>
                  <span>{schedule.DAYS}</span>
                  <span onClick={toggleActionButtons}>
                    {isBtnsVisible && <BsThreeDotsVertical />}
                    {isBtnVisible && (
                      <div className="scheduleActionBtns">
                        <RiEdit2Fill />
                        <MdDelete />
                      </div>
                    )}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="addSchedule">
        <span>Add a New Schedule</span>
        <select
          name="EmailAddress"
          className='addScheduleName'
          id="EmployeeID"
          value={newSchedule.EmailAddress}
          onChange={handleInputChange}
        >
          <option value="">Select employee</option>
          {employees &&
            employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.Email_address}
              </option>
            ))}
        </select>
        <select 
          name="ScheduleName" 
          className="addScheduleName"
          id="ScheduleName"
          value={newSchedule.ScheduleName}
          onChange={handleInputChange}
        >
          <option value="">Select schedule name...</option>
          {scheduleNames && scheduleNames.map((scheduleName, index) => (
            <option key={index} value={index}>{scheduleName}</option>
          ))}
        </select>
        <input
          name="CheckIn"
          className="addScheduleIn"
          type="time"
          placeholder="check-in time"
          value={newSchedule.CheckIn}
          onChange={handleInputChange}
        />
        <input
          name="CheckOut"
          className="addScheduleOut"
          type="time"
          placeholder="check-out time"
          value={newSchedule.CheckOut}
          onChange={handleInputChange}
        />
        <input
          name="Days"
          className="addScheduleDuration"
          type="text"
          placeholder="Days"
          value={newSchedule.Days}
          onChange={handleInputChange}
        />
        <button onClick={createNewSchedule}>Submit</button>
      </div>
    </>
  );
};

export default ScheduleManagement;
