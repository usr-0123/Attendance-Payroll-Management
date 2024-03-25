import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advanceApi = createApi({
  reducerPath: "advanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Advance"],
  endpoints: (builder) => ({
    addAdvance: builder.mutation({
      query: (advance) => ({
        url: "advance",
        method: "POST",
        body: advance,
      }),
      invalidatesTags: ["Advance"],
    }),
    getAdvances: builder.query({
      query: () => "advance/all",
      providesTags: ["Advance"],
    }),
    getAdvanceById: builder.query({
      query: (AdvanceID) => `advance/fetchById/${AdvanceID}`,
      providesTags: (result) =>
        result ? [{ type: "Advance", id: result.AdvanceID }] : [],
    }),
    updateAdvance: builder.mutation({
      query: ({ AdvanceID, ...updatedAdvance }) => ({
        url: `advance/update/${AdvanceID}`,
        method: "PUT",
        body: updatedAdvance,
      }),
      invalidatesTags: (result) =>
        result ? [{ type: "Advance", id: result.AdvanceID }] : [],
    }),
    deleteAdvance: builder.mutation({
      query: (AdvanceID) => ({
        url: `advance/delete/${AdvanceID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Advance"],
    }),
  }),
});

export const {
  useAddAdvanceMutation,
  useGetAdvancesQuery,
  useGetAdvanceByIdQuery,
  useUpdateAdvanceMutation,
  useDeleteAdvanceMutation,
} = advanceApi;
