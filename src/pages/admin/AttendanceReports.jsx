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

  const [users, setUsers] = useState([]);

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

  // Function to generate department PDF data
  const generateDepartmentPDF = (departmentData) => {
    // Create a PDF document
    const MyDocument = (
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Department List</Text>
            {departmentData.map((department, index) => (
              <Text key={index}>{`Name: ${department.name}, Attendance: ${department.attendance}`}</Text>
            ))}
          </View>
        </Page>
      </Document>
    );

    // Return the document instead of directly downloading it
        return MyDocument;
  };

  // Styles for PDF
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: 'red',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
    },
    data: {
        flexDirection: 'column',
        padding: '10px 0 10px 0',
        fontSize: '16px',
        fontWeight: '500'
    },
  });

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
            {/* <div><AttendanceStatistics /></div> */}
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

          <PDFDownloadLink document={generateDepartmentPDF(departmentData)} fileName="department_list.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>
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
