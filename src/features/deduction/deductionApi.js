import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deductionApi = createApi({
  reducerPath: "deductionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Deduction"],
  endpoints: (builder) => ({
    addDeduction: builder.mutation({
      query: (deduction) => ({
        url: "deduction/add",
        method: "POST",
        body: deduction,
      }),
    }),
    getDeductions: builder.query({
      query: () => "deduction/fetchAll",
      providesTags: ["Deduction"],
    }),
    getDeductionById: builder.query({
      query: (DeductionID) => `deduction/fetchById/${DeductionID}`,
      providesTags: (result) =>
        result ? [{ type: "Deduction", id: result.DeductionID }] : [],
    }),
    updateDeduction: builder.mutation({
      query: ({ DeductionID, ...updatedDeduction }) => ({
        url: `deduction/update/${DeductionID}`,
        method: "PUT",
        body: updatedDeduction,
      }),
    }),
    deleteDeduction: builder.mutation({
      query: (DeductionID) => ({
        url: `deduction/delete/${DeductionID}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddDeductionMutation,
  useGetDeductionsQuery,
  useGetDeductionByIdQuery,
  useUpdateDeductionMutation,
  useDeleteDeductionMutation,
} = deductionApi;
