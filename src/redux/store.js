import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './slices/card';
import { filterReducer } from './slices/filterSlice';
import { cartReducer } from './slices/cartSlice';
import { popupReducer } from './slices/popupSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    cards: cardsReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});
