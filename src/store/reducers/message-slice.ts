import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { MessageStore, SelectString } from '../types';

const initialState: MessageStore = {
  error: '',
  toolsError: '',
};

export const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setToolsMessage: (state, action: PayloadAction<string>) => {
      state.toolsError = action.payload;
    },
  },
});

const { setMessage, setToolsMessage } = MessageSlice.actions;

export const selectMessage: SelectString = (state: RootState) =>
  state.message.error;
export const selectToolsMessage: SelectString = (state: RootState) =>
  state.message.toolsError;

export default MessageSlice.reducer;

export const Message = {
  boundary: {
    set: setMessage,
    select: selectMessage,
  },
  tools: {
    set: setToolsMessage,
    select: selectToolsMessage,
  },
};
