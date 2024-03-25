import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Department"],
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => "department/all",
      providesTags: ["Department"],
    }),
    getDepartmentById: builder.query({
      query: (DepartmentID) => `department/fetchById/${DepartmentID}`,
      providesTags: (result) =>
        result ? [{ type: "Department", id: result.DepartmentID }] : [],
    }),
    addDepartment: builder.mutation({
      query: (department) => ({
        url: "department",
        method: "POST",
        body: department,
      }),
      invalidatesTags: ["Department"],
    }),
    updateDepartment: builder.mutation({
      query: ({ DepartmentID, ...updatedDepartment }) => ({
        url: `department/update/${DepartmentID}`,
        method: "PUT",
        body: updatedDepartment,
      }),
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: builder.mutation({
      query: (DepartmentID) => ({
        url: `department/delete/${DepartmentID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentByIdQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
