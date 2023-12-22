import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { SelectBoolean, VisibilityStore } from '../types';

const initialState: VisibilityStore = {
  tools: false,
  docs: false,
};

export const VisibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    setTools: (state, action: PayloadAction<boolean>) => {
      state.tools = action.payload;
    },
    setDocs: (state, action: PayloadAction<boolean>) => {
      state.docs = action.payload;
    },
  },
});

const { setTools, setDocs } = VisibilitySlice.actions;

export const selectTools: SelectBoolean = (state: RootState) =>
  state.visibility.tools;
export const selectDocs: SelectBoolean = (state: RootState) =>
  state.visibility.docs;

export default VisibilitySlice.reducer;

export const Visibility = {
  tools: {
    set: setTools,
    select: selectTools,
  },
  docs: {
    set: setDocs,
    select: selectDocs,
  },
};
