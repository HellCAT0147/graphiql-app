import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
  OptionsHeaders,
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

export const OptionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },
    setHeaders: (state, action: PayloadAction<OptionsHeaders>) => {
      state.headers = { ...state.headers, ...action.payload };
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
  },
});

const { setUrl, setMethod, setHeaders, setBody } = OptionsSlice.actions;

export const selectUrl: SelectString = (state: RootState) => state.options.url;
export const selectMethod: SelectMethod = (state: RootState) =>
  state.options.method;
export const selectHeaders: SelectHeaders = (state: RootState) =>
  state.options.headers;
export const selectBody: SelectString = (state: RootState) =>
  state.options.body;

export default OptionsSlice.reducer;

export const Options = {
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
