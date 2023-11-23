import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
  baseUrl: "http://realtorecom.citimal.com/api",
});


export const kinkApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    confirmOtp: builder.mutation({
      query: ({ otp, email }) => ({
        url: "/otp-verify",
        method: "POST",
        body: { otp, email },
      }),
    }),
  
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/forgot-password",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, newPassword }) => ({
        url: "/reset-password",
        method: "POST",
        body: { email, newPassword },
      }),
    }),
    resetPasswordOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/confirm-otp",
        method: "POST",
        body: { email, otp },
      }),
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
       
      }),
    }),
    getProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
       
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useUserLoginMutation,
  useConfirmOtpMutation,
  useForgotPasswordMutation,
  useGetCategoryQuery,
  useResetPasswordOtpMutation,
  useResetPasswordMutation,
  useGetProductQuery
} = kinkApi;
