import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCards = createAsyncThunk(
  'cards/fetchCardsStatus',
  async ({ currentPage, limit, categoryId, sortBy, order }, thunkAPI) => {
    const { data } = await axios.get(
      `/items?page=${currentPage}&limit=${limit}&${categoryId}&sortBy=${sortBy}&order=${order}`,
    );
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
  reducers: {},
  extraReducers: {
    [fetchCards.fulfilled]: (state, action) => {
      state.cards.items = action.payload;
      state.cards.status = 'loaded';
    },
    [fetchCards.pending]: (state) => {
      state.cards.status = 'loading';
    },
    [fetchCards.rejected]: (state) => {
      state.cards.items = [];
      state.cards.status = 'loaded';
    },
  },
});

export const { fetchCardsPending, fetchCardsFulfilled, fetchCardsRejected } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
