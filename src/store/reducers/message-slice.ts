import { createSlice } from "@reduxjs/toolkit";
import type { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { SelectString } from "../types";

interface MessageState {
  error: string;
}

export interface MessageSlice {
  set: ActionCreatorWithPayload<string, "message/setMessage">;
  select: SelectString;
}

const initialState: MessageState = {
  error: "",
};

export const MessageSlice = createSlice({
  name: "message",
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

export const Message: MessageSlice = {
  set: setMessage,
  select: selectMessage,
};
