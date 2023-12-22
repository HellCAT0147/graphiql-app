import { configureStore } from '@reduxjs/toolkit';
import {
  messageReducer,
  optionsReducer,
  inputsReducer,
  visibilityReducer,
} from './reducers';
import { apiSlice } from './reducers/api-slice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    options: optionsReducer,
    inputs: inputsReducer,
    visibility: visibilityReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
