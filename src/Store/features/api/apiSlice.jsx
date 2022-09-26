import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
  }),
  tagTypes: ["farms", "questions",'activites','news','users'],
  endpoints: (builder) => ({
    getFarm: builder.query({
      query: () => "/users",
      // query: () => "/questions",
      // query: () => "/activites",
    }),
  }),
});
export const { useGetFarmsQuery } = apiSlice;
