import { Rate } from "@/types/components/home";
import { apiSlice } from "../api/apiSlice";
import { AppInterface } from "@/types/services/app";

export const appSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApp: builder.query<AppInterface, unknown>({
      query: () => ({
        url: "/api/app/index",
        method: "GET",
      }),
    }),
    getCryptoCurrencies: builder.query<Rate[], unknown>({
      query: () => ({
        url: "/api/crypto/currencies",
        method: "GET",
      }),
    }),
    getGiftCards: builder.query<unknown, unknown>({
      query: () => ({
        url: "/api/giftcards/index",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAppQuery,
  useGetCryptoCurrenciesQuery,
  useGetGiftCardsQuery,
} = appSlice;
