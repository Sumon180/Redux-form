// src/redux/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
 
  formData: {
    name: string;
    email: string;
    gender: string;
    newsletter: boolean;
    comments: string;
  };
}

const initialState: UserState = {
    formData: {
    name: '',
    email: '',
    gender: '',
    newsletter: false,
    comments: '',
  },
};

const userSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormState: (state, action: PayloadAction<Partial<UserState['formData']>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
        state.formData = initialState.formData;
      },
  },
});

export const { setFormState ,resetForm } = userSlice.actions;

export default userSlice.reducer;
