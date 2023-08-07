import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://noteapp-amber.vercel.app/api/v1/",
  }),

  tagTypes: ["title"],

  endpoints: () => ({}),
});
