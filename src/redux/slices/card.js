import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCards = createAsyncThunk(
  'cards/fetchCardsByCategory',
  async (categoryId, currentPage) => {
    console.log('Текущая страница ' + currentPage);
    console.log('Категория ' + currentPage);
    const { data } = await axios.get(`/items?${currentPage}&${categoryId}`);
    return data;
  },
);

const initialState = {
  cards: {
    items: [],
    status: 'loading',
  },
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  redeucers: {},
  extraReducers: {
    [fetchCards.pending]: (state) => {
      state.cards.status = 'loading';
    },
    [fetchCards.fulfilled]: (state, action) => {
      state.cards.items = action.payload;
      state.cards.status = 'loaded';
    },
    [fetchCards.rejected]: (state) => {
      state.cards.items = [];
      state.cards.status = 'loaded';
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
