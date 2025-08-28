import {
  CompleteLoginPayload,
  CompleteRegisterPayload,
  CompleteRegisterResponse,
  ForgotPasswordResponse,
  GetProfileResponse,
  InitiateLoginPayload,
  InitiateRegisterPayload,
  InitiateRegisterResponse,
  ResetPasswordPayload,
} from "@/types/services/auth";
import { apiSlice } from "../api/apiSlice";

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initiateRegister: builder.mutation<
      InitiateRegisterResponse,
      InitiateRegisterPayload
    >({
      query: (user) => ({
        url: "/api/auth/register/initiate",
        method: "POST",
        body: user,
      }),
    }),
    completeRegister: builder.mutation<
      CompleteRegisterResponse,
      CompleteRegisterPayload
    >({
      query: (user) => ({
        url: "/api/auth/register/complete",
        method: "POST",
        body: user,
      }),
    }),
    initiateLogin: builder.mutation<
      InitiateRegisterResponse,
      InitiateLoginPayload
    >({
      query: (user) => ({
        url: "/api/auth/login/initiate",
        method: "POST",
        body: user,
      }),
    }),
    completeLogin: builder.mutation<unknown, CompleteLoginPayload>({
      query: (user) => ({
        url: "/api/auth/login/complete",
        method: "POST",
        body: user,
      }),
    }),
    forgotPassword: builder.mutation<ForgotPasswordResponse, { email: string }>(
      {
        query: ({ email }) => ({
          url: "/api/auth/password/forgot",
          method: "POST",
          body: { email },
        }),
      }
    ),
    resetPassword: builder.mutation<unknown, ResetPasswordPayload>({
      query: (reset) => ({
        url: "/api/auth/password/forgot",
        method: "POST",
        body: reset,
      }),
    }),
    getProfile: builder.query<GetProfileResponse, unknown>({
      query: () => ({
        url: "/api/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useInitiateRegisterMutation,
  useCompleteRegisterMutation,
  useInitiateLoginMutation,
  useCompleteLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetProfileQuery,
} = authSlice;
