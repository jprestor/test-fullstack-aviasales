import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import formReducer from './form/formSlice';

export function makeStore() {
  return configureStore({
    reducer: { form: formReducer },
  });
}

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
