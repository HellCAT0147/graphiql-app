import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './reducers/message-slice';
import { apiSlice } from './reducers/api-slice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
