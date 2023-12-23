import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { AllTypes, DocsStore, SelectScreen } from '../types';
import { SchemaType } from '../../components/types';
import { isAllTypes } from '../../utils/typeguards';

const initialState: DocsStore = {
  mainData: {
    types: [],
    rootTypes: {
      query: null,
      mutation: null,
    },
  },
  currentData: '',
  history: [],
};

export const DocsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<AllTypes | SchemaType | string>) => {
      state.currentData = action.payload;
      if (!state.mainData.types.length && isAllTypes(action.payload))
        state.mainData = action.payload;
    },
  },
});

const { setData } = DocsSlice.actions;

export const selectMainData: SelectScreen = (state: RootState) =>
  state.docs.mainData;
export const selectCurrentData: SelectScreen = (state: RootState) =>
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
