import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { MessageStore, SelectString } from '../types';

const initialState: MessageStore = {
  error: '',
  headersError: '',
  variablesError: '',
};

export const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setHeadersMessage: (state, action: PayloadAction<string>) => {
      state.headersError = action.payload;
    },
    resetHeadersError: (state) => {
      state.headersError = '';
    },
    setVariablesMessage: (state, action: PayloadAction<string>) => {
      state.variablesError = action.payload;
    },
    resetVariablesError: (state) => {
      state.variablesError = '';
    },
  },
});

const {
  setMessage,
  setHeadersMessage,
  resetHeadersError,
  setVariablesMessage,
  resetVariablesError,
} = MessageSlice.actions;

export const selectMessage: SelectString = (state: RootState) =>
  state.message.error;
export const selectHeadersMessage: SelectString = (state: RootState) =>
  state.message.headersError;
export const selectVariablesMessage: SelectString = (state: RootState) =>
  state.message.variablesError;

export default MessageSlice.reducer;

export const Message = {
  boundary: {
    set: setMessage,
    select: selectMessage,
  },
  headers: {
    set: setHeadersMessage,
    select: selectHeadersMessage,
    reset: resetHeadersError,
  },
  variables: {
    set: setVariablesMessage,
    select: selectVariablesMessage,
    reset: resetVariablesError,
  },
};
