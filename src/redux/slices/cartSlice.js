import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
        findItem.itemPrice = findItem.itemPrice + action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
          itemPrice: action.payload.price,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        if (findItem.count <= 1) {
        } else {
          findItem.count--;
          findItem.itemPrice = findItem.itemPrice - action.payload.price;
          state.totalPrice = state.totalPrice - action.payload.price;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.items.find((obj) => obj.id === action.payload);
      if (removeItem) {
        state.totalPrice -= removeItem.count * removeItem.price; // <-- subtract item's total price from totalPrice
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.itemPrice = 0;
    },
  },
});
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
