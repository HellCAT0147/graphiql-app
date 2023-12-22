import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { DocsStore, SelectString } from '../types';

const initialState: DocsStore = {
  url: '',
  mainData: [],
  currentData: [],
  history: [],
};

export const DocsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

const { setUrl } = DocsSlice.actions;

export const selectUrl: SelectString = (state: RootState) => state.inputs.url;

export default DocsSlice.reducer;

export const Docs = {
  url: {
    set: setUrl,
    select: selectUrl,
  },
};
