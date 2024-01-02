import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { ResponseApi } from '../types';
import { querySchema } from '../../constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getData: builder.query<ResponseApi, FetchArgs>({
      query: ({ url, method, headers, body }) => ({
        url,
        method,
        headers,
        body,
      }),
    }),
    getSchema: builder.query<ResponseApi, string>({
      query: (url) => ({
        url,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          query: querySchema,
        }),
      }),
    }),
  }),
});

export const { useGetDataQuery, useGetSchemaQuery } = apiSlice;
export const { getData } = apiSlice.endpoints;
