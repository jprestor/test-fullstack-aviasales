import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import api from '@/src/api';

export interface FormState {
  step: 1 | 2;
  email: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FormState = {
  step: 1,
  email: '',
  status: 'idle',
};

export const checkUser = createAsyncThunk(
  'form/checkUser',
  async (email: string) => {
    const response = await api.post('/users/check', { email });
    return response.data.isExist;
  }
);

export const createUser = createAsyncThunk(
  'form/createUser',
  async (email: string) => {
    const response = await api.post('/users/create', { email });
    return response;
  }
);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<1 | 2>) => {
      state.step = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.pending || createUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUser.fulfilled || createUser.pending, (state, action) => {
        state.status = 'idle';
      })
      .addCase(checkUser.rejected || createUser.pending, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { setStep, setUserEmail } = formSlice.actions;

export default formSlice.reducer;
