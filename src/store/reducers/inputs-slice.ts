import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { InputsStore, SelectString } from '../types';

const initialState: InputsStore = {
  url: '',
  query: `query {
  characters {
    info {
      count
      pages
      next
      prev
    }
  }
}`,
  currentTools: 'variables',
  variables: '',
  headers: '',
};

export const InputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setCurrentTools: (state, action: PayloadAction<string>) => {
      state.currentTools = action.payload;
    },
    setVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
    setHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
  },
});

const { setUrl, setQuery, setCurrentTools, setHeaders, setVariables } =
  InputsSlice.actions;

export const selectUrl: SelectString = (state: RootState) => state.inputs.url;
export const selectQuery: SelectString = (state: RootState) =>
  state.inputs.query;
export const selectCurrentTools: SelectString = (state: RootState) =>
  state.inputs.currentTools;
export const selectVariables: SelectString = (state: RootState) =>
  state.inputs.variables;
export const selectHeaders: SelectString = (state: RootState) =>
  state.inputs.headers;

export default InputsSlice.reducer;

export const Inputs = {
  url: {
    set: setUrl,
    select: selectUrl,
  },
  query: {
    set: setQuery,
    select: selectQuery,
  },
  currentTools: {
    set: setCurrentTools,
    select: selectCurrentTools,
  },
  variables: {
    set: setVariables,
    select: selectVariables,
  },
  headers: {
    set: setHeaders,
    select: selectHeaders,
  },
};
