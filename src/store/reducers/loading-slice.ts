import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { LoadingStore, SelectBoolean } from '../types';

const initialState: LoadingStore = {
  isLoadingData: false,
};

export const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingData = action.payload;
    },
  },
});

const { setLoading } = LoadingSlice.actions;

export const selectLoading: SelectBoolean = (state: RootState) =>
  state.loading.isLoadingData;

export default LoadingSlice.reducer;

export const Loading = {
  set: setLoading,
  select: selectLoading,
};
