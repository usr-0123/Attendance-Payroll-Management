import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leaveApi = createApi({
  reducerPath: "leaveApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Leave"],
  endpoints: (builder) => ({
    getLeaves: builder.query({
      query: () => "leave/all",
      providesTags: ["Leave"],
    }),
    getLeaveById: builder.query({
      query: (LeaveID) => `leave/fetchById/${LeaveID}`,
      providesTags: (result) =>
        result ? [{ type: "Leave", id: result.LeaveID }] : [],
    }),
    addLeave: builder.mutation({
      query: (leave) => ({
        url: "leave/add",
        method: "POST",
        body: leave,
      }),
      invalidatesTags: ["Leave"],
    }),
    updateLeave: builder.mutation({
      query: ({ LeaveID, ...updatedLeave }) => ({
        url: `leave/update/${LeaveID}`,
        method: "PUT",
        body: updatedLeave,
      }),
      invalidatesTags: ["Leave"],
    }),
    deleteLeave: builder.mutation({
      query: (LeaveID) => ({
        url: `leave/delete/${LeaveID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Leave"],
    }),
  }),
});

export const {
  useGetLeavesQuery,
  useGetLeaveByIdQuery,
  useAddLeaveMutation,
  useUpdateLeaveMutation,
  useDeleteLeaveMutation,
} = leaveApi;
