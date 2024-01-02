import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
  DocsPage,
  DocsStore,
  SelectMainTypes,
  SelectPage,
  SelectSteps,
} from '../types';
import { isAllTypes } from '../../utils/typeguards';
import { HistoryStep } from '../../components/types';
import { filterTypes } from '../../utils/schema-resolvers';
import { cleanData } from '../../constants/states';

const initialState: DocsStore = {
  mainData: cleanData,
  currentData: cleanData,
  history: [],
};

export const DocsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DocsPage>) => {
      const newData: DocsPage = action.payload;

      if (isAllTypes(newData) && !state.mainData.types.length) {
        state.mainData = { ...newData };
        newData.types = filterTypes(newData);
      }

      state.currentData = newData;
    },

    addStep: (state, action: PayloadAction<HistoryStep>) => {
      state.history.push(action.payload);
    },

    subtractStep: (state) => {
      state.history.pop();
    },

    resetDocs: (state) => {
      state.history.length = 0;
      state.currentData = cleanData;
      state.mainData = cleanData;
    },
  },
});

const { setData, addStep, subtractStep, resetDocs } = DocsSlice.actions;

export const selectMainData: SelectMainTypes = (state: RootState) =>
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
    reset: resetDocs,
  },
  mainData: {
    set: setData,
    select: selectMainData,
    reset: resetDocs,
  },
  history: {
    add: addStep,
    subtract: subtractStep,
    select: selectHistory,
    reset: resetDocs,
  },
};
