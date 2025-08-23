import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { accessToken } from "../auth/loginSlice";

const BASE_URI: string = process.env.NEXT_BASE_URI as string;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URI,
    prepareHeaders: (headers, { getState }) => {
      const token = accessToken(getState() as RootState);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["User"],
});
