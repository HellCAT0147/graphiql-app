import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { InputsStore, SelectString } from '../types';

const initialState: InputsStore = {
  url: '',
  query: '',
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
  },
});

const { setUrl, setQuery } = InputsSlice.actions;

export const selectUrl: SelectString = (state: RootState) => state.inputs.url;
export const selectQuery: SelectString = (state: RootState) =>
  state.inputs.query;

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
};
