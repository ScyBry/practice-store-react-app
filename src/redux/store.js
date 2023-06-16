import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './slices/card';
import { filterReducer } from './slices/filterSlice';
import { cartReducer } from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});
