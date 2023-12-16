import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { SelectString } from '../types';
import { FetchArgs } from '@reduxjs/toolkit/query';

const initialState: FetchArgs = {
  url: '',
  method: 'POST',
  headers: undefined,
  body: '',
};

export const QuerySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setHeaders: (
      state,
      action: PayloadAction<
        Headers | string[][] | Record<string, string | undefined> | undefined
      >
    ) => {
      state.headers = action.payload;
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
  },
});

const { setUrl } = QuerySlice.actions;

export const selectUrl: SelectString = (state: RootState) => state.query.url;

export default QuerySlice.reducer;

export const Query = {
  set: setUrl,
  select: selectUrl,
};
