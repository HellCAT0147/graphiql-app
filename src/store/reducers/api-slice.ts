import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { ResponseApi } from '../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getData: builder.query<ResponseApi, FetchArgs>({
      query: ({ url, method, headers, body }) => ({
        url: url,
        method: method,
        headers: headers,
        body: body,
      }),
    }),
  }),
});

export const { useGetDataQuery } = apiSlice;
export const { getData } = apiSlice.endpoints;
