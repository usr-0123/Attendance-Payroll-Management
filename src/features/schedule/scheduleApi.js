import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const scheduleApi = createApi({
  reducerPath: "scheduleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Schedule"],
  endpoints: (builder) => ({

    getAllSchedules: builder.query({
      query: () => "schedule/all",
      providesTags: ["Schedule"],
    }),

    getScheduleById: builder.query({
      query: (id) => `schedule/${id}`,
      providesTags: (result, error, id) => [{ type: "Schedule", id }],
    }),

    createSchedule: builder.mutation({
      query: (schedule) => ({
        url: "schedule",
        method: "POST",
        body: schedule,
      }),
      invalidatesTags: ["Schedule"],
    }),

    updateSchedule: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `schedule/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Schedule", id }],
    }),

    deleteSchedule: builder.mutation({
      query: (id) => ({
        url: `schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Schedule", id }],
    }),

    getAllEmployeesWithSchedules: builder.query({
      query: () => "schedule/allEmployeesWithSchedules",
      providesTags: ["Employee"],
    }),
    
  }),
});

export const {
  useGetAllSchedulesQuery,
  useGetScheduleByIdQuery,
  useCreateScheduleMutation,
  useUpdateScheduleMutation,
  useDeleteScheduleMutation,
  useGetAllEmployeesWithSchedulesQuery,
} = scheduleApi;
