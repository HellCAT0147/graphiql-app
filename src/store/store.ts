import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './reducers/message-slice';
import queryReducer from './reducers/query-slice';
import { apiSlice } from './reducers/api-slice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    query: queryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
