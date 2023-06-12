import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './slices/card';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
