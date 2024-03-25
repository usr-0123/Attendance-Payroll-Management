import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const overtimeApi = createApi({
  reducerPath: "overtimeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Overtime"],
  endpoints: (builder) => ({
    getOvertimes: builder.query({
      query: () => "overtime/all",
      providesTags: ["Overtime"],
    }),
    getOvertimeById: builder.query({
      query: (OvertimeID) => `overtime/fetchById/${OvertimeID}`,
      providesTags: (result) =>
        result ? [{ type: "Overtime", id: result.OvertimeID }] : [],
    }),
    addOvertime: builder.mutation({
      query: (overtime) => ({
        url: "overtime/add",
        method: "POST",
        body: overtime,
      }),
      invalidatesTags: ["Overtime"],
    }),
    updateOvertime: builder.mutation({
      query: ({ OvertimeID, ...updatedOvertime }) => ({
        url: `overtime/update/${OvertimeID}`,
        method: "PUT",
        body: updatedOvertime,
      }),
      invalidatesTags: ["Overtime"],
    }),
    deleteOvertime: builder.mutation({
      query: (OvertimeID) => ({
        url: `overtime/delete/${OvertimeID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Overtime"],
    }),
  }),
});

export const {
  useGetOvertimesQuery,
  useGetOvertimeByIdQuery,
  useAddOvertimeMutation,
  useUpdateOvertimeMutation,
  useDeleteOvertimeMutation,
} = overtimeApi;
