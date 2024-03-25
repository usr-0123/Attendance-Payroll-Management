import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advanceApi = createApi({
  reducerPath: "advanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Advance"],
  endpoints: (builder) => ({
    addAdvance: builder.mutation({
      query: (advance) => ({
        url: "advance/add",
        method: "POST",
        body: advance,
      }),
    }),
    getAdvances: builder.query({
      query: () => "advance/fetchAll",
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
    }),
    deleteAdvance: builder.mutation({
      query: (AdvanceID) => ({
        url: `advance/delete/${AdvanceID}`,
        method: "DELETE",
      }),
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
