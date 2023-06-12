// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../axios';

// export const fetchCards = createAsyncThunk(
//   'cards/fetchCardsByCategory',
//   async (categoryId, currentPage, limit) => {
//     console.log('Текущая страница ' + currentPage);
//     console.log('Категория ' + categoryId);
//     const { data } = await axios.get(`/items?page=${currentPage}&limit=${limit}&${categoryId}`);

//     return data;
//   },
// );

// const initialState = {
//   cards: {
//     items: [],
//     status: 'loading',
//   },
// };

// const cardsSlice = createSlice({
//   name: 'cards',
//   initialState,
//   redeucers: {},
//   extraReducers: {
//     [fetchCards.pending]: (state) => {
//       state.cards.status = 'loading';
//     },
//     [fetchCards.fulfilled]: (state, action) => {
//       state.cards.items = action.payload;
//       state.cards.status = 'loaded';
//     },
//     [fetchCards.rejected]: (state) => {
//       state.cards.items = [];
//       state.cards.status = 'loaded';
//     },
//   },
// });

// export const cardsReducer = cardsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCards = (categoryId, currentPage, limit) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCardsPending());

      console.log('Текущая страница ' + currentPage);
      console.log('Категория ' + categoryId);
      const { data } = await axios.get(`/items?page=${currentPage}&limit=${limit}&${categoryId}`);

      dispatch(fetchCardsFulfilled(data));
    } catch (error) {
      dispatch(fetchCardsRejected());
    }
  };
};

const initialState = {
  cards: {
    items: [],
    status: 'loading',
  },
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchCardsPending: (state) => {
      state.cards.status = 'loading';
    },
    fetchCardsFulfilled: (state, action) => {
      state.cards.items = action.payload;
      state.cards.status = 'loaded';
    },
    fetchCardsRejected: (state) => {
      state.cards.items = [];
      state.cards.status = 'loaded';
    },
  },
});

export const { fetchCardsPending, fetchCardsFulfilled, fetchCardsRejected } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
