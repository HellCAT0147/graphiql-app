import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { MessageState, SelectString } from '../types';

const initialState: MessageState = {
  error: '',
};

export const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

const { setMessage } = MessageSlice.actions;

export const selectMessage: SelectString = (state: RootState) =>
  state.message.error;

export default MessageSlice.reducer;

export const Message = {
  set: setMessage,
  select: selectMessage,
};
