import './AttendanceReport.scss'

const AttendanceReport = () => {
    return (
        <>
        <span className='AttendanceReportHeader'>Attendance Report</span>
        <div className="AttendanceReport">
            <div className='AttendanceReportTop'>
                <div className='AttendanceReportTopEmployee'>
                    <span>Employee Attendance</span>
                    <div>Bar Graphs</div>
                </div>
                <div className='AttendanceReportTopMonthly'>
                    <span className='AttendanceReportTopMonthlyHeader'>
                        Monthly Statistics</span>
                    <div className='AttendanceReportTopMonthlyTotal'>
                        <span className='AttendanceReportTopMonthlyTotalHeader'>
                            Total Employees
                        </span>
                        <span>500</span>
                    </div>
                    <div className='AttendanceReportTopMonthlyAttendance'>
                        <span className='AttendanceReportTopMonthlyAttendanceHeader'>Monthly Employee Attendance</span>
                        <span>480</span>
                    </div>
                    <div className='AttendanceReportTopMonthlyLeave'>
                        <span className='AttendanceReportTopMonthlyLeaveHeader'>Employees on leave</span>
                        <span>20</span>
                    </div>
                </div>
            </div>
            <div className='AttendanceReportMiddle'>
                <span className='AttendanceReportMiddleHeader'>Department Statistics</span>
                <div>Bargraph</div>
            </div>
            <div className='AttendanceReportBottom'>
                <span className='AttendanceReportBottomHeader'>Employee Attendance</span>
                <div>
                    List
                </div>
            </div>
        </div>
        </>
    )
}

export default AttendanceReport;