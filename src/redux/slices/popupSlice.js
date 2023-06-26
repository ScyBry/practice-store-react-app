import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopup: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const popupReducer = popupSlice.reducer;
export const { setPopup } = popupSlice.actions;
