import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ColorState {
  selectedColor: string;
}

const initialState: ColorState = {
  selectedColor: localStorage.getItem('color') || '#417505',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.selectedColor = action.payload;
      localStorage.setItem('color', action.payload);
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
