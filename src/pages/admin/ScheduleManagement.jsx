import './ScheduleManagement.scss'

import { IoIosAdd } from "react-icons/io";

const ScheduleManagement = () => {
    return(
        <div className="scheduleManagement">
            <div className="scheduleManagementTop">
                <span>Schedule Management</span>
                <button><IoIosAdd />Add Schedule</button>
            </div>
            <div className="scheduleManagementBody">
                <div className="scheduleManagementBodyHeader">
                    <span>Name</span>
                    <span>Check-In</span>
                    <span>Check-Out</span>
                    <span>Duration</span>
                    <span>Action</span>
                </div>
                <div className="scheduleManagementBodyContent">
                    <div className="scheduleManagementBodyContentList">
                        <span>Early Bird</span>
                        <span>Check-In</span>
                        <span>Check-Out</span>
                        <span>Duration</span>
                        <span>Action</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleManagement;