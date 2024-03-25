import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attendanceApi = createApi({
  reducerPath: "attendanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Attendance"],
  endpoints: (builder) => ({
    addAttendance: builder.mutation({
      query: (attendance) => ({
        url: "attendance/add",
        method: "POST",
        body: attendance,
      }),
    }),
    getAttendance: builder.query({
      query: () => "attendance/getAll",
      providesTags: ["Attendance"],
    }),
    getAttendanceById: builder.query({
      query: (AttendanceID) => `attendance/getById/${AttendanceID}`,
      providesTags: (result) =>
        result ? [{ type: "Attendance", id: result.AttendanceID }] : [],
    }),
    updateAttendance: builder.mutation({
      query: ({ AttendanceID, ...updateDetails }) => ({
        url: `attendance/update/${AttendanceID}`,
        method: "PUT",
        body: updateDetails,
      }),
    }),
    deleteAttendance: builder.mutation({
      query: (AttendanceID) => ({
        url: `attendance/delete/${AttendanceID}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddAttendanceMutation,
  useGetAttendanceQuery,
  useGetAttendanceByIdQuery,
  useUpdateAttendanceMutation,
  useDeleteAttendanceMutation,
} = attendanceApi;
