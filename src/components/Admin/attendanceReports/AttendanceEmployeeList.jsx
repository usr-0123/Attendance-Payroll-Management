import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { useGetEmployeeLeavePositionDepartmentQuery } from '../../../features/employees/employeesApi';

const AttendanceEmployeeList = () => {

  const { data}=useGetEmployeeLeavePositionDepartmentQuery()

  console.log("employee data one",data);

const calculateTimeDifference = (checkIn, checkOut) => {
    const diff = new Date(checkOut) - new Date(checkIn);
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

        return `${hours}:${minutes}:${seconds}`;
};

  // Function to generate employees PDF data
const generateUsersPDF = (data) => {
    // Create a PDF document
    const MyDocument = (
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Employees List</Text>
            {data && data.map((user, index) => (
              <Text style={styles.data} key={index}>{
                `First_ame: ${user.First_name}, 
                Last_name: ${user.Last_name}, 
                Email: ${user.Email_address}, 
                Department: ${user.Department},
                Attendance: ${calculateTimeDifference(user.CheckIn, user.CheckOut)}`
                }</Text>
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
  backgroundColor: '#FF',
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
    <div>
      <div className='AttendanceReportBottomNav'>
        <span>First Name</span>
        <span>Last Name</span>
        <span>Email</span>
        <span>Department</span>
        <span>Attendance</span>
      </div>
      <ul>
        {data && data.map((user, index) => (
          <li key={index} className='AttendanceReportBottomHList'>
            <span>{user.First_name}</span>
            <span>{user.Last_name}</span>
            <span>{user.Email_address}</span>
            <span>{user.DepartmentName}</span>
            <span>{calculateTimeDifference(user.CheckIn, user.CheckOut)}</span>
          </li>
        ))}
      </ul>
      <PDFDownloadLink document={generateUsersPDF(data)} fileName="Employees_department_leave_position.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Downloading...' : 'Download PDF'
            }
          </PDFDownloadLink>
    </div>
  );
};

export default AttendanceEmployeeList;
