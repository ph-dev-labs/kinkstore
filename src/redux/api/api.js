import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://adultbdsmstore.citimal.com/api",
  prepareHeaders: (headers,) => {
    const authToken = localStorage.getItem("Auth_token"); // Retrieve the token from local storage
    if (authToken) {
      headers.set("Authorization",  `Token ${authToken}`);
    }
    return headers;
  },
});


export const kinkApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/register/",
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
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: { username, password },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/forgot-password",
        method: "POST",
        body: email,
      }),
    }),
    resetPasswordOtp: builder.mutation({
      query: ({email, otp, new_password }) => ({
        
        url: "/resset-password",
        method: "PATCH",
        body: {email, new_password, otp },
      }),
    }),
    resetPasswordEmail: builder.mutation({
      query: ({ email }) => ({
        url: "/resset-password",
        method: "POST",
        body: { email },
      }),
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    getProductByCollection: builder.query({
      query: () => ({
        url: "/products-by-collection",
        method: "GET",
      }),
    }),
    getProductBestSelling: builder.query({
      query: () => ({
        url: "/products-by-best_selling",
        method: "GET",
      }),
    }),
    getCategoriesProduct: builder.query({
      query: (categoryId) => ({
        url: `/related-category/${categoryId}`,
        method: "GET",
      }),
    }),
    getProductDesc: builder.query({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "GET",
      }),
    }),
    getProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    payment: builder.mutation({
      query: (formData) => ({
        url: "/ordered",
        method: "POST",
        body: formData

      })
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: "/all-order-summary",
        method: "GET",  
      })
    })
  }),
});

export const {
  usePaymentMutation,
  useRegisterMutation,
  useResetPasswordOtpMutation,
  useResetPasswordEmailMutation,
  useUserLoginMutation,
  useGetCategoryQuery,
  useGetProductByCollectionQuery,
  useGetProductBestSellingQuery,
  useGetCategoriesProductQuery,
  useGetProductDescQuery,
  useConfirmOtpMutation,
  useGetProductQuery,
  useGetAllOrderQuery
} = kinkApi;
