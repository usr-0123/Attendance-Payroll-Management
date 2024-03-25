import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({

    getEmployees: builder.query({
      query: () => "employee/fetchall",
      providesTags: ["Employee"],
    }),

    getEmployee: builder.query({
      query: (Email_address) => `employee/fetchByEmail/${Email_address}`,
      providesTags: ["Employee"],
    }),

    addEmployee: builder.mutation({
      query: (employee) => ({
        url: "employee/register",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["Employee"],
    }),

    authenticateEmployee: builder.mutation({
      query: (employee) => ({
        url: "employee/loginEmployee",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["Employee"],
    }),

    updateEmployee: builder.mutation({
      query: (employee) => ({
        url: `employees/update/${employee.EmployeeID}`,
        method: "PUT",
        body: employee,
      }),
      invalidatesTags: ["Employee"],
    }),

    deleteEmployee: builder.mutation({
      query: (Email_address) => ({
        url: `employee/deleteByEmail/${Email_address}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

export const {
  useGetEmployeeQuery,
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useAuthenticateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;

// export const { useGetEmployeesQuery }=employeeApi