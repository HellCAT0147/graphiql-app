import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { DocsStore, SelectSchemaTypes } from '../types';
import { SchemaType } from '../../components/types';

const initialState: DocsStore = {
  mainData: [],
  currentData: [],
  history: [],
};

export const DocsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<SchemaType[]>) => {
      state.currentData = action.payload;
      if (!state.mainData.length) state.mainData = action.payload;
    },
  },
});

const { setData } = DocsSlice.actions;

export const selectMainData: SelectSchemaTypes = (state: RootState) =>
  state.docs.mainData;
export const selectCurrentData: SelectSchemaTypes = (state: RootState) =>
  state.docs.currentData;

export default DocsSlice.reducer;

export const Docs = {
  currentData: {
    set: setData,
    select: selectCurrentData,
  },
  mainData: {
    set: setData,
    select: selectMainData,
  },
};
