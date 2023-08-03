import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server-qsq0uo008-hasibul1670.vercel.app/api/v1/",
  }),

  tagTypes: ["review"],

  endpoints: () => ({}),
});
