import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { DocsPage, DocsStore, SelectPage, SelectSteps } from '../types';
import { isAllTypes } from '../../utils/typeguards';
import { HistoryStep } from '../../components/types';

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
    setData: (state, action: PayloadAction<DocsPage>) => {
      state.currentData = action.payload;
      if (!state.mainData.types.length && isAllTypes(action.payload))
        state.mainData = action.payload;
    },
    addStep: (state, action: PayloadAction<HistoryStep>) => {
      state.history.push(action.payload);
    },
    subtractStep: (state) => {
      state.history.pop();
    },
  },
});

const { setData, addStep, subtractStep } = DocsSlice.actions;

export const selectMainData: SelectPage = (state: RootState) =>
  state.docs.mainData;
export const selectCurrentData: SelectPage = (state: RootState) =>
  state.docs.currentData;
export const selectHistory: SelectSteps = (state: RootState) =>
  state.docs.history;

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
  history: {
    add: addStep,
    subtract: subtractStep,
    select: selectHistory,
  },
};
