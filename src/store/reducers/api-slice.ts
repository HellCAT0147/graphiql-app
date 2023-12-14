import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export type SearchQuery = {
  url: string;
  method: string;
  headers: string;
  body: string;
};

export interface ResponseApi {
  data: string;
}

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
