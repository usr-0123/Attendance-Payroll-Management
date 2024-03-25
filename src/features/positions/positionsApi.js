import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const positionApi = createApi({
  reducerPath: "positionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8200/api" }),
  tagTypes: ["Position"],
  endpoints: (builder) => ({
    getPositions: builder.query({
      query: () => "positions/fetchAll",
      providesTags: ["Position"],
    }),
    getPositionById: builder.query({
      query: (PositionID) => `positions/fetchById/${PositionID}`,
      providesTags: (result) =>
        result ? [{ type: "Position", id: result.PositionID }] : [],
    }),
    addPosition: builder.mutation({
      query: (position) => ({
        url: "positions/add",
        method: "POST",
        body: position,
      }),
      invalidatesTags: ["Position"],
    }),
    updatePosition: builder.mutation({
      query: ({ PositionID, ...updatedPosition }) => ({
        url: `positions/update/${PositionID}`,
        method: "PUT",
        body: updatedPosition,
      }),
      invalidatesTags: ["Position"],
    }),
    deletePosition: builder.mutation({
      query: (PositionID) => ({
        url: `positions/delete/${PositionID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Position"],
    }),
  }),
});

export const {
  useGetPositionsQuery,
  useGetPositionByIdQuery,
  useAddPositionMutation,
  useUpdatePositionMutation,
  useDeletePositionMutation,
} = positionApi;
