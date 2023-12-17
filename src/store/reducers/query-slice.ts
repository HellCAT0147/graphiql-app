import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
  QueryHeaders,
  SelectHeaders,
  SelectMethod,
  SelectString,
} from '../types';
import { FetchArgs } from '@reduxjs/toolkit/query';

const initialState: FetchArgs = {
  url: 'https://rickandmortyapi.com/graphql',
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: '',
};

export const QuerySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },
    setHeaders: (state, action: PayloadAction<QueryHeaders>) => {
      state.headers = { ...state.headers, ...action.payload };
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
  },
});

const { setUrl, setMethod, setHeaders, setBody } = QuerySlice.actions;

export const selectUrl: SelectString = (state: RootState) => state.query.url;
export const selectMethod: SelectMethod = (state: RootState) =>
  state.query.method;
export const selectHeaders: SelectHeaders = (state: RootState) =>
  state.query.headers;
export const selectBody: SelectString = (state: RootState) => state.query.body;

export default QuerySlice.reducer;

export const Query = {
  url: {
    set: setUrl,
    select: selectUrl,
  },
  method: {
    set: setMethod,
    select: selectMethod,
  },
  headers: {
    set: setHeaders,
    select: selectHeaders,
  },
  body: {
    set: setBody,
    select: selectBody,
  },
};
