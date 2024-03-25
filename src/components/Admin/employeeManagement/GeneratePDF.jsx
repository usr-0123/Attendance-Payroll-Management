import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useFetchAllEmployeeDetailsQuery } from "../../../features/employees/employeesApi";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: '#B4C6E7',
    padding: 5,
    textAlign: 'center',
  },
  tableRow: {
    padding: 5,
    textAlign: 'center',
  },
});

const generateEmployeesPDF = (employees) => {
  // Create a PDF document
  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Employee Details</Text>
          <View style={styles.tableHeader}>
            <Text>First Name</Text>
            <Text>Last Name</Text>
            <Text>Email</Text>
            {/* Add more table headers for other employee details */}
          </View>
          {employees.map((employee, index) => (
            <View style={styles.tableRow} key={index}>
                <Text>First Name</Text>
              <Text>{employee.First_name}</Text>
              <Text>{employee.Last_name}</Text>
              <Text>{employee.Email_address}</Text>
              {/* Add more table cells for other employee details */}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  return MyDocument;
};

const GeneratePDF = () => {
  const { data: employees, error, isLoading } = useFetchAllEmployeeDetailsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <PDFDownloadLink document={generateEmployeesPDF(employees)} fileName="employees.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Downloading' : 'Download PDF'
            }
    </PDFDownloadLink>
    </>
  );
};

export default GeneratePDF;
