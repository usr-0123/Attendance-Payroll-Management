import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const payrollApi = createApi({
  reducerPath: "payrollApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Payroll"],
  endpoints: (builder) => ({
    getPayrolls: builder.query({
      query: () => "payroll/fetchAll",
      providesTags: ["Payroll"],
    }),
    getPayrollById: builder.query({
      query: (PayrollID) => `payroll/fetchById/${PayrollID}`,
      providesTags: (result) =>
        result ? [{ type: "Payroll", id: result.PayrollID }] : [],
    }),
    addPayroll: builder.mutation({
      query: (payroll) => ({
        url: "payroll/add",
        method: "POST",
        body: payroll,
      }),
      invalidatesTags: ["Payroll"],
    }),
    updatePayroll: builder.mutation({
      query: ({ PayrollID, ...updatedPayroll }) => ({
        url: `payroll/update/${PayrollID}`,
        method: "PUT",
        body: updatedPayroll,
      }),
      invalidatesTags: ["Payroll"],
    }),
    deletePayroll: builder.mutation({
      query: (PayrollID) => ({
        url: `payroll/delete/${PayrollID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payroll"],
    }),
  }),
});

export const {
  useGetPayrollsQuery,
  useGetPayrollByIdQuery,
  useAddPayrollMutation,
  useUpdatePayrollMutation,
  useDeletePayrollMutation,
} = payrollApi;
