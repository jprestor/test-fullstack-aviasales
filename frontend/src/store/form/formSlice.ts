import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import api from '@/src/api';

export interface FormState {
  step: 1 | 2;
  email: string;
}

const initialState: FormState = {
  step: 1,
  email: '',
};

export const createUser = createAsyncThunk(
  'form/createUser',
  async (email: string) => {
    const response = await api.post('/user/create', { email });
    return response;
  }
);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    prevStep: (state) => {
      state.step -= 1;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    setStep: (state, action: PayloadAction<1 | 2>) => {
      state.step += action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { prevStep, nextStep, setStep, setUserEmail } = formSlice.actions;

export default formSlice.reducer;
