import React, { useState, useEffect } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { StyleSheet, Text, View, PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

import './AttendanceReport.scss';

import AttendanceEmployeeList from '../../components/Admin/attendanceReports/AttendanceEmployeeList';

import AttendanceStatistics from '../../components/Admin/attendanceReports/AttendanceStatistics';

const AttendanceReport = () => {
  const data = [
    { name: 'Week 1', attendance: 100 },
    { name: 'Week 2', attendance: 85 },
    { name: 'Week 3', attendance: 90 },
    { name: 'Week 4', attendance: 88 },
  ];

  const departmentData = [
    { name: 'Admin', attendance: 20 },
    { name: 'H.R.', attendance: 85 },
    { name: 'Operations', attendance: 90 },
    { name: 'Services', attendance: 88 },
    { name: 'Sales', attendance: 88 },
    { name: 'Marketing', attendance: 88 },
  ];

  return (
    <>
      <span className='AttendanceReportHeader'>Attendance Report</span>
      <div className="AttendanceReport">
        <div className='AttendanceReportTop'>
          <div className='AttendanceReportTopEmployee'>
            <span>Employee Attendance</span>
            <div>
              <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="attendance" fill="#0083FF" />
              </BarChart>
            </div>
          </div>
          <div className='AttendanceReportTopMonthly'>
            <span className='AttendanceReportTopMonthlyHeader'>
              Monthly Statistics
            </span>
            <div><AttendanceStatistics /></div>
          </div>
        </div>
        <div className='AttendanceReportMiddle'>
          <span className='AttendanceReportMiddleHeader'>Department Statistics</span>
          <div>
            <BarChart width={600} height={300} data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attendance" fill="#0083FF" />
            </BarChart>
          </div>
        </div>
        <div className='AttendanceReportBottom'>
          <span className='AttendanceReportBottomHeader'>Employee Attendance</span>
          <div>
            <AttendanceEmployeeList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceReport;
