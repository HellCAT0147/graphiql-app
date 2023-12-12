import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export enum ApiKeys {
  main = `wkoXezrpBmu_Ap4_XAKL`,
  second = 'dEdKyCUex_XF9MdqnqMb',
}

export type SearchQuery = {
  term: string;
  limit: string;
  page: string;
};

export interface Character {
  _id: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

export interface ResponseApi {
  docs: Character[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('authorization', `Bearer ${ApiKeys.second}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query<ResponseApi, SearchQuery>({
      query: ({ term, limit, page }) =>
        `/character?name=/${term}/i&page=${page || '1'}&limit=${limit || '10'}`,
    }),
    getDataById: builder.query<ResponseApi, string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetDataQuery, useGetDataByIdQuery } = apiSlice;
export const { getData, getDataById } = apiSlice.endpoints;
