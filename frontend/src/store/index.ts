import {
  configureStore,
  type ThunkAction,
  type Action,
} from '@reduxjs/toolkit';

import formReducer from './form/formSlice';

export const makeStore = () =>
  configureStore({ reducer: { form: formReducer } });

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
