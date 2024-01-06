import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { MessageStore, SelectString } from '../types';

const initialState: MessageStore = {
  error: '',
  headersError: '',
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
  },
});

const { setMessage, setHeadersMessage } = MessageSlice.actions;

export const selectMessage: SelectString = (state: RootState) =>
  state.message.error;
export const selectHeadersMessage: SelectString = (state: RootState) =>
  state.message.headersError;

export default MessageSlice.reducer;

export const Message = {
  boundary: {
    set: setMessage,
    select: selectMessage,
  },
  headers: {
    set: setHeadersMessage,
    select: selectHeadersMessage,
  },
};
